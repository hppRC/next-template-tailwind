import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

const Component: React.FCX = ({ children }) => (
  <>
    <Header />
    <main className=''>{children}</main>
    <Footer />
  </>
);

export const Layout: React.FCX = ({ children }) => <Component>{children}</Component>;
