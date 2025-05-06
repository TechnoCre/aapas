import React, { useEffect, useState } from 'react';
import './AdminDashboard.scss';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Track the user being edited
    const [formData, setFormData] = useState({}); // Track form data for editing

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users');
                const data = await response.json();

                if (response.ok) {
                    setUsers(data); // Set all user data
                } else {
                    alert(data.message || 'Failed to fetch users.');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                alert('An error occurred. Please try again later.');
            }
        };

        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setEditingUser(user._id); // Set the user being edited
        setFormData(user); // Populate the form with the user's data
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setUsers(users.filter((user) => user._id !== id)); // Remove the user from the state
                    alert('User deleted successfully.');
                } else {
                    alert('Failed to delete user.');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('An error occurred. Please try again later.');
            }
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/users/${editingUser}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // Email is excluded from updates in the backend
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUsers(users.map((user) => (user._id === editingUser ? updatedUser.user : user))); // Update the user in the state
                setEditingUser(null); // Exit edit mode
                alert('User updated successfully.');
            } else {
                alert('Failed to update user.');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can view, edit, and delete user details.</p>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Skills</th>
                        <th>Qualities</th>
                        <th>Work</th>
                        <th>Bio</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.dob}</td>
                            <td>{user.skills}</td>
                            <td>{user.qualities}</td>
                            <td>{user.work}</td>
                            <td>{user.bio}</td>
                            <td>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                <button onClick={() => handleDeleteClick(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <form onSubmit={handleFormSubmit} className="edit-form">
                    <h2>Edit User</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Email: {/* Email is non-editable */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ''}
                            disabled 
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Skills:
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Qualities:
                        <input
                            type="text"
                            name="qualities"
                            value={formData.qualities || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Work:
                        <input
                            type="text"
                            name="work"
                            value={formData.work || ''}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Bio:
                        <textarea
                            name="bio"
                            value={formData.bio || ''}
                            onChange={handleFormChange}
                        ></textarea>
                    </label>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={() => setEditingUser(null)}>
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
};

export default AdminDashboard;
