
import { useState } from 'react';
import './App.css';

function App() {

  const [count,Setcount]=useState(0)

  return (
    <>
   <div className='zero'>
 <div className='one'>
 <button onClick={() => Setcount(0)}   className='bir'>
      {count}
    </button>
 </div>
  <div className='two'>
  <button onClick={()=>Setcount(count+1)}>start</button>
  </div>
   </div>
    </>
  )
}

export default App;
