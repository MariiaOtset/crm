import React from 'react';

type ErrorComponentProps = {
  error: Error;
};

const Error = ({ error }: ErrorComponentProps) => {
  return <div>Error</div>;
};

export default Error;
