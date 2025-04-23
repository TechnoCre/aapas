import React, { useState } from 'react';
import './styles/FriendRequest.scss';
import { Link } from 'react-router-dom';
import bear from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg';

const requests = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Martin' },
    { id: 5, name: 'Charlie Brown' },
    { id: 6, name: 'Dana Lee' },
];

const FriendRequest = () => {
    const [showAll, setShowAll] = useState(false);
    const maxVisible = 4;

    const displayedRequests = showAll ? requests : requests.slice(0, maxVisible);

    return (
        <div className='friend-request'>
            <div className='friend-request-header'>
                <h2>Friend Requests</h2>
                {requests.length > maxVisible && (
                    <button className='see-all' onClick={() => setShowAll(prev => !prev)}>
                        {showAll ? 'See Less' : 'See All'}
                    </button>
                )}
            </div>

            <div className='friend-request-list'>
                {displayedRequests.map(request => (
                    <div key={request.id} className='friend-request-item'>
                        <img src={bear} alt='Friend' className='friend-request-avatar' />
                        <div className='friend-request-info'>
                            <Link to={`/profile/${request.id}`} className='friend-request-name'>
                                {request.name}
                            </Link>
                            <p className='friend-request-message'>Wants to be your friend!</p>
                        </div>
                        <button className='accept-button'>Accept</button>
                        <button className='accept-button'>Cancel</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendRequest;
