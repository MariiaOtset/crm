import Header from '@/app/components/Header';
import React, { ReactNode } from 'react';

export interface PageProps {
  children: ReactNode;
}

const Page = () => {
  return (
    <>
      <Header>Dashboard Page</Header>
    </>
  );
};

export default Page;
