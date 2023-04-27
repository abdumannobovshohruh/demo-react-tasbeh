
import { useState } from 'react';
import './App.css';

function App() {

  const [count,Setcount]=useState(0)

  return (
    <>
   <div className='zero'>
 <div className='one'>
 <button clas onClick={() => Setcount(0)}   className='bir'>
      {count}
    </button>
 </div>
 <h1>خرز</h1>
  <div className='two'>
  <button className='fey' onClick={()=>Setcount(count+1)}>start</button>
  </div>
   </div>
    </>
  )
}

export default App;
/* react proekt ochish uchun terminalda npx creacte-react-app qo'shtirnoqsiz fayl nomi yoziladi */
/* terminalda brauzer sihga tushishi uchun npm start yoziladi */