import Image from 'next/image'
import EventHero from '../public/Events/EventsHero.svg'
const EventsHero=()=>{
   return(
    <div className='bg-[#110414] flex flex-row items-center justify-center py-5 md:py-10 lg:py-20'>
        <Image src={EventHero} alt='Eventshero'  className='w-[90%]'/>
    </div>
   ) 
}
export default EventsHero