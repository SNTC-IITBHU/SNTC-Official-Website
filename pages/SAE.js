import Image from 'next/image'
import SAE from '../public/sae.PNG'

export default function Aero() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>SAE Club</h1><br></br>
      <Image src={SAE}/>
      <h3>The SAE Club at IIT BHU is a dynamic and innovative group of students who are passionate about the future of mobility. Through its various initiatives and programs, the club aims to provide students with a comprehensive understanding of the automotive industry and help them develop the skills necessary to become leaders in the field.</h3>
    </div>
  );
}