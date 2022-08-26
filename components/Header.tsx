import type { NextPage } from 'next';

const Header: NextPage = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <a>Home</a>
      <a>About</a>
      <a>Ninja Listing</a>
    </nav>
  );
};

export default Header;
