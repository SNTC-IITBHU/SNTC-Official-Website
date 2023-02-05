import Image from 'next/image'
import aero from '../public/aero.PNG'

export default function Aero() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Aeromodelling Club</h1>
      <Image src={aero}/>
      <h3>Unleash your potential in aeronautics and aerospace engineering with the Aero Club at IIT BHU. Learn through hands-on projects, workshops and expert talks. Explore the limitless possibilities of the field and develop your skills to new heights. The Aero Club provides a platform for students to tap into their potential and ignite their passion for this exciting field</h3>
    </div>
  );
}