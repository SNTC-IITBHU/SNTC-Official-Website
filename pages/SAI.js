import Image from 'next/image'
import SAI from '../public/SAI.PNG'

export default function Aero() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Sustainability and Innovation Club</h1>
      <Image src={SAI}/>
      <h3>Make a difference and shape the future with the Club of Sustainability and Innovation at IIT BHU. It is dedicated to promoting an understanding of sustainable development and fostering innovation. Through guest lectures, workshops, and hands-on projects, students can learn about the latest developments in sustainable technology, engage in discussions about the future of sustainability.</h3>
    </div>
  );
}