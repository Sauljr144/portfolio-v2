import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
import links from '@/utils/links';
import Link from 'next/link';
import Social from '../../atoms/Social';
import logo from '../../../../../public/assets/images/logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <div className='w-full bg-tan-dark rounded-t-xl p-4'>
        <div className='flex justify-center '>
          <Link href={'/'}>
            <Image
              src={logo}
              alt={'Saul Suazo Logo'}
              className='lg:w-10 w-10'
              priority
            />
          </Link>
        </div>
        <div className='container mx-auto flex flex-col items-center text-white font-poppins'>
          <div className='mt-5 mb-4'>
            {links.nav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='lg:mx-4 mr-3 lg:text-base text-xs font-medium hover:underline hover:underline-offset-1'
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex mb-12'>
            {/* <Link target="_blank" href={'https://www.instagram.com/saulsuazojr/'}>
              <FaInstagram className='text-lg lg:text-xl'/>
            </Link> */}
            <Social/>
          </div>
          <p className='font-light text-xs text-center'>
            Copyright © 2025 Saul Suazo All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
