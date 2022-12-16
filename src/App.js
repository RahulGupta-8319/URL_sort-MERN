import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    < div className='main-container'>
    <div className="first">
     <h1>Enter a long url</h1>
     <input type='text' /><br/><br/>
     <button>Make it sort</button>
    </div>
    <div className='second'>
      <h1>Welcome gUy's</h1>
      <p>
      I create a web like Tinyurl for easily share a long url. and implemnent cashing for quick response .
      Used Redis caching for low network latency and to improve user experience
      </p>
      <a href='https://github.com/RahulGupta-8319/backend-development' target='_blank'>Github Link</a>     {/* //link not working here why...?? */}
    
    </div>
    </div>
  );
}

export default App;
