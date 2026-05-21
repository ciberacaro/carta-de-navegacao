<script>
	let { perguntas, cor = '#0d7a6c' } = $props();

	let atual = $state(0);
	let selecionada = $state(null);
	let pontuacao = $state(0);
	let terminado = $state(false);
	let mostrarExplicacao = $state(false);

	function escolher(idx) {
		if (selecionada !== null) return;
		selecionada = idx;
		mostrarExplicacao = true;
		if (idx === perguntas[atual].correta) pontuacao++;
	}

	function proxima() {
		if (atual + 1 < perguntas.length) {
			atual++;
			selecionada = null;
			mostrarExplicacao = false;
		} else {
			terminado = true;
		}
	}

	function reiniciar() {
		atual = 0;
		selecionada = null;
		pontuacao = 0;
		terminado = false;
		mostrarExplicacao = false;
	}
</script>

<div class="quiz" style="--cor: {cor}">
	{#if terminado}
		<div class="resultado">
			<span class="resultado-emoji">
				{#if pontuacao === perguntas.length}🏆{:else if pontuacao >= perguntas.length / 2}👍{:else}📚{/if}
			</span>
			<h3>Resultado: {pontuacao}/{perguntas.length}</h3>
			<p>
				{#if pontuacao === perguntas.length}
					Excelente! Dominas este tema.
				{:else if pontuacao >= perguntas.length / 2}
					Bom trabalho! Revê os temas que falhaste.
				{:else}
					Não desistas — lê o conteúdo acima e tenta de novo!
				{/if}
			</p>
			<button onclick={reiniciar}>Tentar de novo</button>
		</div>
	{:else}
		<div class="progresso-bar">
			<div class="progresso-fill" style="width: {((atual) / perguntas.length) * 100}%"></div>
		</div>
		<p class="contador">Pergunta {atual + 1} de {perguntas.length}</p>
		<p class="pergunta">{perguntas[atual].pergunta}</p>
		<div class="opcoes">
			{#each perguntas[atual].opcoes as opcao, i}
				<button
					class="opcao"
					class:correta={selecionada !== null && i === perguntas[atual].correta}
					class:errada={selecionada === i && i !== perguntas[atual].correta}
					onclick={() => escolher(i)}
					disabled={selecionada !== null}
				>
					{opcao}
				</button>
			{/each}
		</div>
		{#if mostrarExplicacao}
			<div class="explicacao">
				<strong>{selecionada === perguntas[atual].correta ? '✅ Correto!' : '❌ Incorreto.'}</strong>
				<p>{perguntas[atual].explicacao}</p>
				<button onclick={proxima}>
					{atual + 1 < perguntas.length ? 'Próxima →' : 'Ver resultado'}
				</button>
			</div>
		{/if}
	{/if}
</div>

<style>
	.quiz {
		background: #fff;
		border: 2px solid var(--cor);
		border-radius: 1rem;
		padding: 2rem;
		margin-top: 2rem;
	}

	.progresso-bar {
		height: 6px;
		background: #e5e0d8;
		border-radius: 999px;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.progresso-fill {
		height: 100%;
		background: var(--cor);
		border-radius: 999px;
		transition: width 0.4s ease;
	}

	.contador {
		font-size: 0.8rem;
		color: #6b7280;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.pergunta {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
		line-height: 1.4;
		color: #1c1c1e;
	}

	.opcoes {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.opcao {
		background: #faf9f5;
		border: 2px solid #e5e0d8;
		border-radius: 0.6rem;
		padding: 0.8rem 1rem;
		text-align: left;
		font-size: 0.95rem;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
		font-family: inherit;
		color: #1c1c1e;
	}

	.opcao:hover:not(:disabled) {
		border-color: var(--cor);
		background: #e8f4f2;
	}

	.opcao:disabled { cursor: default; }

	.opcao.correta {
		border-color: #1DD1A1;
		background: #e8fff8;
		color: #0a7c5c;
		font-weight: 600;
	}

	.opcao.errada {
		border-color: #FF6B6B;
		background: #fff0f0;
		color: #c0392b;
	}

	.explicacao {
		margin-top: 1.25rem;
		background: #faf9f5;
		border-radius: 0.75rem;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.explicacao p { font-size: 0.9rem; color: #444; }

	.explicacao button, .resultado button {
		background: var(--cor);
		color: #fff;
		border: none;
		border-radius: 0.5rem;
		padding: 0.7rem 1.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		font-family: inherit;
		transition: opacity 0.2s;
		align-self: flex-start;
	}

	.explicacao button:hover, .resultado button:hover { opacity: 0.85; }

	.resultado {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.resultado-emoji { font-size: 3rem; }
	.resultado h3 { font-size: 1.4rem; font-weight: 700; color: #1c1c1e; }
	.resultado p { color: #6b7280; }
</style>
