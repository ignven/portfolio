import "../styles.css";

const skils = [
  "html",
  "css",
  "javascript",
  "typescript",
  "reactjs",
  "git",
  "postman",
  "jira",
  "confluence",
  "imos",
  "autocad",
  "html",
  "css",
  "javascript",
  "typescript",
  "reactjs",
  "git",
  "postman",
  "jira",
  "confluence",
  "imos",
  "autocad",
  "html",
  "css",
  "javascript",
  "typescript",
  "reactjs",
  "git",
  "postman",
  "jira",
  "confluence",
  "imos",
  "autocad",
];

function Skils() {
  return (
    <div className="animation-container">
      <div className="skills__track">
        {[...skils, ...skils].map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  );
}

export default Skils;
