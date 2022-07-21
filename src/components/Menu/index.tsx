import "./styles.css";

export default function Menu() {
  return (
    <section className="c-menu">
      <img
        height="96px"
        width="315px"
        className="menu__logo"
        src="assets/images/rick-and-morty-logo.webp"
        alt="Logo Rick And Morty"
      />
      <nav className="menu__items">
        <a
          className="menu__item"
          href="https://github.com/dalfonso75/rick-and-morty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </nav>
    </section>
  );
}
