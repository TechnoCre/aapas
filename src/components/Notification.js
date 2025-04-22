import React, { useState } from 'react';
import notiPic from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg';
import './styles/Notification.scss';

const Notification = () => {
  const [showAll, setShowAll] = useState(false);

  const notifications = [
    { id: 1, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 2, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 3, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 4, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 5, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 6, text: 'Suggestion from Baby Rexha', img: notiPic },
    { id: 7, text: 'Suggestion from Baby Rexha', img: notiPic },
  ];

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const visibleNotifications = showAll ? notifications : notifications.slice(0, 4);

  return (
    <div className='notification'>
      <h1 className='notification__title'>Notifications</h1>
      <div className='notification__content'>
        {visibleNotifications.map((notification) => (
          <div key={notification.id} className='notification__divider'>
            <img
              src={notification.img}
              alt='Notification Divider'
              className='notification__divider-img'
            />
            <p className='notification__text'>{notification.text}</p>
          </div>
        ))}
      </div>
      <button className='notification__view-more' onClick={toggleShowAll}>
        {showAll ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default Notification;