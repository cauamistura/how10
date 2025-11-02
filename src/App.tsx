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
		title: 'Nova Praça do Bairro Vila Verde Inaugurada',
		content: 'A prefeitura inaugurou a nova praça comunitária na Vila Verde, com playground, área de exercícios e espaço para eventos comunitários.',
		date: '30/10/2025',
		imageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=375&h=211&fit=crop',
	},
	{
		id: 2,
		title: 'Mutirão de Limpeza no Parque Central',
		content: 'Moradores se organizaram para um mutirão de limpeza no Parque Central, resultando na coleta de mais de 200kg de lixo reciclável.',
		date: '29/10/2025',
		imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=375&h=211&fit=crop',
	},
	{
		id: 3,
		title: 'Horta Comunitária Bairro Alto Ganha Expansão',
		content: 'A horta comunitária do Bairro Alto foi expandida e agora conta com 50 canteiros para cultivo de hortaliças pelos moradores.',
		date: '28/10/2025',
		imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=375&h=211&fit=crop',
	},
	{
		id: 4,
		title: 'Feira de Artesanato Local Movimenta a Comunidade',
		content: 'A feira mensal de artesanato local reuniu mais de 30 expositores e atraiu centenas de visitantes para o centro comunitário.',
		date: '27/10/2025',
		imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=375&h=211&fit=crop',
	},
];

const forums: Forum[] = [
	{
		id: 1,
		name: 'Melhorias do Bairro',
		description: 'Discussões sobre projetos e melhorias necessárias na infraestrutura local.',
	},
	{
		id: 2,
		name: 'Eventos Comunitários',
		description: 'Organize e participe de eventos, festas e atividades da comunidade.',
	},
	{
		id: 3,
		name: 'Segurança no Bairro',
		description: 'Debates sobre segurança, iluminação pública e ações preventivas.',
	},
	{
		id: 4,
		name: 'Meio Ambiente Local',
		description: 'Iniciativas verdes, reciclagem e preservação ambiental no bairro.',
	},
];

const messagesByForum: Record<number, Message[]> = {
	1: [
		{ id: 1, author: 'João', content: 'Precisamos de mais iluminação na Rua das Flores', date: 'Hoje' },
		{ id: 2, author: 'Maria', content: 'Que tal organizarmos um mutirão para arrumar a praça?', date: 'Hoje' },
	],
	2: [
		{ id: 1, author: 'Carlos', content: 'Alguém quer ajudar na festa junina do bairro?', date: 'Hoje' },
	],
	3: [],
	4: [
		{ id: 1, author: 'Ana', content: 'Vamos começar um projeto de compostagem comunitária?', date: 'Hoje' },
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
