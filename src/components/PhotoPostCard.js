import React, { useState } from 'react';
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg';
import './styles/PhotoPostCard.scss';
import { Comment, MoreVert, Share, StarOutline } from '@mui/icons-material';

const PhotoPostCard = () => {
    const [activePostId, setActivePostId] = useState(null);

    const toggleComments = (postId) => {
        setActivePostId((prevPostId) => (prevPostId === postId ? null : postId));
    };

    const posts = [
        {
            id: 1,
            profileImage: img1,
            profileName: 'Mr. Bear',
            profileTime: '2 hours ago',
            postDescription: 'This is a description of the post.',
            postImage: img1,
            likes: 5,
            comments: 5,
        },
        {
            id: 2,
            profileImage: img1,
            profileName: 'Mr. Bear',
            profileTime: '2 hours ago',
            postDescription: 'This is a description of the post.',
            postImage: img1,
            likes: 5,
            comments: 5,
        },
        {
            id: 3,
            profileImage: img1,
            profileName: 'Mr. Bear',
            profileTime: '2 hours ago',
            postDescription: 'This is a description of the post.',
            postImage: img1,
            likes: 5,
            comments: 5,
        },
        {
            id: 4,
            profileImage: img1,
            profileName: 'Mrs Sunny Leone',
            profileTime: '2 hours ago',
            postDescription: 'I wanna sex to night and come with me One Night Stand.',
            postImage: img1,
            likes: 5,
            comments: 5,
        },
    ];

    return (
        <div className='photoPostCard'>
            {posts.map((post) => (
                <div key={post.id} className='photo-post-content'>
                    <div className='photo-post-content-card'>
                        <div className='photo-post-content__header'>
                            <div className='photo-post__header-options'>
                                <img src={post.profileImage} alt='profile-image' className='profile-image' />
                                <div className='profile-info'>
                                    <h4 className='profile-name'>{post.profileName}</h4>
                                    <p className='profile-time'>{post.profileTime}</p>
                                </div>
                                <div className='more-options'>
                                    <MoreVert className='more-vert' />
                                </div>
                            </div>
                        </div>
                        <div className='post-content'>
                            <div className='post-content__description'>
                                <p>{post.postDescription}</p>
                            </div>
                            <div className='post-content__image'>
                                <img src={post.postImage} alt='post-image' />
                            </div>
                        </div>
                        <div className='photo-post-content__info'>
                            <div className='likes-container'>
                                <StarOutline className='star-icon' />
                                <p>{post.likes}</p>
                            </div>
                            <div className='comments-container'>
                                <Comment className='comment-icon' onClick={() => toggleComments(post.id)} />
                                <p>{post.comments}</p>
                            </div>
                            <div className='share-container'>
                                <Share className='share-icon' />
                            </div>
                        </div>

                        {activePostId === post.id && (
                            <div className='comments-section' id='comments-section'>
                                <div className='commnets-box'>
                                    <p>Lorem sjoasdfjojfsljowejj fsdaojsu slowmn ajown alos</p>
                                    <p>Lorem sjoasdfjojfsljowejj fsdaojsu slowmn ajown alos</p>
                                </div>
                                <div className='comments-input-box'>
                                    <input type='text' placeholder='Add a comment' className='add-comment' />
                                    <button className='add-comment-btn'>send</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoPostCard;
