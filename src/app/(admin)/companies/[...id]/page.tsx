'use client';
import { ReactNode, useEffect } from 'react';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <div>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};

export default Page;
