// import StatusLabel, { Status } from './components/StatusLabel';
import AddCompanyButton from '@/app/components/AddCompanyButton';
import styles from './page.module.css';
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';
import ServerComponentCopy from './components/ServerComponentCopy';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-xl">Home page</h1>
        <AddCompanyButton />
      </main>
    </div>
  );
}
