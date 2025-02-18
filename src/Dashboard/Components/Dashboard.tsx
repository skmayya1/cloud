import { authClient } from '@/lib/auth-client';
import { Repos } from '@/Repos/Components/Repos';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Dashboard = () => {

        const router = useRouter();
        const { data, isPending } = authClient.useSession();
        const session = data?.session;
  
        useEffect(() => {
          if (!session && !isPending) {
            router.push('/auth/signin');
          }
        }, [session, isPending, router]);
        
  return (
    <div className='h-screen w-full'>
      <Repos/>
    </div>
  )
}

export default Dashboard