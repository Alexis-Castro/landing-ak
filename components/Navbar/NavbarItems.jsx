import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'

const NavbarItems = () => {
   return (
      <>
         <li className=" px-1">
            <a href="https://www.facebook.com/ayllukaypi"
               rel="noopener noreferrer"
               target="_blank"
               className="text-white hover:bg-azul-claro hover:text-white transition-colors block sm:px-1 md:px-2 p-2 rounded-md text-base font-medium"
            >
               <FaFacebookF className="w-7 h-7" />
            </a>
         </li>
         <li className=" px-1">
            <a href="https://www.youtube.com/channel/UCZkhb3dfohLS43A8ktccMkQ"
               rel="noopener noreferrer"
               target="_blank"
               className="text-white hover:bg-azul-claro hover:text-white block transition-colors sm:px-1 md:px-2 p-2 rounded-md text-base font-medium"
            >
               <FaYoutube className='w-7 h-7 ' />
            </a>
         </li>
         <li className=" px-1">
            <a href="https://www.instagram.com/ayllukaypi/"
               rel="noopener noreferrer"
               target="_blank"
               className="text-white hover:bg-azul-claro hover:text-white block transition-colors sm:px-1 md:px-2 p-2 rounded-md text-base font-medium"
            >
               <FaInstagram className='w-7 h-7 ' />
            </a>
         </li>
         <li className=" px-1">
            <a href="https://www.tiktok.com/@ayllukaypi.pe"
               rel="noopener noreferrer"
               target="_blank"
               className="text-white hover:bg-azul-claro hover:text-white block transition-colors sm:px-1 md:px-2 p-2 rounded-md text-base font-medium"
            >
               <FaTiktok className='w-7 h-7 ' />
            </a>
         </li>

      </>
   )
}

export default NavbarItems;