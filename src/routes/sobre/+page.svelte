<script>
	const principios = [
		{ emoji: '📚', titulo: 'Literacia em foco', descricao: 'O nosso objetivo não é assustar — é capacitar. A segurança digital começa por entender, não por temer.' },
		{ emoji: '🇵🇹', titulo: 'Para Portugal', descricao: 'Exemplos reais, contactos portugueses, legislação europeia. Conteúdo contextualizado para quem vive em Portugal.' },
		{ emoji: '♿', titulo: 'Para todos', descricao: 'WCAG 2.1 AA, modo escuro, alto contraste, tamanho de letra ajustável. Acessível a quem mais precisa.' },
		{ emoji: '🔒', titulo: 'Sem tracking', descricao: 'Zero cookies de rastreio, zero publicidade, sem recolha de dados. Ferramentas 100% client-side.' },
		{ emoji: '🌱', titulo: 'Desde cedo', descricao: 'Desde o pré-escolar até seniores. A literacia digital não tem idade para começar.' },
		{ emoji: '⚡', titulo: 'Prático e direto', descricao: 'Guias acionáveis, não teorias. O que fazer agora, em linguagem que todos entendem.' }
	];

	const grupos = [
		{ emoji: '🌱', nome: 'Pré-escolar', idade: '3–5 anos', rota: '/pre-escolar' },
		{ emoji: '⛵', nome: '1.º Ciclo', idade: '6–9 anos', rota: '/primeiro-ciclo' },
		{ emoji: '🗺️', nome: '2.º Ciclo', idade: '10–11 anos', rota: '/segundo-ciclo' },
		{ emoji: '🧭', nome: '3.º Ciclo', idade: '12–14 anos', rota: '/terceiro-ciclo' },
		{ emoji: '⚓', nome: 'Secundário', idade: '15–17 anos', rota: '/secundario' },
		{ emoji: '🌐', nome: 'Adultos', idade: '18–59 anos', rota: '/adultos' },
		{ emoji: '📖', nome: 'Seniores', idade: '60+ anos', rota: '/seniores' }
	];
</script>

<svelte:head>
	<title>Sobre — Carta de Navegação</title>
	<meta name="description" content="O que é a Carta de Navegação, quem a fez e porquê. Literacia digital para todos os portugueses." />
</svelte:head>

<div class="sobre-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">🧭 Sobre o projeto</div>
			<h1>Carta de Navegação</h1>
			<p class="mote">Saber navegar é tão importante como saber ler.</p>
		</div>
	</header>

	<section class="missao">
		<div class="inner">
			<div class="missao-grid">
				<div class="missao-texto">
					<h2>O que é isto?</h2>
					<p>
						A <strong>Carta de Navegação</strong> é um projeto de literacia digital para todos os portugueses,
						independentemente da idade ou nível de experiência. Tal como aprender a ler abriu o mundo a gerações anteriores,
						navegar bem na internet é hoje uma competência essencial — para estudar, trabalhar, comunicar e participar na sociedade.
					</p>
					<p>
						Não somos um site de alertas ou de ameaças. Somos um espaço de aprendizagem positiva:
						<em>o que saber, como fazer, onde ir quando algo corre mal.</em>
					</p>
					<p>
						O conteúdo está organizado por faixa etária — do pré-escolar aos seniores — porque as necessidades,
						os riscos e a linguagem adequada são diferentes em cada etapa da vida.
					</p>
				</div>
				<div class="missao-destaque">
					<div class="destaque-box">
						<div class="destaque-num">7</div>
						<div class="destaque-label">grupos etários<br>cobertos</div>
					</div>
					<div class="destaque-box">
						<div class="destaque-num">4</div>
						<div class="destaque-label">pilares de<br>literacia digital</div>
					</div>
					<div class="destaque-box">
						<div class="destaque-num">0</div>
						<div class="destaque-label">cookies de<br>rastreio</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="biblioteca">
		<div class="inner">
			<div class="bib-grid">
				<div class="bib-logo">
					<div class="bib-icon">🏛️</div>
				</div>
				<div class="bib-texto">
					<h2>Uma oferta da Biblioteca Pública Municipal de Vila Nova de Gaia</h2>
					<p>
						Este projeto é oferecido pela <strong>Biblioteca Pública Municipal de Vila Nova de Gaia</strong>
						como recurso livre e gratuito para a comunidade. A biblioteca tem uma missão histórica de promover
						o acesso ao conhecimento para todos — e a literacia digital é hoje parte dessa missão.
					</p>
					<p>
						Tal como os livros são ferramentas de emancipação, a capacidade de navegar com segurança e
						sentido crítico na internet é uma ferramenta de cidadania plena no século XXI.
					</p>
					<div class="bib-contacto">
						<p><strong>Biblioteca Pública Municipal de Vila Nova de Gaia</strong></p>
						<p>Rua de Angola, 4430-014 Vila Nova de Gaia</p>
						<p>📞 22 374 56 70</p>
						<p>✉️ <a href="mailto:bibliotecamunicipal@cm-gaia.pt">bibliotecamunicipal@cm-gaia.pt</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="principios">
		<div class="inner">
			<h2>Os nossos princípios</h2>
			<div class="principios-grid">
				{#each principios as p}
					<div class="principio-card">
						<div class="principio-emoji">{p.emoji}</div>
						<h3>{p.titulo}</h3>
						<p>{p.descricao}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="grupos">
		<div class="inner">
			<h2>Para quem é</h2>
			<p class="sec-desc">Conteúdo específico para cada fase da vida — linguagem, exemplos e abordagem adaptados.</p>
			<div class="grupos-grid">
				{#each grupos as g}
					<a href={g.rota} class="grupo-pill">
						<span class="grupo-emoji">{g.emoji}</span>
						<span class="grupo-info">
							<strong>{g.nome}</strong>
							<small>{g.idade}</small>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="pilares">
		<div class="inner">
			<h2>Os quatro pilares</h2>
			<div class="pilares-grid">
				<div class="pilar">
					<span class="pilar-icon" style="color: #0d7a6c">🔍</span>
					<h3>Reconhecer</h3>
					<p>Distinguir o real do falso: notícias, perfis, mensagens, ofertas. O ceticismo informado como competência.</p>
				</div>
				<div class="pilar">
					<span class="pilar-icon" style="color: #c97d0f">🔒</span>
					<h3>Proteger</h3>
					<p>Dados, contas, dispositivos. Passwords seguras, autenticação em dois fatores, cópias de segurança.</p>
				</div>
				<div class="pilar">
					<span class="pilar-icon" style="color: #0984E3">💬</span>
					<h3>Comunicar</h3>
					<p>Redes sociais, mensagens, partilha responsável. O que publicamos molda como somos vistos.</p>
				</div>
				<div class="pilar">
					<span class="pilar-icon" style="color: #c0392b">⚡</span>
					<h3>Agir</h3>
					<p>O que fazer quando algo corre mal. Contactos, passos concretos, recuperação de danos.</p>
				</div>
			</div>
			<div class="pilares-cta">
				<a href="/competencias" class="btn-ver">Ver os quatro pilares em detalhe</a>
			</div>
		</div>
	</section>

	<section class="tecnico">
		<div class="inner">
			<h2>Detalhes técnicos</h2>
			<div class="tec-grid">
				<div class="tec-item">
					<h4>Stack</h4>
					<p>SvelteKit + adapter-static, Svelte 5 runes, Cloudflare Pages. Sem base de dados, sem servidor.</p>
				</div>
				<div class="tec-item">
					<h4>Privacidade</h4>
					<p>Sem cookies de rastreio. Sem Google Analytics. Sem publicidade. Preferências guardadas localmente no seu dispositivo.</p>
				</div>
				<div class="tec-item">
					<h4>Acessibilidade</h4>
					<p>WCAG 2.1 AA. Modo escuro, alto contraste (WCAG AAA), tamanho de letra ajustável, navegação por teclado.</p>
				</div>
				<div class="tec-item">
					<h4>PWA</h4>
					<p>Funciona offline. Pode instalar no telemóvel como app. Cache automático das páginas visitadas.</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.sobre-page {
		min-height: 100vh;
	}

	.topo {
		background: linear-gradient(135deg, #0d7a6c 0%, #0a5a52 100%);
		color: white;
		padding: 5rem 1.5rem 4rem;
		text-align: center;
	}

	.topo-inner {
		max-width: 700px;
		margin: 0 auto;
	}

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
		font-size: clamp(2.5rem, 6vw, 4rem);
		margin: 0 0 1rem;
		line-height: 1.15;
	}

	.mote {
		font-family: 'Lora', Georgia, serif;
		font-style: italic;
		font-size: 1.25rem;
		opacity: 0.9;
		margin: 0;
		color: #d4a76a;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
	}

	/* Missão */
	.missao {
		padding: 4rem 1.5rem;
		background: white;
	}

	.missao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		color: #1c1c1e;
		margin: 0 0 1.5rem;
	}

	.missao-grid {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: 3rem;
		align-items: start;
	}

	@media (max-width: 700px) {
		.missao-grid {
			grid-template-columns: 1fr;
		}
	}

	.missao-texto p {
		color: #374151;
		line-height: 1.75;
		margin: 0 0 1.25rem;
		font-size: 1.0625rem;
	}

	.missao-texto strong {
		color: #1c1c1e;
	}

	.missao-destaque {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.destaque-box {
		background: #f5f0e8;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.destaque-num {
		font-family: 'Lora', Georgia, serif;
		font-size: 2.5rem;
		font-weight: 700;
		color: #0d7a6c;
		line-height: 1;
	}

	.destaque-label {
		font-size: 0.875rem;
		color: #6b7280;
		line-height: 1.4;
	}

	/* Biblioteca */
	.biblioteca {
		background: #f5f0e8;
		padding: 4rem 1.5rem;
	}

	.bib-grid {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 2.5rem;
		align-items: start;
	}

	@media (max-width: 600px) {
		.bib-grid {
			grid-template-columns: 1fr;
		}
		.bib-logo {
			display: none;
		}
	}

	.bib-icon {
		font-size: 5rem;
		text-align: center;
		line-height: 1;
		padding-top: 0.5rem;
	}

	.bib-texto h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		color: #1c1c1e;
		margin: 0 0 1.25rem;
	}

	.bib-texto p {
		color: #374151;
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.bib-contacto {
		background: white;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		margin-top: 1.5rem;
		border-left: 4px solid #0d7a6c;
	}

	.bib-contacto p {
		margin: 0.25rem 0;
		font-size: 0.9375rem;
	}

	.bib-contacto a {
		color: #0d7a6c;
		text-decoration: none;
	}

	.bib-contacto a:hover {
		text-decoration: underline;
	}

	/* Princípios */
	.principios {
		background: white;
		padding: 4rem 1.5rem;
	}

	.principios h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		text-align: center;
		color: #1c1c1e;
		margin: 0 0 2.5rem;
	}

	.principios-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.5rem;
	}

	.principio-card {
		background: #faf9f5;
		border-radius: 0.75rem;
		padding: 1.5rem;
	}

	.principio-emoji {
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.principio-card h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.125rem;
		color: #1c1c1e;
		margin: 0 0 0.5rem;
	}

	.principio-card p {
		color: #6b7280;
		font-size: 0.9375rem;
		line-height: 1.6;
		margin: 0;
	}

	/* Grupos */
	.grupos {
		background: #f5f0e8;
		padding: 4rem 1.5rem;
	}

	.grupos h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		text-align: center;
		color: #1c1c1e;
		margin: 0 0 0.75rem;
	}

	.sec-desc {
		text-align: center;
		color: #6b7280;
		margin: 0 0 2rem;
	}

	.grupos-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
	}

	.grupo-pill {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		background: white;
		border-radius: 2rem;
		padding: 0.625rem 1.25rem;
		text-decoration: none;
		color: #1c1c1e;
		border: 2px solid transparent;
		transition: all 0.2s;
	}

	.grupo-pill:hover {
		border-color: #0d7a6c;
		color: #0d7a6c;
	}

	.grupo-emoji {
		font-size: 1.25rem;
	}

	.grupo-info {
		display: flex;
		flex-direction: column;
	}

	.grupo-info strong {
		font-size: 0.9375rem;
		line-height: 1.2;
	}

	.grupo-info small {
		font-size: 0.75rem;
		color: #6b7280;
	}

	/* Pilares */
	.pilares {
		background: white;
		padding: 4rem 1.5rem;
	}

	.pilares h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		text-align: center;
		color: #1c1c1e;
		margin: 0 0 2.5rem;
	}

	.pilares-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}

	.pilar {
		text-align: center;
		padding: 1.5rem 1rem;
		background: #faf9f5;
		border-radius: 0.75rem;
	}

	.pilar-icon {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.pilar h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.125rem;
		margin: 0 0 0.5rem;
		color: #1c1c1e;
	}

	.pilar p {
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0;
	}

	.pilares-cta {
		text-align: center;
	}

	.btn-ver {
		display: inline-block;
		background: #0d7a6c;
		color: white;
		padding: 0.875rem 2rem;
		border-radius: 0.5rem;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.2s;
	}

	.btn-ver:hover {
		background: #0a6058;
	}

	/* Técnico */
	.tecnico {
		background: #f5f0e8;
		padding: 4rem 1.5rem;
	}

	.tecnico h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		text-align: center;
		margin: 0 0 2rem;
		color: #1c1c1e;
	}

	.tec-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
	}

	.tec-item {
		background: white;
		border-radius: 0.75rem;
		padding: 1.25rem;
		border: 1px solid #e5e0d8;
	}

	.tec-item h4 {
		color: #0d7a6c;
		margin: 0 0 0.5rem;
		font-size: 0.9375rem;
		font-family: 'Lora', Georgia, serif;
	}

	.tec-item p {
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0;
	}

</style>
