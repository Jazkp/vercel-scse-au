import styles from "../page.module.css";

export default function q2() {
  return (
    <main className={styles.question}>
      <h1>
        Question 2: Describe how you solved a challenge or technical issue that
        you faced in a previous role (preferably in a previous support role).
        How did you determine that your solution was successful?
      </h1>
      <p style={{ fontSize: "15px" }}>
        While I was working for NetApp, I received a ticket from Apple with a P1
        flag. No more than one of their datacenters was down! You could imagine
        how immediate and comprehensive my support needed to be.
        <br />
        <br />
        After briefly panicking, I gathered myself and started determining the
        root cause of such event. There were concepts and commands that I didn't
        understand but with great support from L3 and exhaustive Confluence
        research I was able to fix the issue.
        <br />
        <br />I determined that my solution was successful because I personally
        made sure that was the case. During our conversation, I jumped to
        several Zoom meetings and through a couple of Hypervisors I re-tested my
        solution over and over in every cluster to make sure everything was
        smooth. It was a lifetime experience.
      </p>
    </main>
  );
}
