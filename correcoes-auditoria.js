'use strict';

// Correções da "Auditoria científica da Central N3" (18/11/2026).
// Cada item é aplicado pelo ID da questão. IDs, ordem das alternativas e gabaritos foram preservados;
// nenhuma letra de gabarito mudou. Questões históricas mantêm texto e letra oficiais e recebem "ressalva clínica".

const auditSources = [
  { id: 'consenso-crises-2024', title: 'Consenso internacional ADA/EASD/JBDS/AACE/DTS 2024 · Crises hiperglicêmicas em adultos', url: 'https://doi.org/10.1007/s00125-024-06183-8' },
  { id: 'sbd-ehh-2026', title: 'SBD 2026 · Síndrome hiperglicêmica hiperosmolar', url: 'https://diretriz.diabetes.org.br/manejo-da-sindrome-hiperglicemica-hiperosmolar-nao-cetotica-shhnc/' },
  { id: 'sbd-cad', title: 'SBD · Diagnóstico e tratamento da cetoacidose diabética', url: 'https://diretriz.diabetes.org.br/diagnostico-e-tratamento-da-cetoacidose-diabetica/' },
  { id: 'sbd-cade', title: 'SBD · Cetoacidose diabética euglicêmica', url: 'https://diretriz.diabetes.org.br/diagnostico-e-tratamento-da-cetoacidose-diabetica-euglicemica-cad-e/' },
  { id: 'ada-2026-16', title: 'ADA Standards of Care 2026 · Seção 16 (tabela 16.1)', url: 'https://doi.org/10.2337/dc26-s016' },
  { id: 'ada-2026-hipo', title: 'ADA Standards of Care 2026 · Glicemia e hipoglicemia', url: 'https://doi.org/10.2337/dc26-S006' },
  { id: 'cgm-somogyi', title: 'Monitorização contínua em DM2 · hipoglicemia noturna e hiperglicemia matinal', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9553369/' },
  { id: 'sm-harmonizado', title: 'Consenso harmonizado IDF/AHA/NHLBI 2009 · Síndrome metabólica', url: 'https://pubmed.ncbi.nlm.nih.gov/19805654/' },
  { id: 'endotext-sm', title: 'Endotext · Síndrome metabólica', url: 'https://www.ncbi.nlm.nih.gov/books/NBK278936/' },
  { id: 'sbd-dm2-2026', title: 'SBD 2026 · Manejo do DM2 (recomendação R9)', url: 'https://diretriz.diabetes.org.br/manejo-do-diabetes-mellitus-tipo-2/' },
  { id: 'kdigo-dm-drc', title: 'KDIGO 2022 · Diabetes na doença renal crônica', url: 'https://kdigo.org/wp-content/uploads/2022/10/KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf' },
  { id: 'endotext-farmaco', title: 'Endotext · Agentes para o tratamento do DM2', url: 'https://www.ncbi.nlm.nih.gov/books/NBK279141/' },
  { id: 'asam-alcool', title: 'ASAM · Diretriz de abstinência alcoólica (recomendação V.7)', url: 'https://doi.org/10.1097/ADM.0000000000000668' },
  { id: 'iii-par', title: 'Série clínica sobre paralisia do III par craniano', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8727561/' },
  { id: 'meta-vestibular', title: 'Meta-análise de acurácia do exame vestibular à beira do leito', url: 'https://pubmed.ncbi.nlm.nih.gov/36453134/' },
  { id: 'aao-otite-externa', title: 'AAO-HNS · Otite externa aguda', url: 'https://doi.org/10.1177/0194599813517083' },
  { id: 'aao-surdez-subita', title: 'AAO-HNS · Perda auditiva neurossensorial súbita', url: 'https://doi.org/10.1177/0194599819859885' },
  { id: 'aao-meniere', title: 'AAO-HNS · Doença de Ménière', url: 'https://doi.org/10.1177/0194599820909438' },
  { id: 'nice-ng222', title: 'NICE NG222 · Depressão em adultos', url: 'https://www.nice.org.uk/guidance/ng222/chapter/recommendations' },
  { id: 'nice-cg113', title: 'NICE CG113 · Ansiedade generalizada e pânico', url: 'https://www.nice.org.uk/guidance/cg113/chapter/Recommendations' },
  { id: 'lei-13819', title: 'Lei 13.819/2019, art. 6º · Notificação de violência autoprovocada', url: 'https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2019-04-26%3B13819%21art6' },
  { id: 'nt-264-2024', title: 'Ministério da Saúde · Nota técnica conjunta nº 264/2024', url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2024/nota-tecnica-conjunta-no-264-2024-cgesmu-dgci-desco-e-deppros-saps-ms.pdf' },
  { id: 'oms-trauma', title: 'OMS 2013 · Cuidado em saúde mental após trauma', url: 'https://www.who.int/news/item/06-08-2013-who-releases-guidance-on-mental-health-care-after-trauma' },
  { id: 'ers-dispneia', title: 'ERS 2024 · Dispneia crônica (opioides)', url: 'https://doi.org/10.1183/13993003.00335-2024' },
  { id: 'beams', title: 'Ensaio BEAMS (JAMA) · Morfina na dispneia da DPOC', url: 'https://jamanetwork.com/journals/jama/fullarticle/2798741' },
  { id: 'ispad-cad', title: 'ISPAD 2022 · Cetoacidose diabética pediátrica', url: 'https://doi.org/10.1111/pedi.13406' },
  { id: 'ata-gestacao', title: 'ATA 2026 · Tireoide na gravidez e no pós-parto', url: 'https://doi.org/10.1177/10507256261445624' },
  { id: 'endotext-tireoide', title: 'Endotext · Fisiologia e doenças da tireoide', url: 'https://www.ncbi.nlm.nih.gov/books/NBK285547/' },
  { id: 'endotext-hipocalcemia', title: 'Endotext · Hipocalcemia aguda', url: 'https://www.ncbi.nlm.nih.gov/books/NBK279022/' },
  { id: 'ese-hipopara', title: 'ESE 2025 · Hipoparatireoidismo crônico pós-cirúrgico', url: 'https://academic.oup.com/ejendo/article/193/5/G83/8321487' },
  { id: 'ata-cdt-2025', title: 'ATA 2025 · Câncer diferenciado de tireoide', url: 'https://doi.org/10.1177/10507256251363120' },
  { id: 'endo-hipopit', title: 'Endocrine Society · Reposição hormonal no hipopituitarismo', url: 'https://www.endocrine.org/clinical-practice-guidelines/hormone-replacement-in-hypopituitarism' },
  { id: 'pituitary-prl', title: 'Pituitary Society · Consenso sobre prolactinomas', url: 'https://doi.org/10.1038/s41574-023-00886-5' },
  { id: 'ese-incidentaloma', title: 'ESE 2023 · Incidentaloma adrenal', url: 'https://doi.org/10.1093/ejendo/lvad066' },
  { id: 'ata-2016-tireotox', title: 'ATA 2016 · Hipertireoidismo e outras causas de tireotoxicose', url: 'https://doi.org/10.1089/thy.2016.0229' },
  { id: 'ptu-mmi', title: 'Estudo comparativo PTU × metimazol na tempestade tireoidiana', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10111182/' },
  { id: 'aap-oma', title: 'AAP · Otite média aguda', url: 'https://doi.org/10.1542/peds.2012-3488' },
  { id: 'oms-meningite', title: 'OMS 2025 · Diretriz de meningite', url: 'https://www.ncbi.nlm.nih.gov/books/NBK614844/' },
  { id: 'uk-hipercalemia', title: 'UK Kidney Association · Hipercalemia', url: 'https://guidelines.ukkidney.org/hyperkalaemia/' },
  { id: 'manual-paliativos', title: 'Ministério da Saúde · Manual de Cuidados Paliativos, 2ª ed. (dor e delirium)', url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2023/manual-de-cuidados-paliativos-2a-edicao' },
  { id: 'agar-delirium', title: 'Agar et al. 2017 · Antipsicóticos no delirium em cuidados paliativos', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2588810' },
  { id: 'iwgdf-2023', title: 'IWGDF 2023 · Diretrizes do pé diabético', url: 'https://iwgdfguidelines.org/guidelines-2023/' },
  { id: 'oaks-derby', title: 'OAKS e DERBY · Pegcetacoplan na atrofia geográfica', url: 'https://pubmed.ncbi.nlm.nih.gov/37865470/' },
  { id: 'ms-raps-portal', title: 'Ministério da Saúde · Rede de Atenção Psicossocial', url: 'https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps' }
];

const auditLog = [];

function auditFix(id, level, change) {
  const pools = [content.questions, content.archivedQuestions ?? []];
  const question = pools.flat().find(item => item.id === id);
  if (!question) { auditLog.push({ id, level, applied: false }); return; }
  if (change.stem) question.stem = change.stem;
  if (change.options) for (const [index, text] of Object.entries(change.options)) question.options[Number(index)] = text;
  if (change.comments) for (const [index, text] of Object.entries(change.comments)) if (question.comments) question.comments[Number(index)] = text;
  if (change.explanation) question.explanation = change.explanation;
  if (change.addExplanation) question.explanation = `${question.explanation} ${change.addExplanation}`;
  if (change.rubric) question.rubric = change.rubric;
  if (change.caveat) question.caveat = change.caveat;
  if (change.refs) question.reviewRefs = [...new Set([...(question.reviewRefs ?? []), ...change.refs])];
  question.audit = level;
  auditLog.push({ id, level, applied: true });
}

for (const source of auditSources) if (!content.sources.some(item => item.id === source.id)) content.sources.push(source);

const P = 'prioritária';
const R = 'ressalva';

/* ------------------------------------------------------------ correções prioritárias (23) */

auditFix('crises-diabetes-x07', P, {
  stem: 'Idoso, 78 anos, DM2, encontrado sonolento após 5 dias de diarreia e pouca ingestão de água. Glicemia 880 mg/dL, sódio 145 mEq/L (osmolalidade efetiva calculada 2 × Na + glicose/18 ≈ 339 mOsm/kg), pH 7,38, bicarbonato 22 mEq/L e cetonemia baixa. Qual é a principal medida inicial?',
  options: { 0: 'Reposição volêmica com cristaloide isotônico, guiada por reavaliação clínica frequente pelo risco de sobrecarga no idoso, com monitorização da osmolalidade e do sódio.' },
  explanation: 'Osmolalidade efetiva ≈ 339 mOsm/kg com pH e bicarbonato preservados e cetonemia baixa: estado hiperglicêmico hiperosmolar, tanto pelo consenso internacional de 2024 (>300) quanto pela SBD (≥320). O déficit hídrico é a prioridade; a reposição é individualizada e reavaliada com frequência no idoso. A insulina entra depois, em dose menor, quando a glicemia para de cair só com fluidos.',
  refs: ['consenso-crises-2024', 'sbd-ehh-2026']
});

auditFix('crises-diabetes-x10', P, {
  stem: 'Mulher, 50 anos, DM2 em uso de empagliflozina, com vômitos e taquipneia; glicemia 190 mg/dL, pH 7,15 e cetonemia alta. Qual é o diagnóstico?',
  explanation: 'Acidose com cetonemia alta e glicemia abaixo de 200 mg/dL em usuária de iSGLT2: CAD euglicêmica (limite <200 mg/dL na SBD e no consenso de 2024). O iSGLT2 elimina glicose pela urina e mascara a CAD; o tratamento inclui suspender o iSGLT2, fluidos, insulina e glicose para manter a insulina até a cetose resolver.',
  refs: ['sbd-cade', 'consenso-crises-2024']
});

auditFix('endocrino-pa-x17', P, {
  options: { 3: 'Crise hiperglicêmica a classificar (CAD, EHH ou forma mista); solicitar gasometria, cetonemia, eletrólitos e calcular a osmolalidade efetiva.' },
  explanation: 'Glicemia de 520 mg/dL com desidratação e sonolência é uma crise hiperglicêmica, mas está abaixo do limiar glicêmico do EHH (≥600 mg/dL na ADA e na SBD) e a ausência de Kussmaul não exclui CAD. A classificação depende do pH/bicarbonato, das cetonas e da osmolalidade.',
  refs: ['ada-2026-16', 'sbd-ehh-2026']
});

auditFix('endocrino-pa-h04', P, {
  options: { 2: 'Estado hiperglicêmico hiperosmolar; reposição volêmica com soro fisiológico, monitorada e individualizada (risco de sobrecarga no idoso), e insulina após a reposição inicial, com potássio ≥3,3 mEq/L (SBD) ou ≥3,5 mmol/L (consenso internacional 2024).' },
  explanation: 'Hiperosmolaridade sem acidose nem cetose define o EHH. A desidratação é o principal problema; na idosa, a reposição é guiada por reavaliações frequentes. O limiar de potássio para iniciar insulina é 3,3 mEq/L na SBD e 3,5 mmol/L no consenso de 2024.',
  refs: ['consenso-crises-2024', 'sbd-ehh-2026']
});

auditFix('endocrino-pa-h05', P, {
  options: { 2: 'Hidratação com soro fisiológico e reposição de potássio, adiando a insulina até o potássio passar de 3,3 mEq/L (SBD) ou 3,5 mmol/L (consenso internacional 2024).' },
  explanation: 'A insulina leva o potássio para dentro da célula e pode causar arritmia grave quando ele já está baixo. Com K de 3,0 os dois protocolos adiam a insulina: a SBD usa 3,3 mEq/L e o consenso de 2024 usa 3,5 mmol/L.',
  refs: ['consenso-crises-2024', 'sbd-cad']
});

auditFix('aguda-d', P, {
  explanation: 'A insulina leva o potássio para dentro das células e pode precipitar hipocalemia grave e arritmias. Esta questão segue o consenso internacional de 2024, que adia a insulina com K <3,5 mmol/L até corrigi-lo; a SBD usa 3,3 mEq/L. Com K de 3,1 os dois protocolos adiam a insulina.',
  refs: ['consenso-crises-2024', 'sbd-cad']
});

auditFix('crises-diabetes-x01', P, {
  explanation: 'Na CAD, o primeiro passo é repor volume. A insulina regular IV vem em seguida, com potássio ≥3,5 mmol/L (consenso internacional 2024) ou ≥3,3 mEq/L (SBD); bicarbonato só em acidose extrema.',
  refs: ['consenso-crises-2024', 'sbd-cad']
});

auditFix('farmaco-e', P, {
  options: { 1: 'Hipoglicemia noturna documentada; reduzir a dose noturna ou trocar por análogo basal sem pico e repetir a monitorização da madrugada. O efeito Somogyi é uma hipótese, não um diagnóstico firmado por duas medidas.' },
  explanation: 'A glicemia de 52 mg/dL às 3 h documenta hipoglicemia noturna e basta para rever a NPH; aumentá-la agravaria o risco. Já a hiperglicemia matinal não pode ser atribuída com segurança ao rebote (Somogyi) a partir de dois pontos: série noturna, alimentação e perfil da insulina ajudam a distinguir as causas, e estudos com monitorização contínua questionam o rebote como explicação habitual.',
  refs: ['cgm-somogyi', 'ada-2026-hipo']
});

auditFix('farmaco-dm-x29', P, {
  options: { 2: 'Reduzir a dose noturna ou trocar por análogo basal sem pico, pela hipoglicemia de madrugada documentada, e repetir a monitorização noturna.' },
  explanation: 'A glicemia de 55 mg/dL às 3 h documenta hipoglicemia e exige reduzir ou trocar a insulina noturna; mais insulina pioraria o quadro. Dois valores não confirmam efeito Somogyi como causa da hiperglicemia matinal; a monitorização seriada esclarece o padrão.',
  refs: ['cgm-somogyi', 'ada-2026-hipo']
});

auditFix('dm2-x19', P, {
  stem: 'Mulher, 55 anos, cintura 92 cm, PA 128/82, glicemia de jejum 101 mg/dL, HDL 48 mg/dL e triglicerídeos 140 mg/dL. Quantos critérios de síndrome metabólica ela tem pelo critério harmonizado (2009) ou pelo ATP III revisado (glicemia ≥100 mg/dL)?',
  explanation: 'Mulher: cintura ≥88 (sim), glicemia ≥100 (sim), HDL <50 (sim), PA <130/85 (não), TG <150 (não). São três critérios: síndrome metabólica. Pelo ATP III original, que usava glicemia ≥110 mg/dL, seriam dois; por isso a versão do critério precisa estar explícita.',
  refs: ['sm-harmonizado', 'endotext-sm']
});

auditFix('dm2-x30', P, {
  stem: 'Homem, 47 anos, sedentário, com IMC 33 e glicemia de jejum de 128 e 131 mg/dL em dois dias. Não tem doença cardiovascular, renal ou insuficiência cardíaca conhecidas e é acompanhado na UBS, onde tem acesso aos medicamentos do SUS. Entre as opções abaixo, qual é a conduta farmacológica inicial mais adequada?',
  explanation: 'Diagnóstico confirmado de DM2. Entre as opções, a metformina associada à mudança de estilo de vida é a escolha inicial. A SBD 2026 recomenda considerar também a adiposidade: com IMC ≥30, agonista do GLP-1 ou GLP-1/GIP é recomendado para redução de peso quando disponível, decisão que depende de objetivos, comorbidades e acesso.',
  refs: ['sbd-dm2-2026']
});

auditFix('disc-soi-2', P, {
  explanation: 'a) Metformina: reduz a produção hepática de glicose, por vias que incluem a ativação da AMPK, e melhora a sensibilidade periférica; não estimula secreção de insulina. Glibenclamida: liga-se à SUR1 e fecha o canal de K-ATP da célula beta, despolarizando-a e liberando insulina independentemente da glicemia. b) Suspender a metformina (TFG <30, contraindicada) e suspender a glibenclamida (alto risco de hipoglicemia no idoso e na doença renal); considerar opções mais seguras, como iDPP-4 (a linagliptina dispensa ajuste pela TFGe; sitagliptina e outras exigem redução de dose) ou insulina basal com cautela, com metas glicêmicas individualizadas e educação sobre hipoglicemia.',
  refs: ['kdigo-dm-drc', 'endotext-farmaco']
});

auditFix('endocrino-pa-h03', P, {
  options: { 3: 'Corrigir a hipoglicemia imediatamente e dar tiamina parenteral precoce; glicose e tiamina podem ser feitas juntas ou em qualquer ordem, sem atrasar a glicose.' },
  explanation: 'A tiamina precoce é pertinente na desnutrição com uso nocivo de álcool (risco de Wernicke), mas a hipoglicemia é emergência: a glicose não deve esperar a tiamina. O glucagon funciona mal com reserva de glicogênio baixa.',
  refs: ['asam-alcool']
});

auditFix('danos-diabetes-x13', P, {
  stem: 'Homem, 55 anos, DM2, com diplopia súbita e ptose à direita e dor retro-orbitária. O olho direito tem limitação de adução, elevação e abaixamento; as pupilas são isocóricas e fotorreagentes. Qual é a hipótese mais provável e o cuidado necessário?',
  options: { 3: 'Mononeuropatia isquêmica diabética do III par poupando a pupila é a mais provável; ainda assim, fazer avaliação neurológica e considerar imagem vascular urgente, pois compressão pode inicialmente poupar a pupila.' },
  explanation: 'A isquemia do III par costuma poupar as fibras pupilares periféricas, e o padrão de motilidade descrito caracteriza a paralisia. Pupila poupada não exclui compressão (aneurisma), sobretudo no início ou em paralisia incompleta; por isso a avaliação neurovascular e a imagem urgente são consideradas conforme a apresentação. Pupila dilatada exige imagem imediata.',
  refs: ['iii-par']
});

auditFix('hist-20242-41', P, {
  caveat: 'Ressalva clínica: a letra B fica como resposta histórica, mas cita redução do nistagmo com a fixação, dado ausente no enunciado. Episódios breves desencadeados por movimento pedem exame posicional (Dix-Hallpike), e o impulso cefálico alterado isolado não prova origem periférica nesse cenário; o HINTS é validado para síndrome vestibular aguda contínua.',
  refs: ['grace3', 'meta-vestibular']
});

auditFix('otoscopia-h02', P, {
  options: { 2: 'Gotas otológicas de antibiótico, com ou sem corticoide, analgesia e proteção do ouvido contra a água; se a integridade da membrana for incerta, usar preparação não ototóxica (quinolona).' },
  explanation: 'Otite externa aguda difusa se trata com terapia tópica; antibiótico sistêmico fica para extensão além do conduto ou imunossupressão. Quando a membrana não é visualizada e pode haver perfuração, evitam-se aminoglicosídeos tópicos.',
  refs: ['aao-otite-externa']
});

auditFix('otoscopia-h04', P, {
  explanation: 'O Weber vai para o ouvido melhor na perda neurossensorial, e o Rinne positivo bilateral é compatível com ela, embora não exclua perda condutiva leve. Os diapasões são triagem: a audiometria confirma o tipo de perda. Perda neurossensorial assimétrica exige investigar o ângulo pontocerebelar.',
  refs: ['aao-surdez-subita']
});

auditFix('otoscopia-x28', P, {
  options: { 1: 'Sem assimetria detectável na triagem com diapasão (o que não exclui perda leve ou bilateral simétrica); investigar a tontura com exame vestibular e pedir audiometria se houver queixa auditiva.' },
  explanation: 'Weber central e Rinne positivo bilateral são compatíveis com audição normal, mas também ocorrem em perda bilateral simétrica e não excluem perda condutiva leve. Os testes servem de triagem; a tontura segue com exame vestibular (Dix-Hallpike, nistagmo, coordenação).',
  refs: ['aao-surdez-subita']
});

auditFix('aps-saude-mental-h01', P, {
  stem: 'Mulher de 35 anos tem PHQ-9 de 17, sem pontuação no item 9, sem história de mania e com prejuízo no trabalho. Na consulta, a avaliação clínica confirma episódio depressivo moderado e ela nega ideação suicida quando perguntada diretamente. Qual é a conduta mais adequada na APS?',
  options: { 2: 'Discutir as opções (ISRS e/ou psicoterapia) e decidir em conjunto, revisar em 1 a 2 semanas a tolerância e o risco e avaliar a resposta em 4 a 6 semanas.' },
  explanation: 'O PHQ-9 quantifica sintomas, mas não faz o diagnóstico: ele vem da avaliação clínica, que inclui perguntar diretamente sobre risco. Em depressão moderada, antidepressivo e psicoterapia são opções a decidir com a pessoa, com revisão precoce e seguimento na APS.',
  refs: ['nice-ng222']
});

auditFix('hist-20261-35', P, {
  caveat: 'Ressalva clínica: a prioridade de segurança e avaliação urgente está correta. A Lei 13.819/2019 obriga notificar violência autoprovocada suspeita ou confirmada; ideação ou plano exigem proteção e avaliação, mas por si não configuram um ato notificável atual. Esclareça a tentativa prévia e siga a norma local.',
  refs: ['lei-13819', 'nt-264-2024']
});

auditFix('hist-20261-47', P, {
  caveat: 'Ressalva clínica: o mecanismo (modulação alostérica positiva do GABA-A) está correto, mas a OMS recomenda não usar benzodiazepínicos para sintomas de estresse agudo ou insônia no primeiro mês após um trauma. A letra A fica como registro histórico.',
  refs: ['oms-trauma']
});

auditFix('hist-20251-33', P, {
  explanation: 'Gabarito da banca: C. A sertralina bloqueia o transportador de serotonina (SERT) desde as primeiras doses; o efeito clínico tardio reflete adaptações posteriores (como dessensibilização de autorreceptores e neuroplasticidade), e não apenas um aumento gradual de serotonina na fenda. Ela não se liga a receptores benzodiazepínicos (A); alprazolam não é seguro para uso contínuo (B) e é modulador POSITIVO do GABA-A (D).',
  caveat: 'Ressalva clínica: a explicação da alternativa C, aceita pela banca, é simplificada; distinga o efeito farmacológico imediato da resposta clínica tardia.',
  refs: ['nice-ng222']
});

auditFix('aps-paliativos-h09', P, {
  stem: 'Homem com DPOC muito avançada, PPS de 30%, já com broncodilatadores otimizados, reabilitação feita e ansiedade abordada, mantém falta de ar refratária ao mínimo esforço, com saturação de 93% em ar ambiente. Qual é a conduta para a dispneia?',
  options: { 3: 'Considerar opioide em dose baixa, titulado como teste individual para dispneia refratária, com ventilador direcionado ao rosto e posicionamento; oxigênio não está indicado sem hipoxemia.' },
  explanation: 'Na dispneia crônica da DPOC, a ERS (2024) sugere não usar opioides de rotina, e o ensaio BEAMS não mostrou melhora no desfecho primário em uma semana. O cenário aqui é outro: dispneia refratária após tratamento otimizado, em fase final de vida, em que um teste individual de opioide em dose baixa é razoável. O oxigênio só ajuda quando há hipoxemia.',
  refs: ['ers-dispneia', 'beams']
});

/* ------------------------------------------------------------ ressalvas e fontes (59) */

auditFix('n3a-dm1-02', R, {
  addExplanation: 'Com cetonemia de 1,8 mmol/L após omissão e com sintomas, o plano de doença orienta contato imediato com a equipe, monitorização frequente de glicose e cetonas, correção pelo plano individual e avaliação urgente se houver piora, vômitos persistentes ou incapacidade de hidratar-se.',
  refs: ['sbd-cade']
});
auditFix('crises-diabetes-x27', R, {
  explanation: 'Regras do dia de doença: nunca suspender a basal, pois o estresse aumenta a glicemia e a cetogênese. Com cetonas elevadas ou sintomas, o plano individual orienta contato imediato com a equipe e avaliação urgente se houver piora ou intolerância à hidratação.',
  refs: ['sbd-cade']
});
auditFix('crises-diabetes-x04', R, {
  options: { 3: 'Tratar a CAD e reavaliar o abdome; a dor é comum na própria cetoacidose, mas sinais de abdome agudo ou dor que não melhora com a correção exigem investigação em paralelo.' },
  explanation: 'A dor abdominal da CAD costuma melhorar com a correção da acidose, mas também pode ser sinal do precipitante. Diante de sinais de abdome agudo, a investigação cirúrgica corre em paralelo ao tratamento, sem suspender a insulina.',
  refs: ['consenso-crises-2024']
});
auditFix('crises-diabetes-x21', R, {
  options: { 1: 'Não repor potássio inicialmente; iniciar hidratação e insulina e monitorar o potássio com frequência (no consenso de 2024, após 2 h de insulina e depois a cada 4 h, ou mais vezes conforme a gravidade).' },
  explanation: 'Com K acima de 5,0–5,2, não se repõe de início; a insulina e a hidratação vão reduzi-lo, e a reposição começa quando ele cair para a faixa do protocolo. A frequência das dosagens se ajusta à gravidade.',
  refs: ['consenso-crises-2024']
});
auditFix('disc-soi-1', R, {
  addExplanation: 'Por ser adolescente de 15 anos, segue-se protocolo pediátrico (ISPAD): reposição de fluidos na primeira hora, insulina em infusão contínua iniciada após a primeira hora de fluidos e sem bolus, e reposição de potássio conforme o protocolo da faixa etária.',
  refs: ['ispad-cad']
});
auditFix('n3a-crises-01', R, {
  addExplanation: 'Critérios do consenso de 2024: CAD com beta-hidroxibutirato ≥3 mmol/L e acidose; resolução com beta-hidroxibutirato <0,6 mmol/L e pH ≥7,3 ou bicarbonato ≥18 mmol/L. Glicemia controlada isoladamente não define resolução.',
  refs: ['consenso-crises-2024']
});
auditFix('n3a-d-soi-01', R, {
  addExplanation: 'Pelo consenso de 2024, a resolução é documentada por beta-hidroxibutirato <0,6 mmol/L e pH ≥7,3 ou bicarbonato ≥18 mmol/L; glicemia controlada isoladamente é insuficiente.',
  refs: ['consenso-crises-2024']
});
auditFix('farmaco-a', R, {
  options: { 2: 'Reduz a produção hepática de glicose, por vias que incluem a ativação da AMPK; pode causar sintomas gastrointestinais e deficiência de B12.' },
  explanation: 'A metformina reduz a produção hepática de glicose e melhora a sensibilidade à insulina, sem estimular a célula beta; a AMPK é uma das vias associadas, entre vários mecanismos. Os efeitos mais comuns são gastrointestinais; em uso prolongado, pode reduzir a B12. As demais alternativas descrevem sulfonilureia, iSGLT2 e pioglitazona.',
  refs: ['endotext-farmaco']
});
auditFix('farmaco-dm-x18', R, {
  explanation: 'Elevação progressiva na madrugada sem hipoglicemia às 3 h sugere fenômeno do alvorecer (GH e cortisol), mas duas medidas também admitem cobertura basal insuficiente. Em ambos os casos, ajusta-se a basal (dose ou horário) e confirma-se o padrão com monitorização seriada.',
  refs: ['ada-2026-hipo']
});
auditFix('danos-diabetes-h01', R, {
  options: { 2: 'Reduzir a metformina para até 1 g/dia, suspender a glibenclamida, iniciar inibidor de SGLT2 e manter IECA ou BRA na dose máxima tolerada, se pressão e potássio permitirem.' },
  explanation: 'Com TFG entre 30 e 44 a metformina deve ter dose reduzida; a glibenclamida acumula e causa hipoglicemia na DRC; iSGLT2 e bloqueio do SRAA reduzem a progressão. "Manter" o IECA/BRA pressupõe pressão, potássio e tolerância adequados.',
  refs: ['kdigo-dm-drc']
});
auditFix('tireoide-c', R, {
  addExplanation: 'No puerpério, a captação com radioisótopo depende da lactação e do traçador: iodo-131 é contraindicado na amamentação, e o tecnécio exige pausa temporária; muitas vezes TRAb e quadro clínico bastam.',
  refs: ['ata-gestacao']
});
auditFix('tireo-exame-e', R, {
  explanation: 'TSH acima da referência com T4 livre normal define o hipotireoidismo subclínico; o roteiro da prática usa a faixa de 4,1 a 10. Antes de concluir, confirma-se a persistência em nova dosagem e avaliam-se contexto, fármacos (amiodarona, lítio, corticoide), sintomas sutis e repercussão funcional.',
  refs: ['endotext-tireoide']
});
auditFix('disc-ham-1', R, {
  explanation: 'a) Fácies mixedematosa (face e pálpebras infiltradas, macroglossia, madarose); edema pré-tibial não depressível (pressionar a região pré-tibial: não forma cacifo); reflexo aquileu com fase de relaxamento lentificada (martelo, paciente ajoelhado ou sentado); palpação da tireoide por abordagem posterior com deglutição (volume, consistência, nódulos). b) TSH acima da referência com T4 livre baixo: hipotireoidismo primário manifesto. O critério é o T4 livre baixo com TSH elevado, mesmo quando o TSH é inferior a 10.',
  refs: ['endotext-tireoide']
});
auditFix('n3a-para-01', R, {
  addExplanation: 'Com tetania e QT prolongado, a correção é urgente com cálcio intravenoso sob monitorização cardíaca, junto da correção do magnésio. A ESE só fala em hipoparatireoidismo crônico pós-cirúrgico após mais de 12 meses.',
  refs: ['endotext-hipocalcemia', 'ese-hipopara']
});
auditFix('nodulos-tireoide-h07', R, {
  options: { 0: 'Hipocalcemia por possível hipoparatireoidismo pós-operatório; dosar cálcio, magnésio e PTH e escolher a via pela gravidade: intravenosa com tetania, convulsão ou QT longo; oral se os sintomas forem leves.' },
  explanation: 'A lesão ou desvascularização das paratireoides é complicação frequente da tireoidectomia total. Parestesia leve isolada pede checar cálcio, magnésio, PTH e evolução antes de escolher a via; quadros graves recebem cálcio intravenoso monitorado.',
  refs: ['endotext-hipocalcemia']
});
auditFix('n3a-para-03', R, {
  stem: 'Uma mulher de 64 anos sofreu dois episódios de cálculo renal e tem osteoporose no rádio distal. O cálcio total corrigido pela albumina está acima da referência em duas amostras colhidas com pelo menos duas semanas de intervalo, o PTH está elevado e o fosfato está discretamente baixo. A 25-OH-vitamina D está adequada e a função renal não indica retenção importante de fosfato. Uma ultrassonografia cervical não identificou glândula aumentada. O residente argumenta que o ultrassom normal retira a indicação de considerar cirurgia, porque localiza a doença antes da confirmação bioquímica.\n\nQual interpretação e plano integram o mecanismo e o papel da imagem?',
  refs: ['hiperpara']
});
auditFix('nodulos-tireoide-h02', R, {
  options: { 2: 'Não puncionar, pois nódulos quentes raramente são malignos (salvo achados ultrassonográficos muito suspeitos ou discordantes); tratar o hipertireoidismo.' },
  explanation: 'O adenoma tóxico é quase sempre benigno e geralmente dispensa punção, com ressalva para achados ultrassonográficos muito suspeitos ou discordantes.',
  refs: ['eta-nodulos']
});
auditFix('nodulos-tireoide-h04', R, {
  stem: 'A PAAF foi Bethesda IV (neoplasia folicular). Por que a histologia da peça cirúrgica é necessária para definir o diagnóstico?',
  explanation: 'A citologia não avalia a cápsula nem os vasos; só a histologia demonstra invasão capsular ou vascular. Lobectomia diagnóstica e teste molecular entram na decisão conforme o risco e a disponibilidade.',
  refs: ['ata-cdt-2025']
});
auditFix('nodulos-tireoide-h05', R, {
  options: { 1: 'Vigilância ativa com ultrassonografia seriada ou lobectomia, decidida com o paciente, desde que a localização (longe da traqueia e do nervo laríngeo recorrente) e o seguimento permitam.' },
  explanation: 'Microcarcinomas de baixo risco têm prognóstico excelente; o tratamento agressivo não traz benefício. A vigilância ativa depende também da localização do tumor e da capacidade de seguimento.',
  refs: ['ata-cdt-2025']
});
auditFix('n3a-exame-tireoide-02', R, {
  addExplanation: 'A interpretação de T4 livre baixo com TSH inadequadamente normal segue a diretriz de hipopituitarismo da Endocrine Society.',
  refs: ['endo-hipopit']
});
auditFix('hipofise-c', R, {
  options: { 2: 'Provável microprolactinoma (prolactina moderadamente elevada e microlesão), após excluir fármacos, hipotireoidismo e macroprolactina; tratar com agonista dopaminérgico.' },
  explanation: 'Lesão <10 mm é microadenoma; hiperprolactinemia moderada com microlesão e hipogonadismo sugere prolactinoma, sem confirmação isolada: antes, excluem-se fármacos, hipotireoidismo e macroprolactina. A prolactina inibe o GnRH; o agonista dopaminérgico (cabergolina) é a primeira linha.',
  refs: ['pituitary-prl']
});
auditFix('hipofise-h01', R, {
  options: { 1: 'Repetir a prolactina com diluição da amostra para afastar o efeito gancho de um macroprolactinoma volumoso.' },
  explanation: 'Em macroadenomas volumosos, prolactina muito alta pode saturar o ensaio e aparecer falsamente baixa (efeito gancho). Quando há discrepância entre o tamanho da lesão e a prolactina, dilui-se a amostra; confirmar o prolactinoma muda o tratamento para cabergolina.',
  refs: ['pituitary-prl']
});
auditFix('adrenal-a', R, {
  explanation: 'Doses suprafisiológicas por mais de 3 a 4 semanas podem suprimir o eixo hipotálamo-hipófise-adrenal. A suspensão abrupta pode precipitar insuficiência adrenal; o desmame é gradual, individualizado pela dose, pelo tempo de uso e pela condição de base, com mais cautela perto da dose fisiológica.',
  refs: ['endo-corticoide']
});
auditFix('adrenal-x21', R, {
  explanation: 'Uso prolongado em doses suprafisiológicas exige desmame. O ritmo depende da exposição e da condição de base, com mais cautela ao se aproximar da dose fisiológica, quando o eixo precisa se recuperar.',
  refs: ['endo-corticoide']
});
auditFix('disc-ham-3', R, {
  explanation: 'a) Dose, tempo de uso, motivo e quem indicou; sintomas de Cushing (ganho de peso central, fraqueza proximal, equimoses, alterações de humor, irregularidade menstrual); PA em múltiplas medidas; fácies em lua cheia, giba, obesidade centrípeta, estrias violáceas largas, hirsutismo, acne, pele fina; correlacionar a glicemia alterada com o corticoide. b) Explicar os riscos da automedicação e os efeitos observados; não suspender abruptamente (o eixo pode estar suprimido: risco de insuficiência adrenal); fazer retirada gradual, com ritmo individualizado pela dose, pelo tempo de uso e pela resposta, e redução mais lenta perto da dose fisiológica; orientar sinais de insuficiência adrenal e acompanhar PA, glicemia, nutrição e saúde mental.',
  refs: ['endo-corticoide']
});
auditFix('adrenal-h06', R, {
  explanation: 'Sem Cushing manifesto, cortisol >1,8 µg/dL após 1 mg de dexametasona sugere secreção autônoma leve de cortisol; completa-se a avaliação com ACTH e a verificação de interferentes (fármacos, adesão, absorção). A baixa densidade sugere adenoma rico em lipídeos, e a cirurgia é discutida caso a caso pelas comorbidades.',
  refs: ['ese-incidentaloma']
});
auditFix('semiologia-endocrina-h06', R, {
  addExplanation: 'A sequência tionamida antes do iodo segue o protocolo da ATA. A icterícia obriga avaliar a função hepática antes de escolher entre PTU e metimazol; há diretrizes com escolhas distintas, e um estudo observacional não mostrou vantagem clara de mortalidade com o PTU.',
  refs: ['ata-2016-tireotox', 'ptu-mmi']
});
auditFix('vertigem-x04', R, {
  stem: 'Homem, 45 anos, após resfriado, apresenta vertigem intensa e contínua há 2 dias, náuseas, nistagmo horizontal unidirecional que diminui com a fixação, impulso cefálico com sacada corretiva para a esquerda e ausência de desvio vertical no teste de cobertura. Audição normal. Qual é o diagnóstico?',
  explanation: 'Síndrome vestibular aguda contínua com os três componentes do HINTS de padrão periférico (impulso alterado, nistagmo unidirecional e skew ausente), sem perda auditiva e após infecção viral: neurite vestibular. O HINTS tem valor quando feito por examinador treinado.',
  refs: ['grace3', 'meta-vestibular']
});
auditFix('vertigem-h01', R, {
  addExplanation: 'O HINTS só se aplica à síndrome vestibular aguda contínua com nistagmo e depende de examinador treinado; diante do padrão central, a ressonância é o exame de escolha, já que a tomografia pode não mostrar infarto de fossa posterior precoce.',
  refs: ['grace3', 'meta-vestibular']
});
auditFix('disc-ham-2', R, {
  addExplanation: 'Observação: os critérios do item b (incluindo HINTS) valem para síndrome vestibular aguda contínua. A tontura ao levantar da cama, episódica e posicional, pede manobras posicionais (Dix-Hallpike e teste de rolamento). Weber e Rinne são triagem; a audiometria confirma o tipo de perda.',
  refs: ['grace3']
});
auditFix('hist-20252-16', R, {
  caveat: 'Ressalva clínica: o HINTS é validado para síndrome vestibular aguda contínua com nistagmo, feito por examinador treinado, como neste caso. A ressonância é preferível à tomografia para infarto de fossa posterior.',
  refs: ['grace3', 'meta-vestibular']
});
auditFix('hist-20251-20', R, {
  caveat: 'Ressalva clínica: crises de 10 a 15 minutos são mais longas que o típico da VPPB (geralmente menos de 1 minuto), e nistagmo horizontal no Dix-Hallpike sugere canal lateral ou apresentação atípica. Esclareça duração, direção do nistagmo e sinais de alarme antes de concluir.',
  refs: ['grace3', 'meta-vestibular']
});
auditFix('vertigem-e', R, {
  explanation: 'Crises de minutos a horas com hipoacusia flutuante, zumbido e plenitude auricular formam a tétrade de Ménière; a audiometria faz parte da avaliação diagnóstica. Restrição de sódio é medida inicial, e diurético ou betaistina são opções de manutenção, com evidência limitada. A VPPB dura segundos e não tem sintomas auditivos.',
  refs: ['aao-meniere']
});
auditFix('vertigem-h03', R, {
  addExplanation: 'Diurético ou betaistina podem entrar como manutenção, com evidência limitada.',
  refs: ['aao-meniere']
});
auditFix('otoscopia-h01', R, {
  addExplanation: 'A amoxicilina em dose alta é a primeira escolha, exceto se houve uso de amoxicilina nos últimos 30 dias ou conjuntivite purulenta (amoxicilina-clavulanato) ou alergia.',
  refs: ['aap-oma']
});
auditFix('otoscopia-h08', R, {
  options: { 3: 'Mastoidite aguda: internar, iniciar antibiótico intravenoso e solicitar avaliação urgente do otorrinolaringologista, com imagem conforme a suspeita de complicação ou o protocolo.' },
  explanation: 'A mastoidite é complicação da otite média aguda e pode evoluir para abscesso subperiosteal e complicações intracranianas; exige avaliação hospitalar e otorrinolaringológica urgente.',
  refs: ['aap-oma']
});
auditFix('idoso-sentidos-x10', R, {
  options: { 0: 'Tratar como perda auditiva neurossensorial súbita: encaminhar com urgência para audiometria e avaliação otorrinolaringológica; o corticoide é opção precoce, discutida conforme diagnóstico e contraindicações.' },
  explanation: 'Weber para o lado bom indica perda neurossensorial no ouvido direito. Perda súbita exige encaminhamento urgente; o corticoide é uma opção precoce, mais útil nas primeiras 2 semanas.',
  refs: ['aao-surdez-subita']
});
auditFix('n3a-lcr-01', R, {
  addExplanation: 'Com pressão de abertura de 36 cmH₂O e sintomas, punções terapêuticas, quando seguras, fazem parte do controle da pressão.',
  refs: ['nih-crypto']
});
auditFix('n3a-lcr-02', R, {
  addExplanation: 'Enquanto se obtém a imagem, o tratamento empírico indicado não deve ser atrasado.',
  refs: ['oms-meningite']
});
auditFix('n3a-ham-diabetes-01', R, {
  addExplanation: 'Hipoglicemia por sulfonilureia tende a recorrer, sobretudo com doença renal, o que justifica observação prolongada com glicemias seriadas.',
  refs: ['ada-2026-hipo']
});
auditFix('n3a-coleta-01', R, {
  addExplanation: 'Com potássio informado acima de 6, o ECG deve ser feito sem demora e a nova coleta, repetida rapidamente; se o ECG ou o quadro exigirem, o tratamento não espera a confirmação.',
  refs: ['uk-hipercalemia']
});
auditFix('n3a-dor-posop-02', R, {
  addExplanation: 'A diretriz de analgesia pós-operatória não é a fonte central para hemorragia e instabilidade: o raciocínio aqui é o da avaliação primária e do reconhecimento de choque.',
  refs: ['dor-posop-ref']
});
auditFix('n3a-pele-01', R, {
  addExplanation: 'O ensaio de Talan et al. (NEJM, 2016) mostrou benefício modesto do antibiótico adjuvante após drenagem em abscessos não complicados, o que apoia uma decisão individualizada junto da IDSA.',
  refs: ['abscesso-estudo']
});
auditFix('iesc-mental-d', R, {
  explanation: 'O efeito antidepressivo dos ISRS é gradual. A revisão precoce, em 1 a 2 semanas, avalia tolerância, adesão e risco; a eficácia é avaliada após 4 a 6 semanas em dose adequada. Trocas precoces prejudicam o tratamento.',
  refs: ['nice-ng222']
});
auditFix('aps-saude-mental-h02', R, {
  options: { 2: 'Resposta parcial: considerar otimizar a dose, trocar de fármaco ou associar psicoterapia, conforme tolerância e preferência.' },
  explanation: 'Redução menor que 50% após 4 a 6 semanas indica resposta parcial. As opções são otimizar a dose, trocar de fármaco ou associar psicoterapia, escolhidas com a pessoa conforme tolerância e preferência.',
  refs: ['nice-ng222']
});
auditFix('aps-saude-mental-h04', R, {
  options: { 3: 'Considerar a hipótese de transtorno bipolar (o episódio sugere hipomania, a confirmar pela história e pela repercussão), evitar antidepressivo isolado e discutir o caso com apoio matricial ou psiquiatria.' },
  explanation: 'O episódio abre a hipótese de bipolaridade, cuja classificação exige avaliar duração, repercussão e história. Até esclarecer, antidepressivo isolado pode induzir virada e ciclagem.',
  refs: ['nice-ng222']
});
auditFix('aps-saude-mental-h06', R, {
  options: { 2: 'Provável transtorno de pânico, com agorafobia a caracterizar; terapia cognitivo-comportamental e/ou ISRS em dose inicial baixa, sem benzodiazepínico de rotina.' },
  explanation: 'Crises recorrentes com medo de novas crises sugerem transtorno de pânico; a agorafobia exige caracterização clínica da esquiva. Benzodiazepínico não é rotina, e doses iniciais baixas de ISRS evitam a piora inicial da ansiedade.',
  refs: ['nice-cg113']
});
auditFix('hist-20252-43', R, {
  caveat: 'Ressalva clínica: com ideação suicida, a avaliação e o manejo do risco (plano de segurança, restrição de meios, envolvimento da rede) são imediatos e acompanham a estratégia longitudinal da alternativa oficial.',
  refs: ['nice-ng222']
});
auditFix('aps-paliativos-h03', R, {
  addExplanation: 'A soma (100 mg/dia) está correta, mas o aumento exige antes verificar o tipo de dor, a função renal, efeitos adversos, a resposta aos resgates e as metas do paciente.',
  refs: ['manual-paliativos']
});
auditFix('aps-paliativos-h07', R, {
  options: { 0: 'Investigar causas reversíveis proporcionais (retenção urinária, fecaloma, dor, infecção, efeito de opioide), usar medidas não farmacológicas e reservar o haloperidol para agitação ou sofrimento graves.' },
  explanation: 'Delirium é comum no fim de vida. A abordagem começa pelas causas proporcionais e por medidas não farmacológicas; antipsicótico não é rotina (Agar et al., 2017) e fica para agitação ou sofrimento graves. Benzodiazepínico isolado pode piorar o quadro.',
  refs: ['manual-paliativos', 'agar-delirium']
});
auditFix('n3a-paliativo-04', R, {
  refs: ['manual-paliativos']
});
auditFix('raps-rede-h02', R, {
  options: { 3: 'Equipe de Consultório na Rua com vinculação ao CAPS AD e estratégia de redução de danos; Unidade de Acolhimento, se indicada no projeto do CAPS AD, como cuidado residencial transitório.' },
  explanation: 'Redução de danos amplia o acesso. A Unidade de Acolhimento é recurso de cuidado residencial transitório, com indicação e articulação pelo CAPS AD, e não solução automática de moradia.',
  refs: ['ms-raps-portal']
});
auditFix('raps-rede-h07', R, {
  stem: 'Paciente de um município cuja rede conta com CAPS III está em crise, sem indicação de internação hospitalar, mas precisa de cuidado contínuo por alguns dias. Qual recurso da RAPS é adequado?',
  explanation: 'O CAPS III oferece cuidado contínuo e leitos de acolhimento noturno, evitando internações. A existência de CAPS III depende da rede real e do fluxo regional, não só da população.',
  refs: ['caps']
});
auditFix('raps-rede-h09', R, {
  explanation: 'O técnico de referência é definido pela organização da equipe; não há regra universal de categoria profissional.',
  refs: ['caps']
});
auditFix('hist-20242-35', R, {
  caveat: 'Ressalva clínica: dextrose IV é defensável com deglutição insegura, mas a concentração depende do acesso e do protocolo (soluções a 50% exigem veia calibrosa; há esquemas com glicose a 10%); sem acesso, o glucagon é alternativa.',
  refs: ['ada-2026-hipo']
});
auditFix('hist-20251-30', R, {
  caveat: 'Ressalva clínica: DM2 avançado também pode cursar com peptídeo C baixo; o anti-GAD positivo é o dado que firma autoimunidade (DM1 ou LADA no adulto).',
  refs: ['ada-dm1']
});
auditFix('hist-20252-46', R, {
  caveat: 'Ressalva clínica: a polineuropatia distal típica pode ter manejo inicial na APS; o encaminhamento é reservado a apresentações atípicas, assimétricas ou de progressão rápida.',
  refs: ['iwgdf-2023']
});
auditFix('hist-20242-13', R, {
  caveat: 'Ressalva clínica: o comentário usa o ATP III revisado (cintura ≥102 cm em homens e glicemia ≥100 mg/dL). No critério harmonizado, com corte de cintura para homens latino-americanos ≥90 cm, a contagem também é 2.',
  refs: ['sm-harmonizado']
});
auditFix('idoso-sentidos-x29', R, {
  options: { 1: 'Não há tratamento que reverta a forma seca; orientar parar de fumar, proteção e acompanhamento, e procurar atendimento se surgir piora súbita. Na atrofia geográfica, inibidores do complemento retardam o crescimento da lesão em estudos, sem recuperar a visão.' },
  explanation: 'Anti-VEGF é para a forma úmida. Na seca, controlam-se fatores de risco e monitoriza-se a conversão para úmida. Em estágio avançado (atrofia geográfica), ensaios como OAKS e DERBY mostraram redução do crescimento da lesão com inibidores do complemento, sem reversão e com acesso limitado.',
  refs: ['oaks-derby']
});

content.auditLog = auditLog;
