import Image from 'next/image'
import astro from '../public/astro.PNG'

export default function Contact() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Astro Club</h1>
      <Image src={astro}/>
      <h3>Experience the wonders of the universe with the Astro Club at IIT BHU. Our club is dedicated to promoting interest in astronomy and astrophysics through hands-on learning and engagement. Explore the cosmos through observation sessions, guest lectures, and workshops, and deepen your understanding of the universe. Join us in our quest to uncover the secrets of the stars</h3>
    </div>
  );
}