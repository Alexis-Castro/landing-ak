
export const LinkMapa = ({ texto, url }) => {
   return (
      <>
         {/* <Link href={url} > */}
            <a
               href={url}
               rel='noopener noreferrer'
               className="text-white bg-gradient-to-r w-full md:w-auto md:first:mr-3 md:first:mb-0 bg-azul-oscuro rounded-lg text-sm px-5 py-2.5 text-center uppercase font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3"
            >
               {texto}
            </a>
         {/* </Link> */}
         {/* <Link href={"/"} className="text-azul-oscuro hover:text-azul-claro">
            <a
               className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center uppercase font-bold transition-colors"
            >
               Ir con Waze
            </a>
         </Link> */}
      </>
   )
}
