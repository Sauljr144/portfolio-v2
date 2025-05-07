import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import links from '@/utils/links';

const Social = () => {
  const foo = (icon: string) => {
    switch (icon) {
      case 'github':
        return <FaGithub className='text-xl  text-white' />;
        break;
      case 'linkedin':
        return <FaLinkedin className='text-xl mx-3 text-white' />;
        break;
      case 'instagram':
        return <FaInstagram className='text-xl text-white' />;
        break;
      default:
        return '';
        break;
    }
  };

  return (
    <>
      {links.social.map((social) => (
        <Link key={social.type} className='' target='_blank' href={social.url}>
          {foo(social.type)}
        </Link>
      ))}
    </>
  );
};

export default Social;
