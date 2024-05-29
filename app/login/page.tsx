import LoginForm from '../components/LoginForm';

interface LoginProps {}

export default function page({}: LoginProps) {
  return (
    <main className='flex h-screen flex-col items-center justify-center px-24 dark:bg-slate-700'>
      <div className='border-2 border-slate-700 dark:border-violet-200 rounded-md w-80 p-6 mb-8'>
        <LoginForm heading='Sign-up' />
      </div>
    </main>
  );
}
