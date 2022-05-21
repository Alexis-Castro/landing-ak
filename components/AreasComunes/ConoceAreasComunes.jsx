import { AreaComun } from "./AreaComun"

const ConoceAreasComunes = () => {
   return (
      <section className="py-12 px-5 lg:py-24 lg:px-14 border-y ">
         <div className="lg:container mx-auto">
            <div className="md:flex justify-between">  {/* columns */}
               <div className="block basis-0 flex-shrink flex-grow p-2 text-center md:flex-none md:text-right md:w-2/5 md:order-last"> {/* column */}
                  <h2 className="font-bold text-3xl md:text-5xl mb-5 after:w-14 after:h-2 md:after:mr-0 after:mx-auto after:mt-4 after:bg-azul-claro after:block after:rounded">Conoce las <span className="text-azul-oscuro">áreas comunes</span></h2>
                  <p className="mb-2 md:mb-5 md:text-lg md:ml-auto">
                     Ofrece áreas comunes exclusivas y lugares de esparcimiento para disfrutar con los seres queridos. Cada espacio esta pensado para satisfacer y promover el bienestar en quienes eligen vivir en 4112 Brissa - Magdalena.
                  </p>
               </div>
               <div className="md:flex-none md:w-3/5 justify-center">
                  <div className="block basis-0 flex-shrink flex-grow p-1 text-center">
                     <AreaComun />
                  </div>
               </div>
            </div>

         </div>
      </section>
                  
   )
}

export default ConoceAreasComunes