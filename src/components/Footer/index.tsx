import "./styles.css";
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="c-footer">
      <div className="footer__content">
        <a
          className="menu__item"
          href="https://github.com/eldalco/react-type-axios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={50}/>
        </a>
      </div>
      <div className="box__image">
        <img className="image__footer" src="assets/images/portal-weapon.webp" alt="Rick" />
      </div>
    </div>
  );
}
