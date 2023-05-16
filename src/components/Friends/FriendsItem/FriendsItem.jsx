import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {
  return (
          <div className={s.friendsItem}>
            <NavLink to={'/dialogs/' + props.friendsId}>
            <img src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png" alt="..." />
            <span>{props.friendsName}</span></NavLink>
          </div>
  )
}

export default FriendsItem