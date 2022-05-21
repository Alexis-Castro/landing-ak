import Image from 'next/image';
import NavbarItems from '../Navbar/NavbarItems';
import { BsFillGeoAltFill, BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'


export const Footer = () => {
   return (

      <footer className="px-5 pt-12 pb-5 lg:pt-15 lg:pb-5 lg:px-10 bg-slate-900">

         <div className="lg:container mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               <div className="mb-7 md:mb-0 md:w-3/4 ">
                  <a href="https://ayllukaypi.pe" className="flex items-center mb-5" >
                     <Image src="/img/ayllu-kaypi.png" className="mr-3 h-8 p-1" alt="FlowBite Logo" width={45} height={48} />
                     <span className="self-center text-xl md:text-2xl ml-1 font-semibold whitespace-nowrap text-white">Ayllu Kaypi</span>
                  </a>
                  <p className='text-gray-400'>Llevamos siete años ofreciéndote la mejor asesoría en inversión inmobiliaria, llevando las mejores y más exclusivas lotizaciones que harán crecer exponencialmente tu inversión. Somos Ayllu Kaypi, Aquí hogar, aquí familia.</p>
               </div>
               <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Proyectos</h2>
                  <ul className="text-gray-400 ">
                     <li className="mb-3">
                        <a href="#" className="hover:underline">Villa los Parques</a>
                     </li>
                     
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contáctanos</h2>
                  <ul className="text-gray-400 ">
                     <li className="mb-3 flex items-center">
                        <BsFillGeoAltFill className="mr-2"/>
                        <a className="">Calle Almirante Guisse #243 - Chiclayo</a>
                     </li>
                     <li className='mb-3 flex items-center'>
                        <BsEnvelopeFill className="mr-2"/>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">contacto@ayllukaypi.pe</a>
                     </li>
                     <li className='flex items-center'>
                        <BsFillTelephoneFill className="mr-2" />
                        <a href="tel:+51970555683" target={"_blank"} rel={"noopener noreferrer"} className="hover:underline">970 555 683</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                  <ul className="text-gray-400 ">
                     <li className="mb-3">
                        <a href="#" className="hover:underline">Políticas de Privacidad</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline">Términos &amp; Condiciones</a>
                     </li>
                  </ul>
               </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between ">
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://ayllukaypi.pe" rel="" className="hover:underline">Ayllu Kaypi</a>. Todos los Derechos Reservados.
               </span>
               <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <ul className="flex">
                     <NavbarItems />

                  </ul>
               </div>
            </div>

         </div>

      </footer>

   )
}
