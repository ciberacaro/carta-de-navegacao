<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '⛵',
		titulo: '1.º Ciclo',
		subtitulo: '6–10 anos · Primeiras descobertas',
		cor: '#26de81',
		fundo: '#E8FDF3',
		variante: 'infantil',
		introducao: 'Já sabes ler e escrever — isso abre portas imensas na internet! Aprende a pesquisar bem, a perceber o que é verdade e a ser um bom navegador digital desde cedo.',
		temas: [
			{
				icone: '🔍',
				titulo: 'Como pesquisar bem',
				conteudo: 'Palavras certas dão melhores resultados. Em vez de "animais", escreve "animais selvagens de Portugal". Quanto mais específico, melhor! É como dar um mapa ao motor de pesquisa.'
			},
			{
				icone: '📰',
				titulo: 'Será que é verdade?',
				conteudo: 'Nem tudo o que está na internet é real. Podem ser erros, histórias inventadas ou até mentiras. Aprende a verificar: quem escreveu? quando? há outras fontes que dizem o mesmo?'
			},
			{
				icone: '🔐',
				titulo: 'A tua palavra-passe é um segredo',
				conteudo: 'A palavra-passe é como a chave de casa: não se empresta, não se diz a ninguém, e deve ser difícil de adivinhar. Nem aos melhores amigos!'
			},
			{
				icone: '💬',
				titulo: 'Comunicar com respeito',
				conteudo: 'O que escrevemos na internet fica. Antes de enviar uma mensagem, pergunta: "eu ficaria bem se alguém me dissesse isto?" Se não, não envias.'
			},
			{
				icone: '📱',
				titulo: 'Informação privada',
				conteudo: 'Algumas coisas são tuas: onde moras, a tua escola, o número de telemóvel. São informações privadas que não partilhamos com desconhecidos.'
			}
		],
		dicas: [
			'Pesquisa com palavras específicas para encontrar o que procuras',
			'Verifica sempre se a informação aparece em mais do que um site de confiança',
			'A tua palavra-passe é secreta — não partilhas com amigos',
			'Antes de enviar uma mensagem, lê outra vez para ver se é amigável',
			'Não dizes o teu endereço, escola ou número a desconhecidos online',
			'Se algo online te fizer sentir mal, dizes logo a um adulto',
			'A biblioteca — a verdadeira e a digital — tem informação verificada por especialistas'
		],
		historias: [
			{
				titulo: 'A Beatriz e a pesquisa sobre baleias',
				narrativa: 'A Beatriz foi pesquisar "baleia" e encontrou muita informação misturada — alguns sites com erros, outros com publicidade. A professora ensinou-a a escrever "baleia azul características" e a escolher sites de museus ou universidades. Descobriu que a baleia azul é o maior animal que já existiu na Terra — maior que qualquer dinossauro!',
				licao: 'Pesquisar bem é uma competência. Palavras específicas + fontes de confiança = informação boa.'
			},
			{
				titulo: 'O Diogo e a mensagem que não devia ter enviado',
				narrativa: 'No calor do momento, o Diogo escreveu uma mensagem pouco simpática para um colega. O colega ficou triste e mostrou à professora. O Diogo arrependeu-se — mas a mensagem já estava enviada. Aprendeu que palavras escritas ficam, e que um segundo a pensar antes de enviar muda tudo.',
				licao: 'Lê sempre o que vais enviar. Se não dirias pessoalmente com um sorriso, não envias por mensagem.'
			}
		],
		perguntas: [
			{
				pergunta: 'Queres saber tudo sobre polvos. O que pesquisas?',
				opcoes: ['animais', 'coisas do mar', 'polvo — quantos tentáculos, onde vive, o que come', 'bichos'],
				correta: 2,
				explicacao: 'Quanto mais específica a pesquisa, melhores os resultados! O motor de pesquisa percebe palavras detalhadas.'
			},
			{
				pergunta: 'Encontras um site a dizer "comer chocolate faz crescer". Provavelmente é...',
				opcoes: ['Verdade, está na internet', 'Publicidade ou informação errada — devo verificar', 'Científico se tiver fotos', 'Verdade se tiver muitas partilhas'],
				correta: 1,
				explicacao: 'Informação sobre saúde deve vir de médicos ou da DGS. Verifica sempre com uma fonte de confiança!'
			},
			{
				pergunta: 'Qual é a melhor palavra-passe?',
				opcoes: ['123456', 'O teu nome', 'Uma mistura de letras, números e símbolos que só tu sabes', 'O nome do teu animal de estimação'],
				correta: 2,
				explicacao: 'Palavras-passe simples são fáceis de adivinhar. Uma boa password tem letras, números e símbolos.'
			},
			{
				pergunta: 'Um amigo pede a tua password para ver algo no tablet. Tu...',
				opcoes: ['Digo — é meu amigo', 'Digo só metade', 'Não digo — a password é minha e secreta', 'Digo mas peço para não contar'],
				correta: 2,
				explicacao: 'A password não se partilha com ninguém — nem com os melhores amigos. É o teu segredo.'
			},
			{
				pergunta: 'Recebes uma mensagem: "Parabéns! Ganhaste um telemóvel. Clica aqui." Tu...',
				opcoes: ['Clico — pode ser verdade', 'Mostro a um adulto antes de fazer qualquer coisa', 'Partilho com os amigos', 'Registo os meus dados'],
				correta: 1,
				explicacao: 'Ofertas demasiado boas costumam ser falsas. Mostras sempre a um adulto!'
			},
			{
				pergunta: 'Antes de enviar uma mensagem, deves...',
				opcoes: ['Enviar rápido antes de pensar', 'Ler outra vez e perguntar "isto é amigável?"', 'Pedir ao amigo para enviar por ti', 'Só verificar a ortografia'],
				correta: 1,
				explicacao: 'Mensagens escritas ficam! Um segundo a reler pode evitar problemas grandes.'
			},
			{
				pergunta: 'Podes dizer o nome da tua escola a alguém que conheceste online?',
				opcoes: ['Sim, é só a escola', 'Não — é informação privada', 'Sim, se for simpático', 'Só se tiver a mesma idade'],
				correta: 1,
				explicacao: 'Nome da escola, morada, telemóvel — são informações privadas. Não partilhamos com desconhecidos.'
			},
			{
				pergunta: 'A biblioteca é útil para...',
				opcoes: ['Só ler livros antigos', 'Nada — a internet tem tudo', 'Encontrar informação fiável e aprender com ajuda', 'Só para adultos'],
				correta: 2,
				explicacao: 'A biblioteca — física e digital — tem informação verificada por especialistas. É um tesouro!'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="jovem" />
