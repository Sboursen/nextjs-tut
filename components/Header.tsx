import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

type NextComponent = () => ReactElement;

const Header: NextComponent = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src={'/favicon.ico'}
          width={48}
          height={48}
          objectFit="contain"
          alt="logo"
        ></Image>
        <h1>Ninja List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Header;
