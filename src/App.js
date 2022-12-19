import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [longUrl, setLongurl] = useState("")
  let [err, setErr] = useState(null)
  console.log(longUrl);
  
  // const  convert = async() =>{
  //   console.log(longUrl);
  //   let res = await fetch("http://localhost:3001/url/shorten", {
  //     method:'post',
  //     body:JSON.stringify({'hi':'ok'}),
  //     headers:{
  //       'Accept': 'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     mode: 'no-cors'
  //   })
  //   res = await res.json()
  //   console.log(res);

  //   if(res.status === false){
  //     alert(res.message)
  //   }else{
  //     alert('ok')
  //   }

  //   console.log(res);
  // }

  const convert = async() => {
    
      try {
        const url = "http://localhost:3001/url/shorten";
        const data = await axios.post(url,{'longUrl':longUrl});
        console.log(data.data.data.shortUrl);
        setLongurl(data.data.data.shortUrl)
        // window.alert(data.data)
      } catch (error) {
        {
          // window.alert(error.response.data.message);
          setErr(error.response.data.message)
        }
      }

  }

  return (
    < div className='main-container'>
    <div className="first">
     <h1>Enter a long url</h1>
     <input type='text' value={longUrl} onChange={(e)=> setLongurl( e.target.value )}/><br/><br/>
     {/* <p className='error'>{err ? err : ''}</p> */}
     {err ? <p className='error'>{err}</p> : ''}

     <button onClick={convert}>Make it sort</button>
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
