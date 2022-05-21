import { Slider } from "../AreasComunes/Slider"

export const DistribucionInterna = () => {
   return (
      <section className="py-12 px-5 lg:py-24 lg:px-14">
         <div className="lg:container mx-auto">
            <div className="md:flex md:items-center justify-between">  {/* columns */}
               <div className="block basis-0 flex-shrink lg:flex-none lg:w-2/5 flex-grow p-2 "> {/* column */}
                  <h2 className="font-bold text-3xl text-azul-oscuro md:text-5xl mb-5 after:w-14 after:h-2 md:after:ml-0 after:mx-auto after:mt-4 after:bg-azul-claro after:block after:rounded">Distribución <span className="text-black">interna</span></h2>
                  <p className="md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eum natus animi maiores ex? Maiores praesentium sequi nobis velit, quisquam quaerat eum, odit omnis illo libero pariatur consequatur, facilis ut!</p>
               </div>

               <div className="block basis-0 lg:flex-none flex-shrink lg:w-1/2 flex-grow p-1 text-center">
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
            </div>

            <div className="md:flex justify-center">
               <div className="block basis-0 flex-shrink flex-grow p-1 text-center">
                  {/* <h3>Slider</h3> */}
                  <Slider />
               </div>

            </div>

           
         </div>
      </section>
   )
}
