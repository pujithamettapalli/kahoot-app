function Footer() {
  return (
    <footer className="kahoot-footer">

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-column">
          <h4>About</h4>
          <a href="#contact">Contact us</a>
          <a href="#company">Company</a>
          <a href="#careers">Careers</a>
          <a href="#news">News</a>
          <a href="#press">Press</a>
          <a href="#events">Events</a>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <a href="#business">For Businesses</a>
          <a href="#actimo">Actimo</a>
          <a href="#motimate">Motimate</a>
          <a href="#schools">For Schools</a>
          <a href="#whiteboard">Whiteboard.fi</a>
          <a href="#higher-education">For Higher Education</a>
          <a href="#students">For Students</a>
          <a href="#family">For Family and Friends</a>
          <a href="#drops">Drops</a>
          <a href="#kids">For Kids and Parents</a>
          <a href="#communities">For Communities</a>
          <a href="#gift-card">Buy Kahoot! gift card</a>
          <a href="#redeem">Redeem Kahoot! gift card</a>
          <a href="#accesspass">Kahoot!+ AccessPass</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#help">Help Center ↗</a>
          <a href="#blog">Blog</a>
          <a href="#webinars">Webinars</a>
          <a href="#safety">Safety center</a>
          <a href="#guides">Guides and resources</a>
          <a href="#certified">Kahoot! Certified</a>
          <a href="#community">Educator Community</a>
          <a href="#accessibility">Inclusivity and accessibility</a>
        </div>

        <div className="footer-column">
          <h4>Legal and Compliance</h4>
          <a href="#terms">Terms and Conditions ↗</a>
          <a href="#privacy">Privacy Notice ↗</a>
          <a href="#trust">Trust Center ↗</a>
          <a href="#acceptable">Acceptable Use Policy ↗</a>
          <a href="#inclusion">
            Inclusion and Accessibility Policy ↗
          </a>
          <a href="#cookies">Cookie Notice ↗</a>
          <a href="#preferences">Cookies preference center</a>
        </div>

      </div>

      {/* Social + Partners */}
      <div className="footer-social-row">

        <div className="social-section">
          <strong>Follow us</strong>

          <a href="#x">
            <span className="social-icon x-icon">X</span>
            X
          </a>

          <a href="#facebook">
            <span className="social-icon facebook-icon">f</span>
            Facebook
          </a>

          <a href="#linkedin">
            <span className="social-icon linkedin-icon">in</span>
            LinkedIn
          </a>

          <a href="#instagram">
            <span className="social-icon instagram-icon">◎</span>
            Instagram
          </a>

          <a href="#tiktok">
            <span className="social-icon tiktok-icon">♪</span>
            TikTok
          </a>
        </div>

        <div className="partner-section">
          <div className="partner-box">
            <small>Microsoft</small>
            <span>Partner</span>
          </div>

          <div className="partner-box">
            <small>Partner</small>
            <span>Google for Education</span>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>Copyright © 2026 Kahoot! All Rights Reserved.</p>

        <div className="footer-apps">
          <div className="app-badge"> Mac App Store</div>
          <div className="app-badge"> App Store</div>
          <div className="app-badge">▶ Google Play</div>
          <div className="app-badge">▣ AppGallery</div>
          <div className="kahoot-k">K!</div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;