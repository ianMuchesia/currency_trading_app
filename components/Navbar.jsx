import {useState } from "react"
import logo from "../public/logo.png"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from "next/image"


const styles={
  links:`my-3 md:my-0 md:text-gray-200 hover:underline hover:text-lg transition duration-500 ease-out hover:ease-in hover:text-red-500 xl:mx-4 xl:text-xl`,
}
const Navbar = () => {
   
  const [toggle , setToggle ]  = useState(false)

  const handleToggle=()=>{
    setToggle(prevToggle=>!prevToggle)
  }


  return (
    <nav className='p-4 md:flex  md:items-center md:justify-between'
    >           <div className="flex justify-between items-center">
                <Image src={logo} alt="logo" className='w-14 h-14'/>
                <span onClick={handleToggle}>
            { toggle?   <AiOutlineClose size={48} color={"black"} className="md:hidden absolute z-[50] right-4 top-6" />: <AiOutlineMenu size={48} color={"white"} className="md:hidden" />}
                </span>
                </div>
                <ul className={`bg-white grid place-items-center top-0 gap-4 z-[1] w-full left-0 py-4 pl-7 absolute transition-all ease-in duration-200  ${
            toggle ? "" : "hidden"
          } md:flex   md:w-auto md:py-0 md:opacity-100 md:z-auto md:pl-0 md:items-center md:static md:bg-transparent` }>
                  <li className={styles.links}>HOME</li>
                  <li className={styles.links}>ABOUT US</li>
                  <li className={styles.links}>CONTACT US</li>
                  <li className={styles.links}>BLOG</li>
                  <li className={styles.links}>SERVICES</li>
                </ul>
                <h6 className="hidden md:block text-white text-lg">Log in</h6>
            </nav>
  )
}

export default Navbar