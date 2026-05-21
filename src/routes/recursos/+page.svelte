<script>
	const categorias = [
		{
			titulo: 'Entidades oficiais',
			icone: '🏛️',
			recursos: [
				{ nome: 'CNCS', desc: 'Centro Nacional de Cibersegurança — alertas, relatórios e apoio a incidentes informáticos nacionais.', url: 'https://www.cncs.gov.pt', tag: 'Oficial' },
				{ nome: 'SeguraNet', desc: 'Portal de segurança online para crianças, jovens, pais e professores. Recursos e atividades educativas.', url: 'https://www.seguranet.pt', tag: 'Educação' },
				{ nome: 'CNPD', desc: 'Comissão Nacional de Proteção de Dados — queixas sobre uso indevido de dados pessoais e RGPD.', url: 'https://www.cnpd.pt', tag: 'RGPD' },
				{ nome: 'CMVM', desc: 'Verifica se uma plataforma de investimento tem autorização legal em Portugal. Evita fraudes financeiras.', url: 'https://www.cmvm.pt', tag: 'Finanças' },
				{ nome: 'Banco de Portugal', desc: 'Portal do cliente bancário — direitos, como reclamar e alertas sobre fraudes bancárias.', url: 'https://clientebancario.bportugal.pt', tag: 'Banca' },
				{ nome: 'DGE — Ministério da Educação', desc: 'Recursos sobre cidadania digital e literacia mediática para escolas portuguesas.', url: 'https://www.dge.mec.pt', tag: 'Educação' },
			]
		},
		{
			titulo: 'Denúncia e apoio',
			icone: '🆘',
			recursos: [
				{ nome: 'PJ — UNC3T', desc: 'Unidade Nacional de Combate ao Cibercrime da Polícia Judiciária. Para crimes informáticos graves.', url: 'https://www.policiajudiciaria.pt', tag: 'Denúncia' },
				{ nome: 'Queixas eletrónicas', desc: 'Denúncia de crimes online diretamente ao Ministério Público, sem sair de casa.', url: 'https://queixaseletronicas.ministeriopublico.pt', tag: 'Denúncia' },
				{ nome: 'GNR', desc: 'Investigação de crimes informáticos. Queixa na esquadra ou via formulário online.', url: 'https://www.gnr.pt', tag: 'Denúncia' },
				{ nome: 'APAV', desc: 'Apoio jurídico, psicológico e social a vítimas de crime. Gratuito, confidencial. Linha 116 006.', url: 'https://apav.pt', tag: 'Apoio' },
				{ nome: 'DECO Proteste', desc: 'Defesa do consumidor — fraudes em compras online, serviços digitais e contratos abusivos.', url: 'https://www.deco.proteste.pt', tag: 'Consumidor' },
				{ nome: 'Linha Internet Segura', desc: 'Apoio a situações de segurança online. Gratuita. 800 21 90 90.', url: 'https://internetsegura.pt', tag: 'Apoio' },
			]
		},
		{
			titulo: 'Ferramentas gratuitas',
			icone: '🛠️',
			recursos: [
				{ nome: 'Bitwarden', desc: 'Gestor de passwords gratuito, open-source e auditado. A solução mais recomendada.', url: 'https://bitwarden.com', tag: 'Ferramenta' },
				{ nome: 'Have I Been Pwned', desc: 'Verifica se o teu email ou password apareceu em fugas de dados conhecidas.', url: 'https://haveibeenpwned.com', tag: 'Verificação' },
				{ nome: 'VirusTotal', desc: 'Analisa ficheiros e links suspeitos com 70+ motores antivírus. Sem instalação necessária.', url: 'https://www.virustotal.com', tag: 'Análise' },
				{ nome: 'URLscan.io', desc: 'Analisa um link suspeito sem o abrir — mostra capturas de ecrã e ameaças detetadas.', url: 'https://urlscan.io', tag: 'Análise' },
				{ nome: 'Signal', desc: 'Mensagens com encriptação end-to-end. Open-source, sem publicidade, sem recolha de dados.', url: 'https://signal.org', tag: 'Privacidade' },
				{ nome: 'ProtonMail', desc: 'Email gratuito com encriptação end-to-end baseado na Suíça. Alternativa privada ao Gmail.', url: 'https://proton.me', tag: 'Privacidade' },
			]
		},
		{
			titulo: 'Verificação de informação',
			icone: '🔍',
			recursos: [
				{ nome: 'Polígrafo', desc: 'Plataforma portuguesa de fact-checking. Verifica afirmações de figuras públicas e notícias virais.', url: 'https://poligrafo.sapo.pt', tag: 'Fact-checking' },
				{ nome: 'Observador Fact Check', desc: 'Secção de verificação de factos do Observador — jornalismo rigoroso e transparente.', url: 'https://observador.pt/especiais/fact-check/', tag: 'Fact-checking' },
				{ nome: 'InVID / WeVerify', desc: 'Extensão de browser para verificar vídeos e imagens — datas, localização, manipulação.', url: 'https://weverify.eu/verification-plugin/', tag: 'Verificação' },
				{ nome: 'Google Imagens (reversa)', desc: 'Pesquise uma imagem para descobrir a sua origem e verificar se foi manipulada ou descontextualizada.', url: 'https://images.google.com', tag: 'Verificação' },
				{ nome: 'No More Ransom', desc: 'Desencriptadores gratuitos para dezenas de variantes de ransomware. Iniciativa europeia oficial.', url: 'https://nomoreransom.org', tag: 'Segurança' },
				{ nome: 'WHOIS', desc: 'Consulte quem registou um domínio e quando. Útil para identificar sites suspeitos.', url: 'https://who.is', tag: 'Análise' },
			]
		},
	];

	const linhas = [
		{ numero: '800 21 90 90', nome: 'Linha Internet Segura', desc: 'Gratuita · Disponível', cor: '#0d7a6c' },
		{ numero: '116 006', nome: 'APAV', desc: 'Apoio à vítima', cor: '#8e44ad' },
		{ numero: '112', nome: 'Emergência', desc: 'Perigo imediato', cor: '#c0392b' },
	];
</script>

<svelte:head>
	<title>Recursos — Carta de Navegação</title>
	<meta name="description" content="Entidades oficiais, ferramentas gratuitas e linhas de apoio para navegar com segurança em Portugal." />
</svelte:head>

<div class="recursos-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">🔗 Recursos</div>
			<h1>Recursos e apoio</h1>
			<p class="subtitulo">Entidades, ferramentas e linhas de apoio disponíveis em Portugal</p>
		</div>
	</header>

	<section class="linhas-secao" aria-label="Linhas de apoio de emergência">
		<div class="inner">
			<div class="linhas-grid">
				{#each linhas as l}
					<a href="tel:{l.numero.replace(/\s/g, '')}" class="linha-card" style="border-top: 4px solid {l.cor}">
						<span class="linha-numero" style="color: {l.cor}">{l.numero}</span>
						<span class="linha-nome">{l.nome}</span>
						<span class="linha-desc">{l.desc}</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="ferramentas-cta-secao">
		<div class="inner">
			<a href="/ferramentas" class="ferramentas-cta">
				<span class="cta-icon">🛠️</span>
				<div class="cta-texto">
					<strong>Ferramentas interativas</strong>
					<p>Verificador de passwords, analisador de URLs, gerador de frases-senha e recursos externos organizados.</p>
				</div>
				<span class="cta-seta">→</span>
			</a>
		</div>
	</section>

	{#each categorias as cat}
		<section class="cat-secao">
			<div class="inner">
				<h2><span class="cat-icone">{cat.icone}</span> {cat.titulo}</h2>
				<div class="recursos-lista">
					{#each cat.recursos as r}
						<a href={r.url} target="_blank" rel="noopener noreferrer" class="recurso-card">
							<div class="recurso-info">
								<div class="recurso-top">
									<span class="recurso-tag">{r.tag}</span>
									<strong class="recurso-nome">{r.nome}</strong>
								</div>
								<p class="recurso-desc">{r.desc}</p>
							</div>
							<span class="recurso-seta" aria-hidden="true">→</span>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/each}

	<section class="educadores-cta">
		<div class="inner">
			<div class="edu-cta-box">
				<span class="edu-icon">👩‍🏫</span>
				<div>
					<h2>É educador ou professor?</h2>
					<p>Planos de aula, fichas e guias adaptados a cada faixa etária — do pré-escolar ao secundário.</p>
					<a href="/educadores" class="btn-edu">Ver recursos para educadores →</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.recursos-page { min-height: 100vh; }

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

	/* Linhas */
	.linhas-secao { background: #0a3d36; padding: 2.5rem 1.5rem; }

	.linhas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}

	.linha-card {
		background: rgba(255,255,255,0.08);
		border: 1px solid rgba(255,255,255,0.12);
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		transition: background 0.2s;
	}

	.linha-card:hover { background: #333338; }

	.linha-numero { font-family: 'Lora', Georgia, serif; font-size: 1.5rem; font-weight: 700; }
	.linha-nome { color: #e5e7eb; font-weight: 600; font-size: 0.9375rem; }
	.linha-desc { color: #6b7280; font-size: 0.8125rem; }

	/* CTA ferramentas */
	.ferramentas-cta-secao { background: white; padding: 1.5rem 1.5rem; border-bottom: 1px solid #e5e7eb; }

	.ferramentas-cta {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		background: #f5f0e8;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		text-decoration: none;
		color: inherit;
		border: 2px solid transparent;
		transition: border-color 0.2s;
	}

	.ferramentas-cta:hover { border-color: #0d7a6c; }

	.cta-icon { font-size: 2rem; flex-shrink: 0; }
	.cta-texto { flex: 1; }
	.cta-texto strong { display: block; color: #1c1c1e; margin-bottom: 0.25rem; }
	.cta-texto p { color: #6b7280; font-size: 0.875rem; margin: 0; }
	.cta-seta { color: #0d7a6c; font-size: 1.25rem; font-weight: 700; }

	/* Categorias */
	.cat-secao { padding: 3rem 1.5rem; background: #faf9f5; }
	.cat-secao:nth-child(even) { background: white; }

	.cat-secao h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.5rem;
		color: #1c1c1e;
		margin: 0 0 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.625rem;
	}

	.cat-icone { font-size: 1.375rem; }

	.recursos-lista {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 0.875rem;
	}

	.recurso-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.125rem 1.25rem;
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: flex-start;
		gap: 0.875rem;
		transition: all 0.2s;
	}

	.recurso-card:hover {
		border-color: #0d7a6c;
		box-shadow: 0 2px 12px rgba(13,122,108,0.1);
	}

	.recurso-info { flex: 1; }

	.recurso-top {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.375rem;
		flex-wrap: wrap;
	}

	.recurso-tag {
		background: #f5f0e8;
		color: #6b7280;
		font-size: 0.6875rem;
		font-weight: 600;
		padding: 0.15rem 0.5rem;
		border-radius: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.recurso-nome { font-size: 0.9375rem; color: #1c1c1e; }

	.recurso-desc { font-size: 0.8125rem; color: #6b7280; line-height: 1.5; margin: 0; }

	.recurso-seta { color: #0d7a6c; font-size: 1rem; font-weight: 700; flex-shrink: 0; margin-top: 0.125rem; }

	/* Educadores CTA */
	.educadores-cta { background: #f5f0e8; padding: 3rem 1.5rem; }

	.edu-cta-box {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		border-left: 6px solid #0d7a6c;
	}

	.edu-icon { font-size: 2.5rem; flex-shrink: 0; }

	.edu-cta-box h2 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.375rem;
		color: #1c1c1e;
		margin: 0 0 0.5rem;
	}

	.edu-cta-box p {
		color: #6b7280;
		font-size: 0.9375rem;
		margin: 0 0 1rem;
		line-height: 1.6;
	}

	.btn-edu {
		display: inline-block;
		background: #0d7a6c;
		color: white;
		padding: 0.625rem 1.25rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		transition: background 0.2s;
	}

	.btn-edu:hover { background: #0a6058; }

</style>
