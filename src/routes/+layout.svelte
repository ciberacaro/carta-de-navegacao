<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	let { children } = $props();

	let menuAberto = $state(false);
	let altoContraste = $state(false);
	let tamanhoLetra = $state('normal');
	let modoEscuro = $state(false);

	if (browser) {
		altoContraste = localStorage.getItem('ac') === '1';
		tamanhoLetra = localStorage.getItem('tl') || 'normal';
		modoEscuro = localStorage.getItem('me') === '1';
	}

	$effect(() => {
		if (!browser) return;
		const html = document.documentElement;
		html.classList.toggle('alto-contraste', altoContraste);
		html.classList.toggle('modo-escuro', modoEscuro);
		html.dataset.letra = tamanhoLetra;
		localStorage.setItem('ac', altoContraste ? '1' : '0');
		localStorage.setItem('tl', tamanhoLetra);
		localStorage.setItem('me', modoEscuro ? '1' : '0');
	});

	$effect(() => {
		page;
		menuAberto = false;
	});

	function cicloLetra() {
		tamanhoLetra = tamanhoLetra === 'normal' ? 'grande' : tamanhoLetra === 'grande' ? 'muitogrande' : 'normal';
	}

	const legendaLetra = { normal: 'A', grande: 'A+', muitogrande: 'A++' };

	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/competencias', label: 'Competências' },
		{ href: '/recursos', label: 'Recursos' },
		{ href: '/ferramentas', label: 'Ferramentas' },
		{ href: '/glossario', label: 'Glossário' },
		{ href: '/sobre', label: 'Sobre' },
	];

	const rotasJovem = ['/pre-escolar', '/primeiro-ciclo', '/segundo-ciclo', '/terceiro-ciclo', '/secundario'];
	const rotasAdulto = ['/adultos', '/seniores'];

	const tema = $derived.by(() => {
		const p = $page.url.pathname;
		if (rotasJovem.some(r => p === r || p.startsWith(r + '/'))) return 'jovem';
		if (rotasAdulto.some(r => p === r || p.startsWith(r + '/'))) return 'adulto';
		return 'neutro';
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Carta de Navegação — Saber navegar é tão importante como saber ler. Literacia digital para todos." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<a href="#conteudo-principal" class="saltar-conteudo">Saltar para o conteúdo</a>

<div class="app" data-tema={tema}>

<div class="barra-institucional" role="banner" aria-label="Iniciativa institucional">
	<div class="barra-inner">
		<a href="https://www.cm-gaia.pt/pt/cidade/espacos-municipais/bibliotecas/" target="_blank" rel="noopener noreferrer" class="barra-ent">
			<span class="barra-icon">🏛️</span>
			<span class="barra-nome">Biblioteca Pública Municipal de Vila Nova de Gaia</span>
		</a>
		<span class="barra-sep" aria-hidden="true">·</span>
		<a href="https://www.cm-gaia.pt" target="_blank" rel="noopener noreferrer" class="barra-ent">
			<span class="barra-icon">🏅</span>
			<span class="barra-nome">Câmara Municipal de Vila Nova de Gaia</span>
		</a>
	</div>
</div>

<header>
	<nav aria-label="Navegação principal">
		<a href="/" class="logo">🧭 <span>Carta de Navegação</span></a>

		<div class="nav-desktop">
			{#each navLinks as l}
				<a href={l.href} class:atual={$page.url.pathname === l.href}>{l.label}</a>
			{/each}
			<a href="/emergencia" class="btn-emergencia-nav">SOS</a>
		</div>

		<div class="nav-acoes">
			<a class="a11y-btn" href="/pesquisa" aria-label="Pesquisar" title="Pesquisar">🔍</a>
			<button class="a11y-btn" onclick={cicloLetra} aria-label="Tamanho da letra: {legendaLetra[tamanhoLetra]}" title="Tamanho da letra" class:ativo={tamanhoLetra !== 'normal'}>
				{legendaLetra[tamanhoLetra]}
			</button>
			<button class="a11y-btn" onclick={() => modoEscuro = !modoEscuro} aria-pressed={modoEscuro} aria-label="Modo escuro" title="Modo escuro" class:ativo={modoEscuro}>
				{modoEscuro ? '☀' : '🌙'}
			</button>
			<button class="a11y-btn" onclick={() => altoContraste = !altoContraste} aria-pressed={altoContraste} aria-label="Alto contraste" title="Alto contraste" class:ativo={altoContraste}>
				◑
			</button>
			<button class="hamburger" onclick={() => menuAberto = !menuAberto} aria-expanded={menuAberto} aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}>
				{menuAberto ? '✕' : '☰'}
			</button>
		</div>
	</nav>

	{#if menuAberto}
		<div class="menu-mobile" role="dialog" aria-label="Menu de navegação">
			{#each navLinks as l}
				<a href={l.href}>{l.label}</a>
			{/each}
			<a href="/emergencia" class="menu-emergencia">SOS — Emergência Digital</a>
		</div>
	{/if}
</header>

<div id="conteudo-principal">
	{@render children()}
</div>

<footer>
	<div class="footer-parceiros">
		<div class="parceiros-inner">
			<p class="parceiros-label">Uma iniciativa de</p>
			<div class="parceiros-cards">
				<a href="https://www.cm-gaia.pt/pt/cidade/espacos-municipais/bibliotecas/" target="_blank" rel="noopener noreferrer" class="parceiro-card parceiro-principal">
					<span class="parceiro-icon">🏛️</span>
					<span class="parceiro-dados">
						<strong>Biblioteca Pública Municipal</strong>
						<span>de Vila Nova de Gaia</span>
						<small>22 374 56 70 · bibliotecamunicipal@cm-gaia.pt</small>
					</span>
				</a>
				<span class="parceiros-sep-txt">com o apoio de</span>
				<a href="https://www.cm-gaia.pt" target="_blank" rel="noopener noreferrer" class="parceiro-card">
					<span class="parceiro-icon">🏅</span>
					<span class="parceiro-dados">
						<strong>Câmara Municipal</strong>
						<span>de Vila Nova de Gaia</span>
						<small>cm-gaia.pt</small>
					</span>
				</a>
			</div>
		</div>
	</div>
	<div class="footer-inner">
		<p class="footer-logo">🧭 Carta de Navegação</p>
		<p class="footer-mote">Saber navegar é tão importante como saber ler.</p>
		<p class="footer-desc">Gratuito · Sem publicidade · Sem recolha de dados · PT-PT</p>
		<nav aria-label="Navegação de rodapé" class="footer-links">
			<a href="/competencias">Competências</a>
			<a href="/recursos">Recursos</a>
			<a href="/ferramentas">Ferramentas</a>
			<a href="/glossario">Glossário</a>
			<a href="/educadores">Educadores</a>
			<a href="/sobre">Sobre</a>
		</nav>
		<p class="footer-note">Linha Internet Segura <a href="tel:800219090">800 21 90 90</a> · APAV <a href="tel:116006">116 006</a> · Emergência <a href="tel:112">112</a></p>
	</div>
</footer>

</div>

<style>
	/* ── Reset global ── */
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
	:global(body) { font-family: 'Inter', sans-serif; background: #faf9f5; color: #1c1c1e; line-height: 1.6; }
	:global(a) { color: inherit; text-decoration: none; }
	:global(h1, h2, h3, h4) { line-height: 1.2; font-family: 'Lora', Georgia, serif; }
	:global(:focus-visible) { outline: 3px solid #0d7a6c; outline-offset: 3px; border-radius: 3px; }
	:global([data-letra='grande']) { font-size: 112%; }
	:global([data-letra='muitogrande']) { font-size: 125%; }

	/* ── High contrast (WCAG AAA 21:1) ── */
	:global(.alto-contraste),
	:global(.alto-contraste body) { background: #000 !important; color: #fff !important; }
	:global(.alto-contraste *) { background-image: none !important; text-shadow: none !important; box-shadow: none !important; }
	:global(.alto-contraste *:not(button):not(.btn-emergencia-nav):not(.menu-emergencia):not(.btn-emergencia):not(.btn-tel):not(.btn-principal):not(.btn-secundario)) {
		color: #fff !important; background-color: transparent !important;
	}
	:global(.alto-contraste a) { color: #FFFF00 !important; text-decoration: underline !important; }
	:global(.alto-contraste a:visited) { color: #FFB0FF !important; }
	:global(.alto-contraste a:focus-visible) { outline: 3px solid #FFFF00 !important; outline-offset: 3px !important; }
	:global(.alto-contraste button) { background: #fff !important; color: #000 !important; border: 2px solid #fff !important; }
	:global(.alto-contraste header), :global(.alto-contraste footer) { background: #000 !important; color: #fff !important; border-color: #fff !important; }
	:global(.alto-contraste *) { border-color: #fff !important; }
	:global(.alto-contraste img), :global(.alto-contraste svg) { filter: contrast(1.2); }

	/* ── Dark mode ── */
	:global(.modo-escuro), :global(.modo-escuro body) { background: #0f1d1b !important; color: #e2e8e6 !important; }
	:global(.modo-escuro header) { background: #1a2e2b !important; border-bottom-color: #2a4a45 !important; }
	:global(.modo-escuro .logo) { color: #4db6ac !important; }
	:global(.modo-escuro .nav-desktop a) { color: #94b3ae !important; }
	:global(.modo-escuro .nav-desktop a:hover), :global(.modo-escuro .nav-desktop a.atual) { color: #e2e8e6 !important; }
	:global(.modo-escuro .a11y-btn) { border-color: #2a4a45 !important; color: #94b3ae !important; }
	:global(.modo-escuro .a11y-btn:hover) { border-color: #4db6ac !important; color: #4db6ac !important; }
	:global(.modo-escuro .a11y-btn.ativo) { background: #4db6ac !important; border-color: #4db6ac !important; color: #0f1d1b !important; }
	:global(.modo-escuro .hamburger) { border-color: #2a4a45 !important; color: #e2e8e6 !important; }
	:global(.modo-escuro .menu-mobile) { background: #1a2e2b !important; border-top-color: #2a4a45 !important; }
	:global(.modo-escuro .menu-mobile a) { color: #e2e8e6 !important; border-bottom-color: #2a4a45 !important; }
	:global(.modo-escuro footer) { background: #050e0d !important; }
	:global(.modo-escuro h1), :global(.modo-escuro h2), :global(.modo-escuro h3) { color: #e2e8e6 !important; }
	:global(.modo-escuro p), :global(.modo-escuro li) { color: #cbd5d1 !important; }

	/* ── App wrapper ── */
	.app { min-height: 100vh; display: flex; flex-direction: column; }
	.app > footer { margin-top: auto; }

	/* ── Barra institucional ── */
	.barra-institucional {
		background: #f5f0e8;
		border-bottom: 1px solid #e0d9ce;
		padding: 0.45rem 1.5rem;
	}

	.barra-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.barra-ent {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.775rem;
		font-weight: 600;
		color: #374151;
		text-decoration: none;
		letter-spacing: 0.01em;
		transition: color 0.15s;
	}

	.barra-ent:hover { color: #0d7a6c; }

	.barra-icon { font-size: 0.9rem; }

	.barra-sep {
		color: #9ca3af;
		font-size: 0.875rem;
	}

	@media (max-width: 480px) {
		.barra-nome { display: none; }
		.barra-icon { font-size: 1.1rem; }
		.barra-ent { gap: 0; }
	}

	/* ── Skip link ── */
	.saltar-conteudo {
		position: absolute; top: -100%; left: 1rem;
		background: #0d7a6c; color: #fff;
		padding: 0.5rem 1rem; border-radius: 0 0 0.5rem 0.5rem;
		font-weight: 700; font-size: 0.9rem; z-index: 9999;
	}
	.saltar-conteudo:focus { top: 0; }

	/* ── Header ── */
	header {
		background: #fff;
		border-bottom: 1px solid #e5e0d8;
		position: sticky; top: 0; z-index: 200;
	}

	nav {
		display: flex; align-items: center;
		justify-content: space-between;
		padding: 0.875rem 1.5rem;
		max-width: 1100px; margin: 0 auto; gap: 1rem;
	}

	.logo {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700; font-size: 1.15rem;
		color: #0d7a6c;
		display: flex; align-items: center; gap: 0.4rem;
		flex-shrink: 0;
	}

	.nav-desktop {
		display: flex; align-items: center;
		gap: 1.5rem; flex: 1; justify-content: center;
	}

	.nav-desktop a {
		font-size: 0.9rem; font-weight: 500;
		color: #555; transition: color 0.2s; white-space: nowrap;
	}

	.nav-desktop a:hover, .nav-desktop a.atual { color: #0d7a6c; }

	.btn-emergencia-nav {
		background: #c0392b; color: white !important;
		font-weight: 700 !important; font-size: 0.82rem !important;
		padding: 0.4rem 0.9rem; border-radius: 999px;
		transition: background 0.2s !important; letter-spacing: 0.05em;
	}
	.btn-emergencia-nav:hover { background: #a93226 !important; }

	.nav-acoes { display: flex; align-items: center; gap: 0.4rem; flex-shrink: 0; }

	.a11y-btn {
		background: transparent; border: 1px solid #ddd;
		color: #666; border-radius: 6px;
		padding: 0.4rem 0.7rem; font-size: 1rem;
		font-weight: 700; font-family: inherit;
		cursor: pointer; transition: all 0.15s; line-height: 1.3;
		text-decoration: none; display: inline-flex;
		align-items: center; justify-content: center;
	}
	.a11y-btn:hover { border-color: #0d7a6c; color: #0d7a6c; }
	.a11y-btn.ativo { background: #0d7a6c; border-color: #0d7a6c; color: #fff; }

	.hamburger {
		display: none; background: transparent;
		border: 1px solid #ddd; color: #1c1c1e;
		border-radius: 6px; padding: 0.3rem 0.6rem;
		font-size: 1.1rem; cursor: pointer;
		font-family: inherit; line-height: 1.3;
	}

	/* ── Mobile menu ── */
	.menu-mobile { border-top: 1px solid #f0ebe4; display: flex; flex-direction: column; }
	.menu-mobile a {
		padding: 1rem 1.5rem; font-size: 1rem;
		font-weight: 500; color: #333;
		border-bottom: 1px solid #f5f0e8; transition: background 0.15s;
	}
	.menu-mobile a:hover { background: #f5f0e8; }
	.menu-emergencia { color: #c0392b !important; font-weight: 700 !important; }

	/* ── Footer ── */
	footer {
		background: #1c1c1e; color: #9ca3af;
		padding: 3rem 1.5rem; margin-top: 5rem;
		text-align: center;
	}

	.footer-inner {
		max-width: 700px; margin: 0 auto;
		display: flex; flex-direction: column; gap: 0.65rem;
	}

	.footer-logo { font-family: 'Lora', Georgia, serif; font-weight: 700; font-size: 1.1rem; color: #fff; }

	.footer-mote {
		font-family: 'Lora', Georgia, serif;
		font-style: italic; font-size: 0.95rem; color: #d4a76a;
	}

	.footer-desc { font-size: 0.8rem; }

	.footer-links { display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap; }
	.footer-links a { color: #ccc; font-size: 0.82rem; transition: color 0.2s; }
	.footer-links a:hover { color: #fff; }
	.footer-links a:focus-visible { outline: 2px solid #4db6ac; outline-offset: 3px; border-radius: 2px; }

	.footer-note { font-size: 0.78rem; color: #bbb; }
	.footer-note a { color: #ccc; text-decoration: underline; }
	.footer-note a:hover { color: #fff; }

	/* ── Footer parceiros ── */
	.footer-parceiros {
		background: #111;
		border-bottom: 1px solid #222;
		padding: 2rem 1.5rem;
	}

	.parceiros-inner {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		align-items: center;
	}

	.parceiros-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #4b5563;
		margin: 0;
		font-weight: 600;
	}

	.parceiros-cards {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.parceiro-card {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		background: rgba(255,255,255,0.04);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 0.625rem;
		padding: 0.875rem 1.125rem;
		transition: all 0.2s;
	}

	.parceiro-card:hover {
		background: rgba(255,255,255,0.08);
		border-color: #0d7a6c;
	}

	.parceiro-principal { border-left: 3px solid #0d7a6c; }

	.parceiro-icon { font-size: 1.5rem; flex-shrink: 0; }

	.parceiro-dados {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.parceiro-dados strong { font-size: 0.8125rem; color: #e5e7eb; line-height: 1.2; }
	.parceiro-dados span { font-size: 0.75rem; color: #9ca3af; }
	.parceiro-dados small { font-size: 0.6875rem; color: #4b5563; }

	.parceiros-sep-txt {
		font-size: 0.7rem;
		color: #374151;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		white-space: nowrap;
	}

	/* ── Responsive ── */
	@media (max-width: 768px) {
		.nav-desktop { display: none; }
		.hamburger { display: block; }
	}

	/* ── TEMA: JOVEM (pré-escolar → secundário) ── */
	:global(.app[data-tema='jovem']) { background: #fffbf0; color: #1c1c1e; }
	:global(.app[data-tema='jovem']) header { background: #fffbf0; border-bottom: 3px solid #1c1c1e; }
	:global(.app[data-tema='jovem']) .logo { color: #c97d0f; font-family: 'Inter', sans-serif; font-weight: 900; }
	:global(.app[data-tema='jovem']) .nav-desktop a { font-weight: 700; color: #1c1c1e; text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.04em; }
	:global(.app[data-tema='jovem']) .nav-desktop a.atual, :global(.app[data-tema='jovem']) .nav-desktop a:hover { color: #c97d0f; }
	:global(.app[data-tema='jovem']) .btn-emergencia-nav { background: #c97d0f; border-radius: 0; border: 2px solid #1c1c1e; box-shadow: 2px 2px 0 #1c1c1e; }
	:global(.app[data-tema='jovem']) .btn-emergencia-nav:hover { background: #a86809 !important; }
	:global(.app[data-tema='jovem']) .a11y-btn { border: 2px solid #1c1c1e; border-radius: 0; color: #1c1c1e; font-weight: 800; }
	:global(.app[data-tema='jovem']) .a11y-btn:hover { background: #fde68a; color: #1c1c1e; border-color: #1c1c1e; }
	:global(.app[data-tema='jovem']) .a11y-btn.ativo { background: #1c1c1e; border-color: #1c1c1e; color: #fde68a; }
	:global(.app[data-tema='jovem']) footer { background: #1c1c1e; border-top: 4px solid #c97d0f; margin-top: 4rem; }

	/* ── TEMA: ADULTO (adultos, seniores) ── */
	:global(.app[data-tema='adulto']) { background: #fdfcf8; color: #1a1a1a; }
	:global(.app[data-tema='adulto']) header { background: #fdfcf8; border-bottom: 1px solid #1a1a1a; }
	:global(.app[data-tema='adulto']) .logo { font-family: 'Lora', Georgia, serif; color: #1a1a1a; }
	:global(.app[data-tema='adulto']) .nav-desktop a { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.82rem; color: #333; }
	:global(.app[data-tema='adulto']) .nav-desktop a.atual, :global(.app[data-tema='adulto']) .nav-desktop a:hover { color: #0d7a6c; }
	:global(.app[data-tema='adulto']) footer { background: #fdfcf8; border-top: 2px solid #1a1a1a; color: #333; margin-top: 5rem; }
	:global(.app[data-tema='adulto']) .footer-logo { color: #1a1a1a; }
	:global(.app[data-tema='adulto']) .footer-mote { color: #0d7a6c; }
	:global(.app[data-tema='adulto']) .footer-links a { color: #333; }
	:global(.app[data-tema='adulto']) .footer-links a:hover { color: #0d7a6c; }
	:global(.app[data-tema='adulto']) .footer-note { color: #555; }
	:global(.app[data-tema='adulto']) .footer-note a { color: #333; }
</style>
