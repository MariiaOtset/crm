import ActiveLabel from './components/ActiveLabel/ActiveLabel';
import NotActiveLabel from './components/NotActiveLabel/NotActiveLabel';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home page</h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not Active</NotActiveLabel>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
