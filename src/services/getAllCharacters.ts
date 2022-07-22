import axios from "axios";
import {GetDataResponse} from "../types"

const baseUrl:string = "https://rickandmortyapi.com/api/character";


const get = (page:number=1, name:string="", status:string="") => {

    const request = axios.get<GetDataResponse>(`${baseUrl}?page=${page}&name=${name}&status=${status}`);
    return request.then((response) => response.data);
};
  

export default { get };