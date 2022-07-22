import { useCallback, useState } from "react";
import getSingleCharacter from "../services/getSingleCharacter";
import {Character} from "../types"

type Dta = {
  loadingGet: boolean,
  errorGet: null,
  dataGet: Character | null;
}

export default function useGetSingleCharacter() {
  
  const [stateGetCharacter, setStateGetCharacter] = useState<Dta>({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const getACharacter = useCallback((id:number) => {
    setStateGetCharacter({ ...stateGetCharacter, loadingGet: true, errorGet: null });
    getSingleCharacter
      .get(id)
      .then((data) => {
        setStateGetCharacter({
          loadingGet: false,
          errorGet: null,
          dataGet: data,
        });
      })
      .catch((err) => {
        setStateGetCharacter({
          loadingGet: false,
          errorGet: err,
          dataGet: null,
        });
      });
  }, []);

  return {
    isLoadingGetCharacter: stateGetCharacter.loadingGet,
    hasErrorGetCharacter: stateGetCharacter.errorGet,
    dataGetCharacter: stateGetCharacter.dataGet,
    getACharacter,
  };
}