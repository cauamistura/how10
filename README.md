# How10 - Fórum Comunitário

## Objetivo do Projeto

O How10 é uma plataforma online dedicada à comunicação e transparência da vida comunitária urbana. O objetivo é proporcionar um espaço colaborativo onde moradores podem acessar informações sobre projetos públicos, participar de discussões, acompanhar o desenvolvimento de obras e se manter informados sobre eventos e melhorias no bairro, promovendo maior engajamento e transparência na gestão comunitária.

## Funcionalidades

### 📰 Quadro de Notícias
- Exibição de notícias recentes sobre eventos e melhorias na comunidade
- Visualização detalhada de cada notícia
- Interface responsiva com imagens e descrições completas

### 💬 Fóruns de Discussão
- Criação e participação em tópicos organizados por categorias:
  - Melhorias do Bairro
  - Eventos Comunitários  
  - Segurança no Bairro
  - Meio Ambiente Local
- Sistema de mensagens para cada fórum
- Navegação intuitiva entre discussões

### 🏗️ Obras da Comunidade **[NOVO]**
- **Acompanhamento em tempo real** de obras públicas e projetos de infraestrutura
- **Status visual** das obras: Planejada, Em Andamento, Pausada, Concluída
- **Barra de progresso** mostrando percentual de conclusão
- **Página de detalhes** com informações completas:
  - Cronograma de execução
  - Localização da obra
  - Descrição detalhada do projeto
  - Timeline com marcos importantes
- **Interface moderna** com cards informativos e design responsivo

### 🎯 Características Técnicas
- Interface intuitiva e responsiva
- Navegação por rotas dinâmicas
- Design moderno com componentes reutilizáveis
- Dados organizados e estruturados

## Tecnologias Utilizadas

- React
- Vite
- TypeScript

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [url-do-repositorio]
   cd how10
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto:**
   - Abra seu navegador e acesse `http://localhost:5173` (ou porta informada no terminal)

### Comandos Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção  
npm run preview      # Visualiza o build de produção
npm run lint         # Executa verificação de código
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx              # Cabeçalho da aplicação
│   ├── NewsBoard.tsx           # Quadro de notícias
│   ├── NewsBoard.css
│   ├── NewsPage.tsx            # Página individual de notícia
│   ├── ForumList.tsx           # Lista de fóruns disponíveis
│   ├── ForumList.css
│   ├── ForumMessages.tsx       # Mensagens de um fórum específico
│   ├── ForumMessages.css
│   ├── WorksList.tsx           # Lista de obras da comunidade [NOVO]
│   ├── WorksList.css
│   ├── WorkDetails.tsx         # Detalhes de uma obra específica [NOVO]
│   └── WorkDetails.css
├── App.tsx                     # Componente principal com roteamento
├── App.css
├── main.tsx                    # Ponto de entrada da aplicação
└── index.css
```

### Rotas Disponíveis

- `/` - Página inicial (notícias + fóruns + obras)
- `/noticia/:id` - Detalhes de uma notícia específica  
- `/forum/:id` - Mensagens de um fórum específico
- `/obra/:id` - Detalhes e progresso de uma obra específica **[NOVO]**

## Contribuição

Sugestões, melhorias e correções são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Areas para Contribuição

- 🔍 Sistema de busca e filtros
- 👤 Autenticação e perfis de usuário
- 💬 Sistema de comentários e respostas
- 📊 Dashboard administrativo para obras
- 📱 Melhorias na responsividade mobile
- 🎨 Temas e customização visual

## Roadmap

### Próximas Funcionalidades
- [ ] Sistema de autenticação
- [ ] Comentários em obras e notícias  
- [ ] Sistema de notificações
- [ ] Upload de imagens para obras
- [ ] Integração com APIs de dados públicos
- [ ] Dashboard administrativo

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ para fortalecer a comunicação comunitária**
