import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import {
  getArticlesByCategory,
  type NewsCategory,
  newsArticles,
} from '../data/news'

const filters: Array<NewsCategory | 'All'> = ['All', 'Event', 'Race', 'News']

function formatList(articles: typeof newsArticles) {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date))
}

export function News() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const articles = useMemo(() => {
    const list =
      filter === 'All' ? newsArticles : getArticlesByCategory(filter)
    return formatList(list)
  }, [filter])

  return (
    <div className="page news-page">
      <header className="page-header">
        <p className="eyebrow">Updates</p>
        <h1>News</h1>
        <p className="page-lede">
          Events, races, and stories from Pink Dragons Philippines — what’s
          coming up on the water and in our community.
        </p>
      </header>

      <div className="news-filters" role="tablist" aria-label="Filter articles">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            className={
              filter === item ? 'news-filter is-active' : 'news-filter'
            }
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="news-list">
        {articles.map((article, index) => (
          <li
            key={article.id}
            className="news-item"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Link to={`/news/${article.slug}`} className="news-item-link">
              <div className="news-item-top">
                <span className="news-category">{article.category}</span>
                <time dateTime={article.date}>{article.dateLabel}</time>
              </div>
              <h2>{article.title}</h2>
              {article.location ? (
                <p className="news-location">{article.location}</p>
              ) : null}
              <p className="news-excerpt">{article.excerpt}</p>
              <span className="news-read">Read article →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
