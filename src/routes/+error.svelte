<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — Carta de Navegação</title>
</svelte:head>

<section class="erro">
	<div class="erro-inner">
		<span class="erro-emoji" aria-hidden="true">🗺️</span>
		<h1>{$page.status === 404 ? 'Página não encontrada' : 'Algo correu mal'}</h1>
		<p>{$page.status === 404 ? 'Esta rota não existe na nossa carta. Talvez tenha sido movida ou ainda esteja em construção.' : $page.error?.message ?? 'Erro inesperado.'}</p>
		<a href="/" class="btn-voltar">← Voltar ao início</a>
	</div>
</section>

<style>
	.erro {
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem 1.5rem;
		text-align: center;
	}

	.erro-inner { max-width: 500px; }

	.erro-emoji { font-size: 3rem; display: block; margin-bottom: 1.5rem; }

	h1 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		color: #1c1c1e;
		margin-bottom: 0.75rem;
	}

	p { color: #6b7280; line-height: 1.6; margin-bottom: 2rem; }

	.btn-voltar {
		display: inline-block;
		background: #0d7a6c;
		color: #fff;
		font-weight: 700;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		transition: background 0.2s;
	}
	.btn-voltar:hover { background: #0a5c52; }
</style>
