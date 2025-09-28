import { NewsBoard } from './components/NewsBoard';
import type { NewsItem } from './components/NewsBoard';
import { ForumList } from './components/ForumList';
import type { Forum } from './components/ForumList';
import { ForumMessages } from './components/ForumMessages';
import type { Message } from './components/ForumMessages';
import { NewsPage } from './components/NewsPage';
import { Header } from './components/Header';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';

const noticias: NewsItem[] = [
	{
		id: 1,
		title: 'Aprovada a Reforma Tributária no Senado',
		content: 'O Senado aprovou o texto-base da Reforma Tributária, que promete simplificar impostos e melhorar o ambiente de negócios no Brasil.',
		date: '30/08/2025',
		imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=211,fit=crop/YX4Xp5M6rzCbqQ27/1_reformatributaria-43006993-AGBbOEX6KwtE3JV3.webp',
	},
	{
		id: 2,
		title: 'Principais mudanças da Reforma Tributária',
		content: 'Entenda os pontos centrais da proposta, como a unificação de tributos e o impacto para empresas e consumidores.',
		date: '29/08/2025',
		imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=211,fit=crop/YX4Xp5M6rzCbqQ27/1_reformatributaria-43006993-AGBbOEX6KwtE3JV3.webp',
	},
	{
		id: 3,
		title: 'Especialistas comentam os efeitos da Reforma',
		content: 'Economistas e advogados analisam os benefícios e desafios da nova legislação tributária.',
		date: '28/08/2025',
		imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=211,fit=crop/YX4Xp5M6rzCbqQ27/1_reformatributaria-43006993-AGBbOEX6KwtE3JV3.webp',
	},
	{
		id: 4,
		title: 'Reforma Tributária: o que muda para o consumidor?',
		content: 'Veja como a reforma pode afetar os preços de produtos e serviços no dia a dia.',
		date: '27/08/2025',
		imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=211,fit=crop/YX4Xp5M6rzCbqQ27/1_reformatributaria-43006993-AGBbOEX6KwtE3JV3.webp',
	},
];

const forums: Forum[] = [
	{
		id: 1,
		name: 'Reforma Tributária',
		description: 'Discussões sobre mudanças e impactos na legislação tributária.',
	},
	{
		id: 2,
		name: 'Imposto de Renda',
		description: 'Tire dúvidas e compartilhe experiências sobre IRPF e IRPJ.',
	},
	{
		id: 3,
		name: 'Simples Nacional',
		description: 'Debates e novidades para micro e pequenas empresas.',
	},
	{
		id: 4,
		name: 'Contabilidade Digital',
		description: 'Tecnologia, automação e tendências na área contábil.',
	},
];

const messagesByForum: Record<number, Message[]> = {
	1: [
		{ id: 1, author: 'João', content: 'O que muda na reforma?', date: 'Hoje' },
		{ id: 2, author: 'Maria', content: 'A reforma vai impactar pequenas empresas?', date: 'Hoje' },
	],
	2: [
		{ id: 1, author: 'Carlos', content: 'Como declarar dependentes?', date: 'Hoje' },
	],
	3: [],
	4: [
		{ id: 1, author: 'Ana', content: 'Quais softwares vocês usam?', date: 'Hoje' },
	],
};

function ForumPage() {
	const { id } = useParams();
	const forumId = Number(id);
	const forum = forums.find(f => f.id === forumId);
	if (!forum) return (
		<>
			<Header />
			<div style={{ padding: '2rem' }}>Fórum não encontrado.</div>
		</>
	);
	return (
		<>
			<Header />
			<ForumMessages forum={forum} messages={messagesByForum[forumId] || []} />
		</>
	);
}

function NewsRoutePage() {
	const { id } = useParams();
	const newsId = Number(id);
	const news = noticias.find(n => n.id === newsId);
	return (
		<>
			<Header />
			<NewsPage news={news} />
		</>
	);
}

function HomePage() {
	return (
		<main>
			<Header />
			<NewsBoard news={noticias} />
			<ForumList forums={forums} />
		</main>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/forum/:id" element={<ForumPage />} />
			<Route path="/noticia/:id" element={<NewsRoutePage />} />
		</Routes>
	);
}

export default App;
