import "./styles.css";

export default function Footer() {
  return (
    <div className="c-footer">
      <img
        className="footer__image"
        src="assets/images/morty.webp"
        alt="Morty"
      />
      <div className="footer__content">
        <a
          className="menu__item"
          href="https://github.com/dalfonso75/rick-and-morty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <p className="footer__copyright">
          Technical test carried out by Deiver Alfonso for Toughbuilt. License
          MIT
        </p>
      </div>
      <img className="footer__image" src="assets/images/rick.webp" alt="Rick" />
    </div>
  );
}
