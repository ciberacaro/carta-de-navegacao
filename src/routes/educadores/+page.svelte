<script>
	let sessaoAberta = $state(null);

	const sessoes = [
		{
			id: 'pre-escolar',
			emoji: '🌱',
			faixa: 'Pré-escolar',
			idades: '3–5 anos',
			cor: '#FF9F43',
			contexto: 'Crianças ainda não leem de forma autónoma. A sessão é conduzida com os adultos presentes e usa linguagem muito simples, histórias e jogos de mímica. Máximo 20 minutos de atenção.',
			materiais: ['Imagens impressas de situações (tablet com adulto vs. sozinho)', 'Fantoche ou peluche para contar a história', 'Cartões com emoticons (feliz/assustado/triste)', 'Impressão da lista de regras para levar para casa'],
			plano: [
				{ tempo: '5 min', atividade: 'Boas-vindas e história curta', descricao: 'Contar uma história simples: "O Tomás queria ver um vídeo. O que fez primeiro?" Usar o fantoche.' },
				{ tempo: '8 min', atividade: 'As 3 regras de ouro', descricao: '"Peço ao adulto" · "Fico por perto" · "Paro quando dizem". Cada regra com mímica que as crianças repetem.' },
				{ tempo: '5 min', atividade: 'Jogo dos cartões', descricao: 'Mostrar situações em imagens. Crianças escolhem emoticon: feliz (seguro) ou assustado (pedir ajuda).' },
				{ tempo: '2 min', atividade: 'Levar para casa', descricao: 'Entregar a folha de regras para colocar em casa. Pedir aos pais para rever em conjunto.' },
			],
			dicas_educador: [
				'Envolva os pais — envie nota antecipada explicando o tema',
				'Use linguagem de 3 anos: "ecrã brilhante" em vez de "tablet"',
				'Reforce positivamente: "Muito bem! É mesmo assim que se faz!"',
				'Não use a palavra "perigo" — use "pedir ajuda ao adulto"',
			]
		},
		{
			id: 'primeiro-ciclo',
			emoji: '⛵',
			faixa: '1.º Ciclo',
			idades: '6–9 anos',
			cor: '#26de81',
			contexto: 'Já leem e escrevem. Podem trabalhar em pequenos grupos. Gostam de jogos e desafios. Foco em pesquisa, passwords e comunicação responsável.',
			materiais: ['Ficha de trabalho "Verdade ou mentira na internet"', 'Cartões de situações (mensagens simuladas)', 'Acesso a computador/tablet para demonstração de pesquisa', 'Marcadores e folhas para criar a "password secreta"'],
			plano: [
				{ tempo: '5 min', atividade: 'Introdução: o que é a internet?', descricao: 'Perguntar o que usam a internet para fazer. Mapear no quadro: aprender, jogar, comunicar, ver vídeos.' },
				{ tempo: '10 min', atividade: 'Pesquisa — palavras certas', descricao: 'Demonstrar ao vivo: "baleia" vs "baleia azul Portugal tamanho". Deixar pesquisar um tema à escolha.' },
				{ tempo: '10 min', atividade: 'Verdade ou mentira?', descricao: 'Mostrar 3 títulos (1 real, 2 exagerados). Grupos discutem e apresentam. Ensinar a verificar com outra fonte.' },
				{ tempo: '10 min', atividade: 'A minha password secreta', descricao: 'Criar uma frase-password: 3 palavras que gostam + número favorito. Regra: não se diz a ninguém!' },
				{ tempo: '5 min', atividade: 'Resumo e desafio', descricao: 'Cada criança diz uma coisa que vai fazer diferente. Desafio para casa: ensinar uma regra a um familiar.' },
			],
			dicas_educador: [
				'Escolha temas de pesquisa ligados ao currículo atual — torna mais relevante',
				'Use exemplos de notícias falsas inócuas (não políticas) para esta faixa',
				'Enfatize que guardar a password em papel escondido não é boa ideia',
				'Elogie quem diz "não sei" — mostrar que verificar é o comportamento certo',
			]
		},
		{
			id: 'segundo-ciclo',
			emoji: '🗺️',
			faixa: '2.º Ciclo',
			idades: '10–11 anos',
			cor: '#54a0ff',
			contexto: 'Início da vida nas redes sociais (muitas vezes antes dos 13 anos legais). Pressão dos pares muito forte. Foco em privacidade, comunicação e redes sociais.',
			materiais: ['Computadores/tablets para a atividade prática', 'Ficha de análise de perfil de rede social (simulado)', 'Questionário anónimo "Já aconteceu contigo?" (pré-sessão)'],
			plano: [
				{ tempo: '8 min', atividade: 'Quem me vê online?', descricao: 'Exercício: "Imagine que o vosso perfil é público. Quem pode ver?" Listar: amigos, pais, professores, recrutadores, estranhos.' },
				{ tempo: '10 min', atividade: 'Análise de perfil', descricao: 'Em pares, analisar um perfil simulado (criado pelo professor). Identificar informações privadas partilhadas.' },
				{ tempo: '12 min', atividade: 'Redes sociais — as regras', descricao: 'Discussão: idade mínima (13 anos), definições de privacidade, o que é "publicar para sempre".' },
				{ tempo: '10 min', atividade: 'Cenário: recebi uma mensagem estranha', descricao: 'Grupos recebem situações diferentes (desconhecido pede amizade, pedido de foto, oferta suspeita). Debatem o que fazer.' },
				{ tempo: '5 min', atividade: 'Compromisso digital', descricao: 'Cada aluno escreve num post-it uma coisa que vai fazer diferente. Partilhar voluntariamente.' },
			],
			dicas_educador: [
				'Use o questionário pré-sessão para calibrar — se a maioria já usa redes, foque mais nos riscos reais',
				'Não julgue quem usa redes antes dos 13 — o foco é tornar mais seguro, não punir',
				'Tenha cuidado com exemplos de cyberbullying — podem atingir situações reais da turma',
				'Refira o papel dos pais sem criar conflito geracional',
			]
		},
		{
			id: 'terceiro-ciclo',
			emoji: '🧭',
			faixa: '3.º Ciclo',
			idades: '12–14 anos',
			cor: '#5f27cd',
			contexto: 'Utilizadores ativos de múltiplas plataformas. Identidade digital em formação. Muito recetivos a debates e desafios críticos. Foco em pensamento crítico, dados e desinformação.',
			materiais: ['Acesso à internet para fact-checking ao vivo', 'Exemplos de notícias (reais e falsas) impressas ou em ecrã', 'Ficha "Os meus dados valem quanto?" (estimativa de dados recolhidos)'],
			plano: [
				{ tempo: '5 min', atividade: 'Provocação inicial', descricao: '"Se o produto é grátis, o produto és tu." O que significa? Debate rápido em pares.' },
				{ tempo: '15 min', atividade: 'Fact-checking ao vivo', descricao: 'Mostrar 3 notícias. Alunos têm 3 minutos para verificar cada uma usando Google, pesquisa reversa de imagem, Polígrafo. Qual é falsa?' },
				{ tempo: '10 min', atividade: 'Os teus dados', descricao: 'Estimar quantos dados o telemóvel recolhe por dia. Discutir: localização, hábitos, pesquisas, contactos. Quem tem acesso?' },
				{ tempo: '10 min', atividade: 'Identidade digital — exercício', descricao: 'Pesquisar o próprio nome no Google (ou de um personagem fictício criado para o exercício). O que aparece? O que gostariam que aparecesse?' },
				{ tempo: '5 min', atividade: 'Direitos digitais', descricao: 'RGPD explicado em 2 minutos: o que podem pedir às empresas. Entregar guia de referência.' },
			],
			dicas_educador: [
				'Esta faixa reage bem ao desafio intelectual — evite ser didático demais',
				'O fact-checking ao vivo é o momento mais impactante — escolha bem os exemplos',
				'Tenha cuidado com privacidade ao pesquisar nomes reais — use personagens fictícios',
				'Conecte com outras disciplinas: Português (análise crítica), TIC (dados), Filosofia (ética)',
			]
		},
		{
			id: 'secundario',
			emoji: '⚓',
			faixa: 'Secundário',
			idades: '15–17 anos',
			cor: '#0d7a6c',
			contexto: 'Quase adultos digitais. Produtores de conteúdo, utilizadores de IA, pensando em carreira. Foco em IA, reputação digital, segurança avançada e futuro profissional.',
			materiais: ['Acesso a um chatbot de IA (ChatGPT ou similar)', 'Exemplos de portfólios digitais (LinkedIn, Behance)', 'Ficha de autoavaliação de pegada digital'],
			plano: [
				{ tempo: '10 min', atividade: 'Testar a IA', descricao: 'Fazer a mesma pergunta factual a uma IA e verificar com fontes primárias. Identificar alucinações. "A IA não mente — ela inventa com confiança."' },
				{ tempo: '10 min', atividade: 'A minha pegada digital', descricao: 'Autoavaliação anónima: redes usadas, tipo de conteúdo publicado, quem pode ver. Reflexão: "O que veria um recrutador?"' },
				{ tempo: '15 min', atividade: 'Construir presença digital', descricao: 'O que é um portfólio digital? Ver exemplos. Debate: LinkedIn vs Instagram vs portfolio próprio. Cada um esboça a sua "proposta de valor" digital.' },
				{ tempo: '10 min', atividade: 'Segurança avançada', descricao: 'Password managers (demo Bitwarden), 2FA (porquê e como), o que fazer se uma conta for comprometida.' },
			],
			dicas_educador: [
				'Esta faixa conhece bem a tecnologia — enfatize o que NÃO sabem (direitos, reputação, segurança)',
				'O exercício de IA é muito impactante — prepare um exemplo onde a IA claramente erra',
				'Não moralize sobre o uso de redes sociais — foque na gestão estratégica da identidade',
				'Conecte com orientação vocacional: literacia digital como competência profissional transversal',
			]
		},
		{
			id: 'adultos-seniores',
			emoji: '📖',
			faixa: 'Adultos e Seniores',
			idades: '18+ anos',
			cor: '#6C5CE7',
			contexto: 'Sessões em contexto de biblioteca, centro de dia ou associação. Foco prático: fraudes, passwords, serviços públicos online (Finanças, SNS24, Chave Móvel Digital). Ritmo mais lento, exemplos muito concretos.',
			materiais: ['Folheto impresso com os passos principais (letra grande)', 'Exemplos de SMS e emails de phishing reais (anonimizados)', 'Telemóvel de demonstração para mostrar a Chave Móvel Digital', 'Lista de contactos de emergência para levar'],
			plano: [
				{ tempo: '10 min', atividade: 'Partilha inicial', descricao: 'Cada participante partilha uma situação que o preocupou online. O formador categoriza no quadro sem julgar.' },
				{ tempo: '15 min', atividade: 'Reconhecer fraudes', descricao: 'Mostrar 3 exemplos: SMS CTT falso, email banco falso, chamada de suporte técnico. Identificar juntos os sinais de alerta.' },
				{ tempo: '15 min', atividade: 'Passwords e segurança básica', descricao: 'O que faz uma boa password. Como funciona a Chave Móvel Digital para aceder à Segurança Social, Finanças, SNS24. Demonstração ao vivo.' },
				{ tempo: '10 min', atividade: 'Se algo correr mal', descricao: 'Distribuir lista de contactos: banco, GNR/PSP, APAV 116 006, Linha Internet Segura 800 21 90 90. Simular uma chamada ao banco.' },
				{ tempo: '10 min', atividade: 'Perguntas e dúvidas', descricao: 'Espaço aberto para perguntas. Não há dúvidas básicas — todas as perguntas são importantes.' },
			],
			dicas_educador: [
				'Use letras grandes no material escrito — pelo menos 16pt',
				'Nunca use a palavra "óbvio" ou "simples" — pode inibir quem não sabe',
				'Peça a alguém da turma para ser "co-demonstrador" — gera confiança',
				'Tenha sempre um QR code ou link para o site para consultarem depois',
				'O maior medo desta faixa é "fazer asneira" — reforce que podem sempre pedir ajuda',
			]
		},
	];
</script>

<svelte:head>
	<title>Educadores — Carta de Navegação</title>
	<meta name="description" content="Planos de sessão, materiais e guias para educadores, professores e formadores que trabalham literacia digital." />
</svelte:head>

<div class="educadores-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">👩‍🏫 Educadores</div>
			<h1>Recursos para educadores</h1>
			<p class="subtitulo">Planos de sessão, materiais e guias para trabalhar literacia digital em contexto educativo</p>
		</div>
	</header>

	<section class="intro-secao">
		<div class="inner">
			<div class="intro-grid">
				<div class="intro-texto">
					<h2>Para professores, formadores e bibliotecários</h2>
					<p>
						Cada faixa etária tem necessidades, linguagem e preocupações diferentes.
						Os planos de sessão abaixo foram desenhados para se adaptarem ao contexto
						de sala de aula, biblioteca pública ou formação de adultos —
						com objetivos claros, materiais simples e dicas práticas.
					</p>
					<p>
						Todos os recursos são gratuitos e podem ser adaptados livremente.
						O conteúdo do site é complementar e pode ser usado diretamente nas sessões.
					</p>
				</div>
				<div class="intro-destaques">
					<div class="destaque">
						<span class="d-num">6</span>
						<span class="d-label">planos de sessão<br>por faixa etária</span>
					</div>
					<div class="destaque">
						<span class="d-num">45'</span>
						<span class="d-label">duração média<br>por sessão</span>
					</div>
					<div class="destaque">
						<span class="d-num">∞</span>
						<span class="d-label">reutilização<br>gratuita</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="sessoes-secao">
		<div class="inner">
			<h2 class="sessoes-titulo">Planos de sessão</h2>
			<div class="sessoes-lista">
				{#each sessoes as s}
					<div class="sessao-item">
						<button
							class="sessao-header"
							onclick={() => sessaoAberta = sessaoAberta === s.id ? null : s.id}
							aria-expanded={sessaoAberta === s.id}
							style="border-left: 5px solid {s.cor}"
						>
							<span class="s-emoji">{s.emoji}</span>
							<span class="s-info">
								<strong>{s.faixa}</strong>
								<span class="s-idades">{s.idades}</span>
							</span>
							<span class="s-toggle">{sessaoAberta === s.id ? '▲' : '▼'}</span>
						</button>

						{#if sessaoAberta === s.id}
							<div class="sessao-corpo">
								<div class="sessao-contexto">
									<p><strong>Contexto:</strong> {s.contexto}</p>
								</div>

								<div class="sessao-grid">
									<div class="sessao-col">
										<h3>📋 Plano de sessão (~{s.plano.reduce((a) => a, 0)})</h3>
										<ol class="plano-lista">
											{#each s.plano as passo}
												<li class="plano-item">
													<div class="plano-tempo" style="background: {s.cor}">{passo.tempo}</div>
													<div class="plano-corpo">
														<strong>{passo.atividade}</strong>
														<p>{passo.descricao}</p>
													</div>
												</li>
											{/each}
										</ol>
									</div>

									<div class="sessao-col-side">
										<div class="materiais-box">
											<h3>🎒 Materiais necessários</h3>
											<ul class="materiais-lista">
												{#each s.materiais as m}
													<li>{m}</li>
												{/each}
											</ul>
										</div>

										<div class="dicas-box">
											<h3>💡 Dicas para o educador</h3>
											<ul class="dicas-lista">
												{#each s.dicas_educador as d}
													<li>{d}</li>
												{/each}
											</ul>
										</div>

										<a href="/{s.id === 'adultos-seniores' ? 'adultos' : s.id}" class="ver-conteudo-btn" style="border-color: {s.cor}; color: {s.cor}">
											Ver conteúdo desta faixa →
										</a>
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="biblioteca-secao">
		<div class="inner">
			<div class="bib-box">
				<span class="bib-icon">🏛️</span>
				<div>
					<h2>Sessões na Biblioteca Municipal de Gaia</h2>
					<p>
						A Biblioteca Municipal de Vila Nova de Gaia pode acolher ou co-organizar sessões de literacia digital
						para escolas, associações e grupos da comunidade.
						Entre em contacto para agendar ou para pedir apoio na preparação de materiais.
					</p>
					<div class="bib-contactos">
						<a href="tel:223745670" class="bib-cta">📞 22 374 56 70</a>
						<a href="mailto:bibliotecamunicipal@cm-gaia.pt" class="bib-cta">✉️ bibliotecamunicipal@cm-gaia.pt</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.educadores-page { min-height: 100vh; }

	.topo {
		background: linear-gradient(135deg, #0d7a6c 0%, #0a5a52 100%);
		color: white;
		padding: 4rem 1.5rem 3rem;
		text-align: center;
	}

	.topo-inner { max-width: 700px; margin: 0 auto; }

	.topo-badge {
		display: inline-block;
		background: rgba(255,255,255,0.15);
		border: 1px solid rgba(255,255,255,0.3);
		padding: 0.3rem 1rem;
		border-radius: 2rem;
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		margin-bottom: 1.5rem;
	}

	.topo h1 {
		font-family: 'Lora', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		margin: 0 0 1rem;
	}

	.subtitulo { font-size: 1.125rem; opacity: 0.9; margin: 0; }

	.inner { max-width: 900px; margin: 0 auto; }

	/* Intro */
	.intro-secao { background: white; padding: 3.5rem 1.5rem; }

	.intro-grid {
		display: grid;
		grid-template-columns: 1fr 260px;
		gap: 3rem;
		align-items: start;
	}

	@media (max-width: 700px) { .intro-grid { grid-template-columns: 1fr; } }

	.intro-texto h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.625rem;
		color: #1c1c1e;
		margin: 0 0 1rem;
	}

	.intro-texto p {
		color: #374151;
		line-height: 1.7;
		margin: 0 0 1rem;
	}

	.intro-destaques { display: flex; flex-direction: column; gap: 0.875rem; }

	.destaque {
		background: #f5f0e8;
		border-radius: 0.75rem;
		padding: 1rem 1.25rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.d-num {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		font-weight: 700;
		color: #0d7a6c;
		line-height: 1;
		min-width: 2.5rem;
	}

	.d-label { font-size: 0.8125rem; color: #6b7280; line-height: 1.4; }

	/* Sessões */
	.sessoes-secao { background: #faf9f5; padding: 3.5rem 1.5rem; }

	.sessoes-titulo {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		color: #1c1c1e;
		margin: 0 0 2rem;
	}

	.sessoes-lista { display: flex; flex-direction: column; gap: 0.625rem; }

	.sessao-item { background: white; border-radius: 0.75rem; overflow: hidden; border: 1px solid #e5e7eb; }

	.sessao-header {
		width: 100%;
		background: none;
		border: none;
		padding: 1.25rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;
		text-align: left;
		transition: background 0.15s;
		border-left: 5px solid transparent;
	}

	.sessao-header:hover { background: #faf9f5; }

	.s-emoji { font-size: 1.5rem; flex-shrink: 0; }

	.s-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.s-info strong { font-size: 1rem; color: #1c1c1e; }

	.s-idades { font-size: 0.8125rem; color: #6b7280; }

	.s-toggle { color: #6b7280; font-size: 0.875rem; flex-shrink: 0; }

	/* Corpo da sessão */
	.sessao-corpo {
		padding: 1.5rem;
		border-top: 1px solid #e5e7eb;
		background: #faf9f5;
	}

	.sessao-contexto {
		background: white;
		border-radius: 0.625rem;
		padding: 1rem 1.25rem;
		margin-bottom: 1.5rem;
		border-left: 3px solid #0d7a6c;
	}

	.sessao-contexto p { font-size: 0.9375rem; color: #374151; margin: 0; line-height: 1.65; }

	.sessao-grid {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: 1.5rem;
		align-items: start;
	}

	@media (max-width: 750px) { .sessao-grid { grid-template-columns: 1fr; } }

	.sessao-col h3,
	.sessao-col-side h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1rem;
		color: #1c1c1e;
		margin: 0 0 1rem;
	}

	.plano-lista {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.plano-item {
		display: flex;
		gap: 0.875rem;
		align-items: flex-start;
		background: white;
		border-radius: 0.625rem;
		padding: 1rem;
	}

	.plano-tempo {
		color: white;
		font-size: 0.75rem;
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		border-radius: 0.375rem;
		white-space: nowrap;
		flex-shrink: 0;
		align-self: flex-start;
	}

	.plano-corpo strong { display: block; color: #1c1c1e; font-size: 0.9rem; margin-bottom: 0.25rem; }
	.plano-corpo p { color: #6b7280; font-size: 0.8125rem; line-height: 1.5; margin: 0; }

	.materiais-box, .dicas-box {
		background: white;
		border-radius: 0.625rem;
		padding: 1.125rem;
		margin-bottom: 0.875rem;
	}

	.materiais-lista, .dicas-lista {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.materiais-lista li {
		font-size: 0.8125rem;
		color: #374151;
		padding-left: 1.25rem;
		position: relative;
		line-height: 1.5;
	}

	.materiais-lista li::before {
		content: '📌';
		position: absolute;
		left: 0;
		font-size: 0.7rem;
		top: 0.1rem;
	}

	.dicas-lista li {
		font-size: 0.8125rem;
		color: #374151;
		padding-left: 1.25rem;
		position: relative;
		line-height: 1.5;
	}

	.dicas-lista li::before {
		content: '💡';
		position: absolute;
		left: 0;
		font-size: 0.7rem;
		top: 0.1rem;
	}

	.ver-conteudo-btn {
		display: block;
		text-align: center;
		border: 2px solid;
		border-radius: 0.5rem;
		padding: 0.625rem;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		transition: opacity 0.2s;
	}

	.ver-conteudo-btn:hover { opacity: 0.75; }

	/* Biblioteca */
	.biblioteca-secao { background: #f5f0e8; padding: 3rem 1.5rem; }

	.bib-box {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		border-left: 6px solid #0d7a6c;
	}

	.bib-icon { font-size: 2.5rem; flex-shrink: 0; }

	.bib-box h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.375rem;
		color: #1c1c1e;
		margin: 0 0 0.625rem;
	}

	.bib-box p {
		color: #6b7280;
		font-size: 0.9375rem;
		margin: 0 0 1.25rem;
		line-height: 1.65;
	}

	.bib-contactos { display: flex; gap: 0.875rem; flex-wrap: wrap; }

	.bib-cta {
		display: inline-block;
		background: #0d7a6c;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 0.875rem;
		text-decoration: none;
		transition: background 0.2s;
	}

	.bib-cta:hover { background: #0a6058; }

	@media (prefers-color-scheme: dark) {
		.intro-secao { background: #111; }
		.intro-texto h2, .sessoes-titulo { color: #f9fafb; }
		.intro-texto p { color: #d1d5db; }
		.sessoes-secao { background: #111; }
		.sessao-item { background: #1c1c1e; border-color: #333; }
		.s-info strong { color: #f9fafb; }
		.sessao-corpo { background: #1a1a1a; }
		.sessao-contexto { background: #1c1c1e; }
		.sessao-contexto p { color: #d1d5db; }
		.plano-item { background: #1c1c1e; }
		.plano-corpo strong { color: #f9fafb; }
		.sessao-col h3, .sessao-col-side h3 { color: #f9fafb; }
		.materiais-box, .dicas-box { background: #1c1c1e; }
		.materiais-lista li, .dicas-lista li { color: #d1d5db; }
		.biblioteca-secao { background: #1a1a1a; }
		.bib-box { background: #1c1c1e; }
		.bib-box h2 { color: #f9fafb; }
		.bib-box p { color: #9ca3af; }
	}
</style>
