import { useState } from "react";
import CardCharacter from "../CardCharacter";
import Modal from "../Modal";
import InnerCharacter from "../InnerCharacter";

import "./styles.css";

export default function Characters({ characters }) {
  const [characterId, setCharacterId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const onOpen = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <ul className="c-characters">
        {characters?.map((character) => (
          <li
            className="characters__character"
            key={character.id}
            onClick={() => {
              setCharacterId(character.id);
              onOpen();
            }}
          >
            <CardCharacter character={character} />
          </li>
        ))}
      </ul>
      <Modal show={showModal} onClose={onClose}>
        <InnerCharacter characterId={characterId} />
      </Modal>
    </>
  );
}
