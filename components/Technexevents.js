import Image from 'next/image'
import Technextitle from '../public/Technex/technex_titile.svg'
import Technexall from '../public/Events/Technexall.svg'
const Technexevents=()=>{
return(
    <div className='bg-[#110414] flex flex-col items-center justify-center'>
        <Image src={Technextitle} alt='title' className='w-[60%]'></Image>
        <div className='flex flex-row items-start justify-around pt-10 px-28'>
            <div className='flex flex-col'>
                <h1 className='text-white text-2xl md:text-4xl lg:text-6xl font-medium'>Gateway to Technoverse</h1>
                <h2 className='text-white text-justify text-xl md:text-2xl lg:text-4xl w-[80%] pt-10'>Technex is the annual technical festival of IIT BHU, for the students to showcase their scientific and innovatory skills through numerous competitions, workshops, lectures and exhibitions.</h2>
            </div>
            <Image src={Technexall} alt='technex img' className='w-[40%]'></Image>
        </div>
    </div>
)
}
export default Technexevents