import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    /* To-do: the Header navlinks aren't being rendered for pathname: '/login'  */
    <>
      <section className=' flex flex-col items-center justify-around'>
        <div className='border-2 border-slate-700 dark:border-violet-200 rounded-md w-80 p-6 mb-8'>
          <LoginForm heading='Sign-up' />
        </div>
      </section>
    </>
  );
}
