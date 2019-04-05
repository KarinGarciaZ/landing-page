import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href='/index' >
        home
      </Link>
      <Link href='/about' >
        about
      </Link>
      <Link href='/contact' >
        contact
      </Link>
    </div>
  )
}
