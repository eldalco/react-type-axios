import "./styles.css";

export default function Loading():JSX.Element {
  return (
    <div className="c-loading">
      <img
        className="loading__image"
        src="assets/images/rick-loader.webp"
        alt="Rick drinking"
      />
      <p className="loading__text">Loading...</p>
    </div>
  );
}