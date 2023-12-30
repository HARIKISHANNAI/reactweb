"use client"
import React, { useEffect, useState } from 'react'

const Service = () => {
  const[quentity,setQuentity]=useState(0)
  const[word,setWord]=useState("")
  const[countword,setCountword]=useState(0)
  const [countChar, setCountChar] = useState(0)
  const [time, setTime] = useState({ hours: 1, minutes: 1, seconds: 1 });
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => {
        const seconds = time.seconds + 1;
        const minutes = time.minutes + Math.floor(seconds / 60);
        const hours = time.hours + Math.floor(minutes / 60);
        return {
          hours: hours,
          minutes: minutes % 60,
          seconds: seconds % 60
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onChange = (e) => {
    setWord(e.target.value);
    setCountword(e.target.value.split(" ").length);
    setCountChar(e.target.value.length)
  }


  const incrementquentity=()=>{
    setQuentity(quentity+1)
  }
  const decrementquentity=()=>{
    setQuentity(quentity-1)
  }
 
  return (
    <div className='ftre'>
      <h1 className='fh'>Featuresss</h1>
      <div className='ad'>
        <h2>First</h2>
        <ul>
          <li><button type='button' onClick={incrementquentity}>Add</button></li>
          <li><p>quentity<spam>{quentity}</spam></p></li>
          <li><button type='button' onClick={decrementquentity}>Less</button></li>
        </ul>    
       </div>

       <div className='sf'>
        <h2>Second</h2>
        <input type='text' placeholder='Name' onChange={onChange}></input>
        <p>word Input {word}</p>
        <p>Count Word {countword}</p> 
        <p>Charater Counr {countChar}</p>
       </div>

       <div className='tf'>
        <h2>Three</h2>
        <h1>Timer: {time.hours} hours {time.minutes} minutes {time.seconds} seconds</h1>

       </div>
    </div>
  )
}

export default Service
