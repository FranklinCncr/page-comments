import React from 'react';
import '../style/Comment.css'

function Comment(props){
  return(
    <div className='container-comment'>
      <img className='image-comment' src={require(`../images/comment-${props.image}.jpg`)}
      alt='image user1'/>
      <div className='container-text-comment'>
        <p className='name-comment'><strong>{props.name}</strong></p>
        <p className='profession-comment'>{props.profession}</p>
        <p className='text-comment'>{props.comment}</p>
      </div>
    </div>
  );
}

export default Comment;