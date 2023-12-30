"use client"
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nf'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQ6_kF1nln3hy86DKZp-bwUHIZxfF6N09JgBEtMH53prp5DqN5RmRaQAcVMEFxNmzpk&usqp=CAU'></img>
        </div>
        <div className='ns'>
            <ul>
                <li><Link href='Homes'><button type='button'>Home</button></Link></li>
                <li><Link href='Service'><button type='button'>Feature</button></Link></li>
                <li><Link href='About'><button type='button'>About</button></Link></li>
                <li><Link href='Phone'><button type='button'>Contect</button></Link></li>
                <li><Link href='Client'><button type='button'>Client</button></Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
