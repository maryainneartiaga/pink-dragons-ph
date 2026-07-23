import { Link, useParams } from 'react-router-dom'
import { getArticleBySlug } from '../data/news'

export function NewsArticle() {
  const { slug = '' } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="page news-page">
        <header className="page-header">
          <p className="eyebrow">News</p>
          <h1>Article not found</h1>
          <p className="page-lede">
            That story may have moved. Browse the latest updates instead.
          </p>
          <Link className="btn btn-primary" to="/news">
            Back to news
          </Link>
        </header>
      </div>
    )
  }

  return (
    <article className="page news-article-page">
      <header className="page-header news-article-header">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <div className="news-article-meta">
          <time dateTime={article.date}>{article.dateLabel}</time>
          {article.location ? <span>{article.location}</span> : null}
        </div>
      </header>

      <div className="news-article-body">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="news-article-back">
        <Link to="/news">← All news</Link>
      </p>
    </article>
  )
}
