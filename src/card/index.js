import "./index.css";

function Card() {
  return (
    <div className="card">
      <img src="./" alt="" />
      <div className="card__body">
        <h2 className="title">
          Get <span>insights</span> that help your business grow.
        </h2>
        <p className="card__description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
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
