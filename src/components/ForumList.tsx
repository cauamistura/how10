import './ForumList.css';
import { useNavigate } from 'react-router-dom';

export type Forum = {
  id: number;
  name: string;
  description: string;
};

interface ForumListProps {
  forums: Forum[];
}

export function ForumList({ forums }: ForumListProps) {
  const navigate = useNavigate();

  return (
    <section className="forum-list">
      <h2>Fóruns</h2>
      <ul>
        {forums.length === 0 ? (
          <li className="empty">Nenhum fórum disponível.</li>
        ) : (
          forums.map((forum) => (
            <li key={forum.id} className="forum-item" onClick={() => navigate(`/forum/${forum.id}`)} style={{cursor: 'pointer'}}>
              <h3>{forum.name}</h3>
              <p>{forum.description}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
