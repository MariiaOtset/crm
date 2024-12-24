import Header from '@/app/components/Header';
import React, { ReactNode } from 'react';

export interface PageProps {
  children: ReactNode;
}

const Page = () => {
  return (
    <>
      <Header>Dashboard / New Companies</Header>
    </>
  );
};

export default Page;
