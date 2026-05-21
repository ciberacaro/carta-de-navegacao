<script>
	import PaginaFaixa from '$lib/PaginaFaixa.svelte';

	const dados = {
		emoji: '🌐',
		titulo: 'Adultos',
		subtitulo: '18–59 anos',
		cor: '#0984E3',
		fundo: '#EBF5FF',
		variante: 'adulto',
		introducao: 'Navegas no digital todos os dias — trabalho, banco, compras, comunicação. Esta secção é prática, direta e adaptada à realidade portuguesa: como usar os serviços digitais com confiança, reconhecer quando alguém tenta manipular-te, e proteger o que é teu.',
		temas: [
			{
				icone: '🏛️',
				titulo: 'Serviços públicos online',
				conteudo: 'Portal das Finanças (e-fatura, IRS, declarações), SNS24, portal ePortugal.gov.pt, Segurança Social Direta, Portal do Cidadão — tudo acessível online sem filas. Precisas de Chave Móvel Digital ou Cartão de Cidadão com leitora.'
			},
			{
				icone: '📩',
				titulo: 'Phishing: o padrão português',
				conteudo: 'CTT, Finanças, AT, MEO, banco, Segurança Social, EDP, Via Verde — todas estas marcas são imitadas em SMS e emails. O padrão é sempre: urgência + link + dados pessoais. Pague já, regularize já, confirme já. A pressa é o sintoma — abrande, valide pelo canal oficial.'
			},
			{
				icone: '📲',
				titulo: 'Fraude MB Way (a mais comum)',
				conteudo: 'Está a vender no OLX/Custojusto. O "comprador" diz que paga por MB Way e pede o seu número + NIF. Resultado: ele envia um pedido de pagamento e você aprova sem perceber. MB Way funciona ao contrário do que pensa: quem paga é quem envia. Para receber, basta o nº de telemóvel — nunca NIF.'
			},
			{
				icone: '📞',
				titulo: 'Burlas por telefone',
				conteudo: '"É do seu banco, detetámos uma transferência suspeita." "Sou da PJ, a sua conta está envolvida num caso." Padrão: criam pânico, pedem dados ou ação imediata. Bancos, polícia e operadoras NUNCA pedem assim. Desligue e ligue ao número oficial.'
			},
			{
				icone: '🔐',
				titulo: 'Passwords e autenticação',
				conteudo: 'Uma password diferente para cada serviço (use um gestor como Bitwarden — gratuito). Autenticação em dois fatores ativa em email e banco. Nunca partilhe códigos SMS com ninguém — nem com "funcionários do banco".'
			},
			{
				icone: '⚖️',
				titulo: 'Os seus direitos digitais (RGPD)',
				conteudo: 'Tem direito a saber que dados as empresas têm sobre si, a corrigi-los e a pedir apagamento. As empresas têm 30 dias para responder, gratuitamente. Em caso de incumprimento, queixa à CNPD (cnpd.pt).'
			},
			{
				icone: '🏠',
				titulo: 'Compras e arrendamentos online',
				conteudo: 'Casa muito abaixo do mercado, "dono no estrangeiro", insiste em pagamento antes de visitar — fraude clássica. Nunca pague antes de ver pessoalmente. No OLX/Idealista, prefira pagamento contra entrega ou plataformas com proteção.'
			},
			{
				icone: '🗝️',
				titulo: 'Passkeys: o futuro das passwords',
				conteudo: 'Passkeys usam biometria (impressão digital, Face ID) e são criptograficamente vinculadas ao site real. Mesmo que um site falso pareça idêntico, não consegue pedir a passkey. Os principais bancos portugueses estão a adotá-las. Ative na app oficial quando disponível.'
			}
		],
		dicas: [
			'O banco NUNCA pede pin, password ou códigos de segurança por telefone, SMS ou email',
			'Para receber por MB Way basta o nº de telemóvel — quem pede NIF está a tentar burlá-lo',
			'Antes de clicar num link, verifique o endereço real — passe o cursor por cima no computador',
			'Ative alertas de movimentos na app do banco — sabe ao segundo qualquer débito',
			'Use autenticação em dois fatores por app (Authy) em vez de SMS — mais seguro',
			'Nunca pague antes de ver pessoalmente um imóvel ou produto de valor elevado',
			'Combine uma palavra-código familiar para validar pedidos urgentes de dinheiro por mensagem',
			'Portal das Finanças, SNS24 e ePortugal.gov.pt eliminam filas — vale a pena aprender a usar'
		],
		historias: [
			{
				titulo: 'O João, 52 anos, e o amor online',
				narrativa: 'João, divorciado, conheceu a "Patrícia" no Facebook — médica norte-americana destacada no estrangeiro. Conversaram 4 meses. Sempre evitou videochamada ("má rede"). Pediu 3.500€ para "taxa para sair do país". João pagou. Depois pediu mais. Fez pesquisa de imagem reversa: as fotos eram de uma médica espanhola sem qualquer ligação. Total perdido: 14.500€.',
				licao: 'Quem nunca quer videochamada, vive longe e tem emergências que pedem dinheiro — é burla. A pesquisa de imagem reversa (Google Images) revela quase tudo em segundos.'
			},
			{
				titulo: 'A Família Silva e o ransomware',
				narrativa: 'O Pedro abriu um anexo "Fatura.pdf.exe" no email profissional. Em 20 minutos, todos os ficheiros — fotos de família, documentos, declarações de IRS — ficaram encriptados. Pediram 800€ em Bitcoin. Sem cópia de segurança, a família perdeu 15 anos de fotos. Pedro não pagou (não há garantia de recuperar).',
				licao: 'Backup automático na nuvem (Google Drive, iCloud, OneDrive) é gratuito até certo limite. Configure hoje. Ransomware afeta sobretudo quem não tem backup.'
			}
		],
		perguntas: [
			{
				pergunta: 'SMS: "CTT — pacote retido, 2,99€ pendente. Pague em [link]". O que faz?',
				opcoes: ['Pago — são só 2,99€', 'Clico para verificar', 'Ignoro e apago — é phishing', 'Reencaminho para amigos verem'],
				correta: 2,
				explicacao: 'Os CTT nunca pedem pagamentos por SMS. Em dúvida, vá a ctt.pt diretamente com o nº de rastreio.'
			},
			{
				pergunta: 'Vende um sofá no OLX. Comprador pede nº de telemóvel + NIF para pagar por MB Way. O que acontece?',
				opcoes: ['Recebo normalmente', 'Ele envia pedido de pagamento e eu aprovo sem perceber', 'É a forma padrão de receber MB Way', 'É preciso confirmar antes de ser cobrado'],
				correta: 1,
				explicacao: 'Para receber MB Way basta o nº de telemóvel. Quem pede NIF está a configurar a fraude.'
			},
			{
				pergunta: 'Telefonema: "É do seu banco, confirme os dados do cartão por segurança." O que faz?',
				opcoes: ['Confirmo — o banco tem direito', 'Peço o nome do funcionário primeiro', 'Desligo e ligo ao número do verso do cartão', 'Ligo depois ao banco para reclamar'],
				correta: 2,
				explicacao: 'Bancos nunca pedem dados completos por chamada não solicitada. Ao ligar você ao número oficial, garante que fala com o banco real.'
			},
			{
				pergunta: 'Pelo RGPD, pede a uma empresa os seus dados. Quanto tempo têm para responder?',
				opcoes: ['Quando quiserem', 'Até 30 dias, gratuitamente', '6 meses', 'Apenas a clientes ativos'],
				correta: 1,
				explicacao: 'O direito de acesso é seu — 30 dias para resposta, sem custos. Se não responderem, queixa à CNPD (cnpd.pt).'
			},
			{
				pergunta: 'A sua mãe recebe SMS: "Mãe, é o João, mudei de número. Preciso 600€ urgente". O que aconselha?',
				opcoes: ['Transfere se for pouco dinheiro', 'Liga para o número antigo do João antes de fazer nada', 'Responde à mensagem a pedir confirmação', 'Transfere mas pede comprovativo'],
				correta: 1,
				explicacao: 'Esquema "falso filho" — muito comum em Portugal. Validação por canal seguro (telefone para o nº conhecido) é essencial.'
			},
			{
				pergunta: 'Anúncio: "T2 em Lisboa, 600€/mês. Dono no estrangeiro. Transfira sinal antes de visitar." É:',
				opcoes: ['Oportunidade — preço bom', 'Burla clássica de arrendamento — nunca pague antes de visitar', 'Aceitável se for por transferência segura', 'Depende das fotos do imóvel'],
				correta: 1,
				explicacao: 'Padrão repetido em mil casos: preço abaixo do mercado + dono no estrangeiro + sinal antes de visitar = fraude garantida.'
			},
			{
				pergunta: 'O que é mais seguro como segundo fator de autenticação?',
				opcoes: ['SMS para o telemóvel', 'App de autenticação (Authy, Google Authenticator)', 'Pergunta de segurança', 'Email de recuperação'],
				correta: 1,
				explicacao: 'SMS é vulnerável a SIM swap. App de autenticação é muito mais segura para contas críticas como banco e email.'
			},
			{
				pergunta: 'Conheceu alguém numa app de namoro há 3 meses. Só por mensagem, pede 2.000€ por "emergência". Faz?',
				opcoes: ['Empresto — está em apuros', 'Empresto se assinar um contrato', 'Recuso — é burla romântica clássica', 'Mando metade para testar'],
				correta: 2,
				explicacao: 'Padrão clássico de burla romântica: sempre evita encontro real, "emergência" pede dinheiro. Nunca empreste a quem nunca conheceu pessoalmente.'
			},
			{
				pergunta: 'Email com anexo "Fatura_Janeiro.pdf.exe" de remetente desconhecido. Faz?',
				opcoes: ['Abro para ver o que é', 'Apago sem abrir', 'Reenvio ao departamento financeiro', 'Salvo no desktop para depois'],
				correta: 1,
				explicacao: 'Extensão dupla (.pdf.exe) é truque clássico — o ficheiro é executável, não PDF. Apague. Ransomware entra quase sempre por anexos.'
			},
			{
				pergunta: 'Que serviço público português permite tratar de declarações de IRS, faturas e certidões online?',
				opcoes: ['Apenas as Finanças presencialmente', 'Portal das Finanças e ePortugal.gov.pt', 'Só com advogado', 'Portal do Contribuinte (app apenas)'],
				correta: 1,
				explicacao: 'O Portal das Finanças e o ePortugal.gov.pt permitem fazer declarações, pedir certidões e tratar de muitos assuntos sem filas — com Chave Móvel Digital.'
			}
		]
	};
</script>

<PaginaFaixa {...dados} tema="adulto" />
