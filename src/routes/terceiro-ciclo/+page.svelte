<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🧭',
		titulo: '3.º Ciclo',
		subtitulo: '12–15 anos · Navegar com autonomia',
		cor: '#5f27cd',
		fundo: '#F0EBFF',
		variante: 'juvenil',
		introducao: 'Usas a internet para quase tudo: pesquisar, comunicar, jogar, aprender, criar. É hora de entender como funciona realmente — e de te tornares um utilizador consciente, crítico e autónomo.',
		temas: [
			{
				icone: '🧠',
				titulo: 'Pensamento crítico online',
				conteudo: 'Toda a informação tem um ponto de vista. Quem a criou? Com que objetivo? Para quem? Perceber isto é navegar com inteligência. Questionar não é desconfiar de tudo — é pensar antes de acreditar.'
			},
			{
				icone: '📊',
				titulo: 'Como os teus dados funcionam',
				conteudo: 'As plataformas recolhem dados sobre ti: o que vês, quanto tempo passas, onde clicas. Esses dados valem dinheiro. "Se o produto é grátis, o produto és tu." Saber isto ajuda a fazer escolhas mais conscientes.'
			},
			{
				icone: '🤳',
				titulo: 'Identidade digital e reputação',
				conteudo: 'O que publicas hoje pode aparecer numa pesquisa daqui a 10 anos. Universidades, empregadores e amigos veem-te online. Que imagem queres dar? A tua identidade digital é parte de quem és.'
			},
			{
				icone: '⚖️',
				titulo: 'Os teus direitos digitais',
				conteudo: 'Tens direito à privacidade, ao apagamento dos teus dados, a não seres discriminado. O RGPD protege-te — podes pedir às empresas que apaguem as tuas informações. Conhecer os teus direitos é poder usá-los.'
			},
			{
				icone: '🌐',
				titulo: 'Desinformação e como combatê-la',
				conteudo: 'A desinformação espalha-se muito mais rápido que a verdade porque é mais emocionante. Aprender a identificá-la — títulos exagerados, fontes anónimas, imagens fora do contexto — é uma responsabilidade de todos.'
			},
			{
				icone: '💡',
				titulo: 'Criar vs. consumir',
				conteudo: 'A internet não é só para ver e ler. Podes criar: música, vídeos, textos, projetos, arte. Criar é a forma mais poderosa de usar a internet — e aprende-se muito mais fazendo do que vendo.'
			}
		],
		dicas: [
			'Antes de acreditar: quem escreveu, quando, com que interesse?',
			'A pesquisa de imagem inversa (Google Images) desmascara muitas falsidades em segundos',
			'Revê as definições de privacidade das tuas apps — limita o que partilham',
			'Tens o direito de pedir às empresas que apaguem os teus dados (RGPD)',
			'Antes de publicar: "estaria bem com isto daqui a 5 anos?"',
			'Criar conteúdo com qualidade é mais valioso do que ter muitos seguidores',
			'Não partilhas algo sem verificar — mesmo que seja de um amigo'
		],
		historias: [
			{
				titulo: 'A Mariana e o vídeo que não era o que parecia',
				narrativa: 'A Mariana viu um vídeo "em direto" de um terramoto "agora mesmo". Parecia muito real. Mas algo a fez desconfiar — fez uma pesquisa reversa da imagem no Google e descobriu que era um vídeo de 3 anos, filmado noutro país, com a data modificada. Partilhou a descoberta em vez do vídeo falso.',
				licao: 'Pesquisa reversa de imagem é uma das ferramentas mais poderosas de verificação. Demora 30 segundos e desmascara muitas falsidades.'
			},
			{
				titulo: 'O Afonso e o projeto de robótica',
				narrativa: 'Em vez de só ver vídeos de robôs, o Afonso decidiu construir um. Com tutoriais no YouTube e materiais simples, construiu um braço robótico em duas semanas. Publicou o processo no Instagram e ganhou 2000 seguidores orgânicos — pessoas interessadas, não bots. Foi convidado para uma feira de ciência.',
				licao: 'A internet não é só para consumir. Criar algo real e partilhá-lo tem um valor completamente diferente.'
			}
		],
		perguntas: [
			{
				pergunta: 'Uma notícia tem o título "CHOCANTE: médicos escondem cura do cancro!" É provavelmente...',
				opcoes: ['Uma investigação jornalística séria', 'Clickbait ou desinformação — títulos exagerados são sinal de alerta', 'Um alerta de saúde pública', 'Verdade se tiver muitas partilhas'],
				correta: 1,
				explicacao: 'Títulos emocionalmente exagerados são uma técnica de desinformação. Verifica sempre a fonte antes de acreditar ou partilhar.'
			},
			{
				pergunta: 'Uma plataforma gratuita faz dinheiro maioritariamente com...',
				opcoes: ['As subscrições dos utilizadores', 'Venda de produtos físicos', 'Publicidade direcionada com base nos teus dados', 'Donativos'],
				correta: 2,
				explicacao: '"Se o produto é grátis, o produto és tu." Os teus dados alimentam publicidade. Saber isto ajuda a usar as plataformas com mais consciência.'
			},
			{
				pergunta: 'Que ferramenta podes usar para verificar se uma imagem é real ou antiga?',
				opcoes: ['Contar os likes', 'Pesquisa reversa de imagem (Google Images)', 'Perguntar a amigos', 'Ver se tem marca de água'],
				correta: 1,
				explicacao: 'Pesquisa reversa de imagem mostra onde a imagem apareceu antes na internet. Desmascara muitas falsidades em segundos.'
			},
			{
				pergunta: 'Tens 13 anos e uma empresa usa os teus dados sem consentimento. Podes...',
				opcoes: ['Nada — és menor de idade', 'Pedir à empresa que apague os dados e reclamar à CNPD se necessário', 'Só reclamar depois dos 18', 'Aceitar — é o preço de usar apps grátis'],
				correta: 1,
				explicacao: 'O RGPD aplica-se a todas as idades. Podes pedir acesso, correção e apagamento dos teus dados. Em caso de incumprimento, a CNPD ajuda.'
			},
			{
				pergunta: 'Um colega partilhou um boato falso sobre outro colega. O que podes fazer?',
				opcoes: ['Ignorar — não é problema teu', 'Partilhar porque são amigos', 'Não partilhar e avisá-lo que a informação é falsa', 'Denunciar à polícia imediatamente'],
				correta: 2,
				explicacao: 'Partilhar um boato falso — mesmo sem intenção de magoar — faz-te parte do problema. Podes fazer a diferença não partilhando.'
			},
			{
				pergunta: 'A desinformação espalha-se mais rápido que a verdade porque...',
				opcoes: ['As pessoas são ingénuas', 'É mais emocionante e provoca uma reação mais forte', 'Os jornalistas são lentos', 'A internet favorece conteúdo falso tecnicamente'],
				correta: 1,
				explicacao: 'Conteúdo que provoca emoção forte (raiva, medo, surpresa) é mais partilhado. Os criadores de desinformação sabem isso e exploram-no.'
			},
			{
				pergunta: 'Criar um vídeo, blog ou projeto online é importante porque...',
				opcoes: ['Dá mais seguidores', 'Faz dinheiro rapidamente', 'Desenvolve competências reais e aprende-se fazendo', 'É obrigatório para a escola'],
				correta: 2,
				explicacao: 'Criar é aprender. Um projeto real — mesmo pequeno — vale mais que mil horas a consumir passivamente.'
			},
			{
				pergunta: 'O que é "fact-checking"?',
				opcoes: ['Verificar se o Facebook tem erros', 'Um processo de verificar se uma afirmação é verdadeira com base em provas e fontes', 'Contar os factos de uma notícia', 'Uma app de segurança'],
				correta: 1,
				explicacao: 'Fact-checking é verificar afirmações com evidências. Em Portugal, o Observador e o Polígrafo fazem fact-checking. Podes fazê-lo tu também!'
			},
			{
				pergunta: 'O que é a tua "identidade digital"?',
				opcoes: ['O teu número de identificação online', 'Tudo o que publicas, curtes, comentas e partilhas online', 'O teu email', 'O teu avatar nos jogos'],
				correta: 1,
				explicacao: 'A tua identidade digital é construída por tudo o que fazes online. É parte de quem és — e pode ser vista por pessoas que não conheces.'
			},
			{
				pergunta: 'Antes de publicar algo online, a melhor pergunta a fazer é...',
				opcoes: ['Quantos likes vai ter?', 'Os meus amigos vão achar piada?', 'Estaria bem com isto daqui a 5 anos?', 'É rápido de escrever?'],
				correta: 2,
				explicacao: 'O que publicas pode ficar para sempre. Pensar no futuro ajuda-te a tomar melhores decisões no presente.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="jovem" />
