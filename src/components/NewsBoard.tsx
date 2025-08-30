import './NewsBoard.css';
import { useNavigate } from 'react-router-dom';

export type NewsItem = {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
};

interface NewsBoardProps {
  news: NewsItem[];
}

export function NewsBoard({ news }: NewsBoardProps) {
  const navigate = useNavigate();
  if (news.length === 0) {
    return (
      <section className="news-board">
        <h2>Mural de Notícias</h2>
        <ul>
          <li className="empty">Nenhuma notícia disponível.</li>
        </ul>
      </section>
    );
  }

  const [main, ...side] = news;

  return (
    <section className="news-board news-board-grid">
      <h2>Mural de Notícias</h2>
      <div className="news-grid">
        <div className="main-news">
          {main.imageUrl && (
            <div className="main-image-wrapper" onClick={() => navigate(`/noticia/${main.id}`)} style={{cursor: 'pointer'}}>
              <img src={main.imageUrl} alt={main.title} className="main-news-image" />
              <div className="main-news-overlay">
                <h3>{main.title}</h3>
                <p>{main.content}</p>
                <span className="date">{main.date}</span>
              </div>
            </div>
          )}
        </div>
        <ul className="side-news">
          {side.map((item) => (
            <li key={item.id} className="side-news-item" onClick={() => navigate(`/noticia/${item.id}`)} style={{cursor: 'pointer'}}>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="side-news-image" />
              )}
              <div>
                <h4>{item.title}</h4>
                <span className="date">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
