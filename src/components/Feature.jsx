function Feature({ title, heading, description, image, reverse }) {
  return (
    <section className={`feature ${reverse ? "feature-reverse" : ""}`}>
      
      <div className="feature-image">
        <img src={image} alt={heading} />
      </div>

      <div className="feature-content">
        <h2>
          <span className="feature-title">{title}:</span>{" "}
          {heading}
        </h2>

        <p>{description}</p>
      </div>

    </section>
  );
}

export default Feature;