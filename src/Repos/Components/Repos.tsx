import { Toast } from '@/lib/Toast';
import { RepoResponse } from '@/Types/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Repos = () => {
  const [ReposData, setReposData] = useState<RepoResponse[] | null>(null)
  
        useEffect(() => {
            async function fetchData() { 
              const res = await axios.get('/api/repos');
              const repos = await res.data;
              if (repos.message) {
                Toast(repos.message, 'error');
              }
              setReposData(repos);
            }
            fetchData();
        }
        , []);
        
  return (
    <div>
      
    </div>
  )
}

