import AddCompanyButton from '@/app/components/AddCompanyButton';
import styles from './page.module.css';

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
