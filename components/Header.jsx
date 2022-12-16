import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

import bitcoin from "../public/bitcoin.png"
import bgImage from "../public/Premium Vector _ Abstract blockchain background 1.png"

import cent from "../public/cent.png"
import AI from "../public/artificial.png"
import Navbar from './Navbar'
import bitcoinShiny from '../public/bitcoinShiny.jpg'
import tap from '../public/tap.png'
const Header = () => {
  return (
    <header>
        <div className='relative'>
    {/*     <div>
            <Image
            src={bgImage}
            alt=""
            className="object-cover sm:w-full h-[527px] hidden"/>
        </div> */}
        <div>
            <Image
            src={bitcoinShiny}
            alt=""
            className="object-cover sm:w-full h-[527px] lg:h-[620px]"/>
        </div>
        <div style={{background: "rgba(3, 27, 52, 0.66)"}}
        className="absolute h-[527px] w-full top-0 lg:h-[620px]">
            <Navbar/>
            <div>
                <Image
                src={bitcoin}
                
                alt=""
               
                className="rotate-45  top-28 ml-52 h-28 w-28 absolute sm:left-48"
                />
                 
             
            </div>
            
            <div className="sm:ml-8 w-[40%]">
                <h1 className='font-[800] text-5xl sm:text-6xl text-white w-[60%]'>Exchange and trade</h1>
                <h3 className='text-3xl text-white '>at the best rate</h3>
                <p className="text-sm lg:text-lg text-gray-200 hidden lg:block">There are many variations of passages of Lorem Ipsum form, by injected humour randomised words which don't look even slightly believable.</p>
                <button style={{background: "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)"}}
                className="text-xl p-3 mt-2 mx-2 rounded-lg text-white ">Start Here</button>
                <Image src={cent} alt=""
                className="-rotate-45 h-24 w-16 ml-10 mt-4 "/>
            </div>
            <Image
                src={bitcoin}
                
                alt=""
               
                className="hidden sm:block absolute -rotate-45  bottom-24 right-48 h-28 w-32 "
                />
                 <Image src={cent} alt=""
                className="rotate-45 h-48 w-32 hidden xl:block absolute top-24 right-[600px] "/>
                <Image src={cent} alt=""
                className="-rotate-45 h-48 w-32 hidden xl:block absolute bottom-40 right-[600px]"/>
                 <Image src={cent} alt=""
                className="rotate-45 h-48 w-32 hidden xl:block absolute bottom-0 right-[600px]"/>
                <Image
                src={AI}
                alt=""
                className='bottom-0 right-0 absolute h-96 w-48 lg:h-[550px] lg:w-96'/>
                
        </div>
    </div>
    </header>
  )
}

export default Header