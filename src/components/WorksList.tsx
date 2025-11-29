import './WorksList.css';
import { useNavigate } from 'react-router-dom';

export type Work = {
  id: number;
  name: string;
  description: string;
  status: 'planejada' | 'em-andamento' | 'pausada' | 'concluida';
  progress: number; // percentual de 0 a 100
  startDate: string;
  estimatedEndDate?: string;
  location: string;
};

interface WorksListProps {
  works: Work[];
}

export function WorksList({ works }: WorksListProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: Work['status']) => {
    switch (status) {
      case 'planejada': return '#e2e8f0';
      case 'em-andamento': return '#3182ce';
      case 'pausada': return '#ed8936';
      case 'concluida': return '#38a169';
      default: return '#a0aec0';
    }
  };

  const getStatusText = (status: Work['status']) => {
    switch (status) {
      case 'planejada': return 'Planejada';
      case 'em-andamento': return 'Em Andamento';
      case 'pausada': return 'Pausada';
      case 'concluida': return 'Concluída';
      default: return 'Indefinido';
    }
  };

  return (
    <section className="works-list">
      <h2>Obras da Comunidade</h2>
      <ul>
        {works.length === 0 ? (
          <li className="empty">Nenhuma obra em andamento.</li>
        ) : (
          works.map((work) => (
            <li key={work.id} className="work-item" onClick={() => navigate(`/obra/${work.id}`)} style={{cursor: 'pointer'}}>
              <div className="work-header">
                <h3>{work.name}</h3>
                <span 
                  className="work-status" 
                  style={{ backgroundColor: getStatusColor(work.status) }}
                >
                  {getStatusText(work.status)}
                </span>
              </div>
              <p className="work-description">{work.description}</p>
              <div className="work-info">
                <p className="work-location">📍 {work.location}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${work.progress}%`, backgroundColor: getStatusColor(work.status) }}
                  ></div>
                  <span className="progress-text">{work.progress}%</span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}