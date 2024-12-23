import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <h1 className="text-red-600 font-bold text-xl">404</h1>
      <p>Company with this id is not found</p>
      <Link href="/companies" className="text-blue-700 font-medium">
        Back to companies
      </Link>
    </div>
  );
};

export default NotFound;
