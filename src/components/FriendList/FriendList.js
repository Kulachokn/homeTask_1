import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import styles from "../FriendList/FriendsList.module.css"


function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend =>
                <FriendListItem key={friend.id}
                                isOnline={friend.isOnline}
                                avatar={friend.avatar}
                                name={friend.name}/>)
            }
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
};

export default FriendList;