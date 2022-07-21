import axios from "axios";

// const baseUrl:string = "https://api.clashofclans.com/v1/clans/";
// const token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxZjI2ZmQ0LTk5MmMtNGY3OC1hOWM2LTE0YWVkZDU5YjlkZiIsImlhdCI6MTY1ODE5MjY1Niwic3ViIjoiZGV2ZWxvcGVyLzc2NzJiNzBiLWEzYjUtZGQ5ZC01NjZmLTUzODYwZTY1OWM1NCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1LjE3My40LjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.WMdjqTrMhAMKN9BRx_RwK9mNCZDs4IxNeQlvfykdGWCq6AfGK2sYCr1ocio1q1KUHmglon02pzrN9VTVDjuF2A";
const baseUrl:string = "https://rickandmortyapi.com/api/character";

type GetResponse = {
  data: [];
};

const get = (page:number=1, name:string="", status:string="") => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const request = axios.get<GetResponse>(`${baseUrl}?page=${page}&name=${name}&status=${status}`);
    return request.then((response) => response);
};
  

export default { get };