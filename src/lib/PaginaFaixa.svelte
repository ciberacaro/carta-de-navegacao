<script>
	import Quiz from './Quiz.svelte';

	let { emoji, titulo, subtitulo, cor, fundo, introducao, temas, perguntas, dicas, variante = 'adulto', historias = [], tema = 'jovem' } = $props();
</script>

<svelte:head>
	<title>{titulo} — Carta de Navegação</title>
</svelte:head>

<div class="pagina variante-{variante} tema-{tema}" style="--cor: {cor}; --fundo: {fundo}">
	<div class="topo">
		<div class="container">
			<a href="/" class="voltar">← Início</a>
			<span class="emoji-grande">{emoji}</span>
			<h1>{titulo}</h1>
			<p class="subtitulo">{subtitulo}</p>
		</div>
	</div>

	<main class="container">
		<section class="intro">
			<p>{introducao}</p>
		</section>

		<section class="temas">
			<h2>O que vais aprender</h2>
			<div class="grelha-temas">
				{#each temas as t}
					<div class="tema-card">
						<span class="tema-icone">{t.icone}</span>
						<h3>{t.titulo}</h3>
						<p>{t.conteudo}</p>
					</div>
				{/each}
			</div>
		</section>

		{#if historias.length > 0}
			<section class="historias">
				<h2>Histórias do quotidiano</h2>
				<p class="hist-desc">Situações reais adaptadas para ilustrar o que aprendeste.</p>
				<div class="historias-lista">
					{#each historias as h}
						<article class="historia-card">
							<h3>{h.titulo}</h3>
							<p class="narrativa">{h.narrativa}</p>
							<div class="licao">
								<strong>O que aprendemos:</strong>
								<span>{h.licao}</span>
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		<section class="dicas-secao">
			<h2>Dicas rápidas</h2>
			<ul class="dicas">
				{#each dicas as dica}
					<li>{dica}</li>
				{/each}
			</ul>
		</section>

		<section class="quiz-secao">
			<h2>Testa os teus conhecimentos</h2>
			<p class="quiz-desc">Responde às perguntas abaixo para verificares o que aprendeste.</p>
			<Quiz {perguntas} {cor} />
		</section>
	</main>
</div>

<style>
	/* ── BASE ── */
	.pagina { min-height: 100vh; }

	.topo {
		background: linear-gradient(135deg, var(--fundo), white);
		border-bottom: 3px solid var(--cor);
		padding: 4rem 1.5rem 2.5rem;
		text-align: center;
	}

	.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }

	.voltar { display: inline-block; color: #6b7280; margin-bottom: 1.5rem; transition: color 0.2s; }
	.voltar:hover { color: #1c1c1e; }

	.emoji-grande { display: block; margin-bottom: 0.5rem; }

	.topo h1 {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700;
		color: #1c1c1e;
		margin-bottom: 0.5rem;
	}

	.subtitulo { color: #6b7280; font-size: 1rem; }

	main { padding: 3rem 1.5rem; }

	.intro {
		line-height: 1.7;
		color: #333;
		margin-bottom: 3rem;
		padding: 1.5rem;
		background: #faf9f5;
		border-radius: 0.75rem;
		border-left: 3px solid var(--cor);
	}

	section { margin-bottom: 3rem; }

	h2 {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700;
		margin-bottom: 1.25rem;
		color: #1c1c1e;
	}

	.grelha-temas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.25rem;
	}

	.tema-card {
		background: var(--fundo);
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 1px solid rgba(0,0,0,0.06);
	}

	.tema-icone { display: inline-block; }

	.tema-card h3 {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700;
		color: var(--cor);
	}

	.tema-card p { color: #444; line-height: 1.5; }

	.hist-desc { color: #6b7280; margin-bottom: 1.5rem; font-style: italic; }

	.historias-lista { display: flex; flex-direction: column; gap: 1rem; }

	.historia-card {
		background: #fff;
		border-left: 4px solid var(--cor);
		border-radius: 0.5rem;
		padding: 1.5rem;
		border: 1px solid #e5e0d8;
		border-left: 4px solid var(--cor);
	}

	.historia-card h3 {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700;
		color: var(--cor);
		margin-bottom: 0.75rem;
	}

	.narrativa { color: #333; line-height: 1.7; margin-bottom: 1rem; }

	.licao {
		background: var(--fundo);
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		font-size: 0.95em;
	}

	.licao strong { color: var(--cor); margin-right: 0.4rem; }

	.dicas { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0; }

	.dicas li {
		padding: 0.75rem 1rem 0.75rem 3rem;
		background: #fff;
		border-radius: 0.5rem;
		border: 1px solid #e5e0d8;
		border-left: 3px solid var(--cor);
		position: relative;
		color: #1c1c1e;
	}

	.dicas li::before {
		content: '✓';
		position: absolute;
		left: 1rem;
		color: var(--cor);
		font-weight: 700;
	}

	.quiz-desc { color: #6b7280; margin-bottom: 0; }

	/* ── VARIANTE INFANTIL ── */
	.variante-infantil { font-family: 'Inter', sans-serif; font-size: 1.1rem; }
	.variante-infantil .topo { padding: 4rem 1.5rem 3rem; }
	.variante-infantil .emoji-grande { font-size: 5.5rem; }
	.variante-infantil .topo h1 { font-size: clamp(2.2rem, 5vw, 3rem); }
	.variante-infantil .subtitulo { font-size: 1.15rem; }
	.variante-infantil h2 { font-size: 1.75rem; text-align: center; }
	.variante-infantil .intro {
		font-size: 1.15rem; padding: 1.75rem; border-radius: 1.25rem;
		border: 3px dashed var(--cor) !important; background: white;
	}
	.variante-infantil .tema-card { border-radius: 1.25rem; padding: 1.75rem; border: 3px solid var(--cor) !important; text-align: center; }
	.variante-infantil .tema-icone { font-size: 3rem; }
	.variante-infantil .tema-card h3 { font-size: 1.2rem; }
	.variante-infantil .tema-card p { font-size: 1rem; }
	.variante-infantil .dicas li { font-size: 1.05rem; padding: 1rem 1rem 1rem 3rem; border-radius: 1rem; border-left-width: 5px !important; }
	.variante-infantil .historia-card { border-radius: 1.25rem; }

	/* ── VARIANTE JUVENIL ── */
	.variante-juvenil { font-family: 'Inter', sans-serif; }
	.variante-juvenil .emoji-grande { font-size: 4rem; }
	.variante-juvenil .topo h1 { font-size: clamp(2rem, 4.5vw, 2.8rem); }
	.variante-juvenil h2 { font-size: 1.5rem; }
	.variante-juvenil .intro { font-size: 1.05rem; }
	.variante-juvenil .tema-card { border-radius: 0.85rem; transition: transform 0.2s; }
	.variante-juvenil .tema-card:hover { transform: translateY(-3px); }
	.variante-juvenil .tema-icone { font-size: 2.2rem; }

	/* ── VARIANTE JOVEM-ADULTO ── */
	.variante-jovem-adulto { font-family: 'Inter', sans-serif; }
	.variante-jovem-adulto .emoji-grande { font-size: 3.5rem; }
	.variante-jovem-adulto .topo h1 { font-size: clamp(1.9rem, 4vw, 2.6rem); }
	.variante-jovem-adulto h2 { font-size: 1.4rem; }
	.variante-jovem-adulto .intro { font-size: 1rem; }
	.variante-jovem-adulto .tema-icone { font-size: 1.9rem; }
	.variante-jovem-adulto .tema-card { border-radius: 0.65rem; }

	/* ── VARIANTE ADULTO ── */
	.variante-adulto { font-family: 'Inter', sans-serif; }
	.variante-adulto .emoji-grande { font-size: 3.25rem; }
	.variante-adulto .topo h1 { font-size: clamp(1.8rem, 3.8vw, 2.4rem); }
	.variante-adulto h2 { font-size: 1.35rem; }
	.variante-adulto .intro { font-size: 0.98rem; }
	.variante-adulto .tema-icone { font-size: 1.8rem; }
	.variante-adulto .tema-card { border-radius: 0.5rem; padding: 1.25rem; }

	/* ── VARIANTE SENIOR ── */
	.variante-senior { font-family: 'Inter', sans-serif; font-size: 1.2rem; }
	.variante-senior .topo { padding: 5rem 1.5rem 3rem; }
	.variante-senior .emoji-grande { font-size: 5rem; }
	.variante-senior .topo h1 { font-size: clamp(2.2rem, 5vw, 3rem); }
	.variante-senior .subtitulo { font-size: 1.25rem; }
	.variante-senior h2 { font-size: 1.9rem; padding-bottom: 0.5rem; border-bottom: 3px solid var(--cor); display: inline-block; }
	.variante-senior .intro { font-size: 1.2rem; line-height: 1.85; padding: 2rem; border-radius: 1rem; border: 2px solid var(--cor) !important; background: white; }
	.variante-senior .grelha-temas { grid-template-columns: 1fr; gap: 1.5rem; }
	.variante-senior .tema-card { padding: 2rem; border-radius: 1rem; display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; align-items: start; }
	.variante-senior .tema-icone { font-size: 3.5rem; }
	.variante-senior .tema-card h3 { font-size: 1.3rem; grid-column: 2; }
	.variante-senior .tema-card p { font-size: 1.15rem; line-height: 1.7; grid-column: 2; color: #222; }
	.variante-senior .dicas li { font-size: 1.2rem; padding: 1.25rem 1.25rem 1.25rem 3.5rem; border-radius: 0.75rem; border-left-width: 5px !important; line-height: 1.5; }
	.variante-senior .dicas li::before { font-size: 1.5rem; left: 1.25rem; }
	.variante-senior .historia-card { padding: 2rem; }
	.variante-senior .historia-card h3 { font-size: 1.4rem; }
	.variante-senior .narrativa { font-size: 1.15rem; line-height: 1.85; }
	.variante-senior .licao { font-size: 1.1rem; padding: 1rem 1.25rem; }
	.variante-senior .voltar { font-size: 1rem; }

	/* ════════════════════════
	   TEMA JOVEM
	   ════════════════════════ */
	.tema-jovem { background: #fffbf0; }

	.tema-jovem .topo {
		background: var(--cor);
		border-bottom: 4px solid #1c1c1e;
		padding: 4.5rem 1.5rem 4rem;
		position: relative;
		overflow: hidden;
	}

	.tema-jovem .topo::before {
		content: '';
		position: absolute; top: 15%; right: 8%;
		width: 60px; height: 60px;
		background: #fde68a; border: 3px solid #1c1c1e;
		box-shadow: 5px 5px 0 #1c1c1e;
		transform: rotate(15deg); pointer-events: none;
	}

	.tema-jovem .topo::after {
		content: '';
		position: absolute; bottom: 20%; left: 5%;
		width: 35px; height: 35px;
		background: #1c1c1e; border-radius: 50%; pointer-events: none;
	}

	.tema-jovem .voltar {
		display: inline-block;
		background: #1c1c1e; color: #fde68a;
		padding: 0.4rem 0.9rem;
		font-weight: 800; font-size: 0.82rem;
		text-transform: uppercase; letter-spacing: 0.05em;
		border: 2px solid #1c1c1e; box-shadow: 4px 4px 0 #fde68a;
	}
	.tema-jovem .voltar:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #fde68a; }

	.tema-jovem .emoji-grande {
		display: inline-block;
		background: #fff; border: 4px solid #1c1c1e;
		box-shadow: 8px 8px 0 #1c1c1e;
		padding: 0.5rem 1.25rem; margin: 1.25rem 0;
		font-size: 3.5rem !important; transform: rotate(-2deg);
	}

	.tema-jovem .topo h1 {
		font-family: 'Lora', Georgia, serif;
		font-weight: 700;
		font-size: clamp(2.5rem, 7vw, 4.5rem) !important;
		line-height: 0.95; letter-spacing: -0.03em;
		color: #1c1c1e; text-shadow: 4px 4px 0 #fde68a;
	}

	.tema-jovem .subtitulo {
		font-size: 1.1rem !important; font-weight: 600; color: #1c1c1e;
		background: #fff; display: inline-block;
		padding: 0.4rem 1rem; border: 3px solid #1c1c1e; margin-top: 0.75rem;
	}

	.tema-jovem main { padding: 3rem 1.5rem 4rem; }

	.tema-jovem .intro {
		background: #fde68a !important; border: 3px solid #1c1c1e !important;
		border-radius: 0 !important; box-shadow: 8px 8px 0 #1c1c1e;
		padding: 1.5rem !important; font-size: 1.05rem !important;
		font-weight: 500; color: #1c1c1e !important;
	}

	.tema-jovem h2 {
		font-family: 'Lora', Georgia, serif !important;
		font-weight: 700 !important;
		color: #1c1c1e !important;
		font-size: 1.75rem !important;
		display: inline-block;
		background: #fff; padding: 0.25rem 0.85rem;
		border: 3px solid #1c1c1e; box-shadow: 5px 5px 0 var(--cor);
		text-align: left !important; border-bottom: 3px solid #1c1c1e !important;
	}

	.tema-jovem .tema-card {
		background: #fff !important; border: 3px solid #1c1c1e !important;
		border-radius: 0 !important; box-shadow: 6px 6px 0 var(--cor);
		transition: transform 0.1s, box-shadow 0.1s; text-align: left !important;
	}
	.tema-jovem .tema-card:hover { transform: translate(2px, 2px); box-shadow: 4px 4px 0 var(--cor); }
	.tema-jovem .tema-card h3 { font-family: 'Lora', Georgia, serif; font-weight: 700; color: #1c1c1e !important; font-size: 1.05rem !important; }
	.tema-jovem .tema-card p { color: #1c1c1e !important; font-weight: 500; }
	.tema-jovem .tema-icone { display: inline-block; background: var(--cor); padding: 0.3rem 0.6rem; border: 2px solid #1c1c1e; font-size: 1.75rem !important; }

	.tema-jovem .historia-card {
		background: #fff !important; border: 3px solid #1c1c1e !important;
		border-left-width: 3px !important; border-radius: 0 !important;
		box-shadow: 6px 6px 0 var(--cor); padding: 1.5rem !important;
	}
	.tema-jovem .historia-card h3 { font-family: 'Lora', Georgia, serif; font-weight: 700; color: #1c1c1e !important; }
	.tema-jovem .historia-card .narrativa { color: #1c1c1e; }
	.tema-jovem .licao { background: #fde68a !important; border: 2px solid #1c1c1e; border-radius: 0 !important; }
	.tema-jovem .licao strong { color: #1c1c1e !important; }

	.tema-jovem .dicas li {
		background: #fff !important; border: 3px solid #1c1c1e !important;
		border-left-width: 6px !important; border-left-color: var(--cor) !important;
		border-radius: 0 !important; box-shadow: 5px 5px 0 #1c1c1e;
		font-weight: 500; color: #1c1c1e;
	}
	.tema-jovem .dicas li::before {
		background: var(--cor); color: #1c1c1e; font-weight: 900;
		padding: 0 0.4rem; left: 0.5rem !important; border: 2px solid #1c1c1e;
	}

	.tema-jovem .quiz-secao { margin-top: 4rem; }
	.tema-jovem .quiz-desc { color: #1c1c1e; font-weight: 500; }

	/* ════════════════════════
	   TEMA ADULTO
	   ════════════════════════ */
	.tema-adulto { background: #fdfcf8; }

	.tema-adulto .topo {
		background: #fdfcf8 !important; border-bottom: 2px solid #1c1c1e !important;
		padding: 5rem 1.5rem 3.5rem !important; text-align: left !important;
	}
	.tema-adulto .topo .container { max-width: 1000px; }

	.tema-adulto .voltar {
		font-size: 0.78rem !important; font-weight: 700;
		text-transform: uppercase; letter-spacing: 0.1em;
		color: #0d7a6c !important; border-bottom: 1px solid #0d7a6c;
		padding-bottom: 2px; margin-bottom: 2rem !important;
	}

	.tema-adulto .emoji-grande { font-size: 2.5rem !important; display: block; opacity: 0.5; margin-bottom: 0.5rem !important; }

	.tema-adulto .topo h1 {
		font-family: 'Lora', Georgia, serif !important;
		font-weight: 700; font-size: clamp(2.5rem, 6vw, 4.5rem) !important;
		line-height: 0.95; letter-spacing: -0.025em; color: #1c1c1e !important;
	}

	.tema-adulto .subtitulo {
		font-family: 'Lora', Georgia, serif !important;
		font-style: italic; font-size: 1.25rem !important; color: #333 !important;
		max-width: 700px; line-height: 1.4; margin-top: 1rem;
	}

	.tema-adulto main { padding: 3rem 1.5rem 5rem; }
	.tema-adulto main.container { max-width: 1000px; }

	.tema-adulto .intro {
		background: transparent !important;
		border-left: 3px solid #0d7a6c !important; border-radius: 0 !important;
		padding: 0.25rem 0 0.25rem 1.5rem !important;
		font-family: 'Lora', Georgia, serif;
		font-size: 1.2rem !important; font-style: italic;
		line-height: 1.55 !important; color: #1c1c1e !important; max-width: 760px;
	}

	.tema-adulto section { margin-bottom: 4rem; }

	.tema-adulto h2 {
		font-family: 'Lora', Georgia, serif !important;
		font-weight: 700 !important; font-size: 1.85rem !important; color: #1c1c1e !important;
		padding-bottom: 0.5rem; border-bottom: 1px solid #1c1c1e;
		margin-bottom: 1.5rem !important; display: block !important; text-align: left !important;
	}

	.tema-adulto .grelha-temas { gap: 0; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
	.tema-adulto .tema-card {
		background: transparent !important; border: 1px solid #1c1c1e !important;
		border-radius: 0 !important; margin-left: -1px; margin-top: -1px;
		padding: 1.5rem !important; text-align: left !important;
	}
	.tema-adulto .tema-card h3 { font-family: 'Lora', Georgia, serif !important; font-weight: 700; font-size: 1.25rem !important; color: #1c1c1e !important; }
	.tema-adulto .tema-card p { color: #333 !important; font-size: 0.95rem; }
	.tema-adulto .tema-icone { font-size: 1.5rem !important; display: inline-block; margin-bottom: 0.5rem; }

	.tema-adulto .hist-desc { font-family: 'Lora', Georgia, serif; font-style: italic; color: #6b7280 !important; }
	.tema-adulto .historia-card {
		background: transparent !important; border: none !important;
		border-left: 3px solid #0d7a6c !important; border-radius: 0 !important;
		padding: 0 0 1rem 1.5rem !important; margin-bottom: 1.5rem !important;
	}
	.tema-adulto .historia-card h3 { font-family: 'Lora', Georgia, serif !important; font-weight: 700; font-size: 1.35rem !important; color: #1c1c1e !important; }
	.tema-adulto .narrativa { color: #1c1c1e !important; font-size: 1rem; line-height: 1.65 !important; }
	.tema-adulto .licao {
		background: transparent !important; border-top: 1px solid #1c1c1e;
		border-radius: 0 !important; padding: 0.85rem 0 0 0 !important;
		margin-top: 0.75rem; font-style: italic;
	}
	.tema-adulto .licao strong {
		display: block; font-style: normal; font-size: 0.78rem !important;
		text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280 !important; margin-bottom: 0.25rem;
	}

	.tema-adulto .dicas { gap: 0; }
	.tema-adulto .dicas li {
		background: transparent !important; border: none !important;
		border-top: 1px solid #1c1c1e !important; border-radius: 0 !important;
		padding: 1rem 1rem 1rem 3rem !important; font-size: 1rem; color: #1c1c1e;
	}
	.tema-adulto .dicas li:last-child { border-bottom: 1px solid #1c1c1e !important; }
	.tema-adulto .dicas li::before {
		color: #0d7a6c; font-family: 'Lora', Georgia, serif;
		font-style: italic; font-size: 1.25rem; left: 0.75rem !important;
	}

	.tema-adulto .quiz-desc { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 1.05rem !important; color: #6b7280 !important; }
</style>
