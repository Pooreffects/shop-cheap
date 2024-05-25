type LoginFormTypes = {
  heading: string;
};

export default function LoginForm({ heading }: LoginFormTypes) {
  return (
    <form action='' className='p-4 flex flex-col items-center'>
      <fieldset>
        <legend className='mb-6 text-2xl font-primary font-semibold text-center text-slate-700 dark:text-violet-200'>
          {heading}
        </legend>
        <section className='flex flex-col items-center my-4'>
          <div className='p-2'>
            <label
              htmlFor='username'
              className='pl-2 font-primary font-medium text-base dark:text-violet-100 text-slate-700'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              className='dark:bg-slate-500 rounded p-1 my-2 pl-2 font-primary text-base dark:text-violet-100 text-slate-700 focus:outline-none focus:shadow-md focus:transition-all focus:shadow-violet-400'
            />
          </div>
          <div className='p-2'>
            <label
              htmlFor='username'
              className='pl-2 font-primary font-medium text-base dark:text-violet-100 text-slate-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='dark:bg-slate-500 rounded p-1 my-2 pl-2 font-primary text-base dark:text-violet-100 text-slate-700 focus:outline-none focus:shadow-md focus:transition-all focus:shadow-violet-400 placeholder:translate-y-1.5'
              placeholder='**************'
            />
          </div>
        </section>
        <input
          type='submit'
          value='Submit'
          className='m-2 border-2 px-2 py-1 text-sm font-primary font-medium hover:cursor-pointer rounded-lg hover:rounded-md border-violet-400 dark:hover:border-yellow-500 dark:hover:bg-slate-500  text-slate-700 dark:text-violet-100 hover:border-violet-200 hover:bg-slate-700 dark:hover:text-gray-200 transition-all'
        />
      </fieldset>
    </form>
  );
}
