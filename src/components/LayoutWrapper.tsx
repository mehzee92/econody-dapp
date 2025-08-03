'use client';

import { usePathname } from 'next/navigation';
import Header from './globalComponents/Header';
import Footer from './globalComponents/Footer';


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
