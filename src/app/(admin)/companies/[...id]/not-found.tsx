import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <p>The company is not found</p>
      <Link href="/companies" className="text-blue-700 font-medium">
        Back to companies
      </Link>
    </div>
  );
};

export default NotFound;
