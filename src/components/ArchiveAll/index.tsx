import { useEffect, useState } from "react";
import useGetAllCharacters from "../../Hooks/useGetAllCharacters";

import AdvancedSearch from "../AdvancedSearch";
import Characters from "../Characters";
import Loading from "../Loading";
import Paginated from "../Paginated";
import "./styles.css";

export default function ArchiveCharacters() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const { isLoadingGet, hasErrorGet, dataGet, get } =
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
      {/* {hasErrorGet && <Error />} */}
    </div>
  );
}
