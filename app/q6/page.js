import styles from "../page.module.css";

export default function q1() {
  return (
    <main className={styles.question}>
      <h1>Question 6: Redirecting /blog path, SE index</h1>
      <div
        style={{
          justifyContent: "center",
          margin: 50,
          borderStyle: "solid",
          borderRadius: "9px",
          padding: "10px",
          borderColor: "#f1d302",
        }}
      >
        <code>
          Hi Mr/Ms Customer, <br />
          <br />
          I understand how frustrating and time consuming this situation is.
          Rest assured that I will do my best to get this working ASAP.
          <br />
          <br />
          I can provide you with the details on how to fix the issues you
          mentioned, however, please note that as every build is different, some
          content must be tailored to meet your organization needs.
          <br />
          <br />
          In regards to the issue with redirecting the <b>/blog</b> path to
          another webiste, please find the solution below: <br />
          <br />
          Create an async redirect function with the following properties in
          your next.config.js file:
          <br />
          source: {"/blog"},
          <br />
          destination: {"[new destination here]"},
          <br />
          permanent: true/false
          <br />
          <br />
          You can find the complete code snippet and all the possible properties
          in the following KB:{" "}
          <a
            href="https://nextjs.org/docs/app/api-reference/next-config-js/redirects"
            target="_blank"
          >
            <b>Next.js | redirects</b>
          </a>
          <br />
          <br />
          In regards to the issue with not indexing by Search Engines the
          project, please find the solution below: <br />
          <br />
          Create a meta tag with the following information:{" "}
          {"<meta name='robots' content='noindex'/>"}
          <br />
          {"It's"} important to note that modifying the meta tag yields a better
          result than blocking the page from robots.txt. <br />
          <br />
          You can find more information in the following KB:{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/block-indexing"
            target="_blank"
          >
            <b>Google Search Central | Block Search indexing with noindex</b>
          </a>
          <br />
          <br />I hope this information was useful. {"Don't"} hestitate to reach
          back to me if any further questions arise.
          <br />
          <br />
          Kindest Regards,
          <br />
          <br />
          Jorge p <br />
          Customer Success Engineer
        </code>
      </div>
      <p
        style={{
          margin: 20,
          fontSize: "18px",
        }}
      >
        Taking a look at the community posts at Vercel and other social
        platforms like Reddit, it seems like syntax are the most common issues
        people face when using Vercel / Next.js. I believe that the new
        Pages/App routing division will also cause some confusion among users.
        <br />I think the best way to prepare to overcome such common questions
        is by creating a FAQ but also making documentation easily readable and
        easy to understand for newbies. <br />
        <br />
        <b>
          I liked the exercise but formatting text questions using JSX is very
          time consuming. I tried doing my best given the allocated time,
          hopefully it {"doesn't"} look too bad!{" "}
        </b>
      </p>
    </main>
  );
}
