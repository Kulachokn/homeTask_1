import React from 'react';
import T from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from '../FriendList/FriendsList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.T = {
  friends: T.arrayOf(
    T.exact({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }),
  ),
};

export default FriendList;
