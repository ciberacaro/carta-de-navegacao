<script>
	let pesquisa = $state('');
	let categoriaAtiva = $state('todas');

	const termos = [
		{ termo: '2FA / Autenticação em dois fatores', categoria: 'segurança', definicao: 'Segundo passo de verificação ao fazer login — além da password, pede um código via SMS, app ou biometria. Bloqueia a maioria dos acessos não autorizados mesmo que a password seja roubada.' },
		{ termo: 'Adware', categoria: 'ameaças', definicao: 'Software que exibe publicidade não solicitada no dispositivo. Pode vir embalado com software gratuito. Geralmente irritante mas raramente perigoso por si só.' },
		{ termo: 'Algoritmo', categoria: 'plataformas', definicao: 'Conjunto de regras que uma plataforma usa para decidir o que mostrar a cada utilizador. O algoritmo do Instagram ou TikTok decide o que aparece no teu feed com base no que interages mais.' },
		{ termo: 'Alucinação (IA)', categoria: 'ia', definicao: 'Quando um sistema de inteligência artificial gera informação incorreta com total confiança — inventa factos, datas, nomes ou citações que não existem. Acontece com ChatGPT, Gemini e outros.' },
		{ termo: 'Antivírus', categoria: 'ferramentas', definicao: 'Software que deteta e remove programas maliciosos. Não substitui boas práticas (senhas fortes, atualizações, desconfiança de links), mas é uma camada extra de proteção.' },
		{ termo: 'Autenticação', categoria: 'segurança', definicao: 'Processo de verificar a identidade de quem tenta aceder a uma conta ou sistema. Pode ser password, PIN, impressão digital, reconhecimento facial ou combinação de vários.' },
		{ termo: 'Backup / Cópia de segurança', categoria: 'segurança', definicao: 'Cópia dos seus dados guardada noutro lugar. Regra 3-2-1: 3 cópias, 2 suportes diferentes, 1 fora de casa. Protege contra ransomware, avaria de disco e acidente.' },
		{ termo: 'Biometria', categoria: 'segurança', definicao: 'Autenticação usando características físicas únicas: impressão digital, reconhecimento facial, voz. Conveniente e seguro para desbloqueio de dispositivos.' },
		{ termo: 'Bitcoin / Criptomoeda', categoria: 'financeiro', definicao: 'Moeda digital descentralizada. Usada em burlas porque as transferências são irreversíveis e difíceis de rastrear. Se alguém pedir pagamento em criptomoeda para "resolver um problema", é burla.' },
		{ termo: 'Bot', categoria: 'plataformas', definicao: 'Programa automatizado que simula comportamento humano online. Pode ser útil (respostas automáticas) ou malicioso (spam, manipulação de métricas, desinformação).' },
		{ termo: 'Botnet', categoria: 'ameaças', definicao: 'Rede de dispositivos infetados controlados remotamente por atacantes. O seu computador pode ser parte de uma botnet sem que saiba, usado para enviar spam ou fazer ataques.' },
		{ termo: 'Browser / Navegador', categoria: 'básico', definicao: 'Programa para aceder à web: Chrome, Firefox, Safari, Edge. Mantenha-o atualizado — atualizações corrigem vulnerabilidades de segurança.' },
		{ termo: 'Burla romântica (Romance scam)', categoria: 'ameaças', definicao: 'Fraude em que o atacante cria uma relação afetiva online para eventualmente pedir dinheiro. Pode durar meses. Vítimas podem perder milhares de euros.' },
		{ termo: 'Cache', categoria: 'básico', definicao: 'Armazenamento temporário de dados para acelerar o carregamento. O browser guarda cópias de sites visitados. Limpar o cache pode resolver problemas de carregamento.' },
		{ termo: 'Captcha', categoria: 'básico', definicao: 'Teste para verificar se quem está a aceder é humano (não um bot). Pode ser clicar em imagens, resolver puzzles ou simplesmente uma caixa de verificação.' },
		{ termo: 'Catfishing', categoria: 'ameaças', definicao: 'Criar uma identidade falsa online para enganar alguém, geralmente com fins românticos ou financeiros. Diferente de trolling — implica relação prolongada.' },
		{ termo: 'Chave Móvel Digital', categoria: 'portugal', definicao: 'Sistema de autenticação português que permite aceder a serviços públicos (Finanças, SNS, etc.) usando o número de telemóvel + PIN. Alternativa ao Cartão de Cidadão.' },
		{ termo: 'Ciberbullying', categoria: 'social', definicao: 'Assédio, humilhação ou intimidação repetida online. Pode incluir partilha de imagens privadas, comentários ofensivos, exclusão deliberada. Tem implicações legais.' },
		{ termo: 'Clickbait', categoria: 'desinformação', definicao: 'Títulos exagerados ou enganadores criados para provocar cliques ("Vai ficar chocado com o que aconteceu"). Geralmente, o conteúdo não cumpre a promessa do título.' },
		{ termo: 'CNPD', categoria: 'portugal', definicao: 'Comissão Nacional de Proteção de Dados — entidade portuguesa que supervisiona o cumprimento do RGPD. Para onde reclamar se os seus dados forem usados ilegalmente.' },
		{ termo: 'Cookie', categoria: 'básico', definicao: 'Pequeno ficheiro guardado pelo browser que armazena informação sobre a sua visita. Podem ser funcionais (manter sessão) ou de rastreio (seguir o utilizador para publicidade).' },
		{ termo: 'Creative Commons', categoria: 'direitos', definicao: 'Sistema de licenças que permite ao criador de uma obra definir como pode ser usada. Algumas licenças permitem uso livre, outras exigem atribuição ou proíbem uso comercial.' },
		{ termo: 'Criptografia / Encriptação', categoria: 'segurança', definicao: 'Transformação de dados em código ilegível sem a chave correta. HTTPS usa encriptação. Mensagens "end-to-end encrypted" (WhatsApp, Signal) só podem ser lidas pelo remetente e destinatário.' },
		{ termo: 'Darknet / Dark web', categoria: 'básico', definicao: 'Parte da internet que requer software especial (como Tor) para aceder. Tem usos legítimos (privacidade, jornalismo) mas também é usada para atividades ilegais.' },
		{ termo: 'Dados pessoais', categoria: 'privacidade', definicao: 'Qualquer informação que identifica ou pode identificar uma pessoa: nome, morada, email, IP, localização, dados de saúde. Protegidos pelo RGPD na União Europeia.' },
		{ termo: 'Deepfake', categoria: 'desinformação', definicao: 'Vídeo, imagem ou áudio manipulado com inteligência artificial para mostrar alguém a dizer ou fazer algo que nunca disse ou fez. Cada vez mais difícil de detetar.' },
		{ termo: 'Desinformação', categoria: 'desinformação', definicao: 'Informação falsa ou enganosa partilhada deliberadamente. Diferente de misinformation (informação errada partilhada por engano). Espalha-se mais rápido que a verdade porque é mais emocional.' },
		{ termo: 'DNS', categoria: 'básico', definicao: 'Sistema de nomes de domínio — o "livro de endereços" da internet. Traduz nomes como "google.com" em endereços IP que os computadores entendem.' },
		{ termo: 'Download', categoria: 'básico', definicao: 'Transferência de ficheiros da internet para o seu dispositivo. Downloads de fontes desconhecidas são um dos principais vetores de infeção por malware.' },
		{ termo: 'E2EE (Encriptação end-to-end)', categoria: 'segurança', definicao: 'Encriptação onde só o remetente e destinatário podem ler as mensagens — nem a empresa prestadora do serviço consegue. Signal, WhatsApp e iMessage usam E2EE.' },
		{ termo: 'Email de phishing', categoria: 'ameaças', definicao: 'Email fraudulento que imita uma entidade legítima (banco, CTT, Finanças) para roubar credenciais ou dinheiro. Verifique sempre o endereço real do remetente, não o nome apresentado.' },
		{ termo: 'Engenharia social', categoria: 'ameaças', definicao: 'Manipulação psicológica para levar alguém a revelar informações ou executar ações. Usa urgência, autoridade, medo ou recompensa. Phishing é uma forma de engenharia social.' },
		{ termo: 'ESET / Kaspersky / Avast', categoria: 'ferramentas', definicao: 'Marcas conhecidas de software antivírus. O Windows 10/11 já inclui o Defender, que é suficiente para a maioria dos utilizadores domésticos com boas práticas.' },
		{ termo: 'Fact-checking', categoria: 'desinformação', definicao: 'Verificação da veracidade de afirmações com base em provas e fontes. Em Portugal: Polígrafo, Observador Fact Check. Internacionalmente: Snopes, FactCheck.org.' },
		{ termo: 'Firewall', categoria: 'segurança', definicao: 'Barreira de segurança que filtra o tráfego de rede. O Windows e macOS têm firewall integrado. Importante em redes corporativas; útil mas não essencial em casa.' },
		{ termo: 'GDPR / RGPD', categoria: 'direitos', definicao: 'Regulamento Geral sobre a Proteção de Dados — lei europeia que protege os dados dos cidadãos. Dá o direito de aceder, corrigir e apagar os seus dados de qualquer empresa.' },
		{ termo: 'Gestor de passwords', categoria: 'ferramentas', definicao: 'App que guarda e gera passwords únicas e complexas para cada serviço. O Bitwarden é gratuito e de código aberto. Elimina a necessidade de memorizar dezenas de passwords.' },
		{ termo: 'Hacker', categoria: 'segurança', definicao: 'Originalmente, pessoa com grande habilidade técnica. Na imprensa, usado para quem acede sistemas sem autorização. Distinção: hacker "white hat" (ético), "black hat" (malicioso).' },
		{ termo: 'HTTPS', categoria: 'básico', definicao: 'Versão segura do HTTP — a comunicação entre o seu browser e o site é encriptada. O cadeado no browser indica HTTPS. Não garante que o site é legítimo, só que a comunicação é segura.' },
		{ termo: 'IA Generativa', categoria: 'ia', definicao: 'Inteligência artificial que cria conteúdo novo: texto (ChatGPT), imagens (DALL-E, Midjourney), vídeo, código. Pode gerar conteúdo convincente mas falso — verifique sempre.' },
		{ termo: 'Identidade digital', categoria: 'social', definicao: 'Tudo o que existe sobre si online: publicações, comentários, fotos, perfis, histórico de pesquisa. Constrói-se ao longo do tempo e pode ser vista por empregadores, universidades e desconhecidos.' },
		{ termo: 'IP (Endereço IP)', categoria: 'básico', definicao: 'Identificador numérico atribuído ao seu dispositivo na internet. Revela aproximadamente a sua localização. As empresas registam IPs como dados pessoais sob o RGPD.' },
		{ termo: 'Keylogger', categoria: 'ameaças', definicao: 'Software malicioso que regista tudo o que é escrito no teclado, incluindo passwords e números de cartão. Instala-se geralmente via downloads de fontes não confiáveis.' },
		{ termo: 'Literacia digital', categoria: 'básico', definicao: 'Capacidade de usar, avaliar e criar conteúdo digital de forma crítica e eficaz. Inclui segurança online, verificação de informação e comunicação responsável. O foco desta plataforma.' },
		{ termo: 'Malware', categoria: 'ameaças', definicao: 'Termo genérico para software malicioso: vírus, trojans, spyware, ransomware, adware. Instala-se geralmente por downloads inseguros, emails de phishing ou sites comprometidos.' },
		{ termo: 'MFA (Autenticação multifator)', categoria: 'segurança', definicao: 'Uso de dois ou mais fatores de autenticação. Pode ser password + SMS, password + app autenticadora, ou password + biometria. Mais seguro que apenas password.' },
		{ termo: 'Metadados', categoria: 'privacidade', definicao: 'Dados sobre dados. Uma foto tem metadados (data, localização GPS, dispositivo). Um email tem metadados (remetente, hora, assunto). Podem revelar muito mesmo sem ver o conteúdo.' },
		{ termo: 'Notícia falsa / Fake news', categoria: 'desinformação', definicao: 'Informação fabricada apresentada como notícia legítima. Verifique a fonte, procure outras fontes independentes, use ferramentas de fact-checking antes de partilhar.' },
		{ termo: 'Passkey', categoria: 'segurança', definicao: 'Tecnologia que substitui passwords por autenticação biométrica (impressão digital, face). Mais seguro e conveniente. Suportado pelo Google, Apple, Microsoft e cada vez mais sites.' },
		{ termo: 'Password / Senha', categoria: 'segurança', definicao: 'Sequência secreta para autenticação. Uma boa password é longa (12+ caracteres), única por serviço e não contém informação pessoal óbvia. Use um gestor de passwords.' },
		{ termo: 'Phishing', categoria: 'ameaças', definicao: 'Tentativa de roubar credenciais ou dinheiro através de comunicações fraudulentas que imitam entidades legítimas. Verifica sempre o domínio real nos emails (não o nome apresentado).' },
		{ termo: 'Privacidade digital', categoria: 'privacidade', definicao: 'Controlo sobre as próprias informações pessoais no ambiente digital. Inclui o que partilha, com quem, em que plataformas e por quanto tempo. Um direito protegido pelo RGPD.' },
		{ termo: 'Ransomware', categoria: 'ameaças', definicao: 'Malware que encripta os seus ficheiros e pede resgate para os recuperar. Não pague — não garante recuperação. Proteja-se com backups regulares e atualizações.' },
		{ termo: 'RGPD', categoria: 'direitos', definicao: 'Regulamento Geral sobre a Proteção de Dados (em inglês: GDPR). Lei europeia em vigor desde 2018. Dá-lhe o direito de saber quais dados uma empresa tem sobre si, corrigi-los ou apagá-los.' },
		{ termo: 'SIM Swap', categoria: 'ameaças', definicao: 'Ataque onde o criminoso convence a operadora a transferir o seu número de telemóvel para um novo cartão. Permite receber os seus SMS de autenticação. Contacte o operador imediatamente se suspeitar.' },
		{ termo: 'Smishing', categoria: 'ameaças', definicao: 'Phishing por SMS. Mensagens falsas a imitar CTT, bancos ou serviços públicos para roubar dados. Nunca clique em links de SMS inesperados — aceda sempre diretamente ao site oficial.' },
		{ termo: 'Software legítimo vs. pirata', categoria: 'direitos', definicao: 'Software pirata (crack, keygen) frequentemente contém malware. O "desconto" não vale o risco. Existem alternativas gratuitas e legítimas para a maioria das necessidades.' },
		{ termo: 'Spam', categoria: 'ameaças', definicao: 'Mensagens não solicitadas em massa — email, SMS ou redes sociais. Pode ser apenas publicidade ou pode conter phishing e malware. Nunca responda para pedir remoção.' },
		{ termo: 'Spyware', categoria: 'ameaças', definicao: 'Software que monitoriza a atividade do utilizador sem consentimento: sites visitados, teclas pressionadas, conversas. Instalado geralmente sem o conhecimento da vítima.' },
		{ termo: 'SSL/TLS', categoria: 'básico', definicao: 'Protocolos de encriptação que protegem a comunicação entre browser e servidor. O cadeado no browser indica que a ligação usa TLS. HTTPS é HTTP com TLS.' },
		{ termo: 'Stalkerware', categoria: 'ameaças', definicao: 'App de monitorização instalada secretamente num dispositivo para vigiar a vítima — localização, mensagens, chamadas. Frequentemente usado em contextos de violência doméstica.' },
		{ termo: 'Trojan / Cavalo de Tróia', categoria: 'ameaças', definicao: 'Malware disfarçado de software legítimo ou útil. Instala-se quando o utilizador executa o ficheiro aparentemente inofensivo. Pode abrir acesso remoto ao atacante.' },
		{ termo: 'URL', categoria: 'básico', definicao: 'Endereço de uma página web (ex: "https://www.cm-gaia.pt/pt/"). Verifique sempre o domínio real antes de introduzir dados sensíveis — phishing usa domínios muito similares ao original.' },
		{ termo: 'VPN', categoria: 'ferramentas', definicao: 'Rede privada virtual — encripta a ligação e oculta o endereço IP. Útil em Wi-Fi público. Não torna o utilizador anónimo. A empresa VPN pode ver o tráfego — escolha de confiança.' },
		{ termo: 'Vírus', categoria: 'ameaças', definicao: 'Programa malicioso que se replica e espalha para outros ficheiros e sistemas. Pode destruir dados, abrandar o sistema ou roubar informação. Um dos tipos mais antigos de malware.' },
		{ termo: 'Vishing', categoria: 'ameaças', definicao: 'Phishing por voz — chamadas telefónicas fraudulentas de supostos técnicos, bancos ou entidades oficiais. O seu banco NUNCA pede a password por telefone.' },
		{ termo: 'Wi-Fi público', categoria: 'segurança', definicao: 'Redes sem fio abertas (cafés, aeroportos, hotéis). Tráfego pode ser interceptado. Evite aceder a contas bancárias. Use HTTPS e considere VPN em redes públicas.' },
		{ termo: 'Zero-day', categoria: 'segurança', definicao: 'Vulnerabilidade de segurança desconhecida pelo fabricante — sem patch disponível. Muito valiosa para atacantes. Por isso as atualizações de software são importantes: corrigem vulnerabilidades conhecidas.' }
	];

	const categorias = [
		{ id: 'todas', nome: 'Todos' },
		{ id: 'ameaças', nome: 'Ameaças' },
		{ id: 'segurança', nome: 'Segurança' },
		{ id: 'privacidade', nome: 'Privacidade' },
		{ id: 'direitos', nome: 'Direitos' },
		{ id: 'desinformação', nome: 'Desinformação' },
		{ id: 'ia', nome: 'Inteligência Artificial' },
		{ id: 'plataformas', nome: 'Plataformas' },
		{ id: 'social', nome: 'Redes sociais' },
		{ id: 'ferramentas', nome: 'Ferramentas' },
		{ id: 'básico', nome: 'Básico' },
		{ id: 'portugal', nome: 'Portugal' },
		{ id: 'financeiro', nome: 'Financeiro' }
	];

	const termosFiltrados = $derived.by(() => {
		const q = pesquisa.toLowerCase().trim();
		return termos
			.filter(t =>
				(categoriaAtiva === 'todas' || t.categoria === categoriaAtiva) &&
				(q === '' || t.termo.toLowerCase().includes(q) || t.definicao.toLowerCase().includes(q))
			)
			.sort((a, b) => a.termo.localeCompare(b, 'pt'));
	});

	const letrasAtivas = $derived.by(() => {
		const letras = new Set(termosFiltrados.map(t => t.termo[0].toUpperCase()));
		return [...letras].sort((a, b) => a.localeCompare(b, 'pt'));
	});
</script>

<svelte:head>
	<title>Glossário — Carta de Navegação</title>
	<meta name="description" content="Glossário de literacia digital: definições claras dos termos mais importantes para navegar com segurança e sentido crítico." />
</svelte:head>

<div class="glossario-page">
	<header class="topo">
		<div class="topo-inner">
			<div class="topo-badge">📖 Glossário</div>
			<h1>Dicionário digital</h1>
			<p class="subtitulo">Termos de literacia digital explicados em linguagem simples</p>
			<div class="pesquisa-wrapper">
				<label for="pesquisa-input" class="sr-only">Pesquisar termos</label>
				<input
					id="pesquisa-input"
					type="search"
					bind:value={pesquisa}
					placeholder="Pesquisar... (ex: phishing, RGPD, 2FA)"
					class="pesquisa-input"
				/>
				{#if pesquisa}
					<button onclick={() => pesquisa = ''} class="limpar-btn" aria-label="Limpar pesquisa">✕</button>
				{/if}
			</div>
		</div>
	</header>

	<section class="filtros-secao">
		<div class="inner">
			<div class="cats-scroll" role="group" aria-label="Filtrar por categoria">
				{#each categorias as cat}
					<button
						onclick={() => categoriaAtiva = cat.id}
						class="cat-btn"
						class:ativo={categoriaAtiva === cat.id}
					>
						{cat.nome}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<section class="resultados-secao">
		<div class="inner">
			{#if pesquisa || categoriaAtiva !== 'todas'}
				<p class="contagem">
					{termosFiltrados.length} {termosFiltrados.length === 1 ? 'termo encontrado' : 'termos encontrados'}
					{#if pesquisa} para "<strong>{pesquisa}</strong>"{/if}
				</p>
			{/if}

			{#if termosFiltrados.length === 0}
				<div class="sem-resultados">
					<p>🔍 Nenhum termo encontrado para "<strong>{pesquisa}</strong>"</p>
					<button onclick={() => { pesquisa = ''; categoriaAtiva = 'todas'; }} class="resetar-btn">
						Ver todos os termos
					</button>
				</div>
			{:else}
				<div class="termos-lista">
					{#each termosFiltrados as t, i}
						{@const letra = t.termo[0].toUpperCase()}
						{@const letraAnterior = i > 0 ? termosFiltrados[i-1].termo[0].toUpperCase() : null}
						{#if letra !== letraAnterior}
							<div id={`letra-${letra}`} class="letra-separador">{letra}</div>
						{/if}
						<div class="termo-card">
							<div class="termo-header">
								<h3>{t.termo}</h3>
								<span class="cat-tag">{categorias.find(c => c.id === t.categoria)?.nome ?? t.categoria}</span>
							</div>
							<p>{t.definicao}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.glossario-page {
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
		margin: 0 0 2rem;
	}

	.pesquisa-wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	.pesquisa-input {
		width: 100%;
		padding: 0.875rem 3rem 0.875rem 1.25rem;
		border-radius: 0.625rem;
		border: none;
		font-size: 1rem;
		background: white;
		color: #1c1c1e;
		box-shadow: 0 4px 16px rgba(0,0,0,0.15);
	}

	.pesquisa-input:focus {
		outline: 3px solid #d4a76a;
		outline-offset: 2px;
	}

	.limpar-btn {
		position: absolute;
		right: 0.75rem;
		background: none;
		border: none;
		color: #6b7280;
		cursor: pointer;
		font-size: 1rem;
		padding: 0.25rem;
	}

	.filtros-secao {
		background: white;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid #e5e7eb;
		position: sticky;
		top: 60px;
		z-index: 10;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
	}

	.cats-scroll {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
		padding-bottom: 0.25rem;
		scrollbar-width: none;
	}

	.cats-scroll::-webkit-scrollbar {
		display: none;
	}

	.cat-btn {
		padding: 0.4rem 1rem;
		border-radius: 2rem;
		border: 2px solid #e5e7eb;
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

	.resultados-secao {
		background: #faf9f5;
		padding: 2rem 1.5rem 4rem;
		min-height: 400px;
	}

	.contagem {
		color: #6b7280;
		font-size: 0.9375rem;
		margin: 0 0 1.5rem;
	}

	.sem-resultados {
		text-align: center;
		padding: 4rem 1rem;
	}

	.sem-resultados p {
		color: #6b7280;
		font-size: 1.125rem;
		margin: 0 0 1.5rem;
	}

	.resetar-btn {
		background: #0d7a6c;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 0.9375rem;
		font-weight: 600;
	}

	.termos-lista {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.letra-separador {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.75rem;
		font-weight: 700;
		color: #0d7a6c;
		padding: 1.5rem 0 0.75rem;
		border-bottom: 2px solid #0d7a6c;
		margin-bottom: 0.5rem;
	}

	.termo-card {
		background: white;
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		margin-bottom: 0.75rem;
		border: 1px solid #e5e7eb;
	}

	.termo-card:hover {
		box-shadow: 0 2px 8px rgba(0,0,0,0.08);
	}

	.termo-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.625rem;
	}

	.termo-header h3 {
		font-family: 'Lora', Georgia, serif;
		font-size: 1.0625rem;
		color: #1c1c1e;
		margin: 0;
		line-height: 1.3;
	}

	.cat-tag {
		background: #f5f0e8;
		color: #6b7280;
		font-size: 0.75rem;
		padding: 0.2rem 0.625rem;
		border-radius: 2rem;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.termo-card p {
		color: #374151;
		font-size: 0.9375rem;
		line-height: 1.65;
		margin: 0;
	}

	@media (prefers-color-scheme: dark) {
		.filtros-secao {
			background: #1c1c1e;
			border-color: #333;
		}
		.cat-btn {
			border-color: #444;
			color: #9ca3af;
		}
		.cat-btn:hover {
			border-color: #0d7a6c;
			color: #2dd4bf;
		}
		.resultados-secao {
			background: #111;
		}
		.termo-card {
			background: #1c1c1e;
			border-color: #333;
		}
		.termo-header h3 {
			color: #f9fafb;
		}
		.termo-card p {
			color: #d1d5db;
		}
		.cat-tag {
			background: #2a2a2e;
			color: #9ca3af;
		}
	}
</style>
