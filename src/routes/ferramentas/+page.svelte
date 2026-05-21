<script>
	let passwordInput = $state('');
	let mostrarPassword = $state(false);
	let urlInput = $state('');
	let fraseLargura = $state(4);

	const palavras = ['ancora','bússola','carta','deriva','estrela','farol','golfo','horizonte','ilha','jangada','largo','maré','náutica','oceano','porto','quilha','rota','sextante','timão','onda','vento','cais','doca','frota','gale','hélice','iota','jibe','knot','leme','masto','navio','onda','popa','quisto','radar','singradura','timoneiro','umbral','vaga'];

	function calcularForca(p) {
		if (!p) return { nivel: 0, texto: '', cor: '#e5e7eb', dicas: [] };
		let pontos = 0;
		const dicas = [];
		if (p.length >= 8) pontos++; else dicas.push('Use pelo menos 8 caracteres');
		if (p.length >= 12) pontos++; else if (p.length < 12) dicas.push('Idealmente 12+ caracteres');
		if (/[A-Z]/.test(p)) pontos++; else dicas.push('Adicione letras maiúsculas');
		if (/[a-z]/.test(p)) pontos++; else dicas.push('Adicione letras minúsculas');
		if (/[0-9]/.test(p)) pontos++; else dicas.push('Adicione números');
		if (/[^A-Za-z0-9]/.test(p)) pontos++; else dicas.push('Adicione símbolos (!@#$%...)');
		if (p.length >= 16) pontos++;
		const niveis = [
			{ min: 0, max: 1, texto: 'Muito fraca', cor: '#c0392b' },
			{ min: 2, max: 2, texto: 'Fraca', cor: '#e67e22' },
			{ min: 3, max: 3, texto: 'Razoável', cor: '#f1c40f' },
			{ min: 4, max: 5, texto: 'Boa', cor: '#27ae60' },
			{ min: 6, max: 7, texto: 'Excelente', cor: '#0d7a6c' }
		];
		const nivel = niveis.find(n => pontos >= n.min && pontos <= n.max) ?? niveis[0];
		return { nivel: pontos, texto: nivel.texto, cor: nivel.cor, dicas };
	}

	function gerarFrase() {
		const escolhidas = [];
		const usadas = new Set();
		while (escolhidas.length < fraseLargura) {
			const i = Math.floor(Math.random() * palavras.length);
			if (!usadas.has(i)) {
				usadas.add(i);
				escolhidas.push(palavras[i]);
			}
		}
		const num = Math.floor(Math.random() * 900) + 100;
		passwordInput = escolhidas.join('-') + num;
	}

	function analisarUrl(url) {
		if (!url) return null;
		const alertas = [];
		const ok = [];
		const u = url.toLowerCase().trim();
		if (!u.startsWith('https://')) alertas.push('Não começa com HTTPS — ligação pode não ser segura');
		else ok.push('Começa com HTTPS — ligação encriptada');
		const suspeitos = ['login-', 'secure-', 'account-', 'verify-', 'update-', 'confirm-', 'signin-', '.tk', '.ml', '.ga', '.cf', '.gq'];
		for (const s of suspeitos) {
			if (u.includes(s)) alertas.push(`Contém padrão suspeito: "${s}"`);
		}
		const parecidosBanco = ['cg.pt', 'cgd-pt', 'cgd.bank', 'millenniumbcp-pt', 'novobanco-pt', 'santander-pt'];
		for (const p of parecidosBanco) {
			if (u.includes(p) && !u.includes('.cgd.pt') && !u.includes('.millenniumbcp.pt')) {
				alertas.push('Domínio parece imitar um banco — verifique o domínio oficial');
			}
		}
		try {
			const parsed = new URL(url.startsWith('http') ? url : 'https://' + url);
			const dominio = parsed.hostname;
			ok.push(`Domínio: ${dominio}`);
			if (dominio.split('.').length > 3) alertas.push('Muitos subdomínios — pode ser suspeito');
		} catch {
			alertas.push('URL malformado — verifique se está correto');
		}
		return { alertas, ok };
	}

	const forcaPassword = $derived(calcularForca(passwordInput));
	const analiseUrl = $derived(analisarUrl(urlInput));

	const ferramentas = [
		{
			emoji: '🔐',
			titulo: 'Bitwarden',
			descricao: 'Gestor de passwords gratuito e de código aberto. Guarda e gera passwords únicas para cada serviço.',
			link: 'https://bitwarden.com',
			categoria: 'passwords',
			gratis: true
		},
		{
			emoji: '🔑',
			titulo: 'Authy',
			descricao: 'App de autenticação em dois fatores (2FA). Backup em nuvem dos códigos TOTP.',
			link: 'https://authy.com',
			categoria: 'autenticação',
			gratis: true
		},
		{
			emoji: '🕵️',
			titulo: 'Have I Been Pwned',
			descricao: 'Verifique se o seu email ou password apareceu em alguma fuga de dados conhecida.',
			link: 'https://haveibeenpwned.com',
			categoria: 'verificação',
			gratis: true
		},
		{
			emoji: '🔍',
			titulo: 'Polígrafo',
			descricao: 'Plataforma portuguesa de fact-checking. Verifique a veracidade de afirmações políticas e públicas.',
			link: 'https://poligrafo.sapo.pt',
			categoria: 'fact-checking',
			gratis: true
		},
		{
			emoji: '🖼️',
			titulo: 'Google Imagens (reversa)',
			descricao: 'Pesquise uma imagem para ver onde aparece na internet e verificar se é real ou antiga.',
			link: 'https://images.google.com',
			categoria: 'fact-checking',
			gratis: true
		},
		{
			emoji: '🌐',
			titulo: 'No More Ransom',
			descricao: 'Desencriptadores gratuitos para dezenas de variantes de ransomware. Iniciativa europeia.',
			link: 'https://nomoreransom.org',
			categoria: 'emergência',
			gratis: true
		},
		{
			emoji: '🛡️',
			titulo: 'AdGuard DNS',
			descricao: 'DNS que bloqueia publicidade e rastreadores a nível de rede. Alternativa ao DNS do ISP.',
			link: 'https://adguard-dns.io',
			categoria: 'privacidade',
			gratis: true
		},
		{
			emoji: '🔒',
			titulo: 'Signal',
			descricao: 'App de mensagens com encriptação end-to-end. Mais privado que WhatsApp ou SMS.',
			link: 'https://signal.org',
			categoria: 'comunicação',
			gratis: true
		},
		{
			emoji: '🌍',
			titulo: 'ProtonMail',
			descricao: 'Email encriptado baseado na Suíça. Alternativa privada ao Gmail ou Outlook.',
			link: 'https://proton.me',
			categoria: 'comunicação',
			gratis: true
		},
		{
			emoji: '📸',
			titulo: 'InVID / WeVerify',
			descricao: 'Extensão para verificar vídeos e imagens — datas, localização, manipulação.',
			link: 'https://weverify.eu/verification-plugin/',
			categoria: 'fact-checking',
			gratis: true
		},
		{
			emoji: '🇵🇹',
			titulo: 'Autenticação.gov',
			descricao: 'Portal oficial de autenticação com Chave Móvel Digital para aceder a serviços públicos.',
			link: 'https://autenticacao.gov.pt',
			categoria: 'portugal',
			gratis: true
		},
		{
			emoji: '📋',
			titulo: 'CERT.PT',
			descricao: 'Centro de resposta a incidentes informáticos nacionais. Reportar ameaças e obter apoio.',
			link: 'https://www.cert.pt',
			categoria: 'emergência',
			gratis: true
		}
	];

	const categoriasFerr = ['todas', 'passwords', 'autenticação', 'verificação', 'fact-checking', 'privacidade', 'comunicação', 'emergência', 'portugal'];
	let catFerr = $state('todas');

	const ferramentasFiltradas = $derived(
		catFerr === 'todas' ? ferramentas : ferramentas.filter(f => f.categoria === catFerr)
	);
</script>

<svelte:head>
	<title>Ferramentas — Carta de Navegação</title>
	<meta name="description" content="Ferramentas interativas e recursos recomendados para navegar com mais segurança e sentido crítico." />
</svelte:head>

<div class="ferramentas-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">🛠️ Ferramentas</div>
			<h1>Ferramentas práticas</h1>
			<p class="subtitulo">Verificadores interativos e recursos recomendados para navegar melhor</p>
		</div>
	</header>

	<!-- Ferramenta 1: Verificador de Password -->
	<section class="ferramenta-secao" id="password">
		<div class="inner">
			<div class="ferr-header">
				<div class="ferr-emoji">🔐</div>
				<div>
					<h2>Verificador de password</h2>
					<p class="ferr-desc">Avalie a força de uma password — nada é enviado para qualquer servidor.</p>
				</div>
			</div>

			<div class="ferr-corpo">
				<div class="input-group">
					<label for="pw-input">Password a verificar</label>
					<div class="pw-wrapper">
						<input
							id="pw-input"
							type={mostrarPassword ? 'text' : 'password'}
							bind:value={passwordInput}
							placeholder="Escreva uma password para testar..."
							autocomplete="off"
							spellcheck="false"
						/>
						<button
							onclick={() => mostrarPassword = !mostrarPassword}
							class="toggle-vis"
							aria-label={mostrarPassword ? 'Ocultar' : 'Mostrar'}
						>
							{mostrarPassword ? '🙈' : '👁️'}
						</button>
					</div>
				</div>

				{#if passwordInput}
					<div class="forca-resultado">
						<div class="barra-forca">
							<div
								class="barra-fill"
								style="width: {(forcaPassword.nivel / 7) * 100}%; background: {forcaPassword.cor}"
							></div>
						</div>
						<div class="forca-label" style="color: {forcaPassword.cor}">
							{forcaPassword.texto}
						</div>
						{#if forcaPassword.dicas.length > 0}
							<ul class="dicas-lista">
								{#each forcaPassword.dicas as dica}
									<li>💡 {dica}</li>
								{/each}
							</ul>
						{:else}
							<p class="forca-ok">✅ Password excelente! Guarde-a num gestor de passwords.</p>
						{/if}
					</div>
				{/if}

				<div class="gerador-frase">
					<h3>Gerar frase-password</h3>
					<p>Mais fácil de memorizar, mais difícil de adivinhar.</p>
					<div class="gerador-controls">
						<label>
							Número de palavras:
							<input type="range" min="3" max="6" bind:value={fraseLargura} />
							<span>{fraseLargura}</span>
						</label>
						<button onclick={gerarFrase} class="btn-gerar">Gerar</button>
					</div>
					{#if passwordInput && passwordInput.includes('-')}
						<div class="frase-resultado">
							<code>{passwordInput}</code>
							<p class="frase-nota">Pode substituir o separador '-' por um símbolo que prefira.</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- Ferramenta 2: Analisador de URL -->
	<section class="ferramenta-secao alt" id="url">
		<div class="inner">
			<div class="ferr-header">
				<div class="ferr-emoji">🔗</div>
				<div>
					<h2>Analisador de URL</h2>
					<p class="ferr-desc">Verifique se um link tem sinais de alerta antes de clicar.</p>
				</div>
			</div>

			<div class="ferr-corpo">
				<div class="input-group">
					<label for="url-input">URL a analisar</label>
					<input
						id="url-input"
						type="url"
						bind:value={urlInput}
						placeholder="https://exemplo.com/pagina"
						autocomplete="off"
						spellcheck="false"
					/>
				</div>

				{#if analiseUrl}
					<div class="url-resultado">
						{#if analiseUrl.alertas.length > 0}
							<div class="alertas-box">
								<h4>⚠️ Alertas ({analiseUrl.alertas.length})</h4>
								<ul>
									{#each analiseUrl.alertas as a}
										<li>{a}</li>
									{/each}
								</ul>
							</div>
						{/if}
						{#if analiseUrl.ok.length > 0}
							<div class="ok-box">
								<h4>✅ Indicadores positivos</h4>
								<ul>
									{#each analiseUrl.ok as o}
										<li>{o}</li>
									{/each}
								</ul>
							</div>
						{/if}
						<p class="url-aviso">Esta análise é básica. Para verificação completa, use ferramentas como VirusTotal ou o CERT.PT.</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Recursos externos -->
	<section class="recursos-secao" id="recursos">
		<div class="inner">
			<h2>Recursos recomendados</h2>
			<p class="sec-desc">Ferramentas externas selecionadas e organizadas por categoria</p>

			<div class="cats-scroll" role="group" aria-label="Filtrar ferramentas">
				{#each categoriasFerr as cat}
					<button
						onclick={() => catFerr = cat}
						class="cat-btn"
						class:ativo={catFerr === cat}
					>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</button>
				{/each}
			</div>

			<div class="ferr-grid">
				{#each ferramentasFiltradas as f}
					<a href={f.link} target="_blank" rel="noopener noreferrer" class="ferr-card">
						<div class="ferr-card-top">
							<span class="ferr-card-emoji">{f.emoji}</span>
							<div class="ferr-card-tags">
								{#if f.gratis}<span class="tag gratis">Grátis</span>{/if}
								<span class="tag cat">{f.categoria}</span>
							</div>
						</div>
						<h3>{f.titulo}</h3>
						<p>{f.descricao}</p>
						<span class="ferr-link">Abrir →</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="cta-secao">
		<div class="inner">
			<h2>Mais sobre como se proteger</h2>
			<div class="cta-grid">
				<a href="/competencias#proteger" class="cta-card">
					<span>🔒</span>
					<strong>Pilar Proteger</strong>
					<p>Guia completo de proteção de contas, dispositivos e dados</p>
				</a>
				<a href="/glossario" class="cta-card">
					<span>📖</span>
					<strong>Glossário digital</strong>
					<p>Definições claras de todos os termos importantes</p>
				</a>
				<a href="/emergencia" class="cta-card">
					<span>🆘</span>
					<strong>Emergência digital</strong>
					<p>O que fazer quando algo corre mal — passo a passo</p>
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.ferramentas-page {
		min-height: 100vh;
	}

	.topo {
		background: linear-gradient(135deg, #0d7a6c 0%, #0a5a52 100%);
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

	.subtitulo {
		font-size: 1.125rem;
		opacity: 0.9;
		margin: 0;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
	}

	.ferramenta-secao {
		padding: 3.5rem 1.5rem;
		background: white;
	}

	.ferramenta-secao.alt {
		background: #faf9f5;
	}

	.ferr-header {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
		margin-bottom: 2rem;
	}

	.ferr-emoji {
		font-size: 2.5rem;
		flex-shrink: 0;
	}

	.ferr-header h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		color: #1c1c1e;
		margin: 0 0 0.25rem;
	}

	.ferr-desc {
		color: #6b7280;
		margin: 0;
		font-size: 0.9375rem;
	}

	.ferr-corpo {
		max-width: 600px;
	}

	.input-group {
		margin-bottom: 1.5rem;
	}

	.input-group label {
		display: block;
		font-weight: 600;
		color: #1c1c1e;
		margin-bottom: 0.5rem;
		font-size: 0.9375rem;
	}

	.pw-wrapper {
		position: relative;
	}

	.pw-wrapper input,
	.input-group input[type="url"] {
		width: 100%;
		padding: 0.875rem 1rem;
		border: 2px solid #e5e7eb;
		border-radius: 0.5rem;
		font-size: 1rem;
		background: white;
		color: #1c1c1e;
		box-sizing: border-box;
	}

	.pw-wrapper input {
		padding-right: 3rem;
	}

	.pw-wrapper input:focus,
	.input-group input[type="url"]:focus {
		outline: none;
		border-color: #0d7a6c;
	}

	.toggle-vis {
		position: absolute;
		right: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.125rem;
	}

	.forca-resultado {
		margin-bottom: 1.5rem;
	}

	.barra-forca {
		height: 8px;
		background: #e5e7eb;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.barra-fill {
		height: 100%;
		border-radius: 4px;
		transition: width 0.3s ease;
	}

	.forca-label {
		font-weight: 700;
		font-size: 1rem;
		margin-bottom: 0.75rem;
	}

	.dicas-lista {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.dicas-lista li {
		font-size: 0.875rem;
		color: #6b7280;
	}

	.forca-ok {
		color: #0d7a6c;
		font-size: 0.9375rem;
		margin: 0;
	}

	.gerador-frase {
		background: #f5f0e8;
		border-radius: 0.75rem;
		padding: 1.5rem;
	}

	.gerador-frase h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.125rem;
		color: #1c1c1e;
		margin: 0 0 0.25rem;
	}

	.gerador-frase p {
		color: #6b7280;
		font-size: 0.875rem;
		margin: 0 0 1rem;
	}

	.gerador-controls {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-wrap: wrap;
	}

	.gerador-controls label {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		font-size: 0.9375rem;
		color: #1c1c1e;
	}

	.gerador-controls input[type="range"] {
		cursor: pointer;
	}

	.btn-gerar {
		background: #0d7a6c;
		color: white;
		border: none;
		padding: 0.625rem 1.25rem;
		border-radius: 0.5rem;
		font-weight: 600;
		cursor: pointer;
		font-size: 0.9375rem;
		transition: background 0.2s;
	}

	.btn-gerar:hover {
		background: #0a6058;
	}

	.frase-resultado {
		margin-top: 1.25rem;
		background: white;
		border-radius: 0.5rem;
		padding: 1rem 1.25rem;
	}

	.frase-resultado code {
		display: block;
		font-size: 1.125rem;
		font-weight: 700;
		color: #0d7a6c;
		word-break: break-all;
		margin-bottom: 0.5rem;
	}

	.frase-nota {
		margin: 0;
		font-size: 0.8125rem;
		color: #6b7280;
	}

	.url-resultado {
		margin-top: 0.5rem;
	}

	.alertas-box {
		background: #fff5f5;
		border: 1px solid #fecaca;
		border-radius: 0.625rem;
		padding: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.alertas-box h4 {
		color: #c0392b;
		margin: 0 0 0.75rem;
		font-size: 0.9375rem;
	}

	.alertas-box ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.alertas-box li {
		color: #7f1d1d;
		font-size: 0.875rem;
		margin-bottom: 0.375rem;
	}

	.ok-box {
		background: #f0fdf4;
		border: 1px solid #bbf7d0;
		border-radius: 0.625rem;
		padding: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.ok-box h4 {
		color: #166534;
		margin: 0 0 0.75rem;
		font-size: 0.9375rem;
	}

	.ok-box ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.ok-box li {
		color: #166534;
		font-size: 0.875rem;
		margin-bottom: 0.375rem;
	}

	.url-aviso {
		font-size: 0.8125rem;
		color: #6b7280;
		margin: 0;
	}

	/* Recursos */
	.recursos-secao {
		background: #f5f0e8;
		padding: 4rem 1.5rem;
	}

	.recursos-secao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 2rem;
		text-align: center;
		color: #1c1c1e;
		margin: 0 0 0.5rem;
	}

	.sec-desc {
		text-align: center;
		color: #6b7280;
		margin: 0 0 1.5rem;
	}

	.cats-scroll {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
		padding-bottom: 0.25rem;
		scrollbar-width: none;
		margin-bottom: 2rem;
	}

	.cats-scroll::-webkit-scrollbar {
		display: none;
	}

	.cat-btn {
		padding: 0.4rem 1rem;
		border-radius: 2rem;
		border: 2px solid #d1c9bb;
		background: none;
		color: #6b7280;
		cursor: pointer;
		white-space: nowrap;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.15s;
		flex-shrink: 0;
	}

	.cat-btn:hover {
		border-color: #0d7a6c;
		color: #0d7a6c;
	}

	.cat-btn.ativo {
		background: #0d7a6c;
		border-color: #0d7a6c;
		color: white;
	}

	.ferr-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.25rem;
	}

	.ferr-card {
		background: white;
		border-radius: 0.75rem;
		padding: 1.25rem;
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: 2px solid transparent;
		transition: all 0.2s;
	}

	.ferr-card:hover {
		border-color: #0d7a6c;
		box-shadow: 0 4px 16px rgba(0,0,0,0.08);
	}

	.ferr-card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.ferr-card-emoji {
		font-size: 1.75rem;
	}

	.ferr-card-tags {
		display: flex;
		gap: 0.375rem;
	}

	.tag {
		font-size: 0.6875rem;
		padding: 0.15rem 0.5rem;
		border-radius: 2rem;
		font-weight: 600;
	}

	.tag.gratis {
		background: #dcfce7;
		color: #166534;
	}

	.tag.cat {
		background: #f5f0e8;
		color: #6b7280;
	}

	.ferr-card h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.0625rem;
		color: #1c1c1e;
		margin: 0;
	}

	.ferr-card p {
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.5;
		margin: 0;
		flex: 1;
	}

	.ferr-link {
		color: #0d7a6c;
		font-size: 0.875rem;
		font-weight: 600;
	}

	/* CTA */
	.cta-secao {
		background: white;
		padding: 4rem 1.5rem;
	}

	.cta-secao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		text-align: center;
		color: #1c1c1e;
		margin: 0 0 2rem;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1.25rem;
	}

	.cta-card {
		background: #faf9f5;
		border-radius: 0.75rem;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		text-align: center;
		border: 2px solid transparent;
		transition: all 0.2s;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.cta-card:hover {
		border-color: #0d7a6c;
	}

	.cta-card span {
		font-size: 2rem;
	}

	.cta-card strong {
		font-family: 'Lora', Georgia, serif;
		color: #1c1c1e;
		font-size: 1.0625rem;
	}

	.cta-card p {
		color: #6b7280;
		font-size: 0.875rem;
		margin: 0;
		line-height: 1.5;
	}

	@media (prefers-color-scheme: dark) {
		.ferramenta-secao {
			background: #111;
		}
		.ferramenta-secao.alt {
			background: #1a1a1a;
		}
		.ferr-header h2 {
			color: #f9fafb;
		}
		.input-group label {
			color: #f9fafb;
		}
		.pw-wrapper input,
		.input-group input[type="url"] {
			background: #1c1c1e;
			border-color: #444;
			color: #f9fafb;
		}
		.gerador-frase {
			background: #1c1c1e;
		}
		.gerador-frase h3 {
			color: #f9fafb;
		}
		.gerador-controls label {
			color: #d1d5db;
		}
		.frase-resultado {
			background: #2a2a2e;
		}
		.recursos-secao {
			background: #1a1a1a;
		}
		.recursos-secao h2 {
			color: #f9fafb;
		}
		.cat-btn {
			border-color: #444;
			color: #9ca3af;
		}
		.ferr-card {
			background: #1c1c1e;
		}
		.ferr-card h3 {
			color: #f9fafb;
		}
		.cta-secao {
			background: #111;
		}
		.cta-secao h2 {
			color: #f9fafb;
		}
		.cta-card {
			background: #1c1c1e;
		}
		.cta-card strong {
			color: #f9fafb;
		}
	}
</style>
