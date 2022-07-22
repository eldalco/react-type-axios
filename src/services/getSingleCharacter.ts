import axios from "axios";
import {Character} from "../types"

const baseUrl:string = "https://rickandmortyapi.com/api/character";

const get = (id:number) => {
  const request = axios.get<Character>(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { get };