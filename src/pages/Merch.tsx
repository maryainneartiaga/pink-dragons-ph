import { merchItems } from '../data/merch'

export function Merch() {
  return (
    <div className="page merch-page">
      <header className="page-header">
        <p className="eyebrow">Support the team</p>
        <h1>Merch</h1>
        <p className="page-lede">
          Official Pink Dragons Philippines gear. Proceeds go toward breast
          cancer awareness, support programs, and survivor assistance.
        </p>
      </header>

      <ul className="merch-grid">
        {merchItems.map((item, index) => (
          <li
            key={item.id}
            className="merch-item"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="merch-visual">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="merch-meta">
              <span className="merch-tag">{item.tag}</span>
              <h2>{item.name}</h2>
              {item.slogan ? (
                <p className="merch-slogan">{item.slogan}</p>
              ) : null}
              <p>{item.description}</p>
              <div className="merch-footer">
                <span className="merch-price">{item.price}</span>
                <a
                  className="btn btn-small"
                  href="https://www.facebook.com/profile.php?id=61575777634750"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on Facebook
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
