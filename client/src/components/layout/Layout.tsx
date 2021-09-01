import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <div>{props.children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
