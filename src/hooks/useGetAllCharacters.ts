import { useCallback, useState } from "react";
import getAllCharacters from "../services/getAllCharacters";


type Dta = {
    loadingGet: boolean,
    errorGet: null,
    dataGet: null | GetDataResponse,
}
type GetDataResponse = {
  data: [];
};

export default function useGetAllCharacters() {
  const [stateGet, setStateGet] = useState<Dta>({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback((page:number, name:string, status:string) => {
    setStateGet({...stateGet, loadingGet: true, errorGet: null });
    getAllCharacters
      .get(page, name, status)
      .then((data) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data.data,
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