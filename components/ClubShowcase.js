import Image from 'next/image'
import Showcase1 from '../public/Events/Showcase1.svg'
import Showcase2 from '../public/Events/Showcase2.svg'
import Showcase3 from '../public/Events/Showcase3.svg'
import Showcase4 from '../public/Events/Showcase4.svg'
const ClubShowcase=()=>{
    return(
        <div className="flex flex-col items-center justify-center py-28 px-28">
            <div className='flex flex-row items-center justify-center'>
                <div className=' font-montserrat flex flex-col items-start justify-center'>
                    <h1 className='text-white text-2xl md:text-3xl lg:text-7xl font-medium'>Club Showcase</h1>
                    <h1 className='text-white text-xl md:text-2xl lg:text-4xl pt-10 pb-20'>Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</h1>
                    <Image src={Showcase2} alt='Showcase2' className='w-[90%]'></Image>
                </div>
                <Image src={Showcase1} alt='Showcase1' className='w-[60%]'></Image>
            </div>
            <div className='flex flex-row items-center justify-center'>
            <div className='flex flex-col items-start justify-center pt-10'>
                    <h1 className='text-white text-xl md:text-2xl lg:text-4xl pt-10 pb-20 w-[80%]'>Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</h1>
                    <Image src={Showcase4} alt='Showcase2' className='w-[90%]'></Image>
                </div>
                <Image src={Showcase3} alt='Showcase1' className='w-[60%]'></Image>

            </div>
        </div>
    )
}
export default ClubShowcase