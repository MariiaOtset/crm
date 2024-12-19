'use client';
import { ReactNode } from 'react';
import ServerComponentCopy from './ServerComponentCopy';

export interface ClientComponentProps {
  children?: ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
};

export default ClientComponent;
