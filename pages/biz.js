import Image from 'next/image'
import biz from '../public/biz.PNG'

export default function Aero() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Business Club</h1>
      <Image src={biz}/>
      <h3>Accelerate your future with the Business Club at IIT BHU. Our club is dedicated to promoting an understanding of the business world and equipping students with the skills necessary to succeed in the field. Through guest lectures, workshops, and hands-on projects, students can gain a comprehensive understanding of the business world and develop the skills necessary to succeed in today's global marketplace.</h3>
    </div>
  );
}