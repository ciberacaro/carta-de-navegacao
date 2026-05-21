<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '📖',
		titulo: 'Ainda Mais Adultos',
		subtitulo: '60+ anos · Viajar com sabedoria',
		cor: '#6C5CE7',
		fundo: '#F0EBFF',
		variante: 'senior',
		introducao: 'Esta página usa letra grande e linguagem simples. Com exemplos reais de Portugal. O mundo digital pode parecer complicado — mas há ferramentas que simplificam a vida: videochamadas com a família, serviços públicos sem filas, e saber reconhecer quando alguém tenta enganar.',
		temas: [
			{
				icone: '📱',
				titulo: 'Videochamadas com a família',
				conteudo: 'WhatsApp, FaceTime ou Skype permitem ver e ouvir familiares em qualquer parte do mundo, sem custos. Basta tocar num nome e escolher a câmara. A biblioteca pode ajudar a aprender se ainda não usa.'
			},
			{
				icone: '🏛️',
				titulo: 'Serviços públicos online',
				conteudo: 'SNS24 (1214), Portal do Cidadão, Portal das Finanças — muitos assuntos resolvem-se online sem filas. Com a Chave Móvel Digital (pede no Espaço Cidadão) acede a quase todos os serviços do Estado.'
			},
			{
				icone: '📞',
				titulo: 'Burlas por telefone — as mais comuns',
				conteudo: '"Sou do banco, a sua conta está em risco." "Sou do suporte técnico da Microsoft." "Sou neto/a, mudei de número, preciso de dinheiro urgente." Nenhuma destas chamadas é real. Desligue e ligue ao familiar ou banco pelo número que conhece.'
			},
			{
				icone: '💳',
				titulo: 'Compras online com segurança',
				conteudo: 'Comprar na FNAC, El Corte Inglés, CTT ou farmácias online é seguro se o site for oficial. Verifique que o endereço começa por "https://" e que reconhece a loja. Evite links que chegam por SMS ou email.'
			},
			{
				icone: '🤫',
				titulo: 'O que nunca se diz ao telefone',
				conteudo: 'PIN do cartão, password do banco, códigos que chegam por SMS — nunca se dizem a ninguém por telefone. O seu banco nunca pede estas informações assim. Se alguém pedir, é sempre uma fraude.'
			},
			{
				icone: '👨‍👩‍👧',
				titulo: 'Pedir ajuda à família',
				conteudo: 'Se receber uma mensagem ou email que não percebe, não clique em nada — mostre a um familiar. Melhor perguntar e não precisar, do que clicar e arrepender-se. A família e a biblioteca estão aqui para ajudar.'
			},
			{
				icone: '📸',
				titulo: 'Fotos e memórias seguras',
				conteudo: 'Pode guardar fotos na nuvem (Google Fotos ou iCloud) automaticamente — sem risco de as perder se o telemóvel avariar. Um familiar pode configurar por si. É gratuito até certo limite.'
			},
			{
				icone: '🌿',
				titulo: 'Benefícios reais do digital',
				conteudo: 'Pesquisar sintomas (usando sites como SNS24 ou Mayo Clinic), marcar consultas online, acompanhar notícias, ouvir rádio em qualquer lado, encontrar receitas — o digital facilita muitos momentos do dia a dia.'
			}
		],
		dicas: [
			'Se uma chamada criar urgência ou pedir dinheiro — é sempre desconfiança. Desligue e ligue a um familiar',
			'O banco NUNCA pede o PIN ou a password por telefone, SMS ou email',
			'Para receber dinheiro por MB Way basta o nº de telemóvel — nunca o seu NIF',
			'Antes de clicar num link que chegou por SMS ou email — mostre a um familiar',
			'Com a Chave Móvel Digital pode tratar de muitos assuntos do Estado online, sem filas',
			'Peça a um familiar para configurar backup automático de fotos — nunca mais as perde',
			'A biblioteca municipal tem apoio para aprender a usar o telemóvel e o computador'
		],
		historias: [
			{
				titulo: 'A D. Lurdes e a chamada do "banco"',
				narrativa: 'A D. Lurdes, 72 anos, recebeu uma chamada de alguém que dizia ser do banco. A voz era profissional e sabia o seu nome. Pediu o código de segurança "para proteger a conta". A D. Lurdes lembrou-se do que a filha tinha dito: o banco nunca pede isso. Desligou e ligou à filha. Era mesmo uma fraude — tentavam aceder à conta.',
				licao: 'O banco nunca pede códigos por telefone. Em caso de dúvida, desligue e ligue a um familiar ou ao banco pelo número oficial no cartão.'
			},
			{
				titulo: 'O Sr. António e as videochamadas',
				narrativa: 'O Sr. António, 78 anos, sempre disse que o telemóvel era "coisa de novos". Mas quando a filha emigrou para o Reino Unido, aprendeu a usar o WhatsApp com a ajuda da neta. Agora vê os netos crescer por videochamada todas as semanas. "É quase como se estivessem aqui", diz ele.',
				licao: 'Nunca é tarde para aprender. Uma ferramenta digital pode manter-nos próximos de quem amamos, independentemente da distância.'
			}
		],
		perguntas: [
			{
				pergunta: 'Recebe uma chamada do "banco" a pedir o seu PIN. O que faz?',
				opcoes: ['Dou — são do banco', 'Peço para confirmar o nome do funcionário', 'Desligo e ligo ao banco pelo número no cartão', 'Dou só os últimos quatro dígitos'],
				correta: 2,
				explicacao: 'O banco NUNCA pede o PIN por telefone. Ao desligar e ligar pelo número do cartão, garante que fala com o banco real.'
			},
			{
				pergunta: 'Uma mensagem diz "É o seu neto João, mudei de número, preciso 400€ urgente." O que faz?',
				opcoes: ['Transfiro — pode ser verdade', 'Ligo para o número antigo do João para confirmar', 'Respondo à mensagem a pedir confirmação', 'Transfiro mas só 200€'],
				correta: 1,
				explicacao: 'Esquema "falso neto" — muito comum. Ligue sempre pelo número que conhece para confirmar. Não responda à mensagem suspeita.'
			},
			{
				pergunta: 'Para fazer uma videochamada no WhatsApp, precisa de...',
				opcoes: ['Pagar uma mensalidade', 'Ter o número da pessoa guardado no telemóvel e toque no ícone da câmara', 'Ir a uma loja de telecomunicações', 'Um computador'],
				correta: 1,
				explicacao: 'WhatsApp é gratuito. Basta ter o número guardado, abrir a conversa e tocar no ícone da câmara. A neta ou o filho podem ajudar a configurar.'
			},
			{
				pergunta: 'Recebe um SMS com link a dizer "CTT — pacote retido, taxa de 2,50€". O que faz?',
				opcoes: ['Pago — são poucos euros', 'Clico para ver o que é', 'Apago e mostro a um familiar se tiver dúvidas', 'Reencaminho para amigos'],
				correta: 2,
				explicacao: 'Os CTT nunca pedem pagamentos por SMS com link. Se tiver dúvida sobre uma encomenda, vá a ctt.pt diretamente com o número de rastreio.'
			},
			{
				pergunta: 'O que é a Chave Móvel Digital?',
				opcoes: ['Uma chave especial para a porta', 'Um código que permite aceder a serviços públicos online com segurança', 'Uma app de banco', 'Um cartão especial para seniores'],
				correta: 1,
				explicacao: 'A Chave Móvel Digital é um sistema de autenticação online que lhe permite aceder a serviços do Estado. Pode pedir num Espaço Cidadão.'
			},
			{
				pergunta: 'Para receber dinheiro por MB Way, um comprador do OLX pede o seu NIF. O que faz?',
				opcoes: ['Dou — é necessário para receber', 'Não dou — para receber por MB Way só é preciso o nº de telemóvel', 'Dou só os primeiros três números', 'Peço ao filho para tratar'],
				correta: 1,
				explicacao: 'Para receber por MB Way basta o número de telemóvel. Quem pede o NIF está a tentar uma fraude.'
			},
			{
				pergunta: 'Para não perder fotos se o telemóvel avariar, o melhor é...',
				opcoes: ['Não tirar muitas fotos', 'Imprimir todas', 'Ativar backup automático no Google Fotos ou iCloud', 'Guardar numa pen drive manualmente'],
				correta: 2,
				explicacao: 'Backup automático na nuvem guarda as fotos sem que tenha de fazer nada. Um familiar pode configurar por si — é gratuito até certo limite.'
			},
			{
				pergunta: 'Recebe um email com um link a dizer que ganhou um prémio. O que faz?',
				opcoes: ['Clico — posso ter mesmo ganho', 'Mostro a um familiar antes de fazer qualquer coisa', 'Preencho os meus dados para receber o prémio', 'Reencaminho para amigos'],
				correta: 1,
				explicacao: 'Prémios por email são quase sempre fraude. Mostre a um familiar antes de clicar em qualquer coisa.'
			},
			{
				pergunta: 'O SNS24 (linha 1214) serve para...',
				opcoes: ['Só para urgências graves', 'Aconselhamento de saúde por telefone e orientação sobre onde ir', 'Fazer exames', 'Só para médicos'],
				correta: 1,
				explicacao: 'O SNS24 (1214) dá aconselhamento de saúde por telefone, 24 horas por dia, e orienta-o para o serviço adequado. É gratuito.'
			},
			{
				pergunta: 'Se não perceber uma mensagem ou email que recebeu, deve...',
				opcoes: ['Clicar para perceber melhor', 'Responder a pedir explicação', 'Não clicar e mostrar a um familiar ou na biblioteca', 'Apagar imediatamente sem mostrar a ninguém'],
				correta: 2,
				explicacao: 'Melhor perguntar e não precisar do que clicar e arrepender-se. A família e a biblioteca estão aqui para ajudar.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="adulto" />
