<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🌱',
		titulo: 'Pré-escolar',
		subtitulo: '3–5 anos · Uma ajudinha para os pais',
		cor: '#FF9F43',
		fundo: '#FFF5E6',
		variante: 'infantil',
		introducao: 'Olá! Esta página é para ler com um adulto. Os mais pequeninos já gostam de ver vídeos, ouvir músicas e explorar jogos. Vamos aprender juntos as primeiras regras para navegar com alegria e segurança!',
		temas: [
			{
				icone: '🤝',
				titulo: 'Pede sempre a um adulto',
				conteudo: 'Antes de pegar no telemóvel ou no tablet, pede sempre a um adulto. É como pedir para abrir o frigorífico — pede-se primeiro!'
			},
			{
				icone: '👀',
				titulo: 'Vê com um grande por perto',
				conteudo: 'Vídeos e jogos veem-se sempre com um adulto por perto. Se algo te assustar ou não perceberes, chamas logo o pai, a mãe ou os avós.'
			},
			{
				icone: '🌈',
				titulo: 'A internet tem coisas giras',
				conteudo: 'Há músicas, histórias de animais, jogos e tantas descobertas para fazer! Algumas são mesmo para crianças como tu — o adulto sabe o que é para a tua idade.'
			},
			{
				icone: '⏰',
				titulo: 'Hora de parar',
				conteudo: 'Quando o adulto diz para parar, paramos! Os olhos também precisam de descansar. E há tantas outras coisas divertidas: brincar lá fora, ler livros, desenhar!'
			},
			{
				icone: '🤫',
				titulo: 'Há coisas que são segredo',
				conteudo: 'O teu nome, onde moras e a tua escola são segredos que não se dizem a ninguém na internet. É como um tesouro que guardas com a família.'
			}
		],
		dicas: [
			'Pede sempre a um adulto antes de usar o telemóvel ou tablet',
			'Vê sempre vídeos e jogos com um adulto por perto',
			'Se algo te assustar, chama logo um grande',
			'Quando o adulto disser para parar, paramos com alegria',
			'O teu nome e onde moras são segredos — não dizes a ninguém na internet'
		],
		historias: [
			{
				titulo: 'A Inês descobriu os vídeos de animais',
				narrativa: 'A Inês tem 4 anos e adora animais. Com a ajuda da avó, descobriu um canal de vídeos sobre animais selvagens. Ficou a saber que as girafas dormem só 30 minutos por noite e que os polvos têm três corações! Sempre com a avó por perto, a explorar juntas.',
				licao: 'A internet é uma biblioteca enorme cheia de coisas para aprender. Com um adulto, é muito mais divertido descobrir!'
			},
			{
				titulo: 'O Tomás e a hora de parar',
				narrativa: 'O Tomás estava a jogar no tablet e não queria parar. O pai disse "agora vamos ao parque!" e o Tomás foi, ainda um bocadinho chateado. Mas no parque encontrou amigos, andou de bicicleta e quando voltou disse: "Pai, o parque foi melhor que o tablet!"',
				licao: 'O tablet espera por nós. Brincar lá fora, ler e estar com a família é sempre a melhor opção.'
			}
		],
		perguntas: [
			{
				pergunta: 'Queres ver um vídeo no tablet. O que fazes primeiro?',
				opcoes: ['Pego e começo a ver', 'Peço a um adulto', 'Espero que o adulto esteja distraído', 'Escondo-me debaixo da cama'],
				correta: 1,
				explicacao: 'Pedimos sempre a um adulto antes de mexer no telemóvel ou tablet. É a regra mais importante!'
			},
			{
				pergunta: 'O adulto disse que é hora de parar. Tu...',
				opcoes: ['Continuo às escondidas', 'Faço uma grande birra', 'Paro e vou brincar com outra coisa', 'Escondo o tablet'],
				correta: 2,
				explicacao: 'Quando o adulto diz para parar, paramos! Os olhos cansam-se e há tantas coisas divertidas para fazer.'
			},
			{
				pergunta: 'Aparece uma pessoa que não conheces a falar contigo no ecrã. Tu...',
				opcoes: ['Falo com ela', 'Conto onde moro', 'Chamo logo um adulto', 'Respondo se for simpática'],
				correta: 2,
				explicacao: 'Chamamos sempre um adulto quando aparece alguém desconhecido. É igual à regra da rua!'
			},
			{
				pergunta: 'Podes dizer o teu nome e onde moras a alguém no tablet?',
				opcoes: ['Sim, se for simpático', 'Só o nome', 'Nunca — são segredos da família', 'Sim, se me pedir por favor'],
				correta: 2,
				explicacao: 'O teu nome, a tua casa e a tua escola são segredos! Só os adultos da família devem saber.'
			},
			{
				pergunta: 'O ecrã mostra um vídeo com sons assustadores. Tu...',
				opcoes: ['Aumento o volume', 'Mostro aos amigos', 'Chamo um adulto', 'Continuo a ver'],
				correta: 2,
				explicacao: 'Quando algo nos assusta, chamamos logo um adulto. Ele resolve tudo!'
			},
			{
				pergunta: 'Os olhos precisam de...',
				opcoes: ['Ver o tablet sem parar', 'Ver o tablet, brincar lá fora, ler livros e descansar', 'Só ver vídeos', 'Ver televisão até tarde'],
				correta: 1,
				explicacao: 'Os olhos fazem muitas coisas! Precisam de descansar e de ver o mundo real também.'
			},
			{
				pergunta: 'O que é mais divertido?',
				opcoes: ['5 horas de tablet sozinho', 'Brincar com a família, ler e usar o tablet pouquinho', 'Tablet enquanto come', 'Tablet na cama antes de dormir'],
				correta: 1,
				explicacao: 'A vida é cheia de coisas divertidas! O tablet é só uma delas.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="jovem" />
