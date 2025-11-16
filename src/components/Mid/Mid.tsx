import Card from "../Card/Card";
import "../styles.css";
import dokvita from "../../assets/dokvita.webp";
import pazinkdarza from "../../assets/pazinkdarza.webp";

const projectArray = [
  {
    title: "Dokvita",
    stack: "REACT + REDUX + Tailwind CSS",
    description: "Responsive representative website for medical auditor",
    image: dokvita,
    link: "https://www.dokvita.lt/",
  },
  {
    title: "PAZINKDARZA",
    stack: "VITE + REACT + TS + SCSS",
    description: "Personal project for fun",
    image: pazinkdarza,
    link: "http://www.pazinkdarza.lt/",
  },
  {
    title: "Dokvita",
    stack: "REACT + REDUX + Tailwind CSS",
    description:
      "Responsive & optimized representative website for medical auditor",
    image: dokvita,
    link: "https://www.dokvita.lt/",
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
