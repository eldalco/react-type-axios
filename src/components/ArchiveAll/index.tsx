import { useEffect, useState } from "react";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";
import AdvancedSearch from "../AdvancedSearch";
import Characters from "../Characters";
import Loading from "../Loading";
import Paginated from "../Paginated";
import "./styles.css";

export default function ArchiveCharacters():JSX.Element {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { isLoadingGet, dataGet, get } =
  useGetAllCharacters();

  useEffect(() => {
    get(page, name, status);
  }, [get, page, name, status]);

  return (
    <div className="c-archive-characters">
      <AdvancedSearch setName={setName} setStatus={setStatus} setPage={setPage} />
      {!isLoadingGet && <Characters characters={dataGet?.results} />}
      {isLoadingGet && <Loading />}
      {!isLoadingGet && (
        <Paginated infoPage={dataGet?.info} page={page} setPage={setPage} />
      )}
    </div>
  );
}
