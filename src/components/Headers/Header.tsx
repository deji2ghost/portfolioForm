import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [ clicked, setClicked ] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className='flex items-center justify-between bg-red-500'>
      <h1 className='flex items-center italic text-[#2F2F2F] bg-green-700 font-semibold text-[24px]'>
        <span 
          className='bg-[#FFB80E] w-5 inline-block '
        ></span>
        <span 
          className='inline-block cursor-pointer'
        >Blinnk</span>
        <span 
          className='bg-[#FFB80E] w-1 inline-block'
        ></span>
      </h1>

      <div onClick={handleClick}>
        {clicked ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes} />}
      </div>

      {/* <ul 
        className= 'hidden justify-between font-normal bg-[#FDFDFD] text-[16px]'
      >
        <li className='inline-block cursor-pointer px-3 py-3'><Link to='/LoginPage'>Login</Link></li>
        <button className='inline-block cursor-pointer border border-[#FFB80E] rounded-md px-3 py-3'>Create an Account</button>
      </ul> */}
    </div>
  )
}
