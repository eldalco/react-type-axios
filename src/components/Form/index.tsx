import React, { useRef } from "react";
import "./styles.css";

interface Props {
  setPage: any;
  setName: any;
  setStatus: any;
}

export default function Form({ setName, setStatus, setPage }:Props) {
  const inputName = useRef<HTMLInputElement>(null);
  const selectStatus = useRef<HTMLSelectElement>(null);
  const onChangeSearch = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    evt.preventDefault();
    const name = inputName.current?.value;
    const status = selectStatus.current?.value;
    setName(name);
    setStatus(status);
    setPage(1);
  };
  return (
    <form className="c-form">
      <input
        ref={inputName}
        onChange={onChangeSearch}
        className="form__input"
        type="text"
        placeholder="Character's name..."
      />
      <select
        ref={selectStatus}
        onChange={onChangeSearch}
        className="form__select"
        name="select-status"
      >
        <option value="" disabled >Select status</option>
        <option value="">All</option>
        <option value="Alive">ALIVE</option>
        <option value="Dead">DEAD</option>
        <option value="unknown">UNKNOWN</option>
      </select>
    </form>
  );
}
