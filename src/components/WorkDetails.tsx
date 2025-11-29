import './WorkDetails.css';
import type { Work } from './WorksList';

interface WorkDetailsProps {
  work: Work | undefined;
}

export function WorkDetails({ work }: WorkDetailsProps) {
  if (!work) {
    return (
      <div className="work-details">
        <div className="work-not-found">
          <h2>Obra não encontrada</h2>
          <p>A obra solicitada não foi encontrada ou não existe.</p>
        </div>
      </div>
    );
  }

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
    <div className="work-details">
      <div className="work-details-container">
        <div className="work-details-header">
          <div className="work-title-section">
            <h1>{work.name}</h1>
            <span 
              className="work-status-badge" 
              style={{ backgroundColor: getStatusColor(work.status) }}
            >
              {getStatusText(work.status)}
            </span>
          </div>
          <p className="work-location">📍 {work.location}</p>
        </div>

        <div className="work-progress-section">
          <h3>Progresso da Obra</h3>
          <div className="progress-container">
            <div className="progress-bar-large">
              <div 
                className="progress-fill-large" 
                style={{ 
                  width: `${work.progress}%`, 
                  backgroundColor: getStatusColor(work.status) 
                }}
              ></div>
            </div>
            <span className="progress-percentage">{work.progress}%</span>
          </div>
        </div>

        <div className="work-info-grid">
          <div className="info-card">
            <h4>Data de Início</h4>
            <p>{work.startDate}</p>
          </div>
          
          {work.estimatedEndDate && (
            <div className="info-card">
              <h4>Previsão de Término</h4>
              <p>{work.estimatedEndDate}</p>
            </div>
          )}
        </div>

        <div className="work-description-section">
          <h3>Descrição do Projeto</h3>
          <p className="work-description-text">{work.description}</p>
        </div>

        {/* Timeline de exemplo - você pode expandir isso com dados reais */}
        <div className="work-timeline">
          <h3>Cronograma</h3>
          <div className="timeline-item">
            <div className="timeline-date">Início</div>
            <div className="timeline-content">
              <strong>Projeto iniciado</strong>
              <p>Obra oficialmente iniciada em {work.startDate}</p>
            </div>
          </div>
          
          {work.progress > 0 && (
            <div className="timeline-item">
              <div className="timeline-date">Atual</div>
              <div className="timeline-content">
                <strong>{work.progress}% concluído</strong>
                <p>Status atual: {getStatusText(work.status)}</p>
              </div>
            </div>
          )}
          
          {work.estimatedEndDate && (
            <div className="timeline-item future">
              <div className="timeline-date">Previsão</div>
              <div className="timeline-content">
                <strong>Conclusão prevista</strong>
                <p>Obra deve ser finalizada em {work.estimatedEndDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}