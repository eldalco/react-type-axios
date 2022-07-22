import "./styles.css";
import {Info} from "../../types"

interface Props {
  infoPage?: Info;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Paginated({ infoPage, page, setPage }: Props):JSX.Element {
  const onChangePage = (next:number) => {
    if (!infoPage?.prev && page + next <= 0) return;
    if (!infoPage?.next && page + next >= 20) return;

    setPage(page + next);
  };

  return (
    <div className="c-paginated">
      <button className="paginated__button" onClick={() => onChangePage(-1)}>
        <img
          className="paginated__button-image"
          src="assets/images/arrow-prev.webp"
          alt="arrow Next"
        />
      </button>
      <p className="paginated__page">{page}</p>
      <button className="paginated__button" onClick={() => onChangePage(1)}>
        <img
          className="paginated__button-image"
          src="assets/images/arrow.webp"
          alt="arrow Next"
        />
      </button>
    </div>
  );
}
