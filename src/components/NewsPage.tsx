import './NewsBoard.css';
import type { NewsItem } from './NewsBoard';

interface NewsPageProps {
  news: NewsItem | undefined;
}

export function NewsPage({ news }: NewsPageProps) {
  if (!news) return <div style={{padding: '2rem'}}>Notícia não encontrada.</div>;
  return (
    <section className="news-page">
      <div className="news-page-image-wrapper">
        {news.imageUrl && (
          <img src={news.imageUrl} alt={news.title} className="news-page-image" />
        )}
      </div>
      <h2>{news.title}</h2>
      <span className="date">{news.date}</span>
      <p>{news.content || 'Conteúdo da notícia.'}</p>
    </section>
  );
}
