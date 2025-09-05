// app/page.jsx
export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="nav-wrap">
          <div className="brand">
            <img src="/popin-logo.png" alt="PopIn logo" />
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#explore">Explore</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
            <a className="cta" href="https://app.letspopin.com/e/1287" target="_blank">PopIn Now</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" role="region" aria-label="Hero">
        <svg className="bg-heart left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)" />
        </svg>
        <svg className="bg-heart right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)" />
        </svg>

        <div className="hero-wrap">
          <svg className="sticker chat" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="14" width="70" height="46" rx="12" fill="#FF8C8C"/>
            <rect x="16" y="20" width="58" height="34" rx="9" fill="#F2F2F2"/>
            <circle cx="34" cy="37" r="4.5" fill="#BDBDBD"/>
            <circle cx="48" cy="37" r="4.5" fill="#BDBDBD"/>
            <circle cx="62" cy="37" r="4.5" fill="#BDBDBD"/>
            <path d="M28 60l10-8h12l-8 8H28Z" fill="#FF8C8C"/>
          </svg>
          <svg className="sticker bulb" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 12a24 24 0 0 0-12 45c2 2 3 5 3 7h18c0-2 1-5 3-7a24 24 0 0 0-12-45Z" fill="#F2F2F2" stroke="#FF8C8C" strokeWidth="4"/>
            <rect x="39" y="64" width="18" height="10" rx="4" fill="#FF8C8C"/>
          </svg>

          <h1 className="headline">
            Make<br /><span className="underline">Meaningful</span><br />Connections
          </h1>
          <p className="sub">PopIn transforms networking by effortlessly connecting you with the right people based on mutual needs and offerings, making every interaction meaningful.</p>
          <a className="cta" href="https://app.letspopin.com/e/1287" target="_blank">PopIn Now</a>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="section" id="explore" aria-label="Explore">
        <div className="features">
          <article className="feature-card">
            <div className="imgwrap">
              <img src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1400&auto=format&fit=crop" alt="Workout buddies" />
            </div>
            <div className="body">
              <h3>Find Like Minded Workout Buddies</h3>
              <button className="btn-mini">Explore</button>
            </div>
          </article>

          <article className="feature-card">
            <div className="imgwrap">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Friends hanging out together" />
            </div>
            <div className="body">
              <h3>Make New Friends At Your Local Bar</h3>
              <button className="btn-mini">Explore</button>
            </div>
          </article>

          <article className="feature-card">
            <div className="imgwrap">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop" alt="Internships" />
            </div>
            <div className="body">
              <h3>Seek Marketing Internships</h3>
              <button className="btn-mini">Explore</button>
            </div>
          </article>
        </div>

        <div className="center mt-20">
          <a className="cta" href="https://app.letspopin.com/e/1287" target="_blank">PopIn Now</a>
        </div>
      </section>

      {/* WHAT'S POPIN */}
      <section className="section" id="about" aria-label="What is PopIn">
        <h2 className="whats-title">What’s <span className="title-underline">PopIn?</span></h2>

        <svg className="wh-heart h1" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h2" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h3" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h4" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h5" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h6" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>
        <svg className="wh-heart h7" viewBox="0 0 200 200"><path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)"/></svg>

        <div className="whats">
          <svg className="whats-bg" viewBox="0 0 1100 1100" preserveAspectRatio="none">
            <path className="whats-path" d="M820 500 C 600 540, 480 640, 320 680" />
            <path className="whats-path" d="M320 900 C 540 960, 700 1040, 900 1080" />
          </svg>

          <div className="whats-item">
            <div className="whats-text">
              <h4><span className="hash">1#</span>Find the Perfect Connections</h4>
              <p>Why spend years to make connections? PopIn focuses on purposeful connections, matching you with individuals who align with your goals—whether you’re attending a conference or at a social event. We help you make an introduction faster.</p>
            </div>
            <div className="whats-img">
              <img src="/girl1.png" alt="Perfect matches" />
            </div>
          </div>

          <div className="whats-item reverse">
            <div className="whats-img">
              <img src="/girl2.png" alt="Anytime anywhere" />
            </div>
            <div className="whats-text">
              <h4><span className="hash">2#</span>Match Anytime, Anywhere</h4>
              <p>With PopIn, you’re always connected with like-minded individuals wherever you go. Use our smart filters to tune your preferences and let meaningful conversations spark as you go about your day.</p>
            </div>
          </div>

          <div className="whats-item">
            <div className="whats-text">
              <h4><span className="hash">3#</span>Identifying Collaboration Opportunities</h4>
              <p>Match your connections to collaborative opportunities—be it a business partnership, a research study, or a new team. Save time, meet great people, and start creating value together.</p>
            </div>
            <div className="whats-img">
              <img src="/girl3.png" alt="Collaboration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
