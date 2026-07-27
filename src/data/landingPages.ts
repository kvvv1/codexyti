export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface PartnerRecommendation {
  name: string;
  url: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  detailsPath: string;
}

export interface LandingPageData {
  slug: string;
  service: string;
  niche: string;
  stateLabel: string;
  stateUf: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroImageAlt: string;
  introParagraph: string;
  painPoints: FeatureItem[];
  benefits: FeatureItem[];
  faq: FaqItem[];
  partner?: PartnerRecommendation;
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

export const landingPages: LandingPageData[] = [
  {
    slug: "chatbot-para-padarias-minas-gerais",
    service: "chatbot",
    niche: "Padarias",
    stateLabel: "Minas Gerais",
    stateUf: "MG",
    eyebrow: "Chatbot para Padarias",
    headline: "Chatbot para Padarias em Minas Gerais",
    subheadline:
      "Atenda pedidos e encomendas de bolo pelo WhatsApp 24h por dia, sem perder venda fora do horário de expediente.",
    heroImage: "/images/landing/padarias-hero.webp",
    heroImageAlt:
      "Atendente organizando encomendas em uma padaria com apoio de atendimento digital",
    introParagraph:
      "A CODEXY é especializada em automação e chatbots para o comércio local e implanta o chatbot para padaria em Minas Gerais direto no WhatsApp que sua padaria já usa hoje. A solução responde cardápio, horário e formas de pagamento na hora, organiza encomendas de bolo e festa automaticamente e funciona 24 horas por dia, todos os dias da semana, sem depender de mão de obra extra na equipe.",
    painPoints: [
      {
        title: "Pedidos perdidos fora do horário",
        description:
          "Cliente manda mensagem à noite ou no domingo e só recebe resposta no dia seguinte — quando já comprou em outra padaria.",
      },
      {
        title: "Fila de mensagens no horário de pico",
        description:
          "Manhã e véspera de feriado lotam o WhatsApp e a equipe do caixa não consegue responder todo mundo a tempo.",
      },
      {
        title: "Encomendas de bolo e festa mal controladas",
        description:
          "Anotações soltas em papel ou memória geram erro de sabor, tamanho, data de entrega e cobrança.",
      },
      {
        title: "Equipe sobrecarregada",
        description:
          "Quem atende o balcão também tenta responder o WhatsApp, e as duas tarefas saem prejudicadas.",
      },
    ],
    benefits: [
      {
        title: "Atendimento automático 24/7",
        description:
          "Cardápio, horário de funcionamento, endereço e formas de pagamento respondidos na hora, todo dia.",
      },
      {
        title: "Encomendas organizadas automaticamente",
        description:
          "O chatbot recebe e confirma pedidos de bolo e festa com data, sabor e quantidade, sem depender de anotação manual.",
      },
      {
        title: "Menos carga para a equipe",
        description:
          "O time do balcão foca em quem já está na loja, enquanto o chatbot cuida do WhatsApp.",
      },
      {
        title: "Resposta instantânea reduz desistência",
        description:
          "Cliente que recebe resposta na hora tem muito mais chance de fechar o pedido em vez de procurar concorrente.",
      },
      {
        title: "Mesmo número que você já usa",
        description:
          "Não precisa trocar de WhatsApp nem pedir para os clientes salvarem um novo contato.",
      },
    ],
    faq: [
      {
        question: "O chatbot substitui o atendente humano?",
        answer:
          "Não. Ele cuida das perguntas repetitivas e dos pedidos simples, e transfere para um atendente humano quando o assunto exige.",
      },
      {
        question: "Funciona no mesmo número de WhatsApp que já uso?",
        answer:
          "Sim, a implantação é feita em cima do número que a padaria já utiliza hoje.",
      },
      {
        question: "Ele recebe encomenda de bolo e festa?",
        answer:
          "Sim, o chatbot coleta sabor, tamanho, data de entrega e demais detalhes e organiza tudo automaticamente.",
      },
      {
        question: "Quanto tempo leva para colocar no ar?",
        answer:
          "A implantação costuma ser rápida, sem necessidade de a padaria mexer em nada técnico.",
      },
      {
        question: "Preciso saber programar para usar?",
        answer:
          "Não. A CODEXY cuida de toda a configuração e entrega o chatbot pronto para uso.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página sobre chatbot para padaria em Minas Gerais e quero saber mais sobre como implantar na minha padaria.",
    seo: {
      title: "Chatbot para Padarias em Minas Gerais | CODEXY",
      description:
        "Automatize o atendimento e as encomendas da sua padaria em Minas Gerais com um chatbot no WhatsApp disponível 24h. Fale com a CODEXY.",
      ogImage: "/images/og/padarias-og.jpg",
    },
  },
  {
    slug: "chatbot-para-clinicas-de-estetica-minas-gerais",
    service: "chatbot",
    niche: "Clínicas de Estética",
    stateLabel: "Minas Gerais",
    stateUf: "MG",
    eyebrow: "Chatbot para Clínicas de Estética",
    headline: "Chatbot para Clínicas de Estética em Minas Gerais",
    subheadline:
      "Agende consultas e procedimentos automaticamente pelo WhatsApp e reduza o no-show da sua clínica.",
    heroImage: "/images/landing/clinicas-estetica-hero.webp",
    heroImageAlt:
      "Profissional de clínica de estética confirmando agendamentos em um tablet",
    introParagraph:
      "A CODEXY implanta chatbot para clínica de estética em Minas Gerais integrado ao WhatsApp da clínica, automatizando o agendamento de consultas e procedimentos, o envio de lembretes e a qualificação de leads vindos de Instagram e Google Ads. O resultado é menos no-show, recepção mais livre para atender quem já está na clínica e resposta imediata para quem pesquisa procedimentos e valores.",
    painPoints: [
      {
        title: "Agenda lotada de perguntas repetitivas",
        description:
          "Recepção gasta o dia respondendo dúvidas de preço e disponibilidade em vez de cuidar de quem já está na clínica.",
      },
      {
        title: "No-show por falta de confirmação",
        description:
          "Paciente esquece o horário marcado e não avisa, deixando um espaço vazio na agenda do profissional.",
      },
      {
        title: "Leads de Instagram e Google Ads sem resposta a tempo",
        description:
          "Contato vindo de campanha esfria quando demora para ser respondido, e o investimento em anúncio se perde.",
      },
      {
        title: "Recepção sobrecarregada",
        description:
          "Uma pessoa só tentando atender telefone, WhatsApp e paciente presencial ao mesmo tempo.",
      },
    ],
    benefits: [
      {
        title: "Agendamento automático via WhatsApp",
        description:
          "Paciente escolhe procedimento e horário disponível direto na conversa, sem precisar ligar.",
      },
      {
        title: "Lembrete e confirmação automática",
        description:
          "Mensagens automáticas antes da consulta reduzem drasticamente o no-show.",
      },
      {
        title: "Resposta instantânea sobre procedimentos e valores",
        description:
          "Dúvidas comuns são respondidas na hora, qualquer hora do dia.",
      },
      {
        title: "Qualificação automática de leads de tráfego pago",
        description:
          "O chatbot já identifica o interesse do lead vindo de Instagram ou Google Ads antes de passar para a equipe.",
      },
      {
        title: "Imagem mais profissional",
        description:
          "Atendimento rápido e organizado transmite mais confiança para quem está pesquisando a clínica.",
      },
    ],
    partner: {
      name: "DoctorChatBot",
      url: "https://doctorchatbot.com.br/",
      eyebrow: "Parceiro especializado em saúde",
      title: "Agenda e atendimento automatizado para clínicas",
      description:
        "Para operações que precisam de uma solução especializada na jornada do paciente, a DoctorChatBot combina agenda inteligente e automação de conversas pelo WhatsApp.",
      ctaLabel: "Conhecer a DoctorChatBot",
      detailsPath: "/parceiros/doctorchatbot",
    },
    faq: [
      {
        question: "O paciente consegue marcar consulta sozinho?",
        answer:
          "Sim, o chatbot apresenta os horários disponíveis e confirma o agendamento sem intervenção manual.",
      },
      {
        question: "Funciona com vários profissionais e procedimentos?",
        answer:
          "Sim, o chatbot pode ser configurado para organizar agenda de diferentes profissionais e serviços da clínica.",
      },
      {
        question: "É seguro em relação à LGPD?",
        answer:
          "Sim, os dados coletados seguem boas práticas de proteção de dados de pacientes.",
      },
      {
        question: "Posso usar em campanhas de Instagram e Google Ads?",
        answer:
          "Sim, o chatbot é especialmente útil para responder rápido os leads que chegam de campanhas pagas.",
      },
      {
        question: "Quanto tempo leva para configurar?",
        answer:
          "A CODEXY cuida de toda a configuração inicial junto com a clínica, sem exigir conhecimento técnico da equipe.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página sobre chatbot para clínica de estética em Minas Gerais e quero saber mais sobre como implantar na minha clínica.",
    seo: {
      title: "Chatbot para Clínicas de Estética em Minas Gerais | CODEXY",
      description:
        "Reduza o no-show e automatize o agendamento da sua clínica de estética em Minas Gerais com um chatbot no WhatsApp. Fale com a CODEXY.",
      ogImage: "/images/og/clinicas-estetica-og.jpg",
    },
  },
  {
    slug: "chatbot-para-construtoras-sao-paulo",
    service: "chatbot",
    niche: "Construtoras",
    stateLabel: "São Paulo",
    stateUf: "SP",
    eyebrow: "Chatbot para Construtoras",
    headline: "Chatbot para Construtoras em São Paulo",
    subheadline:
      "Qualifique automaticamente os leads de imóveis pelo WhatsApp antes de repassar para o corretor.",
    heroImage: "/images/landing/construtoras-hero.webp",
    heroImageAlt:
      "Consultor imobiliário qualificando leads ao lado da maquete de um empreendimento",
    introParagraph:
      "A CODEXY desenvolve chatbot para construtora em São Paulo capaz de atender o alto volume de leads gerado por portais imobiliários e campanhas de Google e Meta Ads. O chatbot qualifica orçamento, tipo de imóvel e prazo de compra antes de repassar o contato ao corretor, envia plantas e valores automaticamente e garante resposta 24 horas por dia para cada lançamento da construtora.",
    painPoints: [
      {
        title: "Alto volume de leads sem triagem",
        description:
          "Portais e anúncios geram muitos contatos, mas boa parte não tem perfil ou orçamento para o empreendimento.",
      },
      {
        title: "Corretor perde tempo com perguntas básicas",
        description:
          "Tempo que poderia ser usado fechando visita é gasto respondendo dúvidas repetitivas sobre planta e valores.",
      },
      {
        title: "Lead esfria por demora no primeiro contato",
        description:
          "Quanto mais demora a resposta, menor a chance de o lead seguir interessado no empreendimento.",
      },
      {
        title: "Dificuldade de organizar múltiplos empreendimentos",
        description:
          "Equipe comercial precisa acompanhar vários lançamentos ao mesmo tempo, cada um com informações diferentes.",
      },
    ],
    benefits: [
      {
        title: "Qualificação automática do lead",
        description:
          "O chatbot pergunta orçamento, tipo de imóvel e prazo antes de encaminhar o contato para o corretor.",
      },
      {
        title: "Resposta 24/7",
        description:
          "Lead vindo de anúncio ou portal recebe retorno imediato, a qualquer hora do dia.",
      },
      {
        title: "Envio automático de material do empreendimento",
        description:
          "Plantas, valores e condições são enviados automaticamente conforme o interesse do lead.",
      },
      {
        title: "Integração com campanhas de Google e Meta Ads",
        description:
          "O chatbot recebe o lead direto da campanha e já inicia a qualificação sem depender de atendente disponível.",
      },
      {
        title: "Mais visitas agendadas por lead qualificado",
        description:
          "Corretor recebe apenas contatos já filtrados, aumentando a taxa de conversão em visita.",
      },
    ],
    faq: [
      {
        question: "O chatbot substitui o corretor?",
        answer:
          "Não. Ele filtra e prepara o lead, e o corretor entra para fechar a visita e a negociação.",
      },
      {
        question: "Ele envia planta e valores automaticamente?",
        answer:
          "Sim, conforme o empreendimento de interesse do lead, o chatbot pode enviar os materiais configurados.",
      },
      {
        question: "Funciona para vários empreendimentos ao mesmo tempo?",
        answer:
          "Sim, o chatbot pode ser configurado para atender diferentes lançamentos e direcionar cada lead corretamente.",
      },
      {
        question: "Como o chatbot qualifica o lead?",
        answer:
          "Ele pergunta informações como orçamento, tipo de imóvel desejado e prazo de compra antes de repassar o contato.",
      },
      {
        question: "Quanto tempo leva para implantar?",
        answer:
          "A CODEXY configura o chatbot em conjunto com a equipe comercial da construtora, sem necessidade de conhecimento técnico.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página sobre chatbot para construtora em São Paulo e quero saber mais sobre como implantar na minha construtora.",
    seo: {
      title: "Chatbot para Construtoras em São Paulo | CODEXY",
      description:
        "Qualifique automaticamente os leads de imóveis da sua construtora em São Paulo com um chatbot no WhatsApp. Fale com a CODEXY.",
      ogImage: "/images/og/construtoras-og.jpg",
    },
  },
];

export function getLandingPageBySlug(slug?: string): LandingPageData | undefined {
  return landingPages.find((page) => page.slug === slug);
}
