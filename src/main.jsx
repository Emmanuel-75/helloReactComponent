import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greetings from './Greeting.jsx'


const users = ['Shawn Davies', 'Don Mitchell', 'Daniel McMillan'];

function App(){
  const [isLight, setIsLight] = useState(true);

  useEffect(()=>{
    const body = document.body;
    body.classList.toggle('lightMode',isLight);
    body.classList.toggle('darkMode', !isLight);
  },[isLight]);

  return (
    <>
      <button onClick={()=> setIsLight(prev => !prev)} className='toggleBtn font-bold uppercase hover:scale-105 active:scale-95 w-[40%] sm:w-[20%]'>
        {isLight ? 'dark mode' : 'light mode'}
      </button>
      <section className='flex flex-col gap-6 rounded-xl w-full'>
        <Greetings users={users}>
          So happy to meet you! Welcome to the App
        </Greetings>
      </section>
    </>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
) 