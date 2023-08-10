import styles from "../page.module.css";

export default function q4() {
  return (
    <main className={styles.question}>
      <h1>
        Question 4: When would you choose to use Edge Functions, Serverless
        Functions, or Edge Middleware with Vercel?
      </h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <div style={{ marginLeft: 15 }}>
          <h3>Edge Functions</h3>
          <p style={{ marginTop: 5 }}>
            {" "}
            Edge functions allows the serverless function to be ran in the
            nearest geographical location from the client. Using Edge Functions
            can be useful if your website receives traffic from different parts
            of the world, as it reduces load times considerably.
          </p>
        </div>
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h3>Serverless functions</h3>
          <p style={{ marginTop: 5 }}>
            Serverless Functions are functions that are ran on the cloud only
            when requested and they are attached to an specific
            datacenter/server. Using Serverless Functions can be useful if your
            website receives traffic that is close to where your
            datacenter/server is located.
          </p>
        </div>
        <div style={{ marginRight: 15 }}>
          <h3>Edge Middleware</h3>
          <p style={{ marginTop: 5 }}>
            Edge Middleware allows you to ran Edge Functions before the request
            is completed. Edge Middleware is particularly useful if you need
            specific functions to be ran before the website finishes loading and
            using a datacenter/server geographically close. A good example of
            this could be running an authentication function to grant/deny
            access before information is actually displayed.
          </p>
        </div>
      </ul>
    </main>
  );
}
