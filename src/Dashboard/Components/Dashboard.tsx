import { authClient } from '@/lib/auth-client';
import React, { useEffect } from 'react'

const Dashboard = () => {
        const { data, isPending } = authClient.useSession();
        const session = data?.session;
    useEffect(() => {
        console.log(session);
        console.log(data);
        
        
     }, [session , data]);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard