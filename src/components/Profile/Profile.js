import React from "react";
import PropTypes from 'prop-types';

function Profile({user}) {
    let {name, tag, location, avatar, stats} = user;
    let {followers, views, likes} = stats;
    return (
        <div>
            <div>
                <img
                    src={avatar}
                    alt="user avatar"
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.defaultProps = {
    avatar: "http://via.placeholder.com/128x128"
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
};

export default Profile;