import Image from 'next/image';

const Hero = () => {
   return (
      <section className="flex md:items-center md:p-12 bg-gradient-to-tr from-slate-900 to-azul-oscuro flex-grow flex-shrink-0 px-6 py-12 justify-center lg:p-12 min-h-[calc(100vh-75px)]">
         <div className="lg:container mx-auto">

            <div className="md:flex flex-wrap md:items-center md:justify-between">
               <div className="block basis-0 flex-shrink flex-grow text-center mx-auto md:mb-5 md:flex-none  lg:w-2/5 xl:order-last">
                  <div className="hidden md:flex items-center py-5 mb-3">
                     <Image src="/img/ayllu-kaypi.png" alt="Logo" width={45} height={48} />
                     <p className='text-white'>logo del proyecto</p>
                  </div>
                  <div className="mb-5">
                     <h1 className="md:text-5xl lg:text-6xl lg:w-2/3 md:mb-10 text-4xl text-center md:text-left text-azul-claro font-bold leading-tight mb-5">
                        La aventura de descubrir
                     </h1>
                     <p className="uppercase text-center md:text-left md:text-2xl md:mb-10 text-white font-semibold">
                        En construcción
                     </p>
                  </div>

                  <div className="flex flex-wrap items-center md:justify-between justify-around py-3 text-white">
                     <div className="flex items-center mb-4">
                        <div className='md:block lg:h-14'>
                           <Image src="/img/ayllu-kaypi.png" alt="Logo" width={45} height={48} />

                        </div>
                        <p className="uppercase inline-block font-bold text-sm lg:text-xl ml-3">Desde <br /> 40.62 M2</p>
                     </div>
                     <div className="flex items-center mb-4">
                        <div className='md:block lg:h-14'>
                           <Image src="/img/ayllu-kaypi.png" alt="Logo" width={45} height={48} />
                        </div>
                        <p className="uppercase inline-block font-bold text-sm lg:text-xl ml-3">Dormitorios <br /> 1.2.3</p>
                     </div>
                     <div className="flex items-center mb-4">
                        <div className='md:block lg:h-14'>
                           <Image src="/img/ayllu-kaypi.png" alt="Logo" width={45} height={48} />
                        </div>
                        <p className="uppercase inline-block font-bold text-sm lg:text-xl ml-3">Ubicación <br /> Magdalena</p>
                     </div>
                  </div>
                  
                  <div className="text-center md:text-left pt-5">
                     <button type="button" className="flex w-full tex-center justify-center md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center uppercase font-bold transition-transform duration-200 hover:scale-105 md:text-lg md:px-7 mb-5 shadow-lg shadow-black">Ver Planos</button>

                  </div>

               </div>
               <div className="block basis-0 flex-shrink flex-grow text-center mx-auto md:flex-none md:w-2/3 lg:w-2/5">
                  <div className='w-full'>
                     <Image src="/img/fachada.png" alt="Logo" width={500} height={500} />

                  </div>
               </div>

            </div>



         </div>
      </section>
   )
}

export default Hero