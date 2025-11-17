import "../styles.css";

interface CardProps {
  title: string;
  stack: string;
  description: string;
  image: string;
  link: string;
}

function Card({ title, stack, description, image, link }: CardProps) {
  return (
    <div className="card__container">
      <img src={image} alt={title} onClick={() => window.open(link)} />
      <div className="card__title">
        <h2>{title}</h2>
        <h4>{stack}</h4>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default Card;
