import Image from 'next/image';
import { LinkMapa } from './LinkMapa';


export const Ubicacion = () => {
   return (
      <section className="py-12 px-5 lg:py-24 lg:px-14 bg-slate-200">
         <div className="lg:container mx-auto">
            <div className="md:flex justify-center">  {/* columns */}
               <div className="block basis-0 flex-shrink flex-grow p-2 text-center"> {/* column */}
                  <h2 className="font-bold text-3xl md:text-5xl md:mb-8 mb-5 after:w-14 after:h-2 after:mx-auto after:mt-4 after:bg-azul-claro after:block after:rounded">Ubicación <span className="text-azul-oscuro">perfecta</span></h2>
               </div>
            </div>

            <div className="md:flex justify-between flex-wrap mb-5">
               <div className="block basis-0 flex-shrink flex-grow  text-center md:flex-none md:w-1/2">
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

               <div className="block basis-0 flex-shrink flex-grow  text-center md:flex-none md:w-1/3">
                  {/* <h3>Slider</h3> */}
                  <Image src="/img/fachada.png" className="w-full" alt="Logo" width={500} height={500} />
               </div>


            </div>

            <div className="block basis-0 flex-shrink flex-grow text-center mx-auto md:flex-none md:w-2/3">
               <div className="flex items-center flex-wrap justify-center pt-4 ">
                  <LinkMapa 
                     texto={'Ir con Google Maps'}
                     url={'#'}
                  />
                  <LinkMapa 
                     texto={'Ir con Waze'}
                     url={'#'}
                  />
                  
               </div>
            </div>
           
         </div>
      </section>
   )
}
