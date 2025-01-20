'use client';
import CompanyForm from '@/app/components/CompanyForm';
import React, { ReactNode } from 'react';

export interface PageProps {}

const Page = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
};

export default Page;
