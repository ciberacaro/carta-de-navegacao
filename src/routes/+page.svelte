<script>
	const grupos = [
		{ href: '/pre-escolar',    emoji: '🌱', nome: 'Pré-escolar',  idades: '3–5 anos',   desc: 'Primeiras descobertas no mundo digital' },
		{ href: '/primeiro-ciclo', emoji: '⛵', nome: '1.º Ciclo',    idades: '6–9 anos',   desc: 'Explorar com curiosidade e cuidado' },
		{ href: '/segundo-ciclo',  emoji: '🗺️', nome: '2.º Ciclo',    idades: '10–11 anos', desc: 'Traçar as primeiras rotas' },
		{ href: '/terceiro-ciclo', emoji: '🧭', nome: '3.º Ciclo',    idades: '12–14 anos', desc: 'Navegar com autonomia crescente' },
		{ href: '/secundario',     emoji: '⚓', nome: 'Secundário',   idades: '15–17 anos', desc: 'Definir a própria rota' },
		{ href: '/adultos',        emoji: '🌐', nome: 'Adultos',      idades: '18–59 anos', desc: 'Navegar com experiência e confiança' },
		{ href: '/seniores',       emoji: '📖', nome: 'Seniores',     idades: '60+ anos',   desc: 'Viajar com sabedoria no mundo digital' },
	];

	const competencias = [
		{ emoji: '🔍', nome: 'Reconhecer', desc: 'Distinguir o real do falso: notícias, perfis, mensagens e esquemas' },
		{ emoji: '🔒', nome: 'Proteger',   desc: 'Guardar dados pessoais, contas e dispositivos em segurança' },
		{ emoji: '💬', nome: 'Comunicar',  desc: 'Partilhar com responsabilidade, respeito e consciência' },
		{ emoji: '⚡', nome: 'Agir',       desc: 'Saber o que fazer quando algo correr mal na internet' },
	];
</script>

<svelte:head>
	<title>Carta de Navegação — Literacia digital para todos</title>
	<meta name="description" content="Saber navegar é tão importante como saber ler. Aprende a mover-te no mundo digital com confiança — para todas as idades." />
</svelte:head>

<!-- Faixa de apresentação institucional -->
<section class="banda-apresentacao" aria-label="Iniciativa institucional">
	<div class="banda-inner">
		<div class="banda-linha-deco" aria-hidden="true"></div>
		<div class="banda-texto">
			<a href="https://www.cm-gaia.pt/pt/cidade/espacos-municipais/bibliotecas/" target="_blank" rel="noopener noreferrer" class="banda-entidade">
				🏛️ <span>Biblioteca Municipal de Vila Nova de Gaia</span>
			</a>
			<span class="banda-apresenta">apresenta, com o apoio da</span>
			<a href="https://www.cm-gaia.pt" target="_blank" rel="noopener noreferrer" class="banda-entidade banda-entidade-apoio">
				🏅 <span>Câmara Municipal de Vila Nova de Gaia</span>
			</a>
		</div>
		<div class="banda-linha-deco" aria-hidden="true"></div>
	</div>
</section>

<!-- Hero -->
<section class="hero">
	<div class="hero-inner">
		<div class="hero-creditos" aria-label="Apresentado por">
			<span class="hero-creditos-nome">Biblioteca Municipal · Câmara Municipal de Vila Nova de Gaia</span>
			<em class="hero-creditos-verb">apresenta</em>
			<div class="hero-creditos-linha" aria-hidden="true"></div>
		</div>
		<p class="hero-kicker">Literacia digital para todos</p>
		<h1>Saber navegar é tão<br>importante como saber ler.</h1>
		<p class="hero-sub">A Carta de Navegação é o teu guia para o mundo digital — para reconhecer, proteger, comunicar e agir com confiança.</p>
		<div class="hero-ctas">
			<a href="#grupos" class="btn-principal">Escolhe a tua faixa etária</a>
			<a href="/competencias" class="btn-secundario">Explorar competências</a>
		</div>
	</div>
</section>

<!-- Grupos etários -->
<section class="grupos" id="grupos">
	<div class="secao-inner">
		<div class="secao-cabecalho">
			<h2>A tua etapa da viagem</h2>
			<p>O mundo digital tem linguagens diferentes consoante a etapa da vida. Escolhe o teu grupo para encontrar conteúdos adaptados à tua realidade.</p>
		</div>
		<div class="grupos-grelha">
			{#each grupos as g}
				<a href={g.href} class="grupo-card">
					<span class="grupo-emoji" aria-hidden="true">{g.emoji}</span>
					<div class="grupo-info">
						<strong class="grupo-nome">{g.nome}</strong>
						<span class="grupo-idades">{g.idades}</span>
						<p class="grupo-desc">{g.desc}</p>
					</div>
					<span class="grupo-seta" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Competências -->
<section class="competencias">
	<div class="secao-inner">
		<div class="secao-cabecalho">
			<h2>O que aprenderás a fazer</h2>
			<p>Quatro competências fundamentais que todos os navegadores digitais precisam de desenvolver, independentemente da idade.</p>
		</div>
		<div class="comp-grelha">
			{#each competencias as c}
				<div class="comp-card">
					<span class="comp-emoji" aria-hidden="true">{c.emoji}</span>
					<h3 class="comp-nome">{c.nome}</h3>
					<p class="comp-desc">{c.desc}</p>
				</div>
			{/each}
		</div>
		<div class="comp-rodape">
			<a href="/competencias" class="btn-explorar">Explorar todas as competências →</a>
		</div>
	</div>
</section>

<!-- Parceria Biblioteca / CM Gaia -->
<section class="parceria" aria-label="Iniciativa da Biblioteca Municipal de Vila Nova de Gaia">
	<div class="parceria-inner">
		<div class="parceria-topo">
			<p class="parceria-kicker">Uma iniciativa para a comunidade de Gaia</p>
			<h2 class="parceria-titulo">Conhecimento para todos,<br>em todos os ecrãs.</h2>
			<p class="parceria-desc">
				Tal como a biblioteca sempre colocou livros ao alcance de todos,
				este recurso coloca literacia digital ao alcance de toda a comunidade —
				gratuitamente, sem publicidade e em português europeu.
			</p>
		</div>
		<div class="parceria-entidades">
			<a href="https://www.cm-gaia.pt/pt/cidade/espacos-municipais/bibliotecas/" target="_blank" rel="noopener noreferrer" class="entidade-card entidade-principal">
				<div class="entidade-icon">🏛️</div>
				<div class="entidade-info">
					<strong>Biblioteca Municipal<br>de Vila Nova de Gaia</strong>
					<span class="entidade-papel">Iniciativa e produção</span>
					<span class="entidade-contacto">22 374 56 70 · bibliotecamunicipal@cm-gaia.pt</span>
				</div>
			</a>
			<div class="entidade-apoio-label">com o apoio de</div>
			<a href="https://www.cm-gaia.pt" target="_blank" rel="noopener noreferrer" class="entidade-card">
				<div class="entidade-icon">🏅</div>
				<div class="entidade-info">
					<strong>Câmara Municipal<br>de Vila Nova de Gaia</strong>
					<span class="entidade-papel">Apoio institucional</span>
					<span class="entidade-contacto">cm-gaia.pt</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Emergency strip -->
<section class="emergencia-strip" aria-label="Linha de emergência digital">
	<div class="emergencia-inner">
		<div class="emergencia-texto">
			<strong>Algo correu mal?</strong>
			<p>Se sofreste uma burla, acesso não autorizado ou outra situação urgente — há ajuda disponível agora.</p>
		</div>
		<div class="emergencia-acoes">
			<a href="/emergencia" class="btn-emergencia">Ver recursos de emergência</a>
			<a href="tel:800219090" class="btn-tel">📞 800 21 90 90</a>
		</div>
	</div>
</section>

<style>
	/* ── Hero ── */
	.hero {
		background: linear-gradient(135deg, #0d7a6c 0%, #0a5c52 100%);
		color: #fff;
		padding: 5rem 1.5rem;
	}

	.hero-inner { max-width: 760px; margin: 0 auto; }

	/* ── Faixa de apresentação ── */
	.banda-apresentacao {
		background: #0f0f0f;
		padding: 1.625rem 1.5rem;
		border-bottom: 1px solid #1e1e1e;
	}

	.banda-inner {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.banda-linha-deco {
		flex: 1;
		height: 1px;
		background: linear-gradient(to right, transparent, #2a4a45);
	}

	.banda-linha-deco:last-child {
		background: linear-gradient(to left, transparent, #2a4a45);
	}

	.banda-texto {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
		flex-shrink: 0;
	}

	.banda-entidade {
		font-family: 'Lora', Georgia, serif;
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e2e8e6;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		transition: color 0.2s;
		white-space: nowrap;
	}

	.banda-entidade:hover { color: #4db6ac; }

	.banda-entidade-apoio {
		color: #94b3ae;
		font-size: 0.875rem;
	}

	.banda-apresenta {
		font-family: 'Lora', Georgia, serif;
		font-style: italic;
		font-size: 0.875rem;
		color: #4b5563;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.banda-linha-deco { display: none; }
		.banda-entidade, .banda-entidade-apoio { font-size: 0.8125rem; }
	}

	/* ── Hero opening credits ── */
	.hero-creditos {
		margin-bottom: 1.75rem;
	}

	.hero-creditos-nome {
		display: block;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: rgba(255,255,255,0.5);
		font-weight: 600;
		margin-bottom: 0.35rem;
	}

	.hero-creditos-verb {
		display: block;
		font-family: 'Lora', Georgia, serif;
		font-style: italic;
		font-size: 1.125rem;
		color: #d4a76a;
		margin-bottom: 0.875rem;
	}

	.hero-creditos-linha {
		width: 3rem;
		height: 2px;
		background: rgba(255,255,255,0.25);
	}

	.hero-kicker {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: 600;
		color: rgba(255,255,255,0.7);
		margin-bottom: 1rem;
	}

	h1 {
		font-family: 'Lora', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 700;
		line-height: 1.15;
		margin-bottom: 1.25rem;
		color: #fff;
	}

	.hero-sub {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255,255,255,0.85);
		max-width: 560px;
		margin-bottom: 2rem;
	}

	.hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

	.btn-principal {
		background: #fff;
		color: #0d7a6c;
		font-weight: 700;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-size: 0.95rem;
		transition: all 0.2s;
		display: inline-block;
	}
	.btn-principal:hover { background: #f0faf8; transform: translateY(-1px); }

	.btn-secundario {
		background: transparent;
		color: rgba(255,255,255,0.9);
		border: 1.5px solid rgba(255,255,255,0.5);
		font-weight: 600;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-size: 0.95rem;
		transition: all 0.2s;
		display: inline-block;
	}
	.btn-secundario:hover { border-color: #fff; color: #fff; }

	/* ── Secções comuns ── */
	.secao-inner { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

	.secao-cabecalho { max-width: 600px; margin-bottom: 3rem; }

	.secao-cabecalho h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: #1c1c1e;
		margin-bottom: 0.75rem;
	}

	.secao-cabecalho p { color: #6b7280; font-size: 1rem; line-height: 1.65; }

	/* ── Grupos etários ── */
	.grupos { padding: 5rem 0; background: #f5f0e8; }

	.grupos-grelha {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
		gap: 1rem;
	}

	.grupo-card {
		background: #fff;
		border: 1px solid #e5e0d8;
		border-radius: 12px;
		padding: 1.25rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		transition: all 0.2s;
	}
	.grupo-card:hover {
		border-color: #0d7a6c;
		box-shadow: 0 4px 16px rgba(13, 122, 108, 0.12);
		transform: translateY(-2px);
	}
	.grupo-card:focus-visible {
		outline: 3px solid #0d7a6c;
		outline-offset: 2px;
	}

	.grupo-emoji { font-size: 2rem; flex-shrink: 0; line-height: 1; }

	.grupo-info { flex: 1; min-width: 0; }

	.grupo-nome {
		display: block;
		font-weight: 700;
		font-size: 1rem;
		color: #1c1c1e;
		margin-bottom: 0.15rem;
	}

	.grupo-idades {
		display: block;
		font-size: 0.75rem;
		color: #0d7a6c;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.35rem;
	}

	.grupo-desc { font-size: 0.85rem; color: #6b7280; line-height: 1.4; }

	.grupo-seta {
		color: #0d7a6c;
		font-size: 1.1rem;
		font-weight: 700;
		opacity: 0;
		transition: opacity 0.2s;
		flex-shrink: 0;
	}
	.grupo-card:hover .grupo-seta { opacity: 1; }

	/* ── Competências ── */
	.competencias { padding: 5rem 0; background: #fff; }

	.comp-grelha {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}

	.comp-card {
		background: #faf9f5;
		border: 1px solid #e5e0d8;
		border-radius: 12px;
		padding: 2rem 1.5rem;
		text-align: center;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.comp-card:hover {
		border-color: #0d7a6c;
		box-shadow: 0 4px 16px rgba(13, 122, 108, 0.08);
	}

	.comp-emoji { font-size: 2.25rem; display: block; margin-bottom: 1rem; line-height: 1; }

	.comp-nome {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: #1c1c1e;
		margin-bottom: 0.5rem;
	}

	.comp-desc { font-size: 0.88rem; color: #6b7280; line-height: 1.55; }

	.comp-rodape { text-align: center; }

	.btn-explorar {
		display: inline-block;
		color: #0d7a6c;
		font-weight: 600;
		font-size: 0.95rem;
		border-bottom: 1.5px solid #0d7a6c;
		padding-bottom: 0.1rem;
		transition: opacity 0.2s;
	}
	.btn-explorar:hover { opacity: 0.75; }

	/* ── Emergência strip ── */
	.emergencia-strip {
		background: #1c1c1e;
		color: #fff;
		padding: 2.5rem 1.5rem;
	}

	.emergencia-inner {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.emergencia-texto { flex: 1; min-width: 200px; }
	.emergencia-texto strong { display: block; font-size: 1.1rem; margin-bottom: 0.35rem; }
	.emergencia-texto p { font-size: 0.9rem; color: rgba(255,255,255,0.65); }

	.emergencia-acoes { display: flex; gap: 0.75rem; flex-wrap: wrap; }

	.btn-emergencia {
		background: #c0392b; color: #fff;
		font-weight: 700; padding: 0.7rem 1.4rem;
		border-radius: 8px; font-size: 0.9rem;
		transition: background 0.2s; display: inline-block;
	}
	.btn-emergencia:hover { background: #a93226; }

	.btn-tel {
		background: rgba(255,255,255,0.1); color: #fff;
		font-weight: 700; padding: 0.7rem 1.25rem;
		border-radius: 8px; font-size: 0.9rem;
		border: 1px solid rgba(255,255,255,0.2);
		transition: background 0.2s; display: inline-block;
	}
	.btn-tel:hover { background: rgba(255,255,255,0.2); }

	/* ── Parceria ── */
	.parceria {
		background: #1c1c1e;
		padding: 4rem 1.5rem;
		border-top: 4px solid #0d7a6c;
	}

	.parceria-inner {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		gap: 3.5rem;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.parceria-topo { flex: 1; min-width: 260px; }

	.parceria-kicker {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #d4a76a;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.parceria-titulo {
		font-family: 'Lora', Georgia, serif;
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		color: #fff;
		line-height: 1.25;
		margin-bottom: 1rem;
	}

	.parceria-desc {
		font-size: 0.9375rem;
		color: rgba(255,255,255,0.65);
		line-height: 1.75;
		max-width: 440px;
	}

	.parceria-entidades {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		min-width: 260px;
		flex-shrink: 0;
	}

	.entidade-card {
		display: flex;
		align-items: center;
		gap: 1.125rem;
		background: rgba(255,255,255,0.06);
		border: 1px solid rgba(255,255,255,0.1);
		border-radius: 0.875rem;
		padding: 1.125rem 1.375rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.entidade-card:hover {
		background: rgba(255,255,255,0.1);
		border-color: #0d7a6c;
	}

	.entidade-principal {
		border-left: 4px solid #0d7a6c;
	}

	.entidade-icon { font-size: 2rem; flex-shrink: 0; }

	.entidade-info {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.entidade-info strong {
		font-size: 0.9rem;
		color: #fff;
		font-weight: 700;
		line-height: 1.35;
	}

	.entidade-papel {
		font-size: 0.75rem;
		color: #d4a76a;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.entidade-contacto {
		font-size: 0.75rem;
		color: rgba(255,255,255,0.4);
	}

	.entidade-apoio-label {
		font-size: 0.75rem;
		color: rgba(255,255,255,0.35);
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0 0.5rem;
	}

	/* ── Responsive ── */
	@media (max-width: 600px) {
		.hero { padding: 3.5rem 1.25rem; }
		.grupos, .competencias { padding: 3.5rem 0; }
		.emergencia-inner { flex-direction: column; align-items: flex-start; }
	}
</style>
