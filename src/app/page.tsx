import StatusLabel, { Status } from './components/StatusLabel/StatusLabel';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home page</h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
