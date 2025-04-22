import React from 'react';
import './styles/ReelsSection.scss';
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg';
import CreateVibe from './CreateVibe';

const ReelsSection = () => {
    
    return (
        <div className='reels-section'>
            <CreateVibe />
            
            <div className='reels-section-card'>
                <img src={img1} alt='Reel pic' className='reel-picture' />

                <div className='reels-overlay'>
                    <img src={img1} alt='Profile' className='profile-pic' />
                    <p className='username'>Mr. Bear</p>
                </div>
            </div>
            
            <div className='reels-section-card'>
                <img src={img1} alt='Reel pic' className='reel-picture' />

                <div className='reels-overlay'>
                    <img src={img1} alt='Profile' className='profile-pic' />
                    <p className='username'>Mr. Bear</p>
                </div>
            </div>
            
            <div className='reels-section-card'>
                <img src={img1} alt='Reel pic' className='reel-picture' />

                <div className='reels-overlay'>
                    <img src={img1} alt='Profile' className='profile-pic' />
                    <p className='username'>Mr. Bear</p>
                </div>
            </div>
        </div>
    );
};

export default ReelsSection;
