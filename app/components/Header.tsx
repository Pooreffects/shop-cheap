'use client';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import CTAButton from './CTAButton';
import { usePathname } from 'next/navigation';
export interface NavLink {
  label: string;
  href: string;
}
interface NavProps {
  links?: NavLink[];
}

/* Todo: 
      Header styles: if navlinks ? rejustify content flex conditionally : space-between  
*/

export default function Header({ links }: NavProps) {
  const path = usePathname();
  return (
    <>
      <header className='w-full flex items-center justify-between px-8 py-4 dark:bg-slate-700 bg-stone-300  border-none shadow-sm drop-shadow-sm shadow-slate-750'>
        <div className='flex justify-around items-center w-2/3 p-2'>
          <CTAButton
            className='text-4xl text-slate-800 dark:text-gray-200 font-stylish hover:cursor-pointer'
            title='Shop-cheap'
            link='/'
          />
          {path !== '/login' && (
            <nav className='flex justify-center items-center'>
              <ul className='flex space-x-8'>
                {links?.map((link, i) => (
                  <li
                    key={i}
                    className='list-none font-primary text-slate-800 hover:text-violet-800 dark:text-gray-200 dark:hover:text-violet-400 hover:cursor-pointer hover:transition-all text-lg font-bold'
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <ThemeSwitch />
      </header>
    </>
  );
}
