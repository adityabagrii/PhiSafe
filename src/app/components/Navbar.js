import React from 'react'
import "../globals.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[7dvh] bg-gray-950 flex justify-between px-2 py-1 items-center '>
        <div className="flex right text-white font text-[2.5vw]">
            <p className='text-[#2ddd24]'>&lt;&nbsp;</p>
            <p>PhiSafe</p>
            <p className='text-[#2ddd24]'>&nbsp;/&gt;</p>
        </div>
        <div className='flex left text-white font text-[1vw]'>
            <ul className='flex gap-[2vw]'>
                <li><Link href={"./"}>Home</Link></li>
                <li><Link href={"./about"}>About</Link></li>
                <li><Link href={"./bot"}>ChatBot</Link></li>
                <li><Link href={"./urlchecker"}>URL Checker</Link></li>
                <li><Link href={"./contacts"}></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
