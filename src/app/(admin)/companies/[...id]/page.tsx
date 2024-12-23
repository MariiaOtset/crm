'use client';
import { ReactNode, useEffect } from 'react';
import Header from '@/app/components/Header';

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  useEffect(() => {});

  return (
    <div>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};

export default Page;
