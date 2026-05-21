<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🗺️',
		titulo: '2.º Ciclo',
		subtitulo: '10–12 anos · Traçar as primeiras rotas',
		cor: '#54a0ff',
		fundo: '#EBF5FF',
		variante: 'juvenil',
		introducao: 'Começas a usar redes sociais, a fazer pesquisas mais complexas e a criar a tua presença online. É uma fase de grandes descobertas — e de aprender a navegar com mais autonomia e sentido crítico.',
		temas: [
			{
				icone: '🌐',
				titulo: 'Como funciona a internet',
				conteudo: 'A internet é uma rede de computadores ligados em todo o mundo. Cada página, vídeo e mensagem é criado por pessoas reais. Entender como funciona ajuda-te a usar melhor e a confiar menos cegamente no que vês.'
			},
			{
				icone: '👤',
				titulo: 'A tua identidade digital',
				conteudo: 'Tudo o que fazes online deixa um rasto: perfis, comentários, fotos, likes. A tua identidade digital é construída pelo que partilhas — e pode ser vista por pessoas que não conheces.'
			},
			{
				icone: '🔎',
				titulo: 'Avaliar informação',
				conteudo: 'Como distinguir notícias verdadeiras de falsas? Pergunta: quem escreveu? quando? há provas? outras fontes confirmam? Um título exagerado é quase sempre sinal de alerta.'
			},
			{
				icone: '🔒',
				titulo: 'Privacidade nas redes sociais',
				conteudo: 'As redes sociais guardam os teus dados e mostram-te o que querem que vejas. Perfil público vs. privado, quem pode ver o que publicas — são escolhas tuas. Perfil privado é sempre mais seguro.'
			},
			{
				icone: '💬',
				titulo: 'Cyberbullying — reconhecer e agir',
				conteudo: 'Palavras online magoam como palavras ditas. Se receberes mensagens maldosas repetidas, guarda prova (screenshot), bloqueia, e conta a um adulto. Não respondas — isso piora.'
			},
			{
				icone: '🤖',
				titulo: 'O que são algoritmos',
				conteudo: 'As redes sociais mostram-te mais do que já viste e curtes. Podes ficar preso numa "bolha" sem perceber. Saber isto ajuda-te a procurar perspetivas diferentes.'
			}
		],
		dicas: [
			'Coloca o perfil de redes sociais como "privado"',
			'O que publicas online pode ficar para sempre — pensa antes de partilhar',
			'Para verificar uma notícia: quem escreveu, quando, há fontes identificadas?',
			'Se receberes mensagens maldosas, guarda (screenshot) e conta a um adulto',
			'Podes bloquear e denunciar quem se porta mal online — é um direito teu',
			'Os algoritmos mostram-te o que querem que vejas — tenta sair da "bolha" às vezes',
			'A tua senha nunca se partilha, mesmo com amigos próximos'
		],
		historias: [
			{
				titulo: 'A Mafalda e o perfil público',
				narrativa: 'A Mafalda publicou uma foto com a mochila da escola ao fundo. Um colega avisou-a que estava a dar informação sobre onde andava e a que horas saía. Mafalda não tinha pensado nisso. Mudou o perfil para privado e passou a ser mais cuidadosa com o que mostrava nas fotos.',
				licao: 'Informação aparentemente inocente — escola, horários, rotinas — pode ser usada por quem não quer bem. Perfil privado é sempre mais seguro.'
			},
			{
				titulo: 'O Rodrigo e as fake news dos tubarões',
				narrativa: 'O Rodrigo viu um vídeo viral a dizer que tubarões tinham sido vistos nas praias de Lisboa. Partilhou com toda a turma. O professor mostrou-lhe que o vídeo tinha 7 anos e era de outro país. O Rodrigo sentiu-se envergonhado — e aprendeu a verificar antes de partilhar.',
				licao: 'Antes de partilhar — verifica. Um minuto de pesquisa evita espalhar informação falsa.'
			}
		],
		perguntas: [
			{
				pergunta: 'Vês um vídeo incrível online. Antes de partilhar, deves...',
				opcoes: ['Partilhar logo — é demasiado bom para ser falso', 'Verificar a data, a fonte e se outros sítios confirmam', 'Só partilhar com amigos próximos', 'Partilhar se tiver muitos likes'],
				correta: 1,
				explicacao: 'Likes e partilhas não provam que algo é verdade. Verifica sempre a fonte antes de partilhar!'
			},
			{
				pergunta: 'O teu perfil nas redes sociais deve ser...',
				opcoes: ['Público — mais seguidores, mais likes', 'Privado — só amigos que aprovaste veem o que publicas', 'Com nome verdadeiro e escola identificados', 'Com a morada para os amigos saberem onde és'],
				correta: 1,
				explicacao: 'Perfil privado significa que controlas quem vê o que publicas. É sempre mais seguro.'
			},
			{
				pergunta: 'O que é um algoritmo nas redes sociais?',
				opcoes: ['Um tipo de vírus', 'Um sistema que decide o que vês com base no que já viste', 'Um utilizador famoso', 'Uma regra contra conteúdo falso'],
				correta: 1,
				explicacao: 'Os algoritmos mostram-te mais do que já viste. Podes ficar preso numa "bolha" — experimenta seguir tópicos diferentes!'
			},
			{
				pergunta: 'Recebes mensagens maldosas repetidas de um colega online. O que fazes?',
				opcoes: ['Respondo na mesma moeda', 'Ignoro completamente e não digo nada', 'Guardo screenshots, bloqueio e conto a um adulto', 'Crio um perfil falso para me vingar'],
				correta: 2,
				explicacao: 'Guardar provas é importante. Contar a um adulto é sempre o passo certo. Não responderes impede que a situação piore.'
			},
			{
				pergunta: 'Uma notícia diz "CHOCANTE: cientistas escondem cura das constipações". Verificas...',
				opcoes: ['O número de partilhas', 'A fonte, a data, os nomes dos cientistas e se outros artigos confirmam', 'Se tem fotos', 'Se os teus amigos acreditam'],
				correta: 1,
				explicacao: 'Títulos exagerados são um sinal de alerta. Informação científica deve vir de fontes identificadas. Desconfia!'
			},
			{
				pergunta: 'Qual destes dados NÃO deves ter num perfil público?',
				opcoes: ['Um nome artístico que inventaste', 'Gostos e interesses gerais', 'Morada, escola, número de telemóvel e rotinas', 'Fotos gerais sem localização'],
				correta: 2,
				explicacao: 'Morada, escola e rotinas permitem a desconhecidos saber onde estás e quando. São informações privadas.'
			},
			{
				pergunta: 'O que é a "pegada digital"?',
				opcoes: ['A password que deixas noutros sites', 'O rasto de tudo o que fazes e publicas online', 'Uma app de localização', 'O número de seguidores que tens'],
				correta: 1,
				explicacao: 'Tudo o que publicas, curtes, comentas — fica registado. Pensa nisto como uma pegada que pode ser vista mais tarde.'
			},
			{
				pergunta: 'Um amigo partilhou uma foto tua sem te pedir. O que podes fazer?',
				opcoes: ['Nada — já está feito', 'Pedir para apagar e explicar que as tuas fotos são tuas', 'Retaliar partilhando uma foto dele', 'Denunciar imediatamente à polícia'],
				correta: 1,
				explicacao: 'Tens direito à tua imagem. Pedes para apagar — normalmente resolve. Se o problema persistir, podes denunciar à plataforma.'
			},
			{
				pergunta: 'Com quantos anos podes ter uma conta na maioria das redes sociais?',
				opcoes: ['Qualquer idade', 'A maioria exige 13 anos, algumas 16', '10 anos', 'Não há limite de idade'],
				correta: 1,
				explicacao: 'A maioria das redes sociais tem idade mínima de 13 anos (algumas 16). São regras para proteger os mais novos.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="jovem" />
