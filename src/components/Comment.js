import React from 'react';

function Comment(){
  return(
    <div className='container-comment'>
      <img className='image-comment' src={require('../images/comment-user1.jpg')}
      alt='image user1'/>
      <div className='container-comment-text'>
        <p className='name-comment'> User 1</p>
        <p className='profession-comment'>Computer Science</p>
        <p className='text-comment'>I practice</p>
      </div>
    </div>
  );
}

export default Comment;