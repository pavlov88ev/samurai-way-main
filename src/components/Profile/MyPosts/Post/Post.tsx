import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://pluggedin.ru/images/upload/1680155477.jpeg'/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;