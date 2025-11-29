import { NewsBoard } from './components/NewsBoard';
import type { NewsItem } from './components/NewsBoard';
import { ForumList } from './components/ForumList';
import type { Forum } from './components/ForumList';
import { ForumMessages } from './components/ForumMessages';
import type { Message } from './components/ForumMessages';
import { NewsPage } from './components/NewsPage';
import { Header } from './components/Header';
import { WorksList } from './components/WorksList';
import type { Work } from './components/WorksList';
import { WorkDetails } from './components/WorkDetails';
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

const obras: Work[] = [
	{
		id: 1,
		name: 'Revitalização da Praça Central',
		description: 'Reforma completa da praça com novos bancos, iluminação LED, playground modernizado e área de exercícios. Inclui também paisagismo com plantas nativas e sistema de irrigação sustentável.',
		status: 'em-andamento',
		progress: 65,
		startDate: '15/09/2025',
		estimatedEndDate: '20/12/2025',
		location: 'Praça Central - Centro',
	},
	{
		id: 2,
		name: 'Construção de Ciclovia Vila Verde',
		description: 'Nova ciclovia ligando o bairro Vila Verde ao centro da cidade, com 3.2km de extensão, sinalização completa e pontos de parada com bicicletários.',
		status: 'em-andamento',
		progress: 40,
		startDate: '01/10/2025',
		estimatedEndDate: '15/02/2026',
		location: 'Av. Vila Verde - Trecho Centro',
	},
	{
		id: 3,
		name: 'Ampliação do Centro de Saúde',
		description: 'Expansão do centro de saúde local com 4 novos consultórios, sala de vacinação ampliada e área de espera climatizada para melhor atendimento aos moradores.',
		status: 'pausada',
		progress: 25,
		startDate: '20/08/2025',
		estimatedEndDate: '30/01/2026',
		location: 'Rua da Saúde, 123',
	},
	{
		id: 4,
		name: 'Pavimentação Rua das Flores',
		description: 'Pavimentação asfáltica completa da Rua das Flores, incluindo calçadas, meio-fio, drenagem pluvial e sinalização horizontal.',
		status: 'concluida',
		progress: 100,
		startDate: '10/07/2025',
		estimatedEndDate: '25/08/2025',
		location: 'Rua das Flores - Bairro Alto',
	},
	{
		id: 5,
		name: 'Nova Escola Municipal',
		description: 'Construção de escola municipal com 8 salas de aula, biblioteca, quadra poliesportiva, laboratório de informática e refeitório. Capacidade para 400 alunos.',
		status: 'planejada',
		progress: 5,
		startDate: '05/01/2026',
		estimatedEndDate: '20/12/2026',
		location: 'Terreno Av. Educação s/n',
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

function WorkPage() {
	const { id } = useParams();
	const workId = Number(id);
	const work = obras.find(w => w.id === workId);
	return (
		<>
			<Header />
			<WorkDetails work={work} />
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
			<WorksList works={obras} />
		</main>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/forum/:id" element={<ForumPage />} />
			<Route path="/obra/:id" element={<WorkPage />} />
			<Route path="/noticia/:id" element={<NewsRoutePage />} />
		</Routes>
	);
}

export default App;
