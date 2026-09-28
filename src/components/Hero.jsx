import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Kahoot! app: quiz and trivia
          game for iPhone and Android
        </h1>

        <p>
          Create quiz games, host trivia nights, and learn something new
          with the Kahoot! app. Make your lessons, presentations or
          gatherings more engaging!
        </p>

        <div className="kahoot-plus">

          <h3>
            Kahoot!+ the best way to learn and play.
          </h3>

          <p>
            Get Kahoot!+ from $3/mo. Save 20%. Offer ends September 30.
          </p>

          <button>
            Get started
          </button>

        </div>

      </div>

      <div className="hero-visual">
        <img
          src={heroImage}
          alt="Kahoot! mobile app"
        />
      </div>

    </section>
  );
}

export default Hero;