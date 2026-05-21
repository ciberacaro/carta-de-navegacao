<script>
	import { browser } from '$app/environment';

	let query = $state('');

	if (browser) {
		const params = new URLSearchParams(window.location.search);
		query = params.get('q') || '';
	}

	$effect(() => {
		if (!browser) return;
		const url = new URL(window.location.href);
		if (query) url.searchParams.set('q', query);
		else url.searchParams.delete('q');
		history.replaceState({}, '', url);
	});

	const indice = [
		// Páginas principais
		{ titulo: 'Início', url: '/', tipo: 'página', tags: ['home', 'início', 'literacia digital', 'carta de navegação'] },
		{ titulo: 'Competências', url: '/competencias', tipo: 'página', tags: ['reconhecer', 'proteger', 'comunicar', 'agir', 'pilares', 'competências'] },
		{ titulo: 'Recursos', url: '/recursos', tipo: 'página', tags: ['entidades', 'ferramentas', 'apoio', 'denúncia', 'CNCS', 'APAV', 'Bitwarden'] },
		{ titulo: 'Ferramentas', url: '/ferramentas', tipo: 'página', tags: ['verificador', 'password', 'URL', 'analisador', 'gerador', 'Bitwarden', 'VirusTotal'] },
		{ titulo: 'Glossário', url: '/glossario', tipo: 'página', tags: ['definições', 'termos', 'dicionário', 'conceitos'] },
		{ titulo: 'Educadores', url: '/educadores', tipo: 'página', tags: ['professores', 'formadores', 'planos de aula', 'sessões', 'biblioteca'] },
		{ titulo: 'Emergência Digital', url: '/emergencia', tipo: 'página', tags: ['SOS', 'burla', 'ransomware', 'conta comprometida', 'urgente', 'transferência'] },
		{ titulo: 'Sobre', url: '/sobre', tipo: 'página', tags: ['sobre', 'projeto', 'biblioteca', 'gaia', 'câmara', 'missão'] },

		// Faixas etárias
		{ titulo: 'Pré-escolar (3–5 anos)', url: '/pre-escolar', tipo: 'faixa', tags: ['crianças', 'pré-escolar', 'tablet', 'pais', 'adulto', '3 anos', '4 anos', '5 anos'] },
		{ titulo: '1.º Ciclo (6–10 anos)', url: '/primeiro-ciclo', tipo: 'faixa', tags: ['primeiro ciclo', 'criança', 'pesquisa', 'password', 'escola primária'] },
		{ titulo: '2.º Ciclo (10–12 anos)', url: '/segundo-ciclo', tipo: 'faixa', tags: ['segundo ciclo', 'redes sociais', 'cyberbullying', 'privacidade', 'jogos'] },
		{ titulo: '3.º Ciclo (12–15 anos)', url: '/terceiro-ciclo', tipo: 'faixa', tags: ['terceiro ciclo', 'pensamento crítico', 'dados', 'identidade digital', 'RGPD', 'desinformação'] },
		{ titulo: 'Secundário (15–18 anos)', url: '/secundario', tipo: 'faixa', tags: ['secundário', 'portfólio', 'IA', 'inteligência artificial', 'saúde mental', 'redes sociais'] },
		{ titulo: 'Adultos (18–59 anos)', url: '/adultos', tipo: 'faixa', tags: ['adultos', 'trabalho', 'MB Way', 'banco', 'phishing', 'RGPD', 'fraude'] },
		{ titulo: 'Ainda Mais Adultos (60+ anos)', url: '/seniores', tipo: 'faixa', tags: ['seniores', 'ainda mais adultos', 'idosos', 'WhatsApp', 'burla', 'Chave Móvel Digital', 'SNS24', 'Finanças'] },

		// Temas / conceitos-chave
		{ titulo: 'Phishing e emails falsos', url: '/glossario#phishing', tipo: 'tema', tags: ['phishing', 'email falso', 'banco', 'CTT', 'link suspeito'] },
		{ titulo: 'Passwords seguras', url: '/ferramentas#password', tipo: 'tema', tags: ['password', 'senha', 'gestor', 'Bitwarden', 'segurança'] },
		{ titulo: 'Autenticação em dois fatores (2FA)', url: '/glossario#2fa', tipo: 'tema', tags: ['2FA', 'autenticação', 'dois fatores', 'SMS', 'segurança'] },
		{ titulo: 'Ransomware', url: '/glossario#ransomware', tipo: 'tema', tags: ['ransomware', 'ficheiros bloqueados', 'resgate', 'vírus', 'No More Ransom'] },
		{ titulo: 'Burla romântica', url: '/emergencia', tipo: 'tema', tags: ['burla romântica', 'romance scam', 'catfishing', 'namoro', 'dinheiro'] },
		{ titulo: 'Desinformação e fake news', url: '/glossario#desinformação', tipo: 'tema', tags: ['desinformação', 'fake news', 'fact-checking', 'Polígrafo', 'verificação'] },
		{ titulo: 'RGPD e direitos digitais', url: '/glossario#rgpd', tipo: 'tema', tags: ['RGPD', 'GDPR', 'dados pessoais', 'CNPD', 'direito ao apagamento'] },
		{ titulo: 'Deepfake e IA generativa', url: '/glossario#deepfake', tipo: 'tema', tags: ['deepfake', 'IA', 'inteligência artificial', 'imagem falsa', 'vídeo manipulado'] },
		{ titulo: 'Ciberbullying', url: '/glossario#ciberbullying', tipo: 'tema', tags: ['ciberbullying', 'bullying', 'assédio online', 'jovens', 'redes sociais'] },
		{ titulo: 'MB Way e fraudes bancárias', url: '/adultos', tipo: 'tema', tags: ['MB Way', 'transferência', 'banco', 'fraude', 'phishing bancário'] },
		{ titulo: 'Chave Móvel Digital', url: '/seniores', tipo: 'tema', tags: ['Chave Móvel Digital', 'autenticação gov', 'finanças', 'SNS24', 'Segurança Social'] },
		{ titulo: 'Privacidade e dados pessoais', url: '/competencias#proteger', tipo: 'tema', tags: ['privacidade', 'dados', 'cookies', 'rastreio', 'RGPD'] },
		{ titulo: 'Identidade digital e reputação', url: '/terceiro-ciclo', tipo: 'tema', tags: ['identidade digital', 'reputação', 'redes sociais', 'publicações', 'LinkedIn'] },
		{ titulo: 'SIM Swap', url: '/glossario#sim-swap', tipo: 'tema', tags: ['SIM swap', 'telemóvel', 'número', 'operadora', 'fraude'] },
		{ titulo: 'Smishing — SMS falso', url: '/glossario#smishing', tipo: 'tema', tags: ['smishing', 'SMS', 'CTT', 'falsificação', 'link'] },
	];

	const sugestoes = ['phishing', 'MB Way', 'password', 'RGPD', 'ransomware', 'burla', 'redes sociais', 'Chave Móvel Digital', 'inteligência artificial', 'ciberbullying'];

	function normalizar(s) {
		return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
	}

	const resultados = $derived.by(() => {
		const q = normalizar(query.trim());
		if (!q || q.length < 2) return [];

		return indice
			.map(item => {
				let pontos = 0;
				const tituloN = normalizar(item.titulo);
				const tagsN = item.tags.map(normalizar);

				if (tituloN.includes(q)) pontos += 3;
				for (const t of tagsN) {
					if (t === q) pontos += 3;
					else if (t.includes(q)) pontos += 1;
				}
				return { ...item, pontos };
			})
			.filter(i => i.pontos > 0)
			.sort((a, b) => b.pontos - a.pontos);
	});

	const tipoLabel = {
		página: 'Página',
		faixa: 'Faixa etária',
		tema: 'Tema',
	};

	const tipoCor = {
		página: '#0d7a6c',
		faixa: '#c97d0f',
		tema: '#0984E3',
	};
</script>

<svelte:head>
	<title>{query ? `"${query}" — Pesquisa` : 'Pesquisa'} — Carta de Navegação</title>
	<meta name="description" content="Pesquisa no conteúdo da Carta de Navegação." />
</svelte:head>

<div class="pesquisa-page">
	<header class="topo">
		<div class="topo-inner">
			<h1>🔍 Pesquisa</h1>
			<div class="pesquisa-wrapper">
				<label for="q" class="sr-only">Pesquisar no site</label>
				<input
					id="q"
					type="search"
					bind:value={query}
					placeholder="O que procura? (ex: phishing, password, RGPD...)"
					class="pesquisa-input"
					autofocus
				/>
				{#if query}
					<button onclick={() => query = ''} class="limpar" aria-label="Limpar pesquisa">✕</button>
				{/if}
			</div>
		</div>
	</header>

	<section class="resultados-secao">
		<div class="inner">
			{#if !query || query.length < 2}
				<div class="estado-inicial">
					<p class="estado-titulo">Sugestões de pesquisa</p>
					<div class="sugestoes">
						{#each sugestoes as s}
							<button onclick={() => query = s} class="sugestao-btn">{s}</button>
						{/each}
					</div>
					<div class="nav-rapida">
						<p class="nav-titulo">Navegação rápida</p>
						<div class="nav-grid">
							<a href="/competencias" class="nav-card">🎯 Competências</a>
							<a href="/glossario" class="nav-card">📖 Glossário</a>
							<a href="/ferramentas" class="nav-card">🛠️ Ferramentas</a>
							<a href="/recursos" class="nav-card">🔗 Recursos</a>
							<a href="/educadores" class="nav-card">👩‍🏫 Educadores</a>
							<a href="/emergencia" class="nav-card">🆘 Emergência</a>
						</div>
					</div>
				</div>
			{:else if resultados.length === 0}
				<div class="sem-resultados">
					<p class="sr-emoji">🗺️</p>
					<p>Nenhum resultado para "<strong>{query}</strong>"</p>
					<p class="sr-sub">Tente outras palavras ou navegue pelos links abaixo.</p>
					<button onclick={() => query = ''} class="resetar-btn">Ver sugestões</button>
				</div>
			{:else}
				<p class="contagem">
					{resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'} para
					"<strong>{query}</strong>"
				</p>
				<div class="resultados-lista">
					{#each resultados as r}
						<a href={r.url} class="resultado-card">
							<div class="resultado-top">
								<span class="resultado-tipo" style="background: {tipoCor[r.tipo]}">
									{tipoLabel[r.tipo]}
								</span>
								<span class="resultado-url">{r.url}</span>
							</div>
							<h2 class="resultado-titulo">{r.titulo}</h2>
							<p class="resultado-tags">{r.tags.slice(0, 4).join(' · ')}</p>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	.sr-only {
		position: absolute; width: 1px; height: 1px;
		padding: 0; overflow: hidden;
		clip: rect(0,0,0,0); white-space: nowrap; border: 0;
	}

	.pesquisa-page { min-height: 100vh; }

	.topo {
		background: linear-gradient(135deg, #0d7a6c 0%, #0a5a52 100%);
		padding: 3rem 1.5rem;
	}

	.topo-inner { max-width: 700px; margin: 0 auto; }

	.topo h1 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		color: white;
		margin: 0 0 1.25rem;
	}

	.pesquisa-wrapper { position: relative; display: flex; align-items: center; }

	.pesquisa-input {
		width: 100%;
		padding: 1rem 3rem 1rem 1.25rem;
		border-radius: 0.75rem;
		border: none;
		font-size: 1.0625rem;
		background: white;
		color: #1c1c1e;
		box-shadow: 0 4px 20px rgba(0,0,0,0.2);
	}

	.pesquisa-input:focus { outline: 3px solid #d4a76a; outline-offset: 2px; }

	.limpar {
		position: absolute; right: 0.875rem;
		background: none; border: none;
		color: #6b7280; cursor: pointer;
		font-size: 1.125rem; padding: 0.25rem;
	}

	.inner { max-width: 800px; margin: 0 auto; }

	.resultados-secao { background: #faf9f5; padding: 2.5rem 1.5rem; min-height: 400px; }

	/* Estado inicial */
	.estado-inicial { padding-top: 0.5rem; }

	.estado-titulo, .nav-titulo {
		font-size: 0.8125rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #6b7280;
		font-weight: 600;
		margin: 0 0 0.875rem;
	}

	.sugestoes {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2.5rem;
	}

	.sugestao-btn {
		background: white;
		border: 1.5px solid #e5e7eb;
		border-radius: 2rem;
		padding: 0.4rem 1rem;
		font-size: 0.875rem;
		cursor: pointer;
		color: #374151;
		transition: all 0.15s;
	}

	.sugestao-btn:hover { border-color: #0d7a6c; color: #0d7a6c; }

	.nav-rapida { margin-top: 2rem; }

	.nav-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 0.625rem;
	}

	.nav-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.625rem;
		padding: 0.875rem 1rem;
		text-decoration: none;
		color: #374151;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.15s;
	}

	.nav-card:hover { border-color: #0d7a6c; color: #0d7a6c; }

	/* Sem resultados */
	.sem-resultados { text-align: center; padding: 3rem 1rem; }
	.sr-emoji { font-size: 3rem; margin-bottom: 1rem; }
	.sem-resultados p { color: #6b7280; font-size: 1.0625rem; margin: 0 0 0.5rem; }
	.sr-sub { font-size: 0.9rem; color: #9ca3af; }

	.resetar-btn {
		margin-top: 1.25rem;
		background: #0d7a6c;
		color: white;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
	}

	/* Resultados */
	.contagem { color: #6b7280; font-size: 0.9375rem; margin: 0 0 1.25rem; }

	.resultados-lista { display: flex; flex-direction: column; gap: 0.75rem; }

	.resultado-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
		display: block;
	}

	.resultado-card:hover {
		border-color: #0d7a6c;
		box-shadow: 0 2px 12px rgba(13,122,108,0.1);
	}

	.resultado-top {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		margin-bottom: 0.5rem;
	}

	.resultado-tipo {
		color: white;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 0.15rem 0.5rem;
		border-radius: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.resultado-url { font-size: 0.8125rem; color: #0d7a6c; }

	.resultado-titulo {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.125rem;
		color: #1c1c1e;
		margin: 0 0 0.375rem;
	}

	.resultado-tags { font-size: 0.8125rem; color: #9ca3af; margin: 0; }

</style>
