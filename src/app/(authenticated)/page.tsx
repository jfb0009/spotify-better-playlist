import Sidebar from '@/components/Sidebar';
import { getSession, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-20'>
      <button className='bg-primary flex rounded-full px-12 py-2 text-lg uppercase tracking-widest hover:bg-opacity-80 focus:outline-none'>
        Log Out
      </button>
      <Sidebar />
    </div>
  );
}
