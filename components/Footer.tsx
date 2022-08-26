import { ReactElement } from 'react';

type NextComponent = () => ReactElement;

const Footer: NextComponent = () => {
  return <footer>Copyright 2022</footer>;
};

export default Footer;
