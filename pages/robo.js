import Image from 'next/image'
import robo from '../public/robo.PNG'

export default function Aero() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Robotics Club</h1>
      <Image src={robo}/>
      <h3>Robotics club is dedicated to promoting an understanding of robotics technology and providing students with opportunities to develop their skills. From hands-on projects and workshops, to guest lectures and coding competitions, students can gain a comprehensive understanding of the world of robotics and sharpen their skills in this rapidly-evolving field.</h3>
    </div>
  );
}