import './ForumMessages.css';
import type { Forum } from './ForumList';

export type Message = {
  id: number;
  author: string;
  content: string;
  date: string;
};

interface ForumMessagesProps {
  forum: Forum;
  messages: Message[];
}

export function ForumMessages({ forum, messages }: ForumMessagesProps) {
  return (
    <section className="forum-messages">
      <h2>{forum.name}</h2>
      <p className="forum-desc">{forum.description}</p>
      <ul>
        {messages.length === 0 ? (
          <li className="empty">Nenhuma mensagem neste fórum.</li>
        ) : (
          messages.map((msg) => (
            <li key={msg.id} className="message-item">
              <div className="message-header">
                <span className="author">{msg.author}</span>
                <span className="date">{msg.date}</span>
              </div>
              <p>{msg.content}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
