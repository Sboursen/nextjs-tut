import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Going back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>{' '}
        is 3 seconds...
      </p>
    </div>
  );
};

export default NotFound;
