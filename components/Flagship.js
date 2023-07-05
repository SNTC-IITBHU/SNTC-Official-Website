import Image from 'next/image'
import Flagshipimg from '../public/Events/Flagship.png'
const Flagship=()=>{
   return(
    <div className='bg-[#110414] flex flex-col items-center justify-center py-5 md:py-10 lg:py-20'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-medium pb-10'>Our Flagship event</h1>
        <Image src={Flagshipimg} alt='flagship'  className='w-[90%]'/>
    </div>
   ) 
}
export default Flagship