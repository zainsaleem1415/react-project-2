import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [count, setcount] = useState(0)

  const btnRef = useRef()

  useEffect(() => {
    
    console.log(`First Rendering  `)
    btnRef.current.style.backgroundColor="red"
  },[])

  


  return (
    <>
      <div className='counter'>

        <button ref={btnRef} onClick={() => { setcount(count + 1) }} >
          Count is {count}
          </button>

      </div>
      <button onClick = {()=>{ btnRef.current.style.display = "none" }}>Change me </button>
    </>

  );
}
export default App;
