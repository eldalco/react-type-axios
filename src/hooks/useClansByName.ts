import { useCallback, useContext, useState } from "react";
import clansByName from "../services/clansByName";


type Dta = {
    loadingGet: boolean,
    errorGet: null,
    dataGet: null,
}

export default function useClansByName() {
  const [stateGet, setStateGet] = useState<Dta>({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback((name: string) => {
    setStateGet({...stateGet, loadingGet: true, errorGet: null });
    clansByName
      .get(name)
      .then((data) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data.body,
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