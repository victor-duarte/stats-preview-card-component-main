import "./index.scss";

function Card({ author, description, image, title, url }) {
  return (
    <div className="card">
      <div className="card__asset">
        <picture>
          <source srcSet={url} media="(min-width: 1440px)" />
          <img src={url} alt={image.alt_text} />
        </picture>
      </div>
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <dl className="card__stats">
          <dt>10k+</dt>
          <dd>companies</dd>
          <dt>314</dt>
          <dd>templates</dd>
          <dt>12M+</dt>
          <dd>queries</dd>
        </dl>
      </div>
    </div>
  );
}

export default Card;
