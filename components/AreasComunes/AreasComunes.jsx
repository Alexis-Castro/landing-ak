import React from 'react'
import { Slider } from './Slider'

const AreasComunes = () => {
   return (
      <section className="py-12 px-5 lg:py-24 lg:px-14 bg-slate-200">
         <div className="lg:container mx-auto">
            <div className="md:flex justify-center">  {/* columns */}
               <div className="block basis-0 flex-shrink flex-grow p-2 text-center "> {/* column */}
                  <h2 className="font-bold text-3xl text-azul-oscuro md:text-5xl mb-5 after:w-14 after:h-2 after:mx-auto after:mt-4 after:bg-azul-claro after:block after:rounded">Áreas <span className="text-black">comunes</span></h2>
               </div>
            </div>

            <div className="md:flex justify-center">
               <div className="block basis-0 flex-shrink flex-grow p-1 text-center">
                 <iframe 
                  width={'100%'}
                  height={'100%'}
                  src="https://www.youtube.com/embed/uNRcCc2yinw"
                  className="w-full aspect-video" 
                  title="Video de Área comun" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen 
                  >
                  </iframe>
               </div>
               <div className="block basis-0 flex-shrink flex-grow p-1 text-center">
                  {/* <h3>Slider</h3> */}
                  <Slider />
               </div>

            </div>

           
         </div>
      </section>
   )
}

export default AreasComunes