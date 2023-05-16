import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://avatars.mds.yandex.net/i?id=d00a6fb936bd9fff05de6cabc7c4ccfc3d705469-8399918-images-thumbs&n=13'} alt="..." />
            {props.message}
            <div><span>Like: {props.likesCount}</span></div>
        </div>
    )
}

export default Post