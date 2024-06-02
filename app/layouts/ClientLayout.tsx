'use client';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: { [key: string]: NavLink[] } = {
  '/': [
    { label: 'Products', href: '/products' },
    { label: 'Cart', href: '/cart' },
    { label: 'Login', href: '/login' },
  ],
  '/login': [
    { label: 'About Us', href: '/about' },
    { label: 'Login', href: '/login' },
  ],
  '/products': [
    { label: 'Categories', href: '/categories' },
    { label: 'Newest', href: '/products' },
    { label: 'Cart', href: '/cart' },
  ],
};

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const path = usePathname();
  const normalizedPath =
    path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const currentLinks = navLinks[normalizedPath as keyof typeof navLinks] || [];

  return (
    <>
      <Header links={currentLinks} />
      <main className='flex h-screen flex-col items-center justify-center px-24 dark:bg-slate-700'>
        {children}
      </main>
    </>
  );
};

export default ClientLayout;
