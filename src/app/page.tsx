// import StatusLabel, { Status } from './components/StatusLabel';
import AddCompanyButton from '@/app/components/AddCompanyButton';
import styles from './page.module.css';
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-xl">Home page</h1>
        {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
        <AddCompanyButton />
        <ServerComponent />
        <ClientComponent />
      </main>
    </div>
  );
}
