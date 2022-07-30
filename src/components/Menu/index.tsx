import "./styles.css";
import { FaGithubSquare } from 'react-icons/fa';

export default function Menu():JSX.Element {
  return (
    <section className="c-menu">
      <img
        className="menu__logo"
        src="assets/images/RaM-logo.webp"
        alt="Logo Rick And Morty"
      />
      <nav className="menu__items">
        <a
          className="menu__item"
          href="https://github.com/eldalco/react-type-axios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={50}/>
        </a>
      </nav>
    </section>
  );
}
