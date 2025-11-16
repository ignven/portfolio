import Card from "../Card/Card";
import "../styles.css";
import dokvita from "../../assets/dokvita.webp";
import pazinkdarza from "../../assets/pazinkdarza.webp";
import svenheim from "../../assets/svenheim.webp";

const projectArray = [
  {
    title: "Decor Code Generator",
    stack: "REACT + TS + CSS",
    description: "Decor code generator",
    image: svenheim,
    link: "https://my.svenheim.no/ccg/",
  },
  {
    title: "Dokvita",
    stack: "REACT + REDUX + Tailwind CSS",
    description: "Responsive representative website for medical auditor",
    image: dokvita,
    link: "https://www.dokvita.lt/",
  },
  {
    title: "Pazink Darza",
    stack: "VITE + REACT + TS + SCSS",
    description: "Personal project for fun",
    image: pazinkdarza,
    link: "https://pazinkdarza.vercel.app",
  },
];

function Mid() {
  return (
    <div className="mid__container">
      {projectArray.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          stack={project.stack}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Mid;
