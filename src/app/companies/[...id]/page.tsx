import { ReactNode } from 'react';
import Header from '@/app/components/Header';

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  return (
    <div>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};

export default Page;
