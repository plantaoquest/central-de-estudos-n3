'use strict';

// Recorte atualizado pelo estudante em 17/11/2026.
const updatedReferences = [
  { id: 'acervo-recorte', title: 'AcervoMED · tópicos destacados para a N3 (17/11/2026)', url: 'docs/acervo-recorte-n3.pdf' },
  { id: 'ada-dm1', title: 'ADA 2026 · Diagnóstico e classificação do diabetes', url: 'https://doi.org/10.2337/dc26-S002' },
  { id: 'sbd-dm1', title: 'SBD · Tratamento do diabetes mellitus tipo 1 no SUS', url: 'https://diretriz.diabetes.org.br/tratamento-do-diabetes-mellitus-tipo-1-no-sus/' },
  { id: 'hipopara', title: 'International Task Force 2022 · Hipoparatireoidismo', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10118814/' },
  { id: 'hiperpara', title: 'Fifth International Workshop 2022 · Hiperparatireoidismo primário', url: 'https://doi.org/10.1002/jbmr.4677' },
  { id: 'idsa-pele', title: 'IDSA · Infecções de pele e partes moles', url: 'https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/' },
  { id: 'oms-seguranca', title: 'OMS · Lista de verificação de segurança cirúrgica', url: 'https://cdn.who.int/media/docs/default-source/patient-safety/9789241598590-eng-checklist.pdf' },
  { id: 'protocolo-seguro', title: 'Ministério da Saúde · Protocolo para cirurgia segura', url: 'docs/protocolo-cirurgia-segura.pdf' },
  { id: 'oms-coleta', title: 'OMS · Boas práticas para coleta de sangue', url: 'https://www.who.int/publications/i/item/9789241599221' },
  { id: 'dor-posop-ref', title: 'APS/ASRA/ASA · Diretriz de manejo da dor pós-operatória (2016)', url: 'https://doi.org/10.1016/j.jpain.2015.12.008' },
  { id: 'cfm-consentimento', title: 'Conselho Federal de Medicina · Recomendação 1/2016 sobre consentimento', url: 'https://sistemas.cfm.org.br/normas/visualizar/recomendacoes/BR/2016/1' },
  { id: 'endo-corticoide', title: 'ESE/Endocrine Society 2024 · Insuficiência adrenal induzida por glicocorticoides', url: 'https://doi.org/10.1210/clinem/dgae250' },
  { id: 'nih-crypto', title: 'NIH · Criptococose em pessoas vivendo com HIV', url: 'https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cryptococcosis' }
];
updatedReferences.push({ id: 'ham-s16-tireoide-slides', title: 'HAM V · S16 · Aula de tireoide (slides)', url: 'docs/ham-s16-aula-tireoide.pptx' });
updatedReferences.push({ id: 'abscesso-estudo', title: 'Talan et al. 2016 · Antibiótico adjuvante após drenagem de abscesso', url: 'https://pubmed.ncbi.nlm.nih.gov/26962903/' });

const newTopics = [
  studyTopic('liquor-hiv', 'ham', null, 'Coleta de líquor em paciente com HIV e alteração neurológica', ['acervo-recorte', 'nih-crypto', 'ham-cronograma'], [
    ['Organize as hipóteses pelo quadro', 'Avalie o tempo de evolução, o estado imunológico, o uso de terapia antirretroviral e a presença de cefaleia, febre, déficits focais ou convulsões. Infecções oportunistas, causas metabólicas, efeitos de medicamentos e outras doenças do SNC podem se apresentar com alteração cognitiva. Um quadro subagudo de cefaleia e imunossupressão avançada merece investigação de meningite criptocócica.'],
    ['Antes da coleta', 'Conferir estabilidade, história e exame neurológico, risco hemorrágico e infecção no local da punção. Déficit focal ou sinais de efeito de massa exigem investigação e avaliação da segurança da punção. Na suspeita de meningite criptocócica, medir a pressão de abertura quando a punção for indicada e segura.'],
    ['Interprete e documente', 'Relacione pressão de abertura, celularidade, proteínas e glicose aos testes etiológicos indicados. O antígeno criptocócico no líquor apoia a hipótese de criptococose. Em pacientes muito imunossuprimidos, a resposta celular pode ser discreta. Identifique as amostras, encaminhe conforme o laboratório e documente o procedimento e os achados.']
  ], {
    block: 'clinico',
    memorize: ['Avaliar o quadro neurológico antes de decidir pela punção.', 'Pressão de abertura e antígeno criptocócico respondem a perguntas diferentes.', 'A celularidade pode ser baixa em imunossupressão avançada.'],
    station: ['Explicar indicação e obter consentimento.', 'Pesquisar instabilidade, alterações focais e riscos de sangramento.', 'Planejar pressão de abertura e exames do líquor.', 'Identificar amostras e registrar achados e complicações.']
  }),
  studyTopic('dm1', 'soi', 15, 'Diabetes tipo 1: mecanismos, diagnóstico e cuidados', ['acervo-recorte', 'ada-dm1', 'sbd-dm1'], [
    ['Da célula beta à deficiência de insulina', 'No DM1 autoimune, a perda progressiva de células beta reduz a secreção de insulina. Linfócitos T participam da lesão, e anticorpos como anti-GAD, anti-IA-2 e anti-ZnT8 ajudam a identificar a autoimunidade. A insulina baixa reduz o uso periférico da glicose e o freio sobre a produção hepática e a lipólise. A glicose se acumula no sangue, enquanto ácidos graxos podem alimentar a cetogênese hepática.'],
    ['Sintomas e confirmação', 'Poliúria, polidipsia, perda de peso e fadiga podem surgir rapidamente. Náuseas, vômitos, desidratação e respiração profunda exigem investigação de CAD. Os critérios glicêmicos de diabetes também se aplicam ao DM1. Autoanticorpos e peptídeo C, interpretados no contexto clínico, ajudam na classificação. A idade ou o peso corporal isoladamente não definem o tipo.'],
    ['Reposição basal e prandial', 'A insulina basal limita a produção hepática de glicose entre refeições e durante a noite. A dose prandial cobre o carboidrato da refeição e pode incluir correção conforme o plano individual. Compare as formulações por início, pico e duração. A omissão da insulina basal no DM1 aumenta o risco de cetose mesmo quando a pessoa está comendo pouco.'],
    ['Cuidado diário e uso responsável', 'Associe monitorização da glicose, educação sobre alimentação e atividade física, técnica de aplicação e rodízio de locais. Planeje prevenção e tratamento da hipoglicemia e condutas para intercorrências. Verifique armazenamento, acesso a insumos e capacidade de autocuidado. Ajustes precisam considerar glicose, alimentação, exercício, doença e risco de hipoglicemia.']
  ], {
    memorize: ['Deficiência de insulina facilita hiperglicemia, lipólise e cetogênese.', 'Anti-GAD, anti-IA-2 e anti-ZnT8 ajudam a classificar autoimunidade.', 'Insulina basal cobre os períodos entre refeições. Prandial cobre a refeição.', 'No DM1, jejum não elimina a necessidade de insulina basal.'],
    traps: ['DM1 também pode começar na idade adulta.', 'Insulina não substitui educação, acesso aos insumos e monitorização.', 'Peptídeo C depende da fase da doença e do contexto da coleta.']
  }),
  studyTopic('paratireoides', 'soi', null, 'Hipo e hiperparatireoidismo', ['acervo-recorte', 'hipopara', 'hiperpara'], [
    ['O circuito cálcio–PTH', 'Uma queda do cálcio ionizado é percebida pelo receptor sensor de cálcio nas células paratireoidianas e estimula PTH. O PTH aumenta a reabsorção renal de cálcio, favorece a excreção de fosfato e estimula a formação renal de calcitriol. O calcitriol aumenta a absorção intestinal de cálcio. Os efeitos ósseos dependem do padrão e do tempo de exposição hormonal.'],
    ['Hipoparatireoidismo', 'Cálcio baixo com PTH baixo ou inadequadamente normal sugere deficiência de PTH. Fosfato costuma aumentar. Cirurgia cervical é uma causa importante. Parestesias, espasmo carpopedal, tetania e QT prolongado podem ocorrer. Dosar magnésio é essencial porque sua deficiência pode reduzir secreção e ação do PTH.'],
    ['Hiperparatireoidismo primário e secundário', 'No primário, a secreção de PTH é inadequada para um cálcio elevado. Adenoma é uma causa frequente. Podem ocorrer cálculo renal, fragilidade óssea e alterações de função renal. No secundário, o aumento do PTH é uma resposta a estímulos como deficiência de vitamina D ou doença renal crônica. Interprete cálcio, fosfato, creatinina/TFGe e 25-OH-vitamina D em conjunto.'],
    ['Exames e tratamento', 'O diagnóstico bioquímico vem antes da localização por imagem. USG e cintilografia podem ajudar a planejar uma cirurgia, quando indicada. No hipoparatireoidismo crônico, cálcio e vitamina D ativa são opções, com monitorização de cálcio sérico e urinário. Hipocalcemia sintomática grave demanda avaliação urgente e correção monitorizada. No hiperparatireoidismo primário, a indicação de paratireoidectomia considera sintomas, cálcio, rim e esqueleto.']
  ], {
    memorize: ['PTH eleva cálcio e aumenta excreção renal de fosfato.', 'Hipoparatireoidismo costuma combinar hipocalcemia, fosfato elevado e PTH baixo.', 'Cálcio elevado com PTH não suprimido sugere secreção inadequada.', 'Imagem localiza a glândula após a definição bioquímica.'],
    traps: ['No hiperparatireoidismo secundário, PTH alto não exige hipercalcemia.', 'A hipomagnesemia pode produzir hipocalcemia refratária.', 'Este tema foi mantido na revisão principal por confirmação do estudante.']
  }),
  studyTopic('dor-posop', 'ham', null, 'Avaliação e manejo da dor pós-operatória', ['acervo-recorte', 'dor-posop-ref'], [
    ['Avalie a pessoa e o procedimento', 'Mensurar dor em repouso e ao movimento ajuda a acompanhar resposta e recuperação funcional. Registre intensidade, localização, tipo, evolução e impacto em sono, tosse e mobilidade. Dor nova, intensa ou desproporcional deve levar à investigação de complicações como sangramento, isquemia, infecção ou síndrome compartimental, conforme o procedimento.'],
    ['Analgesia multimodal', 'Combine estratégias com mecanismos diferentes conforme procedimento, comorbidades e contraindicações. Analgésicos não opioides, anti-inflamatórios quando adequados, infiltração local e técnicas regionais podem reduzir a necessidade de opioides. Medidas de conforto e educação contribuem. O alvo inclui permitir respirar, mobilizar e se recuperar com segurança.'],
    ['Opioides e reavaliação', 'Quando necessários, titule conforme dor, resposta e risco. Observe nível de consciência, frequência respiratória e demais efeitos adversos. Doença renal, apneia do sono, idade e associação com sedativos mudam a escolha e a vigilância. Reavalie em intervalo compatível com a via e o fármaco, registre o resultado e planeje redução conforme a recuperação.'],
    ['Comunicação e plano de alta', 'Explique como usar o tratamento, limites das doses prescritas, efeitos esperados e sinais para retornar. Reconheça sofrimento e evite subtratamento por preconceito. A escala analgésica da aula é um recurso pedagógico, e a escolha pós-operatória depende também da intensidade, da cirurgia e do perfil da pessoa.']
  ], {
    block: 'cirurgico',
    memorize: ['Avaliar dor em repouso e ao movimento e reavaliar após a intervenção.', 'Analgesia multimodal combina mecanismos.', 'Sedação excessiva pode anteceder depressão respiratória com opioides.'],
    traps: ['Dor desproporcional pede investigação da causa.', 'Aumentar analgesia exige reavaliar segurança e resposta.'],
    station: ['Identificar procedimento, tempo de pós-operatório e comorbidades.', 'Medir a dor e avaliar impacto funcional.', 'Pesquisar complicações e sinais vitais.', 'Justificar o plano multimodal e as contraindicações.', 'Reavaliar dor, sedação e ventilação e registrar.']
  }),
  studyTopic('pele-abscesso', 'ham', null, 'Infecções de pele e partes moles e abscesso cutâneo', ['acervo-recorte', 'idsa-pele'], [
    ['Identifique a coleção e a gravidade', 'Celulite é uma infecção difusa do tecido cutâneo e subcutâneo. Abscesso é uma coleção de pus que pode apresentar flutuação. O exame define extensão, perfusão, sinais sistêmicos e fatores do hospedeiro. Em dúvida sobre coleção, a ultrassonografia pode ajudar. Dor desproporcional, progressão rápida, bolhas, necrose e instabilidade levantam suspeita de infecção necrosante.'],
    ['Controle do foco', 'Incisão e drenagem são centrais para o abscesso cutâneo drenável. A avaliação inclui localização, profundidade, necessidade de analgesia e situações que exigem encaminhamento. Antibióticos adjuvantes dependem da gravidade, das condições da pessoa, da extensão e da evolução. Uma suspeita de infecção necrosante exige avaliação cirúrgica urgente.'],
    ['Roteiro do procedimento na estação', 'Confirme identidade, local, indicação, consentimento e alergias. Prepare material, antissepsia, proteção, campo e anestesia adequada. A drenagem remove pus e permite tratar loculações quando necessário. O curativo e o seguimento consideram a cavidade, o local e o contexto. Registre achados e procedimento, oriente cuidado e sinais de alerta.']
  ], {
    block: 'cirurgico',
    memorize: ['Flutuação sugere coleção de pus.', 'Drenagem trata o foco do abscesso.', 'Sinais sistêmicos e defesa do hospedeiro influenciam a indicação de antibiótico.'],
    traps: ['Celulite e abscesso podem coexistir.', 'A evolução e a gravidade podem exigir intervenção urgente.'],
    station: ['Examinar extensão, coleção e sinais de gravidade.', 'Explicar indicação, riscos e consentimento.', 'Organizar antissepsia, campos e anestesia.', 'Descrever drenagem, curativo e documentação.', 'Pactuar reavaliação e sinais de alerta.']
  }),
  studyTopic('cirurgia-segura', 'ham', null, 'Cirurgia segura e verificação em equipe', ['acervo-recorte', 'protocolo-seguro', 'oms-seguranca'], [
    ['Três momentos', 'A lista da OMS organiza verificações antes da indução anestésica, antes da incisão e antes da saída da sala. Um responsável conduz as checagens com a participação da equipe. Pausas e comunicação em voz alta permitem que divergências sejam reconhecidas e resolvidas.'],
    ['Antes da indução e da incisão', 'Confirme identidade, procedimento, local/lateralidade e consentimento. Verifique marcação quando aplicável, avaliação anestésica, alergias e riscos de via aérea ou perda sanguínea. Antes da incisão, a equipe confirma o procedimento, antecipa etapas críticas e verifica profilaxia antibiótica e exames necessários conforme o caso.'],
    ['Antes da saída', 'Confirme o procedimento realizado, contagem de instrumentos, compressas e agulhas, identificação de amostras e problemas de equipamento. Alinhe preocupações para recuperação e tratamento. O registro acompanha a comunicação e permite rastreabilidade.']
  ], {
    block: 'cirurgico',
    memorize: ['Antes da indução, antes da incisão e antes da saída da sala.', 'Identidade, local, procedimento e consentimento devem concordar.', 'A equipe compartilha riscos e plano de recuperação.'],
    traps: ['Encontrar uma divergência requer resolvê-la antes de prosseguir.', 'Checagem efetiva envolve comunicação da equipe.'],
    station: ['Conduzir a verificação de identidade e consentimento.', 'Conferir local e lateralidade e riscos anestésicos.', 'Realizar pausa antes da incisão com a equipe.', 'Conferir contagens, amostras e plano de recuperação.']
  }),
  studyTopic('acesso-coleta', 'ham', null, 'Acesso venoso periférico e coleta de sangue', ['acervo-recorte', 'oms-coleta'], [
    ['Antes da punção', 'Confirme identidade, exames e preparo necessário, explique o procedimento e avalie o local. Higienize as mãos, use proteção apropriada e organize os dispositivos. A escolha do calibre e do sítio considera finalidade, duração prevista, veia e condições da pele.'],
    ['Qualidade da amostra', 'Use antissepsia apropriada e aguarde a secagem. Evite garroteamento prolongado e bombeamento repetido da mão. Quando vários tubos são necessários, a ordem depende do aditivo e das instruções do laboratório/fabricante. Identifique os tubos junto ao paciente e faça homogeneização suave conforme a orientação do tubo.'],
    ['Ordem e encerramento', 'Na coleta venosa habitual, a sequência geral é hemoculturas, citrato, soro, heparina, EDTA e inibidor da glicólise. Consulte o protocolo para sistemas especiais e coleta com escalpe. Libere o garrote oportunamente, faça compressão e descarte a agulha no coletor sem reencapar. Em acesso instalado, fixe, identifique e observe infiltração, flebite e infecção.']
  ], {
    block: 'cirurgico',
    memorize: ['Identificação correta e antissepsia antecedem a coleta.', 'Aditivo do tubo define sua finalidade e a sequência.', 'Hemólise e contaminação podem exigir nova amostra.'],
    traps: ['Garrote prolongado pode alterar resultados.', 'Amostras precisam de identificação à beira do paciente.'],
    station: ['Confirmar identidade, exames e preparo.', 'Selecionar sítio, material e dispositivo.', 'Higienizar mãos e realizar antissepsia.', 'Descrever ordem de tubos e liberação do garrote.', 'Comprimir, identificar amostras e descartar perfurocortante.']
  }),
  studyTopic('consentimento-preparo', 'ham', null, 'Consentimento informado e preparo para procedimentos', ['acervo-recorte', 'cfm-consentimento', 'protocolo-seguro'], [
    ['Conversa e decisão', 'O consentimento informado é um processo de comunicação. Explique a indicação, os benefícios esperados, os riscos relevantes, alternativas e consequências de não realizar o procedimento. Verifique compreensão, capacidade para decidir e voluntariedade. Ofereça espaço para dúvidas e documente a decisão.'],
    ['Condições que mudam o processo', 'Considere representante legal quando a pessoa não puder decidir, preservando sua participação conforme sua capacidade. Situações urgentes exigem avaliar a necessidade da intervenção e as condições reais de obter consentimento. Registre a justificativa. Um formulário assinado deve corresponder à conversa clínica e ao procedimento proposto.'],
    ['Preparo ambulatorial', 'Confirme diagnóstico, indicação, procedimento e local. Revise alergias, medicamentos e comorbidades, incluindo risco hemorrágico. Organize material, condições de assepsia, anestesia e plano de seguimento. Relacione a escolha da técnica e da sutura ao tecido, à tensão e ao risco de contaminação do caso.']
  ], {
    block: 'cirurgico',
    memorize: ['Compreensão, voluntariedade e capacidade decisória sustentam o consentimento.', 'Riscos relevantes e alternativas devem ser discutidos.', 'O registro deve identificar o procedimento e a decisão.'],
    traps: ['Consentimento pode ser revisto antes do procedimento.', 'A autorização não encerra a obrigação de cuidado e comunicação.'],
    station: ['Explicar indicação, benefícios, riscos e alternativas.', 'Pedir que a pessoa descreva o que compreendeu.', 'Registrar decisão e dúvidas respondidas.', 'Conferir identidade, local, alergias e materiais.', 'Revisar anestesia, técnica, curativo e retorno.']
  })
];

for (const source of updatedReferences) {
  const current = content.sources.find(item => item.id === source.id);
  if (current) Object.assign(current, source);
  else content.sources.push(source);
}

const revisedLinks = {
  recorte: 'docs/linha-do-tempo-n3.jpg',
  'int-24-1-q24': 'docs/integradora-2024-1.pdf',
  'int-24-1-q25': 'docs/integradora-2024-1.pdf',
  'iesc-23-1': 'docs/iesc-especifica-2023-1.pdf',
  'ham-s15-vertigem': 'docs/ham-s15-aula-vertigem.pptx',
  'ham-s16-diabetes': 'docs/ham-s16-aula-diabetes.pptx'
};
for (const source of content.sources) {
  if (revisedLinks[source.id]) source.url = revisedLinks[source.id];
}

content.archivedTopics = [];
content.archivedQuestions = [];

// Questões de versões anteriores continuam acessíveis no histórico.
const retiredTopic = content.topics.find(topic => topic.id === 'idoso-sentidos');
if (retiredTopic) content.archivedTopics.push({ ...retiredTopic, archived: true });
content.topics = content.topics.filter(topic => topic.id !== 'idoso-sentidos');
const retiredQuestions = content.questions.filter(question => question.topic === 'idoso-sentidos');
content.archivedQuestions.push(...retiredQuestions.map(question => ({ ...question, archived: true })));
content.questions = content.questions.filter(question => question.topic !== 'idoso-sentidos');

content.topics.push(...newTopics);

for (const topic of content.topics) {
  if (topic.subject === 'ham') topic.block ??= 'clinico';
}

const thyroid = content.topics.find(topic => topic.id === 'funcao-tireoide');
thyroid.sections.push({
  title: 'Tratamento e alvos farmacológicos',
  text: 'A levotiroxina repõe T4 no hipotireoidismo. Sua necessidade e a dose consideram o contexto, com atenção à idade e às cardiopatias. No hipertireoidismo por síntese aumentada, tionamidas inibem a tireoperoxidase. Betabloqueadores podem reduzir sintomas adrenérgicos em pacientes selecionados. Radioiodo e cirurgia são opções conforme etiologia, características do paciente e decisão compartilhada. Tireoidite destrutiva exige outra estratégia porque há liberação de hormônio armazenado.'
});
const infection = content.topics.find(topic => topic.id === 'pele-abscesso');
infection.sources.push('abscesso-estudo');
infection.sections.push({
  title: 'Evidência sobre antibiótico adjuvante',
  text: 'Ensaios clínicos posteriores à diretriz IDSA de 2014 demonstraram benefício de antibióticos selecionados após drenagem em determinados cenários de abscesso não complicado. Assim, a decisão deve integrar benefício esperado, efeitos adversos, epidemiologia local e características da pessoa. O controle da coleção continua central.'
});

const adrenal = content.topics.find(topic => topic.id === 'adrenal');
adrenal.sources.push('endo-corticoide');
adrenal.sections.find(section => section.title.startsWith('Automedicação')).text =
  'O caso prático descreve prednisona 20 mg/dia por três meses, com alterações cushingoides, pressão e glicemia elevadas. Esse uso pode suprimir o eixo hipotálamo–hipófise–adrenal. A diretriz conjunta de 2024 considera duração, dose, potência e via. A retirada depende do controle da doença de base e pode ser mais rápida em doses suprafisiológicas e mais lenta perto da dose fisiológica. O plano deve ser individualizado e acompanhado. A suspensão abrupta após uso prolongado pode causar insuficiência adrenal.';
adrenal.memorize = adrenal.memorize.filter(line => !line.startsWith('Prednisona >'));
adrenal.memorize.push('Uso prolongado de glicocorticoide pode suprimir o eixo e exige retirada individualizada.');
const thyroidExam = content.topics.find(topic => topic.id === 'semiologia-endocrina');
thyroidExam.sources.push('ham-s16-tireoide-slides');
thyroidExam.sections.find(section => section.title.startsWith('Interpretação laboratorial')).text =
  'Use os intervalos do laboratório para TSH e T4 livre. Hipotireoidismo primário manifesto combina TSH elevado e T4 livre baixo, mesmo quando o TSH ainda não ultrapassou 10 mUI/L. No subclínico, o T4 livre está no intervalo de referência. T4 livre baixo com TSH inadequadamente normal ou baixo exige considerar disfunção central no contexto apropriado.';

content.sources.push(
  { id: 'ata-tratamento', title: 'American Thyroid Association · Diagnóstico e manejo da tireotoxicose', url: 'https://doi.org/10.1089/thy.2016.0229' },
  { id: 'endo-adrenal', title: 'Endocrine Society · Insuficiência adrenal primária', url: 'https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency' },
  { id: 'endo-aldosterona', title: 'Endocrine Society 2025 · Hiperaldosteronismo primário', url: 'https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2' },
  { id: 'prolactina-consenso', title: 'Pituitary Society 2023 · Diagnóstico e manejo do prolactinoma', url: 'https://www.nature.com/articles/s41574-023-00886-5' }
);
thyroid.sources.push('ata-tratamento');

function difficult(id, topic, source, stem, answer, options, explanation, comments) {
  return { id, topic, source, stem, answer, options, explanation, comments, origin: 'new', advanced: true };
}

function writtenCase(id, topic, source, stem, explanation, rubric) {
  return { ...discursive(id, topic, source, stem, explanation), advanced: true, rubric };
}

function addDifficultQuestions(items) {
  const topics = new Map(content.topics.map(topic => [topic.id, topic]));
  const prepared = items.map(question => {
    const topic = topics.get(question.topic);
    return { ...question, subject: topic.subject, week: topic.week };
  });
  content.questions.unshift(...prepared);
}
