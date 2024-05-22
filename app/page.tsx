/* The landing page should contain a call-to-action button, and a hook header */

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-700'>
      <div className='relative m-4 flex flex-col items-center justify-around'>
        <h1 className='text-slate-800 dark:text-violet-200 hover:text-violet-700 hover:cursor-pointer hover:transition-all text-center text-6xl font-bold'>
          Pocket-savvy E-commerce
        </h1>
        <p className='pt-3 text-slate-800 dark:text-violet-200 hover:transition-all text-center text-2xl font-bold'>
          Shop Smart, Save Big - Discover Budget-Friendly Finds for Every Need
        </p>
      </div>
    </main>
  );
}
