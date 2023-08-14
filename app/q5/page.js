import styles from "../page.module.css";

export default function q1() {
  return (
    <main className={styles.question}>
      <h1>
        Question 5: Imagine a customer writes in requesting help with a build
        issue on a framework or technology that {"you've"} not seen before. How
        would you go about troubleshooting this and what questions would you ask
        the customer to understand the situation better?
      </h1>
      <p style={{ margin: 20, fontSize: "18px" }}>
        First of all, being honest is key. I will be upfront that my knowledge
        in the framework or technology is not the best but, regardless of that,
        I will give my 101% to assist, whether my assistance is involving other
        parties, searching through KBs or learning the two of us along the way.{" "}
        <br />
        <br />
        That being said, I would reply to the customer somewhere along these
        lines:
      </p>
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
          Hello Mr/Ms Customer,
          <br />
          <br />
          Thank you for being part of Vercel.
          <br />
          <br />
          My name is Jorge P. and {"I'll"} be your Support Engineer for this
          case. In order to provide you with the best support possible, please
          answer the following questions as best as you can:
          <br />
          Please provide a brief description of the issue.
          <br />
          When did you first noticed the issue?
          <br />
          Has the app/website worked before the issue arise?
          <br />
          What type of environment are you running the build on? (OS,
          Programming Language, Network) - Have you tried using different
          environment settings?
          <br />
          Are you getting any specific error message/s? Please provide
          screenshots if so.
          <br />
          What is the best time and method to contact you?
          <br />
          <br />
          {"Don't"} hesitate to contact me if you have trouble gathering any of
          the information above, I can also jump on a meeting if that suits you
          better.
          <br />
          <br />
          Kindest Regards,
          <br />
          <br />
          Jorge P.
          <br />
          Customer Success Engineer
        </code>
      </div>
    </main>
  );
}
