import React from 'react';
import images from './images/react.png'
import image1 from './images/1.jpeg'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'


function Post(props) {
    const {username,caption,imageUrl}=props
  return (
        <div className="post">
            <div className="post_header">
            <Avatar className="post_avatar" src={image1}>

            </Avatar>
            <h3>{username}</h3>
            </div>
            <img src={imageUrl} alt="" className="post_image" />
            <h4 className="post_text"><strong> {username}:</strong>{caption}</h4>
           
        </div>
  )
}

export default Post;
