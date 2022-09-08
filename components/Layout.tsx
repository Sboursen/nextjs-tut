import type { ReactElement } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

const Layout: LayoutProps = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
