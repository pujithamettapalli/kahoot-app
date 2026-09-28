import kidsImage from "../assets/kids.png";

function Kids() {
  return (
    <section className="kids-banner">

      <div className="kids-banner-inner">

        <div className="kids-app-icon">
          <img src={kidsImage} alt="Kahoot! Kids" />
        </div>

        <div className="kids-banner-text">
          <h2>
            Download the Kids version of the Kahoot! app.
          </h2>

          <p>Kahoot! Kids: Learn and Play</p>
        </div>

        <div className="kids-stores">

          <button className="app-store">
            <span className="store-symbol">●</span>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </button>

          <button className="google-store">
            <span className="store-symbol">▶</span>
            <span>
              <small>GET IT ON</small>
              Google Play
            </span>
          </button>

          <button className="chrome-store">
            <span className="store-symbol">🌐</span>
            <span>
              <small>add to</small>
              chromebook
            </span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Kids;