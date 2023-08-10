import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Created by Jorge Palma</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2>Vercel Assessment</h2>
      </div>

      <div className={styles.grid}>
        <a href="\q1" className={styles.card} rel="noopener noreferrer">
          <h2>Q1</h2>
          <p>What do you want to learn or do more at work?</p>
        </a>

        <a href="\q2" className={styles.card} rel="noopener noreferrer">
          <h2>Q2</h2>
          <p>Solving a technical issue in my previous role</p>
        </a>

        <a href="\q3" className={styles.card} rel="noopener noreferrer">
          <h2>Q3</h2>
          <p>Comparing Next.js with other frameworks</p>
        </a>

        <a href="\q4" className={styles.card} rel="noopener noreferrer">
          <h2>Q4</h2>
          <p>Edge, serverless or Middleware</p>
        </a>
        <a className={styles.card} rel="noopener noreferrer" href="\q5">
          <h2>Q5</h2>
          <p>Customer requesting help</p>
        </a>
        <a className={styles.card} href="\q6" rel="noopener noreferrer">
          <h2>Q6</h2>
          <p>Role play</p>
        </a>
      </div>
    </main>
  );
}
