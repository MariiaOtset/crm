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
          joinedDate="02.10.2023"
        />
        <CompanyRow
          id={2}
          category="Products"
          company="Aldi"
          status={Status.Active}
          promotion={true}
          country="South America"
          joinedDate="07.08.2022"
        />
        <CompanyRow
          id={3}
          category="Products"
          company="ATБ"
          status={Status.Suspended}
          promotion={false}
          country="Ukraine"
          joinedDate="10.30.2022"
        />
        <CompanyRow
          id={4}
          category="Products"
          company="Apple"
          status={Status.NotActive}
          promotion={false}
          country="North America"
          joinedDate="05.04.2021"
        />
      </CompanyTable>
    </div>
  );
};

export default Page;
