import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Clubs({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'COPS',
    },
    {
      href: '/aero',
      title: 'Aeromodelling Club',
    },
    {
      href: '/astro',
      title: 'Astro Club',
    },
    {
      href: '/biz',
      title: 'Business Club',
    },
    {
      href: '/SAI',
      title: 'Sustainability and Innovation Club',
    },
    {
      href: '/robo',
      title: 'Robotics Club',
    },
    {
      href: '/SAE',
      title: 'SAE Club',
    },
  ];

  return (
    <div id="clubs" className='min-h-screen flex flex-col'>
      {/* <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        CHECK OUT OUR CLUBS
      </header> */}
      <div className='flex h-full flex-col justify-right items-right'>
    </div>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-fuchsia-100 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    {/* <a
                      className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    > */}
                      {title}
                    {/* </a> */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}