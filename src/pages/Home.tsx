import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

const latestNews = [...newsArticles]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Pink Dragons Philippines introduction">
        <div className="hero-media" aria-hidden="true">
          <img
            className="hero-image"
            src="/images/hero.svg"
            alt=""
          />
          <div className="hero-wash" />
          <div className="hero-shimmer" />
        </div>

        <div className="hero-content">
          <img
            className="hero-logo animate-rise"
            src="/images/logo.png"
            alt="Pink Dragons Philippines Est. 2025"
          />
          <h1 className="hero-headline animate-rise delay-1">
            Reclaim strength. Build connection. Inspire.
          </h1>
          <p className="hero-lede animate-rise delay-2">
            An amateur dragon boat team of breast cancer survivors in Cebu City,
            paddling together since 2025.
          </p>
          <div className="hero-actions animate-rise delay-3">
            <Link className="btn btn-primary" to="/members">
              Meet the team
            </Link>
            <Link className="btn btn-ghost" to="/merch">
              Shop merch
            </Link>
          </div>
        </div>
      </section>

      <section className="section story">
        <div className="section-inner story-grid">
          <div className="story-copy">
            <p className="eyebrow">Our mission</p>
            <h2>Empowered by the water.</h2>
            <p>
              Our mission is to empower breast cancer survivors through the
              transformative power of dragon boat racing — to reclaim their
              strength, build lasting connections, and inspire others.
            </p>
            <p>
              Pink Dragons Philippines began in 2025 as an amateur sports team
              in Cebu City. On the water we are one crew: left and right, front
              and back, moving as a single breath. Off the water we are friends,
              mentors, and living proof that life after diagnosis can be fierce,
              joyful, and loud.
            </p>
          </div>
          <aside className="story-aside" aria-label="Team facts">
            <div className="fact">
              <span className="fact-value">2025</span>
              <span className="fact-label">Founded</span>
            </div>
            <div className="fact">
              <span className="fact-value">Cebu</span>
              <span className="fact-label">Home waters</span>
            </div>
            <div className="fact">
              <span className="fact-value">One</span>
              <span className="fact-label">Crew, one heartbeat</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section chant" aria-label="Team chant">
        <div className="section-inner chant-inner">
          <p className="eyebrow">Our chant</p>
          <h2>Say it with us.</h2>
          <ol className="chant-lines">
            <li className="chant-pair">
              <p className="chant-leader">
                <span className="chant-who">Leader</span>
                Pink Dragons!
              </p>
              <p className="chant-all">
                <span className="chant-who">All</span>
                Stronger Together!
              </p>
            </li>
            <li className="chant-pair">
              <p className="chant-leader">
                <span className="chant-who">Leader</span>
                Survivors!
              </p>
              <p className="chant-all">
                <span className="chant-who">All</span>
                Fearless Forever!
              </p>
            </li>
            <li className="chant-pair chant-pair-finale">
              <p className="chant-leader">
                <span className="chant-who">Leader</span>
                Pink Dragons! <em>Together</em>
              </p>
              <p className="chant-all chant-finale">
                <span className="chant-who">All</span>
                We Rise! We Paddle! We Win! 🩷🐉
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section paddle">
        <div className="section-inner paddle-inner">
          <p className="eyebrow">Why we paddle</p>
          <h2>Every stroke is a reclaiming.</h2>
          <p className="paddle-lede">
            Dragon boat racing gives us rhythm, community, and a place where our
            bodies feel powerful again. We train hard, cheer louder, and welcome
            anyone rebuilding life after breast cancer.
          </p>
          <Link className="text-link" to="/members">
            See who paddles with us →
          </Link>
        </div>
      </section>

      <section className="section news-teaser">
        <div className="section-inner">
          <p className="eyebrow">Coming up</p>
          <h2>Events, races & news</h2>
          <p className="news-teaser-lede">
            Stay close to the calendar — practices, regattas, and community
            days from Pink Dragons Philippines.
          </p>
          <ul className="news-teaser-list">
            {latestNews.map((article) => (
              <li key={article.id}>
                <Link className="news-teaser-link" to={`/news/${article.slug}`}>
                  <span>
                    {article.category} · {article.dateLabel}
                  </span>
                  <strong>{article.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-link" to="/news">
            See all news →
          </Link>
        </div>
      </section>

      <section className="section support">
        <div className="section-inner support-inner">
          <h2>Wear the pink. Fuel the crew.</h2>
          <p>
            Merch keeps our practices going and our story visible — from Cebu’s
            docks to daily life.
          </p>
          <Link className="btn btn-primary" to="/merch">
            Browse merch
          </Link>
        </div>
      </section>
    </>
  )
}
