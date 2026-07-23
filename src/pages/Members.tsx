import { members } from '../data/members'

export function Members() {
  return (
    <div className="page members-page">
      <header className="page-header">
        <p className="eyebrow">Our team</p>
        <h1>Members</h1>
        <p className="page-lede">
          The paddlers and coaches of Pink Dragons Philippines — survivors and
          allies paddling stronger together in Cebu City.
        </p>
      </header>

      <ul className="member-grid">
        {members.map((member, index) => (
          <li
            key={member.id}
            className="member-card"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className="member-photo-wrap">
              <img
                className="member-card-image"
                src={member.image}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="member-card-meta">
              <h2>{member.name}</h2>
              <p className="member-role">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
