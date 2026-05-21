<script>
	import { browser } from '$app/environment';
	let cenarioAtivo = $state(0);

	const cenarios = [
		{
			id: 'dinheiro',
			emoji: '💸',
			titulo: 'Fiz uma transferência por engano',
			subtitulo: 'Burla, phishing ou erro',
			urgencia: 'Máxima — aja nos próximos minutos',
			cor: '#c0392b',
			passos: [
				{ n: 1, acao: 'Ligue imediatamente ao banco', detalhe: 'Peça o bloqueio/reversão da transferência. Cada minuto conta. Ligue para o número no verso do cartão.' },
				{ n: 2, acao: 'Preserve as evidências', detalhe: 'Screenshots de todas as mensagens, emails, sites, confirmações. Não apague nada.' },
				{ n: 3, acao: 'Faça queixa na GNR/PSP ou online', detalhe: 'Queixas eletrónicas em queixaseletronicas.ministeriopublico.pt — não precisa de ir fisicamente.' },
				{ n: 4, acao: 'Reporte ao CERT.PT', detalhe: 'cert.pt — podem alertar outros utilizadores e investigar a origem.' },
				{ n: 5, acao: 'Informe o Banco de Portugal se necessário', detalhe: 'bportugal.pt/linha-de-apoio — para reclamações formais sobre o banco.' }
			],
			naoFaca: [
				'Não transfira mais dinheiro para "recuperar" o primeiro',
				'Não contacte novamente quem o burlou',
				'Não apague mensagens ou emails — são provas',
				'Não espere dias a reportar — a janela de reversão é pequena'
			]
		},
		{
			id: 'conta',
			emoji: '🔓',
			titulo: 'Acederam à minha conta',
			subtitulo: 'Email, redes sociais ou banco',
			urgencia: 'Alta — aja nas próximas horas',
			cor: '#e67e22',
			passos: [
				{ n: 1, acao: 'Mude a password imediatamente', detalhe: 'Se ainda consegue aceder: mude a password agora. Use uma combinação forte e única.' },
				{ n: 2, acao: 'Ative autenticação em dois fatores (2FA)', detalhe: 'Adicione uma segunda camada de proteção via app (Google Authenticator, Authy) ou SMS.' },
				{ n: 3, acao: 'Verifique sessões ativas', detalhe: 'Na maioria das contas pode ver onde está ligado. Feche todas as sessões desconhecidas.' },
				{ n: 4, acao: 'Mude passwords noutras contas', detalhe: 'Especialmente se usava a mesma password em mais serviços. Use um gestor como Bitwarden.' },
				{ n: 5, acao: 'Alerte os seus contactos', detalhe: 'Se a conta de email foi comprometida, os seus contactos podem receber mensagens fraudulentas em seu nome.' },
				{ n: 6, acao: 'Contacte a plataforma afetada', detalhe: 'Cada plataforma tem processo de recuperação. Use os links oficiais — não confie em emails que "oferecem ajuda".' }
			],
			naoFaca: [
				'Não use a mesma password nova em outros serviços',
				'Não clique em links de emails de "recuperação" não solicitados',
				'Não ignore — acesso a email compromete tudo o resto'
			]
		},
		{
			id: 'ransomware',
			emoji: '🔒',
			titulo: 'Os meus ficheiros estão bloqueados',
			subtitulo: 'Ransomware ou vírus',
			urgencia: 'Alta — não pague o resgate',
			cor: '#8e44ad',
			passos: [
				{ n: 1, acao: 'Desligue o dispositivo da rede', detalhe: 'Desative o Wi-Fi e desconecte o cabo de rede imediatamente. Impede a propagação a outros dispositivos.' },
				{ n: 2, acao: 'Não pague o resgate', detalhe: 'O pagamento não garante recuperação e financia mais ataques. Existem alternativas.' },
				{ n: 3, acao: 'Identifique o ransomware', detalhe: 'Vá a nomoreransom.org — pode haver desencriptador gratuito disponível para o tipo específico.' },
				{ n: 4, acao: 'Contacte o CERT.PT', detalhe: 'cert.pt — têm recursos e podem orientar o processo de recuperação.' },
				{ n: 5, acao: 'Restaure a partir de cópia de segurança', detalhe: 'Se tiver backup (pendrive, disco externo, cloud), pode restaurar os ficheiros sem pagar.' },
				{ n: 6, acao: 'Formate como último recurso', detalhe: 'Em casos graves, formatação e reinstalação do sistema operativo pode ser necessária.' }
			],
			naoFaca: [
				'Não pague — não há garantia de recuperação e encoraja mais ataques',
				'Não ligue o dispositivo de volta à rede sem limpar',
				'Não tente decifrar sem ferramentas adequadas — pode piorar'
			]
		},
		{
			id: 'romantica',
			emoji: '💔',
			titulo: 'Fui vítima de burla romântica',
			subtitulo: 'Romance scam ou catfishing',
			urgencia: 'Importante — apoio disponível',
			cor: '#e84393',
			passos: [
				{ n: 1, acao: 'Interrompa todo o contacto', detalhe: 'Bloqueie o número, email e perfis. Qualquer resposta pode ser usada para continuar a manipulação.' },
				{ n: 2, acao: 'Preserve as evidências', detalhe: 'Screenshots de conversas, transferências, perfis. São necessárias para a queixa.' },
				{ n: 3, acao: 'Faça queixa na GNR/PSP', detalhe: 'Online em queixaseletronicas.ministeriopublico.pt ou presencialmente. É um crime — burla qualificada.' },
				{ n: 4, acao: 'Contacte o seu banco', detalhe: 'Se houve transferências, o banco pode ajudar. Explique que foi alvo de burla.' },
				{ n: 5, acao: 'Procure apoio emocional', detalhe: 'A APAV (116 006) apoia vítimas de burla com acompanhamento psicológico e jurídico.' },
				{ n: 6, acao: 'Alerte outros se seguro', detalhe: 'Reporte o perfil na plataforma onde aconteceu. Pode proteger outra pessoa.' }
			],
			naoFaca: [
				'Não transfira mais dinheiro para "resolver a situação"',
				'Não se culpe — são profissionais manipuladores muito experientes',
				'Não esconda — familiares e amigos podem ajudar',
				'Não tente confrontar sozinho'
			]
		}
	];

	const contactos = [
		{ titulo: 'CERT.PT', descricao: 'Incidentes informáticos', link: 'https://cert.pt', tel: null, cor: '#0d7a6c' },
		{ titulo: 'GNR / PSP', descricao: 'Queixa presencial ou online', link: 'https://queixaseletronicas.ministeriopublico.pt', tel: '112', cor: '#c0392b' },
		{ titulo: 'APAV', descricao: 'Apoio a vítimas de crime', link: 'https://apav.pt', tel: '116 006', cor: '#e67e22' },
		{ titulo: 'Linha Internet Segura', descricao: 'Apoio geral online', link: 'https://internetsegura.pt', tel: '800 21 90 90', cor: '#0984E3' },
		{ titulo: 'CNPD', descricao: 'Violação de dados pessoais', link: 'https://cnpd.pt', tel: null, cor: '#8e44ad' },
		{ titulo: 'Banco de Portugal', descricao: 'Reclamações bancárias', link: 'https://bportugal.pt', tel: null, cor: '#27ae60' }
	];
</script>

<svelte:head>
	<title>Emergência Digital — Carta de Navegação</title>
	<meta name="description" content="O que fazer quando algo corre mal online. Guias passo a passo para as situações mais urgentes." />
</svelte:head>

<div class="emergencia-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">🆘 SOS Digital</div>
			<h1>Algo correu mal?</h1>
			<p class="subtitulo">Mantenha a calma. Guias passo a passo para as situações mais urgentes.</p>
		</div>
	</header>

	<section class="cenarios-nav" aria-label="Escolher cenário">
		<div class="inner">
			<p class="instrucao">Escolha a situação que melhor descreve o que aconteceu:</p>
			<div class="tabs" role="tablist">
				{#each cenarios as c, i}
					<button
						role="tab"
						aria-selected={cenarioAtivo === i}
						aria-controls={`painel-${c.id}`}
						onclick={() => cenarioAtivo = i}
						class="tab"
						class:ativo={cenarioAtivo === i}
					>
						<span class="tab-emoji">{c.emoji}</span>
						<span class="tab-texto">{c.titulo}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	{#each cenarios as c, i}
		<div
			id={`painel-${c.id}`}
			role="tabpanel"
			aria-labelledby={`tab-${c.id}`}
			hidden={cenarioAtivo !== i}
			class="cenario-painel"
		>
			<div class="inner">
				<div class="cenario-header" style="border-left: 6px solid {c.cor}">
					<div class="cenario-emoji">{c.emoji}</div>
					<div>
						<h2>{c.titulo}</h2>
						<p class="cenario-sub">{c.subtitulo}</p>
						<span class="urgencia-badge" style="background: {c.cor}">⚡ {c.urgencia}</span>
					</div>
				</div>

				<div class="passos-grid">
					<div class="passos-col">
						<h3>O que fazer — agora</h3>
						<ol class="passos-lista">
							{#each c.passos as p}
								<li class="passo">
									<div class="passo-num" style="background: {c.cor}">{p.n}</div>
									<div class="passo-corpo">
										<strong>{p.acao}</strong>
										<p>{p.detalhe}</p>
									</div>
								</li>
							{/each}
						</ol>
					</div>

					<div class="nao-col">
						<h3>❌ O que NÃO fazer</h3>
						<ul class="nao-lista">
							{#each c.naoFaca as item}
								<li>{item}</li>
							{/each}
						</ul>

						<div class="ajuda-box">
							<h4>Precisa de ajuda imediata?</h4>
							<a href="tel:800219090" class="tel-link">📞 800 21 90 90</a>
							<p class="tel-desc">Linha Internet Segura — gratuita, disponível</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<section class="contactos-secao">
		<div class="inner">
			<h2>Contactos de emergência</h2>
			<p class="sec-desc">Entidades oficiais em Portugal para situações digitais urgentes</p>
			<div class="contactos-grid">
				{#each contactos as c}
					<div class="contacto-card" style="border-top: 4px solid {c.cor}">
						<div class="contacto-header">
							<strong>{c.titulo}</strong>
							{#if c.tel}
								<a href={`tel:${c.tel.replace(/\s/g, '')}`} class="tel-badge" style="background: {c.cor}">{c.tel}</a>
							{/if}
						</div>
						<p>{c.descricao}</p>
						<a href={c.link} target="_blank" rel="noopener noreferrer" class="ver-link">Visitar →</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="prevencao">
		<div class="inner">
			<h2>🛡️ A melhor emergência é a que não acontece</h2>
			<div class="prev-grid">
				<div class="prev-item">
					<span class="prev-icon">🔑</span>
					<div>
						<strong>Gestor de passwords</strong>
						<p>Bitwarden (grátis) — uma password única e forte para cada serviço.</p>
					</div>
				</div>
				<div class="prev-item">
					<span class="prev-icon">📱</span>
					<div>
						<strong>Autenticação em dois fatores</strong>
						<p>Ative em todas as contas importantes. Bloqueia 99% dos acessos não autorizados.</p>
					</div>
				</div>
				<div class="prev-item">
					<span class="prev-icon">💾</span>
					<div>
						<strong>Cópias de segurança regulares</strong>
						<p>Regra 3-2-1: 3 cópias, 2 suportes diferentes, 1 fora de casa.</p>
					</div>
				</div>
				<div class="prev-item">
					<span class="prev-icon">🔍</span>
					<div>
						<strong>Verifique antes de clicar</strong>
						<p>Passe o rato sobre links antes de clicar. Desconfie de urgência e ofertas demasiado boas.</p>
					</div>
				</div>
			</div>
			<div class="prev-cta">
				<a href="/competencias" class="btn-prev">Ver todos os pilares de literacia digital</a>
			</div>
		</div>
	</section>
</div>

<style>
	.emergencia-page {
		min-height: 100vh;
	}

	.topo {
		background: linear-gradient(135deg, #c0392b 0%, #8e1a0e 100%);
		color: white;
		padding: 4rem 1.5rem 3rem;
		text-align: center;
	}

	.topo-inner {
		max-width: 700px;
		margin: 0 auto;
	}

	.topo-badge {
		display: inline-block;
		background: rgba(255,255,255,0.2);
		border: 1px solid rgba(255,255,255,0.4);
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
		line-height: 1.15;
	}

	.subtitulo {
		font-size: 1.125rem;
		opacity: 0.9;
		margin: 0;
		line-height: 1.6;
	}

	.cenarios-nav {
		background: #1c1c1e;
		padding: 2rem 1.5rem;
		position: sticky;
		top: 60px;
		z-index: 10;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
	}

	.instrucao {
		color: #9ca3af;
		font-size: 0.875rem;
		margin: 0 0 1rem;
		text-align: center;
	}

	.tabs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.75rem;
	}

	.tab {
		background: #2a2a2e;
		border: 2px solid #3a3a3e;
		border-radius: 0.75rem;
		padding: 0.875rem 1rem;
		color: #d1d5db;
		cursor: pointer;
		text-align: left;
		transition: all 0.2s;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.tab:hover {
		background: #333338;
		border-color: #555;
	}

	.tab.ativo {
		background: #c0392b;
		border-color: #c0392b;
		color: white;
	}

	.tab-emoji {
		font-size: 1.5rem;
	}

	.tab-texto {
		font-size: 0.8125rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.cenario-painel {
		padding: 3rem 1.5rem;
		background: #faf9f5;
	}

	.cenario-header {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		background: white;
		padding: 1.5rem 2rem;
		border-radius: 0.75rem;
		margin-bottom: 2.5rem;
		box-shadow: 0 2px 8px rgba(0,0,0,0.06);
	}

	.cenario-emoji {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.cenario-header h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		margin: 0 0 0.25rem;
		color: #1c1c1e;
	}

	.cenario-sub {
		color: #6b7280;
		margin: 0 0 0.75rem;
		font-size: 1rem;
	}

	.urgencia-badge {
		display: inline-block;
		color: white;
		font-size: 0.8125rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		border-radius: 2rem;
	}

	.passos-grid {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 2rem;
		align-items: start;
	}

	@media (max-width: 700px) {
		.passos-grid {
			grid-template-columns: 1fr;
		}
	}

	.passos-col h3,
	.nao-col h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.25rem;
		margin: 0 0 1.25rem;
		color: #1c1c1e;
	}

	.passos-lista {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.passo {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		background: white;
		padding: 1.25rem;
		border-radius: 0.75rem;
		box-shadow: 0 1px 4px rgba(0,0,0,0.06);
	}

	.passo-num {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		color: white;
		font-weight: 800;
		font-size: 0.875rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.passo-corpo strong {
		display: block;
		color: #1c1c1e;
		margin-bottom: 0.25rem;
		font-size: 0.9375rem;
	}

	.passo-corpo p {
		margin: 0;
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.nao-lista {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		background: #fff5f5;
		border: 1px solid #fecaca;
		border-radius: 0.75rem;
		padding: 1.25rem;
	}

	.nao-lista li {
		color: #7f1d1d;
		font-size: 0.875rem;
		padding-left: 1.5rem;
		position: relative;
		line-height: 1.5;
	}

	.nao-lista li::before {
		content: '✗';
		position: absolute;
		left: 0;
		color: #c0392b;
		font-weight: 700;
	}

	.ajuda-box {
		background: #1c1c1e;
		color: white;
		padding: 1.5rem;
		border-radius: 0.75rem;
		text-align: center;
	}

	.ajuda-box h4 {
		margin: 0 0 0.75rem;
		font-size: 0.9375rem;
	}

	.tel-link {
		display: block;
		font-size: 1.75rem;
		font-weight: 800;
		color: white;
		text-decoration: none;
		margin-bottom: 0.5rem;
		font-family: 'Lora', Georgia, serif;
	}

	.tel-link:hover {
		color: #d4a76a;
	}

	.tel-desc {
		margin: 0;
		font-size: 0.8125rem;
		color: #9ca3af;
	}

	.contactos-secao {
		background: white;
		padding: 4rem 1.5rem;
	}

	.contactos-secao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		text-align: center;
		margin: 0 0 0.5rem;
		color: #1c1c1e;
	}

	.sec-desc {
		text-align: center;
		color: #6b7280;
		margin: 0 0 2.5rem;
	}

	.contactos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.25rem;
	}

	.contacto-card {
		background: #faf9f5;
		border-radius: 0.75rem;
		padding: 1.25rem;
	}

	.contacto-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.contacto-header strong {
		font-size: 1rem;
		color: #1c1c1e;
	}

	.tel-badge {
		color: white;
		font-size: 0.8125rem;
		font-weight: 700;
		padding: 0.2rem 0.6rem;
		border-radius: 2rem;
		text-decoration: none;
		white-space: nowrap;
	}

	.contacto-card p {
		color: #6b7280;
		font-size: 0.875rem;
		margin: 0 0 0.75rem;
	}

	.ver-link {
		color: #0d7a6c;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
	}

	.ver-link:hover {
		text-decoration: underline;
	}

	.prevencao {
		background: #f5f0e8;
		padding: 4rem 1.5rem;
	}

	.prevencao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		text-align: center;
		margin: 0 0 2.5rem;
		color: #1c1c1e;
	}

	.prev-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	.prev-item {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		background: white;
		padding: 1.25rem;
		border-radius: 0.75rem;
	}

	.prev-icon {
		font-size: 1.75rem;
		flex-shrink: 0;
	}

	.prev-item strong {
		display: block;
		color: #1c1c1e;
		margin-bottom: 0.25rem;
	}

	.prev-item p {
		margin: 0;
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.prev-cta {
		text-align: center;
	}

	.btn-prev {
		display: inline-block;
		background: #0d7a6c;
		color: white;
		padding: 0.875rem 2rem;
		border-radius: 0.5rem;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.2s;
	}

	.btn-prev:hover {
		background: #0a6058;
	}

	@media (prefers-color-scheme: dark) {
		.cenario-painel {
			background: #111;
		}
		.cenario-header,
		.passo {
			background: #1c1c1e;
		}
		.cenario-header h2,
		.passo-corpo strong,
		.passos-col h3,
		.nao-col h3 {
			color: #f9fafb;
		}
		.passo-corpo p,
		.cenario-sub {
			color: #9ca3af;
		}
		.contactos-secao {
			background: #111;
		}
		.contactos-secao h2,
		.contacto-header strong {
			color: #f9fafb;
		}
		.contacto-card {
			background: #1c1c1e;
		}
		.prevencao {
			background: #1a1a1a;
		}
		.prevencao h2 {
			color: #f9fafb;
		}
		.prev-item {
			background: #1c1c1e;
		}
		.prev-item strong {
			color: #f9fafb;
		}
		.prev-item p {
			color: #9ca3af;
		}
	}
</style>
