// app/page.jsx
import SushiConveyor from '../components/SushiConveyor';

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
  {/* Background Hearts */}
  <svg className="bg-heart left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)" />
  </svg>
  <svg className="bg-heart right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 185C100 185 10 120 10 70A45 45 0 0 1 100 55A45 45 0 0 1 190 70c0 50-90 115-90 115Z" fill="var(--heart)" />
  </svg>
  {/* Chat Sticker - FIXED STYLE */}
  <svg className="sticker chat" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="90" height="60" rx="16" fill="#FF7B7B" stroke="#FF6B6B" strokeWidth="2"/>
    <rect x="22" y="27" width="76" height="46" rx="12" fill="#ffffff"/>
    <circle cx="42" cy="50" r="6" fill="#FF7B7B"/>
    <circle cx="60" cy="50" r="6" fill="#FF7B7B"/>
    <circle cx="78" cy="50" r="6" fill="#FF7B7B"/>
    <path d="M35 80l15-12h20l-12 12H35Z" fill="#FF7B7B"/>
  </svg>
  
  {/* Bulb Sticker - FIXED STYLE */}
  <svg className="sticker bulb" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="45" r="25" fill="#ffffff" stroke="#FF7B7B" strokeWidth="3"/>
    <path d="M45 65h30v8a4 4 0 0 1-4 4h-22a4 4 0 0 1-4-4v-8z" fill="#FF7B7B"/>
    <path d="M52 77h16v4a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-4z" fill="#FF6B6B"/>
    <circle cx="60" cy="45" r="15" fill="#FFF9E6"/>
    <path d="M50 35l20 0M55 40l10 0M52 45l16 0" stroke="#FF7B7B" strokeWidth="2" strokeLinecap="round"/>
  </svg>

  <div className="hero-wrap">
    <h1 className="headline">
  Make<br />
  <span className="underline">Meaningful</span><br /><span className="underline">Connections</span>
</h1>
    <p className="sub">
      PopIn transforms networking by effortlessly connecting you with the right people based 
      on mutual needs and offerings, making every interaction meaningful.
    </p>
    <a className="cta" href="https://app.letspopin.com/e/1287" target="_blank">PopIn Now</a>
  </div>
</section>

      {/* FEATURE CARDS */}
     <section className="section" id="explore" aria-label="Explore">
      <SushiConveyor />
  
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
