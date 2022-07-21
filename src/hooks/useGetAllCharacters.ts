import { useCallback, useState } from "react";
import getAllCharacters from "../services/getAllCharacters";


type Dta = {
    loadingGet: boolean,
    errorGet: null,
    dataGet: null | [],
}
type GetDataResponse = {
  results: [];
};

export default function useGetAllCharacters() {
  const [stateGet, setStateGet] = useState<Dta>({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback(() => {
    setStateGet({...stateGet, loadingGet: true, errorGet: null });
    getAllCharacters
      .get()
      .then((data: GetDataResponse) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data.results,
        });
      })
      .catch((err) => {
        setStateGet({ loadingGet: false, errorGet: err, dataGet: null });
      });
  }, []);  

  return {
    isLoadingGet: stateGet.loadingGet,
    hasErrorGet: stateGet.errorGet,
    dataGet: stateGet.dataGet,
    successGet: Boolean(stateGet.dataGet),
    get    
    
  };
}