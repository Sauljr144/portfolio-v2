import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  url: string;
  className: string;
}

const Button = ({url, className}:ButtonProps) => {
  return <Link className={`rounded-3xl px-3 py-2 text-sm ${className}`} href={url} target='_blank'>Visit Site</Link>;
};

export default Button;