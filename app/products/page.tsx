import CTAButton from '../components/CTAButton';

export default function Products() {
  return (
    <>
      <div className=' flex flex-col items-center justify-around'>
        <h1 className='text-slate-800 dark:text-violet-200 hover:text-violet-700 hover:cursor-pointer hover:transition-all text-center text-8xl font-stylish tracking-wider font-bold'>
          Products fr fr!
        </h1>
        <p className='pt-6 text-slate-800 dark:text-violet-200 hover:transition-all text-center text-xl font-medium'>
          Explore the latest clothing articles as they ship
        </p>
      </div>
      <CTAButton
        className='mt-8 border-2 border-slate-700 dark:border-violet-200 p-3 text-base font-primary font-semibold rounded-lg hover:rounded-2xl hover:border-yellow-500 hover:bg-slate-500 text-violet-700 dark:text-violet-400 hover:text-gray-200 transition-all'
        title='Check em out'
        link='/products'
      />
    </>
  );
}
