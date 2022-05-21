import Image from 'next/image';

const Brochure = () => {
   return (
      <section className="py-12 px-6 lg:py-24 lg:px-14">
         <div className="lg:container mx-auto">
            <div className="md:flex justify-between items-center">
               <div className="block basis-0 flex-shrink flex-grow p-3 text-center lg:flex-none lg:w-2/5">
                  <h2 className="font-bold text-3xl md:text-5xl md:text-left mb-5 after:w-14 after:h-2 after:mx-auto md:after:ml-0 after:mt-4 after:bg-azul-claro after:block after:rounded"><span className="text-azul-oscuro">Vive cerca</span> a tus lugares favoritos</h2>
                  <p className="md:text-left md:text-lg">
                     Un edificio en una ubicación estratégica, en un distrito con historia y con un valor único.
                     Tres frentes que favorecen la ventilación e iluminación. Dinámico para nuevas experiencias. Ecoamigable y seguro.
                     Vive en Magdalena, cerca de los mejores servicios
                  </p>
               </div>
               <div className="block basis-0 flex-shrink lg:flex-none lg:w-1/2 flex-grow p-3 text-center ">
                  <div className="border flex items-center justify-around rounded mb-6 py-5">
                     <div className="w-1/2 border-r-2">
                        <p className="uppercase font-semibold mb-3">Aplica:</p>
                        <div className="">
                           <Image src="/img/vivienda-verde.png" alt="Logo" width={"100%"} height={"100%"} />
                        </div>
                     </div>
                     <div className="w-1/2">
                        <p className="uppercase font-semibold mb-3">Financiado por:</p>
                        <div className="">
                           <Image src="/img/vivienda-verde.png" alt="Logo" width={"100%"} height={"100%"} />
                        </div>
                     </div>
                  </div>
                  <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center uppercase font-bold transition-transform duration-200 shadow-lg hover:scale-105 md:text-lg">
                     Descargar brochure
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Brochure