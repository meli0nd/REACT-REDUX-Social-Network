import React from "react";
import s from './users.module.css'
import userPhoto from '../../assest/img/user.jpeg'
import { NavLink } from "react-router-dom";

const User_1 = ({ user, followingInProgress, follow, unfollow }) => {

    return <div>
        <div>
            <span>
                <div className={s.userContainer}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="..." className={s.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>}

                </div>
            </span>
            <span >
                <span >
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    </div >
}

export default User_1