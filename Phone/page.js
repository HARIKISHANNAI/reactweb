"use client"
import React from 'react'

const Phone = () => {

  const onClick=()=>{
    alert("submit Succusful")
  }

  return (
    <div className='ctn'>
        <div className='ctnf'>
          <h1>Our Hotel Contect</h1>
          <ul>
            <li>location<span>India Mumbai</span></li>
            <li>call us<span>9876856754</span></li>
            <li>mail us:<span>hk8564738@gmail.com</span></li>
          </ul>
        </div>
        <div className='ctnf'>
          <ul>
            <li><input type='text' placeholder='Name'></input></li>
            <li><input type='email' placeholder='Email'></input></li>
            <li><input type='text' placeholder='city'></input></li>
            <li><button type='submit' onClick={onClick}>submit</button></li>
          </ul>
        </div>      
    </div>
  )
}

export default Phone
