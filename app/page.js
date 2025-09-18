// app/page.jsx
import SushiConveyor from "../components/SushiConveyor";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer"; // Add this import

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
            <a href="#learnmore">Learn More</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="cta"
            href="https://app.letspopin.com/e/1287"
            target="_blank"
          >
            PopIn Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" role="region" aria-label="Hero">
        {/* Background Network Icons */}
        <img className="bg-heart left" src="/networking.png" alt="network" />
        <img className="bg-heart right" src="/networking.png" alt="network" />
        {/* Chat Sticker */}
        <img className="sticker chat" src="/message-icon.png" alt="chat" />
        {/* Lightbulb Sticker */}
        <img
          className="sticker bulb"
          src="/lightbulb-icon.png"
          alt="lightbulb"
        />

        <div className="hero-wrap">
          <h1 className="headline">
            Make
            <br />
            <span className="underline-wrap">
              <span>Meaningful</span>
              <svg
                className="underline-svg"
                viewBox="0 0 100 10"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                {/* hand-drawn-ish brush stroke */}
                <path
                  d="M2 7 Q 25 2, 50 6 T 98 6"
                  fill="none"
                  stroke="#FF6F61"
                  strokeWidth="2" // Updated to thinner stroke
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <br />
            Connections
          </h1>

          <p className="sub">
            PopIn transforms networking by effortlessly connecting you with the
            right people based on mutual needs and offerings, making every
            interaction meaningful.
          </p>
          <a
            className="cta"
            href="https://app.letspopin.com/e/1287"
            target="_blank"
          >
            PopIn Now
          </a>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="section" id="learnmore" aria-label="Learn More">
        <SushiConveyor />
        <div className="center mt-20">
          <a
            className="cta"
            href="https://app.letspopin.com/e/1287"
            target="_blank"
          >
            PopIn Now
          </a>
        </div>
      </section>

      {/* WHAT'S POPIN */}
      <section className="section" id="about" aria-label="What is PopIn">
        <h2 className="whats-title">
          What's <span className="title-underline">PopIn?</span>
        </h2>

        <img className="wh-heart h1" src="/balloon.png" alt="network" />
        <img className="wh-heart h2" src="/balloon.png" alt="network" />
        <img className="balloon-right" src="/balloon.png" alt="balloon decoration" />  
        <img className="balloon-left" src="/balloon.png" alt="balloon decoration" /> 

        <div className="whats">
          <svg
            className="whats-bg"
            viewBox="0 0 1100 1100"
            preserveAspectRatio="none"
          >
            <path
              className="whats-path"
              d="M820 500 C 600 540, 480 640, 320 680"
            />
            <path
              className="whats-path"
              d="M320 900 C 540 960, 700 1040, 900 1080"
            />
          </svg>

          <div className="whats-item">
            <div className="whats-text">
              <h4>
                <span className="hash">1#</span>Find the Perfect Connections
              </h4>
              <p>
                Why spend years to make connections? PopIn focuses on purposeful
                connections, matching you with individuals who align with your
                goals—whether you're attending a conference or at a social
                event. We help you make an introduction faster.
              </p>
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
              <h4>
                <span className="hash">2#</span>Match Anytime, Anywhere
              </h4>
              <p>
                With PopIn, you're always connected with like-minded individuals
                wherever you go. Use our smart filters to tune your preferences
                and let meaningful conversations spark as you go about your day.
              </p>
            </div>
            {/* Second dotted line */}
            <img className="dotted-line second" src="/dotted-line.png" alt="" />
          </div>

          <div className="whats-item">
            <div className="whats-text">
              <h4>
                <span className="hash">3#</span>Identifying Collaboration
                Opportunities
              </h4>
              <p>
                Match your connections to collaborative opportunities—be it a
                business partnership, a research study, or a new team. Save
                time, meet great people, and start creating value together.
              </p>
            </div>
            <div className="whats-img">
              <img src="/girl3.png" alt="Collaboration" />
            </div>
          </div>
        </div>

        {/* GRID BOXES SECTION */}
        <div className="grid-boxes-section">
          <div className="grid-boxes-container">
            <div
              className="grid-box image-box"
              style={{ backgroundImage: "url(/handshake.png)" }}
            ></div>
            <div className="grid-box coral-box">
              <p>Match Anytime, Anywhere</p>
            </div>
            <div className="grid-box text-box">
              <p>Pop-in & out freely, no pressure</p>
            </div>
            <div className="grid-box blue-box">
              <p>Match Anytime, Anywhere</p>
            </div>
            <div
              className="grid-box image-box"
              style={{ backgroundImage: "url(/communicating.png)" }}
            ></div>
            <div className="grid-box coral-box">
              <p>Find the Perfect Connection</p>
            </div>
            <div className="grid-box video-box">
              <video autoPlay muted loop className="grid-video">
                <source src="/PopIn%20Logo%20Animation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Add this new section */}
      <FAQ />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}