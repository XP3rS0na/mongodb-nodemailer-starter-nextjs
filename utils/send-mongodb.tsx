'use client'
import { FormData } from '@/app/components/mongodb/page';

export async function sendDB(data: FormData) {
  const apiEndpoint = './api/db';
  let status  = 500;
  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      
    status = response.status;
    })
    .catch((err) => {
      console.log("error");
    });
     return status;
}