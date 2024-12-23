import { ReactNode } from 'react';
import Header from '@/app/components/Header';
import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/SearchInput';
import AddCompanyButton from '../../components/AddCompanyButton';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '@/app/components/StatusLabel';

export interface PageProps {
  children: ReactNode;
}

const Page = () => {
  return (
    <div>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </div>
  );
};

export default Page;
