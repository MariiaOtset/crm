import { ReactNode } from 'react';

export interface ServerComponentCopyProps {
  children?: ReactNode;
}

const ServerComponentCopy = ({ children }: ServerComponentCopyProps) => {
  console.log('Server Component Copy');
  return (
    <div>
      <span>Server ComponentCopy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
