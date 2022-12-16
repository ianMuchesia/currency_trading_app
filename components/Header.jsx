import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

import bitcoin from "../public/bitcoin.png"
import bgImage from "../public/Premium Vector _ Abstract blockchain background 1.png"

import cent from "../public/cent.png"
import AI from "../public/artificial.png"
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <header className='relative'>
        <div>
            <Image
            src={bgImage}
            alt=""
            className="w-full h-[527px]"/>
        </div>
        <div style={{background: "rgba(3, 27, 52, 0.66)"}}
        className="absolute h-[527px] w-full top-0">
            <Navbar/>
            <div>
                <Image
                src={bitcoin}
                
                alt=""
               
                className="rotate-45  top-28 ml-48 h-28 w-28"
                />
            </div>
            <div>
                <h1 className='font-[800] text-5xl text-white w-[60%]'>Exchange and trade</h1>
                <h3 className='text-3xl text-white '>at the best rate</h3>
                <button style={{background: "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)"}}
                className="text-xl p-3 mt-2 mx-2 rounded-lg text-white font-semibold">Start Here</button>
                <Image src={cent} alt=""
                className="-rotate-45 h-24 w-16 ml-2 "/>
            </div>
                <Image
                src={AI}
                alt=""
                className='bottom-0 right-0 absolute h-96 w-48'/>
        </div>
    </header>
    </header>
  )
}

export default Header