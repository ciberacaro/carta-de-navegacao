<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '⚓',
		titulo: 'Secundário',
		subtitulo: '15–17 anos · Definir a própria rota',
		cor: '#0d7a6c',
		fundo: '#E8F4F2',
		variante: 'jovem-adulto',
		introducao: 'Estás quase na vida adulta digital. Geres o teu perfil, crias conteúdo, tomas decisões autónomas. Esta secção ajuda-te a navegar com confiança — e a entender os mecanismos por detrás do que usas todos os dias.',
		temas: [
			{
				icone: '🏗️',
				titulo: 'Construir a tua presença digital',
				conteudo: 'LinkedIn, portfólio, projetos públicos. A tua presença digital pode abrir portas antes mesmo do primeiro emprego. Um projeto real mostrado online vale mais que um CV em branco.'
			},
			{
				icone: '⚖️',
				titulo: 'Direitos de autor e ética digital',
				conteudo: 'Direitos de autor, criação de conteúdo, o que podes e não podes usar. Ser criador obriga a conhecer as regras. Imagens, músicas e textos têm dono — mesmo os que estão online.'
			},
			{
				icone: '🧩',
				titulo: 'Inteligência Artificial — o que é',
				conteudo: 'IA está em todo o lado: reconhecimento facial, recomendações, ChatGPT, geração de imagens. É uma ferramenta poderosa mas imperfeita — pode inventar factos com total confiança. Usa-a como ponto de partida, não como resposta final.'
			},
			{
				icone: '📱',
				titulo: 'Saúde mental e ecrãs',
				conteudo: 'O design das redes sociais é feito para te manter dentro. Comparação social, FOMO, ansiedade online — reconhecer estes padrões é o primeiro passo. Defines tu quanto tempo passas, não a app.'
			},
			{
				icone: '💼',
				titulo: 'O futuro do trabalho digital',
				conteudo: 'Literacia digital não é opcional — é a competência mais procurada. Saber usar ferramentas digitais, criar conteúdo e gerir projetos online abre portas em quase todas as áreas.'
			},
			{
				icone: '🛡️',
				titulo: 'Proteger o que é teu',
				conteudo: 'Gestor de passwords (Bitwarden é grátis), autenticação em dois fatores, o que fazer quando uma conta é comprometida. Pequenos hábitos que evitam grandes problemas.'
			}
		],
		dicas: [
			'Cria um LinkedIn antes de precisar dele — a rede constrói-se antes do mercado de trabalho',
			'Usa um gestor de passwords (Bitwarden é grátis) — uma password diferente para cada serviço',
			'Ativa autenticação em dois fatores em todas as contas importantes',
			'Quando usares IA: verifica os factos, usa como ponto de partida (não como resposta final)',
			'Define limites de tempo para redes sociais — as apps têm ferramentas para isso',
			'Imagens com direitos de autor não podes usar livremente — pesquisa licenças Creative Commons',
			'O que publicas em contexto profissional é diferente do que partilhas com amigos'
		],
		historias: [
			{
				titulo: 'A Leonor e o portfólio que abriu portas',
				narrativa: 'Com 16 anos, a Leonor começou um blog sobre design gráfico onde publicava projetos semanalmente — logos, ilustrações, redesigns de embalagens. Quando se candidatou a uma bolsa de arte, o júri disse que o blog foi o fator decisivo: mostrava consistência, paixão e competências reais ao longo do tempo.',
				licao: 'Um portfólio digital construído ao longo do tempo vale mais que um CV em branco. Começa agora — mesmo que seja pequeno.'
			},
			{
				titulo: 'O Guilherme e a IA que inventou referências',
				narrativa: 'O Guilherme usou o ChatGPT para um trabalho de história. A IA citou três livros com títulos convincentes, autores reais e anos de publicação. O professor tentou encontrá-los — não existiam. O ChatGPT tinha inventado as referências com total confiança. Guilherme teve de refazer o trabalho.',
				licao: 'IA é uma ferramenta poderosa mas imperfeita. Verifica sempre as informações — especialmente datas, nomes e citações bibliográficas.'
			}
		],
		perguntas: [
			{
				pergunta: 'Qual é a melhor forma de gerir múltiplas passwords?',
				opcoes: ['Usar sempre a mesma em todos os sites', 'Guardar num papel escondido', 'Usar um gestor de passwords como Bitwarden', 'Usar o nome + ano de nascimento'],
				correta: 2,
				explicacao: 'Gestores de passwords guardam passwords únicas e complexas para cada serviço. São a solução mais segura e prática.'
			},
			{
				pergunta: 'O que significa "licença Creative Commons"?',
				opcoes: ['Um sistema de pagamento', 'Um tipo de proteção de software', 'Uma licença que especifica como podes usar uma obra de outrem', 'Uma plataforma de criação de conteúdo'],
				correta: 2,
				explicacao: 'Creative Commons permite ao criador definir se podes usar, adaptar ou comercializar a sua obra. Sempre verifica antes de usar.'
			},
			{
				pergunta: 'Uma IA gerou uma imagem de uma pessoa famosa a dizer algo que nunca disse. Isto é...',
				opcoes: ['Arte criativa inofensiva', 'Uma deepfake — pode ser desinformação com implicações legais', 'Totalmente legal', 'Só um problema se for amplamente partilhado'],
				correta: 1,
				explicacao: 'Deepfakes podem constituir difamação e desinformação. Em alguns contextos são ilegais. A IA não te livra de responsabilidade.'
			},
			{
				pergunta: 'O design das redes sociais é otimizado para...',
				opcoes: ['A tua produtividade', 'Maximizar o tempo que passas na plataforma', 'Mostrar conteúdo imparcial', 'A tua saúde mental'],
				correta: 1,
				explicacao: 'Notificações, scroll infinito, likes — tudo é desenhado para te manter dentro. Reconhecer isso ajuda a usar com mais consciência.'
			},
			{
				pergunta: 'Queres usar uma imagem do Google para o teu projeto. Deves...',
				opcoes: ['Usar livremente — é para a escola', 'Filtrar por "licença de reutilização" ou usar Unsplash/Pexels', 'Citar o Google como fonte', 'Usar se a imagem tiver mais de 1000 likes'],
				correta: 1,
				explicacao: 'Imagens têm direitos de autor mesmo online. Usa filtros de licença no Google Images ou bancos como Unsplash e Pexels.'
			},
			{
				pergunta: 'Autenticação em dois fatores (2FA) significa...',
				opcoes: ['Ter duas passwords', 'Uma segunda verificação (app, SMS, biometria) além da password', 'Fazer login em dois dispositivos', 'Alterar a password a cada dois meses'],
				correta: 1,
				explicacao: '2FA garante que mesmo que alguém roube a tua password, não consegue entrar sem o segundo fator. Ativa nas contas importantes.'
			},
			{
				pergunta: 'Um recrutador pede o teu Instagram e tu tens um perfil público com conteúdo inconsistente. O que aprendes?',
				opcoes: ['Nada — vida pessoal é separada', 'Devo ter um perfil pessoal privado e uma presença profissional curada', 'Devo apagar o Instagram', 'Os recrutadores não devem ver redes sociais'],
				correta: 1,
				explicacao: 'Perfil privado para vida pessoal + presença profissional curada (LinkedIn, portfólio) é a estratégia certa.'
			},
			{
				pergunta: 'O ChatGPT afirma com confiança que algo aconteceu em 2019. Deves...',
				opcoes: ['Acreditar — é uma IA treinada', 'Verificar com fontes independentes antes de usar essa informação', 'Citar o ChatGPT como referência académica', 'Corrigir o ChatGPT nos comentários'],
				correta: 1,
				explicacao: 'IA pode gerar factos errados com total confiança — chama-se "alucinação". Verifica sempre, especialmente datas e nomes.'
			},
			{
				pergunta: 'Construir presença digital antes de entrar no mercado de trabalho é...',
				opcoes: ['Desnecessário — o CV basta', 'Só para quem quer ser influencer', 'Uma vantagem real: portfólio, projetos, rede de contactos', 'Um risco — melhor não ter presença online'],
				correta: 2,
				explicacao: 'Em muitas áreas, o portfólio digital é mais importante que o CV. Começa a construir agora — mesmo que seja pequeno.'
			},
			{
				pergunta: 'Quanto tempo deves passar nas redes sociais por dia?',
				opcoes: ['O máximo possível — é grátis', 'Nenhum', 'O que decidires conscientemente, com limites que respeites', 'Menos de 10 minutos'],
				correta: 2,
				explicacao: 'Não há uma resposta universal. O importante é que seja uma escolha consciente, não um hábito que consome o teu tempo sem perceberes.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="jovem" />
