import React from 'react';

type LoginProps = {};

export default function page({}: LoginProps) {
  return (
    <main className='flex h-screen flex-col items-center justify-center px-24 dark:bg-slate-700'>
      <div className='border-2 border-slate-700 dark:border-violet-200 rounded-md w-80 p-6'>
        <form action=''>
          <fieldset>
            <legend className='text-xl font-primary font-semibold text-center text-slate-800 dark:text-violet-200'>
              Sign-up
            </legend>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
