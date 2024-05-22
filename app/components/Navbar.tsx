import React from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';


type NavProps = {};

export default function Navbar(props: NavProps) {

  return (
    <header className='w-full flex items-center justify-between px-8 py-4 dark:bg-slate-700 bg-stone-300  border-none shadow-sm drop-shadow-sm shadow-slate-750'>
      <div className='flex justify-around items-center w-2/3 p-2'>
        <h1 className='text-4xl text-slate-800 dark:text-gray-200 font-stylish hover:cursor-pointer'>
          Shop-cheap
        </h1>
        <nav className='flex justify-center items-center'>
          <li className='list-none font-primary text-slate-800 hover:text-violet-400 dark:text-gray-200  dark:hover:text-violet-800 hover:cursor-pointer hover:transition-all text-lg font-bold '>
            <Link href='/'>Products</Link>
          </li>
          <li className='list-none font-primary text-slate-800 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-800 hover:cursor-pointer hover:transition-all text-lg font-bold pl-8'>
            <Link href='/'>Cart</Link>
          </li>
          <li className='list-none font-primary text-slate-800 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-800 hover:cursor-pointer hover:transition-all text-lg font-bold pl-8'>
            <Link href='/'>Sign-up</Link>
          </li>
        </nav>
      </div>
      <ThemeSwitch />
    </header>
  );
}
