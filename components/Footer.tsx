import { ReactElement } from 'react';

type NextComponent = () => ReactElement;

const Footer: NextComponent = () => {
  return <div>Copyright 2022</div>;
};

export default Footer;
