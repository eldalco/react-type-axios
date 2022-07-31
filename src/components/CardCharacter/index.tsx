import {Character} from "../../types"
import "./styles.css";

interface Props {
  character: Character;
}
export default function CardCharacter({ character }: Props):JSX.Element {
  const { image, name, status, location, origin } = character;
  return (
    <article className="c-card-character">
      <section className="card-character__image-status">
        <img className="card-character__image" src={image} alt={name} />
        <div className={`card-character__status character-status__${status}`}>
          <p className="card-character__status-text">{status}</p>
        </div>
      </section>
      <section className="card-character__content">
        <h3 className="card-character__name">{name}</h3>
        <div className="card-character__attribute">
          <p className="card-character__attribute-key">Location:  </p>
          <p className="card-character__attribute-value">{location.name}</p>
        </div>
        <div className="card-character__attribute">
          <p className="card-character__attribute-key">Origin: </p>
          <p className="card-character__attribute-value">{origin.name}</p>
        </div>
      </section>
    </article>
  );
}
