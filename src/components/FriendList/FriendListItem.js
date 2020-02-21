import React from 'react';
import T from 'prop-types';
import styles from '../FriendList/FriendsList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline} />
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.T = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  isOnline: T.bool.isRequired,
};

export default FriendListItem;
