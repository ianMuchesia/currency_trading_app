import logo from "../public/logo.png"
import {AiOutlineMenu} from 'react-icons/ai'
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className='p-4 flex justify-between '
    >
                <Image src={logo} alt="" className='w-14 h-14'/>
                <AiOutlineMenu size={48} color={"white"}/>
            </nav>
  )
}

export default Navbar