import { FaEllipsisH, FaFeatherAlt } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbLaurelWreathFilled } from "react-icons/tb";



const NavItem = ({ icon: Icon, text }) => (
  <div className='flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200'>
    <Icon className='text-2xl mr-4' />
    <span className='text-xl hidden xl:inline'>{text}</span>
  </div>
)


export function Sidebar() {
  return (
    <div className='w-20 xl:w-64 sticky top-0 px-2 h-screen'>
      <TbLaurelWreathFilled className='text-red-400 text-3xl m-2' />
      <nav>
        <NavItem icon={FaHome} text='Home'/>
        <NavItem icon={FaHashtag} text='Explore'/>
        <NavItem icon={FaBell} text='Notifications'/>
        <NavItem icon={FaEnvelope} text='Messages'/>
        <NavItem icon={FaBookmark} text='Bookmarks'/>
        <NavItem icon={FaUserFriends} text='Comunities'/>
        <NavItem icon={FaUser} text='Profile'/>
        <NavItem icon={TbLaurelWreathFilled} text='Premium'/>
        <NavItem icon={FaEllipsisH} text='More'/>
      </nav>
      <button className='w-12 h-12 px-3 py-1 rounded-full bg-red-400 text-white font-bold text-lg hover:bg-red-500 transition duration-200 xl:w-full xl:rounded-full'>
        <FaFeatherAlt className='inline xl:mr-3' />
        <span className='hidden xl:inline'>Post</span>
      </button>
    </div>
  )
}