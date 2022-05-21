import Image from 'next/image';

export const AreaComun = () => {
   return (
      <div className="flex justify-center md:justify-start flex-wrap gap-3">
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Lobby</p>
         </div>
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Sum</p>
         </div>
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Piscina</p>
         </div>
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Zona de Parrillas</p>
         </div>
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Sala Gamer</p>
         </div>
         <div className="w-1/3 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='md:text-xl'>Sala de niños</p>
         </div>
         <div className="w-1/2 md:w-1/4 md:p-2 bg-slate-200">
            <Image src="/img/ayllu-kaypi.png" className="mr-3 max-h-10 md:h-12" alt="Logo" width={40} height={43} />
            <p className='break-words md:text-xl'>Estacionamiento de bici</p>
         </div>
      </div>
   )
}
