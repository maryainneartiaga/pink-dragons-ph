import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <p className="footer-name">Pink Dragons Philippines</p>
        <p className="footer-tag">
          Amateur dragon boat team · Breast cancer survivors · Cebu City · Est.
          2025
        </p>
      </div>
      <div className="footer-links">
        <Link to="/members">Members</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/news">News</Link>
        <a
          href="https://www.facebook.com/profile.php?id=61575777634750"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>
      <p className="footer-note">
        Empowering survivors to reclaim their strength, build lasting
        connections, and inspire others.
      </p>
    </footer>
  )
}
