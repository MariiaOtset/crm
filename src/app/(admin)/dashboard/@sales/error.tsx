'use client';

import MagicButton from '@/app/components/MagicButton';
import React from 'react';

type ErrorComponentProps = {
  error: Error;
};

const Error = ({ error}: ErrorComponentProps) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
    </div>
  );
};

export default Error;
