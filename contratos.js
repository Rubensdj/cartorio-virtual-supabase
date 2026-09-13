// Modelos de contratos baseados em fontes jurídicas brasileiras
// Referências: Jusbrasil, ModelosHub, 99Contratos, Scribd, Autentique

const CONTRATOS = {
  // ============ CONTRATOS ============
  "contrato-namoro": {
    nome: "Contrato de Namoro",
    descricao: "Formaliza o relacionamento afetivo sem constituir união estável",
    texto: (d) => `CONTRATO DE NAMORO

Pelo presente instrumento particular, as partes:

CONTRATANTE 1: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg1||'________'}, inscrito(a) no CPF sob nº ${d.cpf1||'________'}, residente e domiciliado(a) à ${d.endereco1||'________'};

CONTRATANTE 2: ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg2||'________'}, inscrito(a) no CPF sob nº ${d.cpf2||'________'}, residente e domiciliado(a) à ${d.endereco2||'________'};

Resolvem celebrar o presente CONTRATO DE NAMORO, que se regerá pelas cláusulas e condições seguintes:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem por objeto estabelecer as bases e regras do relacionamento afetivo entre as partes, caracterizado como NAMORO, sem qualquer intenção de constituir união estável, casamento ou qualquer outro tipo de entidade familiar.

CLÁUSULA SEGUNDA - DA NATUREZA DO RELACIONAMENTO
2.1. As partes reconhecem e concordam que o relacionamento entre elas é exclusivamente de natureza amorosa e afetiva, configurando-se como namoro, sem que isso implique em qualquer comunhão de bens, direitos ou deveres de natureza patrimonial, familiar ou sucessória.
2.2. As partes declaram expressamente que o namoro não tem o objetivo de constituição de família, união estável, ou qualquer vínculo jurídico que gere efeitos patrimoniais ou familiares.

CLÁUSULA TERCEIRA - DA INDEPENDÊNCIA FINANCEIRA E PATRIMONIAL
3.1. As partes declaram que, durante o namoro, cada uma manterá a total independência financeira e patrimonial, não havendo qualquer comunhão de bens ou de responsabilidades financeiras.
3.2. Cada parte será integralmente responsável por suas próprias despesas pessoais e compromissos financeiros, não havendo qualquer ônus ou dever de ressarcimento mútuo.
3.3. As partes não terão qualquer direito a reivindicar participação em bens adquiridos de forma individual durante o período de vigência deste contrato.

CLÁUSULA QUARTA - DA PRIVACIDADE E AUTONOMIA PESSOAL
4.1. As partes respeitam mutuamente a privacidade e a individualidade de cada um, não havendo obrigação de prestação de contas sobre a vida pessoal, redes sociais ou comunicações privadas.
4.2. Cada parte tem plena liberdade para manter amizades, relacionamentos sociais e atividades profissionais independentes.

CLÁUSULA QUINTA - DA NÃO CONFIGURAÇÃO DE UNIÃO ESTÁVEL
5.1. As partes concordam expressamente que o relacionamento afetivo entre elas é caracterizado como namoro, não configurando em hipótese alguma uma união estável, mesmo que o namoro se prolongue por anos ou que haja convivência contínua.
5.2. Para fins do artigo 1.723 do Código Civil, as partes declaram que não há entre elas o objetivo de constituir família, requisito essencial para a configuração da união estável.

CLÁUSULA SEXTA - DA COABITAÇÃO
6.1. As partes podem optar por compartilhar uma mesma residência visando reduzir custos e dividir despesas, sem que isso implique em qualquer intenção de formar uma família ou estabelecer uma união estável.
6.2. No caso de coabitação, cada parte contribuirá com as despesas comuns de acordo com suas posses e rendimentos.

CLÁUSULA SÉTIMA - DA INDEPENDÊNCIA ECONÔMICA
7.1. As partes declaram ser plenamente independentes economicamente, não necessitando de qualquer assistência financeira uma da outra para subsistência própria.
7.2. Eventuais contas conjuntas de streamings, serviços ou assinaturas não configuram assistência recíproca ou dependência econômica.

CLÁUSULA OITAVA - DOS BENS E PRESENTES
8.1. Qualquer bem presenteado à outra parte durante o namoro possui caráter de mera liberalidade, não podendo ter sua devolução exigida, em observância ao princípio da boa-fé.
8.2. As partes acordam que todos os bens adquiridos individualmente durante o namoro pertencerão exclusivamente ao adquirente.

CLÁUSULA NONA - DA AUSÊNCIA DE DIREITOS SUCESSÓRIOS
9.1. Fica pactuado que as partes não possuem direitos sucessórios um do outro, abrindo mão de qualquer tipo de herança, meação ou demais direitos inerentes à sucessão.
9.2. Cada parte terá plena liberdade para dispor de seus bens como bem entender, sem qualquer interferência da outra parte.

CLÁUSULA DÉCIMA - DA FILHOS E GRAVIDEZ
10.1. No caso de uma gravidez, esta não transformará automaticamente o namoro em união estável, devendo ser observados os direitos e deveres relativos à gestação e à criança.
10.2. As partes comprometem-se a tratar de qualquer questão relacionada a filhos de forma responsável e respeitosa, independentemente do estado do relacionamento.

CLÁUSULA DÉCIMA PRIMEIRA - DA DISSOLUÇÃO DO NAMORO
11.1. O presente contrato poderá ser rescindido a qualquer momento, por qualquer das partes, mediante simples comunicação verbal ou escrita, sem necessidade de justificativa.
11.2. Em caso de término, as partes deverão:
a) Devolver eventuais pertences em posse da outra parte;
b) Cancelar ou transferir assinaturas conjuntas;
c) Decidir de comum acordo sobre a guarda de animais de estimação adquiridos durante o relacionamento.

CLÁUSULA DÉCIMA SEGUNDA - DA VIGÊNCIA
12.1. O presente contrato entra em vigor na data de início do relacionamento, ${d.inicio_rel||'________'}, e permanecerá vigente enquanto perdurar o relacionamento afetivo entre as partes.
12.2. O contrato será automaticamente extinto com o término do relacionamento ou com a formalização de casamento ou união estável entre as partes.

CLÁUSULA DÉCIMA TERCEIRA - DAS DISPOSIÇÕES GERAIS
13.1. Qualquer tolerância das partes na exigência de seus direitos não será interpretada como renúncia, novação ou retratação.
13.2. Este contrato reflete fielmente a vontade das partes, assumindo total responsabilidade civil e criminal pelas declarações aqui contidas.
13.3. Apesar da vontade mútua aqui declarada, as partes reconhecem que um juízo poderá interpretar a relação de modo diverso, caso presentes os requisitos da união estável.

CLÁUSULA DÉCIMA QUARTA - DO FORO
14.1. Para dirimir eventuais dúvidas oriundas deste contrato, as partes elegem o foro da comarca de ${d.cidade||'________'}, renunciando a qualquer outro, por mais privilegiado que seja.

E, por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor e forma, juntamente com duas testemunhas.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}
CONTRATANTE 1

_________________________________________
${d.nome2}
CONTRATANTE 2

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
  },

  "contrato-noivado": {
    nome: "Contrato de Noivado",
    descricao: "Formaliza o compromisso de noivado com intenção futura de casamento",
    texto: (d) => `CONTRATO DE NOIVADO

Pelo presente instrumento particular, as partes:

NOIVO: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador da Carteira de Identidade RG nº ${d.rg1||'________'}, inscrito no CPF sob nº ${d.cpf1||'________'}, residente e domiciliado à ${d.endereco1||'________'};

NOIVA: ${d.nome2}, ${d.nacionalidade2||'brasileira'}, ${d.estado_civil2||'solteira'}, ${d.profissao2||'________'}, portadora da Carteira de Identidade RG nº ${d.rg2||'________'}, inscrita no CPF sob nº ${d.cpf2||'________'}, residente e domiciliada à ${d.endereco2||'________'};

Resolvem celebrar o presente CONTRATO DE NOIVADO, que se regerá pelas cláusulas e condições seguintes:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem por objeto formalizar o NOIVADO entre as partes, declarando o compromisso mútuo de contrair matrimônio em data a ser definida de comum acordo, estabelecendo as regras que regerão esse período de preparação para o casamento.

CLÁUSULA SEGUNDA - DO NOIVADO
2.1. As partes declaram que aceitaram mutuamente em noivos, assumindo o compromisso solene de se casarem em cerimônia civil e/ou religiosa.
2.2. O início do noivado se deu em ${d.inicio_rel||'________'}, e a data prevista para o casamento é ${d.data_casamento||'a ser definida'}.

CLÁUSULA TERCEIRA - DOS COMPROMISSOS MÚTUOS
3.1. Durante o noivado, as partes comprometem-se a:
a) Cultivar o respeito, a confiança e a comunicação aberta;
b) Planejar o futuro em conjunto, tomando decisões de forma consensual;
c) Apoiar mutuamente os objetivos pessoais e profissionais de cada um;
d) Resolver conflitos de forma saudável, com diálogo e compreensão.

CLÁUSULA QUARTA - DA ORGANIZAÇÃO DO CASAMENTO
4.1. As partes dividirão as despesas relacionadas ao casamento de acordo com suas possibilidades financeiras.
4.2. As decisões sobre a cerimônia, convidados, decoração e demais aspectos do casamento serão tomadas de comum acordo.

CLÁUSULA QUINTA - DOS PRESENTES E DESPESAS
5.1. Presentes recebidos antes do casamento serão tratados conforme o regime de bens escolhido para o casamento.
5.2. Despesas realizadas individualmente para o casamento serão de responsabilidade de quem as realizou.

CLÁUSULA SEXTA - DA RESCISÃO DO NOIVADO
6.1. O noivado pode ser desfeito por mútuo acordo ou por vontade unilateral de qualquer das partes.
6.2. Em caso de rompimento do noivado, as partes deverão:
a) Devolver as alianças de noivado, se houver;
b) Ratear as despesas já comprometidas para o casamento, conforme acordado;
c) Tratar de forma respeitosa qualquer questão pendente.

CLÁUSULA SÉTIMA - DA VIGÊNCIA
O presente contrato entra em vigor na data de sua assinatura e permanecerá vigente até a realização do casamento ou até a rescisão do noivado.

CLÁUSULA OITAVA - DO FORO
Para dirimir eventuais dúvidas, as partes elegem o foro da comarca de ${d.cidade||'________'}.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}
NOIVO

_________________________________________
${d.nome2}
NOIVA

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
  },

  "contrato-casamento": {
    nome: "Acordo Pré-Nupcial",
    descricao: "Define regime de bens e diretrizes antes do casamento",
    texto: (d) => `ACORDO PRÉ-NUPCIAL

Pelo presente instrumento particular, as partes:

CONTRATANTE 1: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg1||'________'}, inscrito(a) no CPF sob nº ${d.cpf1||'________'}, residente e domiciliado(a) à ${d.endereco1||'________'};

CONTRATANTE 2: ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg2||'________'}, inscrito(a) no CPF sob nº ${d.cpf2||'________'}, residente e domiciliado(a) à ${d.endereco2||'________'};

Celebrarão o presente ACORDO PRÉ-NUPCIAL, que estabelece as diretrizes para o casamento e o regime de bens a ser adotado, com base nos artigos 1.639 a 1.657 do Código Civil Brasileiro.

CLÁUSULA PRIMEIRA - DO REGIME DE BENS
As partes optam pelo regime de ${d.regime_bens||'COMUNHÃO PARCIAL DE BENS'}, nos termos do artigo 1.640 do Código Civil.

Parágrafo único. No regime de comunhão parcial de bens, comunicam-se os bens adquiridos na constância do casamento, a título oneroso, e os bens adquiridos por esforço comum.

CLÁUSULA SEGUNDA - DOS BENS ANTERIORES
2.1. Cada parte mantém a propriedade exclusiva dos bens que possuía antes do casamento, incluindo:
a) Bens móveis e imóveis;
b) Investimentos e aplicações financeiras;
c) Direitos sobre propriedade intelectual;
d) Quotas ou ações de empresas.

CLÁUSULA TERCEIRA - DOS PROVENTOS DO TRABALHO
3.1. No regime de comunhão parcial, os proventos do trabalho pessoal de cada cônjuge não se comunicam.
3.2. As partes podem optar por compartilhar voluntariamente seus rendimentos conforme acordarem.

CLÁUSULA QUARTA - DA ADMINISTRAÇÃO DO PATRIMÔNIO COMUM
4.1. Os bens comuns serão administrados em conjunto, exigindo a anuência de ambos para alienação de bens imóveis.
4.2. Despesas domésticas e com filhos serão rateadas conforme a capacidade financeira de cada um.

CLÁUSULA QUINTA - DA SUCESSÃO
5.1. No regime de comunhão parcial, o cônjuge sobrevivente mantém seu patrimônio pessoal e recebe metade dos bens adquiridos na constância do casamento.
5.2. As partes podem dispor de seus bens por testamento, respeitando a parte legítima dos herdeiros necessários.

CLÁUSULA SEXTA - DAS DISPOSIÇÕES GERAIS
6.1. Este acordo pode ser alterado a qualquer tempo, mediante escritura pública aditiva.
6.2. As partes declaram ter ciência dos efeitos jurídicos deste acordo.

CLÁUSULA SÉTIMA - DO FORO
Para dirimir eventuais dúvidas, as partes elegem o foro da comarca de ${d.cidade||'________'}.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
  },

  "contrato-uniao-estavel": {
    nome: "Contrato de União Estável",
    descricao: "Reconhece a união estável com definição de regime de bens e deveres",
    texto: (d) => `ESCRITURA DE RECONHECIMENTO DE UNIÃO ESTÁVEL

Pelo presente instrumento particular, as partes:

COMPANHEIRO(A) 1: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg1||'________'}, inscrito(a) no CPF sob nº ${d.cpf1||'________'}, residente e domiciliado(a) à ${d.endereco1||'________'};

COMPANHEIRO(A) 2: ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) da Carteira de Identidade RG nº ${d.rg2||'________'}, inscrito(a) no CPF sob nº ${d.cpf2||'________'}, residente e domiciliado(a) à ${d.endereco2||'________'};

Resolvem reconhecer e formalizar a UNIÃO ESTÁVEL mantida entre si, com fundamento nos artigos 1.723 a 1.727 do Código Civil Brasileiro.

CLÁUSULA PRIMEIRA - DO RECONHECIMENTO
1.1. As partes declaram que mantêm união estável desde ${d.inicio_rel||'________'}, caracterizada pela convivência pública, contínua e duradoura, com objetivo de constituição de família.
1.2. A convivência sob o mesmo teto se deu a partir de ${d.inicio_coabitação||d.inicio_rel||'________'}.

CLÁUSULA SEGUNDA - DO REGIME DE BENS
2.1. As partes optam pelo regime de ${d.regime_bens||'COMUNHÃO PARCIAL DE BENS'} para reger sua união estável.
2.2. No regime de comunhão parcial, comunicam-se os bens adquiridos na constância da união, a título oneroso.
2.3. Bens adquiridos antes do início da união permanecem como propriedade exclusiva de cada parte.

CLÁUSULA TERCEIRA - DOS DEVERES E OBRIGAÇÕES
3.1. As partes comprometem-se a:
a) Guardar mútua fidelidade e respeito;
b) Construir lar e família em conjunto;
c) Contribuir para as despesas domésticas conforme suas possibilidades;
d) Tomar decisões importantes de comum acordo.

CLÁUSULA QUARTA - DA SUCESSÃO
4.1. Reconhecem-se os direitos sucessórios entre os companheiros, conforme artigo 1.790 do Código Civil.
4.2. Cada parte terá direito à metade dos bens adquiridos na constância da união, em caso de falecimento do outro.

CLÁUSULA QUINTA - DA DISSOLUÇÃO
5.1. A união estável pode ser dissolvida por mútuo acordo, falecimento ou casamento entre as partes.
5.2. Em caso de dissolução, serão partilhados os bens adquiridos na constância da união, conforme o regime escolhido.

CLÁUSULA SEXTA - DA CONVERSÃO EM CASAMENTO
As partes manifestam a intenção de converter a união estável em casamento, tão logo estejam reunidas as condições necessárias.

CLÁUSULA SÉTIMA - DO FORO
Para dirimir eventuais dúvidas, as partes elegem o foro da comarca de ${d.cidade||'________'}.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
  },

  // ============ DECLARAÇÕES ============
  "declaracao-namoro": {
    nome: "Declaração de Namoro",
    descricao: "Declaração simples de que as partes mantêm relacionamento de namoro",
    texto: (d) => `DECLARAÇÃO DE NAMORO

Eu, ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) do RG nº ${d.rg1||'________'} e CPF nº ${d.cpf1||'________'}, declaro que mantenho relacionamento afetivo de NAMORO com ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) do RG nº ${d.rg2||'________'} e CPF nº ${d.cpf2||'________'}, desde ${d.inicio_rel||'________'}.

Declaro ainda que:
- O relacionamento é exclusivamente afetivo, sem intenção de constituir família ou união estável;
- Cada parte mantém independência financeira e patrimonial;
- Não há comunhão de bens entre as partes.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}
CPF: ${d.cpf1||'________'}

_________________________________________
${d.nome2}
CPF: ${d.cpf2||'________'}
`
  },

  "declaracao-noivado": {
    nome: "Declaração de Noivado",
    descricao: "Declaração de compromisso de noivado entre as partes",
    texto: (d) => `DECLARAÇÃO DE NOIVADO

Eu, ${d.nome1}, declaro que estou noivo(a) de ${d.nome2} desde ${d.inicio_rel||'________'}, assumindo o compromisso de contrair matrimônio em data a ser definida de comum acordo.

As partes declaram que:
- O noivado foi assumido por livre e espontânea vontade;
- Ambos estão cientes dos compromissos que decorrem do noivado;
- A data do casamento será definida em conjunto.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}
`
  },

  "declaracao-uniao-estavel": {
    nome: "Declaração de União Estável",
    descricao: "Declaração de convivência em união estável com objetivo de constituir família",
    texto: (d) => `DECLARAÇÃO DE UNIÃO ESTÁVEL

Nós, ${d.nome1} e ${d.nome2}, declaramos que vivemos em união estável desde ${d.inicio_rel||'________'}, mantendo convivência pública, contínua e duradoura, com objetivo de constituição de família.

Declaramos que:
- Residimos juntos no endereço ${d.endereco1||'________'};
- Nos apresentamos à sociedade como companheiros;
- Temos o propósito de constituir família.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
  },

  // ============ CERTIFICADOS ============
  "certificado-namoro": {
    nome: "Certificado de Namoro",
    descricao: "Certificado simbólico do relacionamento de namoro",
    texto: (d) => `CERTIFICADO DE NAMORO

Certificamos que ${d.nome1} e ${d.nome2} mantêm um relacionamento de NAMORO desde ${d.inicio_rel||'________'}, marcado pelo amor, respeito e compromisso mútuo.

Este certificado é emitido em reconhecimento à união afetiva das partes, simbolizando o carinho e a dedicação que compartilham.

Que este relacionamento continue a ser fonte de felicidade e crescimento mútuo!

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
Emitente
`
  },

  "certificado-noivado": {
    nome: "Certificado de Noivado",
    descricao: "Certificado do compromisso de noivado",
    texto: (d) => `CERTIFICADO DE NOIVADO

Certificamos que ${d.nome1} e ${d.nome2} firmaram o compromisso de NOIVADO em ${d.inicio_rel||'________'}, declarando sua intenção de contrair matrimônio.

Que esta caminhada rumo ao casamento seja abençoada e repleta de amor, cumplicidade e respeito mútuo!

Parabéns ao casal!

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
Emitente
`
  },

  "certificado-casamento": {
    nome: "Certificado de Casamento",
    descricao: "Certificado simbólico de casamento",
    texto: (d) => `CERTIFICADO DE CASAMENTO

Certificamos que ${d.nome1} e ${d.nome2} se uniram em matrimônio no dia ${d.data_casamento||'________'}, celebrando o amor e o compromisso de construírem uma vida em conjunto.

Que este casamento seja repleto de amor, respeito, cumplicidade e felicidade!

Parabéns aos noivos!

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
Autoridade Cerimonial
`
  },

  "certificado-uniao-estavel": {
    nome: "Certificado de União Estável",
    descricao: "Certificado simbólico da união estável do casal",
    texto: (d) => `CERTIFICADO DE UNIÃO ESTÁVEL

Certificamos que ${d.nome1} e ${d.nome2} vivem em união estável desde ${d.inicio_rel||'________'}, construindo juntos uma história de amor, respeito e parceria.

Esta união é reconhecida como entidade familiar, com todos os direitos e deveres que lhe são inerentes.

Parabéns ao casal!

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
Emitente
`
  },

  // ============ REGRAS ============
  "regras-relacionamento": {
    nome: "Regras do Relacionamento",
    descricao: "Acordo de regras e limites para o relacionamento",
    texto: (d) => `ACORDO DE REGRAS DO RELACIONAMENTO

Nós, ${d.nome1} e ${d.nome2}, estabelecemos as seguintes regras para o nosso relacionamento:

COMUNICAÇÃO
- Manter diálogo aberto e honesto;
- Resolver conflitos com respeito, sem gritos ou agressões;
- Nunca dormir brigados sem resolver a questão;

RESPEITO
- Respeitar o espaço pessoal e a individualidade;
- Não invadir privacidade (celular, redes sociais, e-mails) sem permissão;
- Aceitar "não" como resposta;

FIDELIDADE
- Ser fiel em pensamentos, palavras e ações;
- Não manter relacionamentos paralelos ou flirts;

RESPONSABILIDADE
- Dividir tarefas domésticas de forma justa;
- Contribuir com as despesas conforme as possibilidades de cada um;

SAÚDE MENTAL
- Praticar escuta ativa;
- Apoiar o crescimento pessoal do outro;
- Não fazer comparações destrutivas;

TÉRMINO
- O relacionamento pode ser encerrado por qualquer das partes;
- Em caso de término, manter respeito e dignidade;

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}
`
  },

  "regras-casal": {
    nome: "Regras de Convivência (Coabitação)",
    descricao: "Acordo de convivência para casais que moram juntos",
    texto: (d) => `REGRAS DE CONVIVÊNCIA DO CASAL

Nós, ${d.nome1} e ${d.nome2}, morando juntos no endereço ${d.endereco1||'________'}, estabelecemos as seguintes regras:

DIVISÃO DE TAREFAS DOMÉSTICAS
- Limpeza da casa: alternar semanalmente ou dividir cômodos;
- Preparo de refeições: dividir ou alternar dias;
- Lavar louça: quem sujou, lava (ou alternar);
- Compras de supermercado: em conjunto ou alternar.

FINANÇAS
- Conta conjunta para despesas domésticas (aluguel, luz, água, internet);
- Cada um mantém sua conta pessoal para gastos individuais;
- Despesas extras decididas em conjunto.

RESPEITO MÚTUO
- Não gritar, xingar ou ofender;
- Pedir permissão para entrar no quarto quando fechado;
- Respeitar momentos de silêncio e solidão.

VIDA SOCIAL
- Festas e eventos: decidir em conjunto;
- Visitas: avisar com antecedência;
- Amizades individuais: respeitar sem ciúmes doentios.

SAÚDE E BEM-ESTAR
- Praticar exercícios e manter alimentação saudável;
- Apoiar nos cuidados com a saúde;
- Ter momentos de lazer em família.

RESOLUÇÃO DE CONFLITOS
- Nunca dormir brigado;
- Conversar com calma, sem interromper;
- Pedir desculpas quando necessário.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}
`
  }

// Adicionar ao final do contratos.js antes do export

CONTRATOS["contrato-companheiro"] = {
  nome: "Contrato de Companheirismo",
  descricao: "Para relacionamentos de companheirismo sem romantismo",
  texto: (d) => `CONTRATO DE COMPANHEIRISMO

Pelo presente instrumento particular, as partes:

PARCEIRO(A) 1: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) do RG nº ${d.rg1||'________'}, inscrito(a) no CPF sob nº ${d.cpf1||'________'}, residente e domiciliado(a) à ${d.endereco1||'________'};

PARCEIRO(A) 2: ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) do RG nº ${d.rg2||'________'}, inscrito(a) no CPF sob nº ${d.cpf2||'________'}, residente e domiciliado(a) à ${d.endereco2||'________'};

Resolvem celebrar o presente CONTRATO DE COMPANHEIRISMO, que se regerá pelas cláusulas e condições seguintes:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem por objeto formalizar o COMPANHEIRISMO entre as partes, configurado como uma relação de amizade, cumplicidade e parceria, sem intenção de constituir família ou união estável.

CLÁUSULA SEGUNDA - DA NATUREZA DA RELAÇÃO
2.1. As partes reconhecem que o relacionamento entre elas é baseado em amizade, companheirismo e cumplicidade, sem romantismo ou intenção de formar família.
2.2. Este contrato não configura namoro, união estável ou qualquer vínculo jurídico familiar.

CLÁUSULA TERCEIRA - DOS COMPROMISSOS
3.1. As partes comprometem-se a:
a) Manter amizade e respeito mútuo;
b) Estar presentes nos momentos importantes;
c) Compartilhar experiências e interesses comuns;
d) Apoiar-se mutuamente.

CLÁUSULA QUARTA - DA INDEPENDÊNCIA
4.1. Cada parte mantém total independência financeira e patrimonial.
4.2. Não há obrigação de assistência financeira entre as partes.

CLÁUSULA QUINTA - DA EXTINÇÃO
5.1. Este contrato pode ser extinto a qualquer momento, por qualquer das partes, sem necessidade de justificativa.

CLÁUSULA SEXTA - DO FORO
Para dirimir eventuais dúvidas, as partes elegem o foro da comarca de ${d.cidade||'________'}.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
};

CONTRATOS["contrato-amizade"] = {
  nome: "Contrato de Amizade Colorida",
  descricao: "Para relações de amizade com benefícios e intimidade",
  texto: (d) => `CONTRATO DE AMIZADE COLORIDA

Pelo presente instrumento particular, as partes:

PARCEIRO(A) 1: ${d.nome1}, ${d.nacionalidade1||'brasileiro(a)'}, ${d.estado_civil1||'solteiro(a)'}, ${d.profissao1||'________'}, portador(a) do RG nº ${d.rg1||'________'}, inscrito(a) no CPF sob nº ${d.cpf1||'________'};

PARCEIRO(A) 2: ${d.nome2}, ${d.nacionalidade2||'brasileiro(a)'}, ${d.estado_civil2||'solteiro(a)'}, ${d.profissao2||'________'}, portador(a) do RG nº ${d.rg2||'________'}, inscrito(a) no CPF sob nº ${d.cpf2||'________'};

Resolvem celebrar o presente CONTRATO DE AMIZADE COLORIDA, que se regerá pelas cláusulas e condições seguintes:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem por objeto formalizar a relação de AMIZADE COLORIDA entre as partes, configurada como uma relação de amizade com intimidade física, sem intenção de constituir família, namoro ou união estável.

CLÁUSULA SEGUNDA - DA NATUREZA DA RELAÇÃO
2.1. As partes reconhecem que o relacionamento entre elas é baseado em amizade, cumplicidade e atração física, sem romantismo ou intenção de formar família.
2.2. Este contrato não configura namoro, união estável ou qualquer vínculo jurídico familiar.

CLÁUSULA TERCEIRA - DOS LIMITES
3.1. As partes declaram que:
a) A relação é consensual e baseada no respeito mútuo;
b) Não há exclusividade romântica;
c) Cada parte é livre para manter outros relacionamentos;
d) A intimidade física é parte do acordo, mas não é obrigatória.

CLÁUSULA QUARTA - DA INDEPENDÊNCIA
4.1. Cada parte mantém total independência financeira e patrimonial.
4.2. Não há obrigação de assistência financeira entre as partes.

CLÁUSULA QUINTA - DA EXTINÇÃO
5.1. Este contrato pode ser extinto a qualquer momento, por qualquer das partes, sem necessidade de justificativa.

CLÁUSULA SEXTA - DO FORO
Para dirimir eventuais dúvidas, as partes elegem o foro da comarca de ${d.cidade||'________'}.

${d.cidade||'________'}, ${d.data||'____ de ______________ de 20___'}.

_________________________________________
${d.nome1}

_________________________________________
${d.nome2}

Testemunha 1: ___________________________
CPF: ___________________________________

Testemunha 2: ___________________________
CPF: ___________________________________
`
};

if (typeof module !== 'undefined') module.exports = CONTRATOS;
if (typeof window !== 'undefined') window.CONTRATOS = CONTRATOS;
