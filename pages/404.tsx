import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NotFound: NextPage = () => {
  const [countDown, setCountDown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      } else {
        router.push('/');
      }
    }, 1000);
  });

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Going back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>{' '}
        is <span>{countDown}</span> seconds...
      </p>
    </div>
  );
};

export default NotFound;
