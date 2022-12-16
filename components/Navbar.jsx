import logo from "../public/logo.png"
import {AiOutlineMenu} from 'react-icons/ai'
import Image from "next/image"


const styles={
  links:`hover:underline hover:text-lg transition duration-500 ease-out hover:ease-in hover:text-red-500 xl:mx-4 xl:text-xl`,
}
const Navbar = () => {
  return (
    <nav className='p-4 flex justify-between items-center'
    >
                <Image src={logo} alt="" className='w-14 h-14'/>
                <AiOutlineMenu size={48} color={"white"} className="md:hidden"/>
                <ul className="hidden md:flex space-evenly text-gray-300 gap-4 ">
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