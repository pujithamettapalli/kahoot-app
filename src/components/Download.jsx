function Download() {
  return (
    <section className="download-banner">
      <div className="download-banner-inner">

        <div className="download-app-icon">
          K!
        </div>

        <div className="download-banner-text">
          <h2>
            Download the Kahoot! app for free and play across all your devices!
          </h2>
          <p>One app, unlimited fun</p>
        </div>

        <div className="download-stores">

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

export default Download;