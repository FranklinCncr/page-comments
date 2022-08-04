import './App.css';
import Comment from './components/Comment.js'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>The title for the comments</h1>
        <Comment
          name='User 1'
          image='user1'
          profession='Computer Science'
          comment= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam reprehenderit assumenda dolorem non sequi amet eum quasi, porro, vero alias excepturi! Quos est nobis reprehenderit maiores accusamus. Omnis corporis eum quisquam ex consequuntur placeat tempora, numquam dicta? Autem obcaecati nulla ratione blanditiis cumque accusantium non quidem ipsum, nostrum iure.' />
          <Comment
          name='User 2'
          image='user2'
          profession='System Engineer'
          comment= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam reprehenderit assumenda dolorem non sequi amet eum quasi, porro, vero alias excepturi! Quos est nobis reprehenderit maiores accusamus. Omnis corporis eum quisquam ex consequuntur placeat tempora, numquam dicta? Autem obcaecati nulla ratione blanditiis cumque accusantium non quidem ipsum, nostrum iure.' />
          <Comment
          name='User 3'
          image='user3'
          profession='System Engineer'
          comment= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam reprehenderit assumenda dolorem non sequi amet eum quasi, porro, vero alias excepturi! Quos est nobis reprehenderit maiores accusamus. Omnis corporis eum quisquam ex consequuntur placeat tempora, numquam dicta? Autem obcaecati nulla ratione blanditiis cumque accusantium non quidem ipsum, nostrum iure.' />
      </div>      
    </div>
  );
}

export default App;
