import React from 'react';

export interface PageProps {
  //   params: { id: string };
}

const Page = ({}: PageProps) => {
  return (
    <div className="px-10 py-10 flex justify-center items-center my-background">
      <p className="text-2xl text-green-500">
        I would try different things related to Next.js here
      </p>
    </div>
  );
};

export default Page;
