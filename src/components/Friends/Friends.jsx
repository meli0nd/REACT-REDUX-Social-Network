import React from "react";
import s from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
    
  let friendElemets = props.state.friends.map(f => <FriendsItem friendsName={f.name} friendsId={f.id}/>)

    return (
        <div className={s.friend_container}>
            {friendElemets}
        </div>
    )
}

export default Friends