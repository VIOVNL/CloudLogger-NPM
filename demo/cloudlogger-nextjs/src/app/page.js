import styles from "./page.module.css";
import LogButton from "./components/logButton";
export default function Home() {
  return (
    <main className={styles.main}>
      <LogButton />
    </main>
  );
}
