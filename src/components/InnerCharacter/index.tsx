import { useEffect } from "react";
import useGetSingleCharacter from "../../hooks/useGetSingleCharacter";
import Loading from "../Loading";
import "./styles.css";

interface Props {
  characterId: number;
}

export default function InnerCharacter({ characterId }: Props) {
  const {
    isLoadingGetCharacter,
    hasErrorGetCharacter,
    dataGetCharacter,
    getACharacter,
  } = useGetSingleCharacter();
  useEffect(() => {
    getACharacter(characterId);
  }, [getACharacter, characterId]);
  return (
    <div className="c-inner-character">
      {!isLoadingGetCharacter && dataGetCharacter && (
        <>
          <section className="inner-character__image-status">
            <img
              className="inner-character__image"
              src={dataGetCharacter.image}
              alt={dataGetCharacter.name}
            />
            <div
              className={`card-character__status character-status__${dataGetCharacter.status}`}
            >
              <p className="card-character__status-text">
                {dataGetCharacter.status}
              </p>
            </div>
          </section>
          <section className="inner-character__content">
            <h1 className="inner-character__name">{dataGetCharacter.name}</h1>
            <p className="inner-character__attribute">
              species: <span>{dataGetCharacter.species}</span>
            </p>
            <p className="inner-character__attribute">
              gender: <span>{dataGetCharacter.gender}</span>
            </p>
            <p className="inner-character__attribute">
              origin: <span>{dataGetCharacter.origin.name}</span>
            </p>
            <p className="inner-character__attribute">
              location: <span>{dataGetCharacter.location.name}</span>
            </p>
          </section>
        </>
      )}
      {isLoadingGetCharacter && (
        <div className="inner-character__loading">
          <Loading />
        </div>
      )}
    </div>
  );
}
