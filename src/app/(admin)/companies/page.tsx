import { ReactNode } from 'react';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '@/app/components/StatusLabel';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';

export interface PageProps {
  children: ReactNode;
}

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      {/* <CompanyTable>
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
      </CompanyTable> */}
      <HydrationBoundary state={dehydratedState}>
        <CompanyTable />
      </HydrationBoundary>
    </div>
  );
}
