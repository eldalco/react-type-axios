import "./styles.css";
import Form from "../Form";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
export default function AdvancedSearch({ setName, setStatus, setPage }: Props) {
  return (
    <div className="c-advanced-search">
      <h2 className="advanced-search__text">advanced search</h2>
      <Form setName={setName} setStatus={setStatus} setPage={setPage}/>
      <img className="advanced-search__image" src="assets/images/pickle-rick.webp" alt="" />
    </div>
  );
}
