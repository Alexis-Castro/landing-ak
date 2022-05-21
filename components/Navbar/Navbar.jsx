import { useRef, useState } from 'react';
import NavbarItems from './NavbarItems';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';

const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false);
   const divRef = useRef();

   return (
      <>
         <nav className="border-gray-200 lg:px-12">
            <div className="lg:container mx-auto">
               <div className="flex flex-wrap justify-between items-center md:px-3 py-2">
                  <div className="flex items-center justify-between">
                     <button
                        type="button"
                        data-collapse-toggle="mobile-menu"
                        className="inline-flex items-center p-2 mx-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                     >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                           <svg
                              className="block h-7 w-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M4 6h16M4 12h16M4 18h16"
                              />
                           </svg>
                        ) : (
                           <svg
                              className="block h-7 w-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M6 18L18 6M6 6l12 12"
                              />
                           </svg>
                        )}
                     </button>
                     <Link href={"/"} passHref>
                        <a className="flex items-center p-2">
                           <Image src="/img/ayllu-kaypi.png" className=" max-h-12 md:h-12" alt="Logo" width={40} height={43} />
                           <span className="self-center text-base md:text-xl font-semibold whitespace-nowrap text-white">Ayllu Kaypi</span>

                        </a>
                     </Link>

                  </div>

                  <div className='rounded-full  mx-1'>
                     <Link href={"tel: 996017286"} passHref>
                        <a className="">
                           <BsFillTelephoneInboundFill className=" text-white h-10 w-10 p-2.5" />
                        </a>
                     </Link>
                  </div>

                  <div className="hidden w-full md:w-auto px-2" id="mobile-menu">
                     <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <NavbarItems />

                     </ul>
                  </div>

               </div>

               <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
               >
                  {() => (
                     <div className="md:hidden" id="mobile-menu">
                        <div ref={divRef} className="pt-2 pb-3 space-y-1 bg-slate-800">
                           <ul>
                              <NavbarItems />

                           </ul>
                        </div>
                     </div>
                  )}
               </Transition>
            </div>
         </nav>

      </>
   )
}

export default Navbar;