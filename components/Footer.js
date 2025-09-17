export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Swoosh Image */}
        <div className="footer-swoosh">
          <img src="/swoosh.png" alt="swoosh decoration" />
        </div>

        {/* Main Content */}
        <div className="footer-content">
          <h2 className="footer-title">Let's PopIn</h2>
          <p className="footer-subtitle">
            Forget about your networking woes and dive into a world of effortless connections. It's free, fun, and fabulously social!
          </p>
          <a
            className="footer-cta"
            href="https://app.letspopin.com/e/1287"
            target="_blank"
            rel="noopener noreferrer"
          >
            PopIn Now
          </a>
        </div>

        {/* Footer Links and Social */}
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-copyright">© 2025 PopIn</span>
          </div>
          
          <div className="footer-center">
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#explore">Explore</a>
              <a href="#blog">Blog</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          <div className="footer-right">
            <div className="footer-social">
              {/* Instagram */}
              <a href="https://www.instagram.com/joinpopin" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a href="http://x.com/letspopin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/LetsPopIn/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="http://linkedin.com/company/letspopin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}