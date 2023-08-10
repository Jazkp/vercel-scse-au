import styles from "../page.module.css";

export default function q3() {
  return (
    <main className={styles.question}>
      <h1>
        Question 3: How would you compare Next.js with another frontend
        framework?
      </h1>
      <p style={{ fontSize: "15px" }}>
        Bootstrap and Next.js are two popular tools for building web
        applications. <br />
        <br />
        Components and utilities are pre-built in Bootstrap while you can
        customize based on your needs with Next.js <br />
        <br />
        Since Bootstrap is pre-built, it doesn't allow customization and loses
        performance-wise compared to Next.js <br />
        <br />
        Next.js is built thinking about SEO, while Bootstrap doesn't have such
        capability and is not SEO-friendly. <br />
        <br />
        Next.js also allows for server-side rendering and built-in routing;
        Bootstrap also allows this but is not as simple to code. <br />
        <br />
        In summary, Bootstrap is an easy to learn framework that is more
        suitable for begginers that want pre-built components, with the tradeoff
        of not being so customizable and losing on powerful features. Next.js on
        the other hand proves more of a challenge when learning but allows
        developers to maximize website creation by increasing performance and
        SEO.
      </p>
    </main>
  );
}
