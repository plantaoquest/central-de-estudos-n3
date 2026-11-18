'use strict';

// Alinhamento de SOI V aos objetivos oficiais das APGs S15 P1 a S17 P2 (roteiro enviado pelo estudante em 18/11/2026).
// Organiza os temas por APG, completa lacunas de conteúdo, reclassifica questões e acrescenta questões no estilo Afya.

content.sources.push(
  { id: 'roteiro-soi', title: 'Roteiro de objetivos das APGs de SOI V, semanas 15 a 17 (enviado pelo estudante)' },
  { id: 'ada-crises-2024', title: 'Umpierrez et al. · Consenso ADA/EASD/JBDS/AACE/DTS 2024 · Crises hiperglicêmicas em adultos', url: 'https://doi.org/10.2337/dci24-0032' },
  { id: 'sbd-insulina-tecnica', title: 'SBD · Práticas seguras para preparo e aplicação de insulina', url: 'https://diretriz.diabetes.org.br/praticas-seguras-para-preparo-e-aplicacao-de-insulina/' },
  { id: 'cfm-cem', title: 'CFM · Código de Ética Médica (Res. 2.217/2018)', url: 'https://portal.cfm.org.br/images/PDF/cem2019.pdf' },
  { id: 'iwgdf-2023', title: 'IWGDF 2023 · Diretrizes de prevenção e manejo do pé diabético', url: 'https://iwgdfguidelines.org/guidelines-2023/' },
  { id: 'ada-neuropatia', title: 'Pop-Busui et al. · ADA 2017 · Neuropatia diabética (position statement)', url: 'https://doi.org/10.2337/dc16-2042' },
  { id: 'acr-tirads', title: 'Tessler et al. · ACR TI-RADS (J Am Coll Radiol 2017)', url: 'https://doi.org/10.1016/j.jacr.2017.01.046' },
  { id: 'bethesda-2023', title: 'Ali et al. · Sistema Bethesda 2023 para citopatologia da tireoide', url: 'https://doi.org/10.1089/thy.2023.0141' }
);

// ── Objetivos oficiais por APG ──────────────────────────────────────────
const apgPlan = {
  dm1: { week: 15, apg: 'P1', title: 'DM1: fisiopatologia, clínica, exames e tratamento', objectives: [
    'Compreender a fisiopatologia, a avaliação clínica e as manifestações clínicas do DM1.',
    'Conhecer o cuidado farmacológico e não farmacológico no tratamento do DM1.',
    'Debater a interpretação de exames complementares para investigação e diagnóstico do DM1.'
  ] },
  dm2: { week: 15, apg: 'P2', title: 'DM2: fisiopatologia, manifestações, avaliação e síndrome metabólica', objectives: [
    'Compreender a fisiopatologia, a avaliação clínica e as manifestações clínicas do DM2.',
    'Estadiar o tratamento farmacológico e não farmacológico do DM2 (classe e mecanismo de ação). Ver o tema “Tratamento do DM2”.',
    'Entender os critérios de diagnóstico da síndrome metabólica (clínicos e laboratoriais).'
  ] },
  'farmaco-dm': { week: 15, apg: 'P2', title: 'Tratamento do DM2: medidas não farmacológicas, classes e mecanismos', objectives: [
    'Estadiar o tratamento farmacológico e não farmacológico do DM2 (classe e mecanismo de ação).'
  ] },
  'crises-diabetes': { week: 16, apg: 'P1', title: 'Complicações agudas do DM: hipoglicemia, CAD, EHH e autocuidado com insulina', objectives: [
    'Compreender a fisiopatologia, o quadro clínico e os achados laboratoriais das complicações agudas do DM (hipoglicemia, cetoacidose e estado hiperglicêmico hiperosmolar).',
    'Estudar as medidas de controle das complicações agudas do DM.',
    'Conhecer o diagnóstico e discutir as questões éticas e de responsabilidade diante do autocuidado na utilização da insulina.'
  ] },
  'danos-diabetes': { week: 16, apg: 'P2', title: 'Complicações crônicas do DM: neuropatia, pé diabético, retina e rim', objectives: [
    'Debater a fisiopatologia e o quadro clínico das complicações crônicas do DM (pé diabético, neuropatia).',
    'Explicar o diagnóstico das complicações crônicas do DM.',
    'Discutir o tratamento e as condutas para o manejo das complicações do DM.'
  ] },
  'funcao-tireoide': { week: 17, apg: 'P1', title: 'Tireoide: morfofisiologia, hipo e hipertireoidismo e fármacos', objectives: [
    'Discutir a morfofisiologia da tireoide.',
    'Compreender a epidemiologia, a etiologia, a fisiopatologia e as manifestações clínicas do hipotireoidismo e do hipertireoidismo.',
    'Analisar os achados clínicos e os exames laboratoriais do hipotireoidismo e do hipertireoidismo.',
    'Debater as classes e o mecanismo de ação dos fármacos usados no controle do hipotireoidismo e do hipertireoidismo.'
  ] },
  'nodulos-tireoide': { week: 17, apg: 'P2', title: 'Neoplasias benignas e malignas da tireoide: fisiopatologia, clínica e diagnóstico', objectives: [
    'Compreender a fisiopatologia da glândula tireoide (origem das neoplasias).',
    'Estudar as manifestações clínicas das neoplasias benignas e malignas da tireoide.',
    'Debater o diagnóstico (exames laboratoriais e de imagem) das neoplasias benignas e malignas da tireoide.'
  ] }
};

const soiTopic = id => content.topics.find(topic => topic.id === id);
for (const [id, plan] of Object.entries(apgPlan)) {
  const topic = soiTopic(id);
  if (!topic) continue;
  Object.assign(topic, { week: plan.week, apg: plan.apg, title: plan.title, objectives: plan.objectives });
  if (!topic.sources.includes('roteiro-soi')) topic.sources.unshift('roteiro-soi');
}

const addSections = (id, sections, { before } = {}) => {
  const topic = soiTopic(id);
  const items = sections.map(([title, text]) => ({ title, text }));
  const at = before ? topic.sections.findIndex(section => section.title.startsWith(before)) : -1;
  if (at >= 0) topic.sections.splice(at, 0, ...items);
  else topic.sections.push(...items);
};
const addSources = (id, ...ids) => soiTopic(id).sources.push(...ids.filter(s => !soiTopic(id).sources.includes(s)));

// ── S15 P1 · DM1 ───────────────────────────────────────────────────────
addSections('dm1', [
  ['Estágios do DM1 autoimune', 'Estágio 1: dois ou mais autoanticorpos com glicemia normal. Estágio 2: autoanticorpos com disglicemia, ainda sem sintomas. Estágio 3: hiperglicemia que preenche critério de diabetes, em geral com sintomas. A progressão pode levar meses a anos, e o rastreio de familiares permite educação precoce e menor chance de abrir o quadro em cetoacidose.'],
  ['Exames complementares: o que cada um responde', 'Glicemia de jejum, glicemia casual, TOTG e HbA1c confirmam o diabetes com os mesmos pontos de corte do DM2. Glicemia casual ≥200 mg/dL com sintomas clássicos dispensa repetição. No início rápido, a HbA1c pode estar pouco elevada porque reflete cerca de três meses. Anti-GAD65, anti-IA-2, anti-ZnT8 e anti-insulina (este antes de iniciar insulina) indicam autoimunidade. O peptídeo C estima a reserva de insulina e deve ser lido junto da glicemia: baixo ou indetectável favorece DM1, mas pode estar preservado no início (fase de “lua de mel”). Beta-hidroxibutirato sérico e gasometria com ânion gap avaliam cetose e acidose; a cetonúria por fita é menos precisa. No diagnóstico, rastreie doenças autoimunes associadas: TSH e anti-TPO, e antitransglutaminase IgA para doença celíaca. Suspeite de diabetes monogênico (MODY) em jovem com autoanticorpos negativos, peptídeo C preservado e várias gerações afetadas.'],
  ['Tratamento não farmacológico', 'Educação em diabetes desde o diagnóstico, incluindo a família. Plano alimentar sem proibir grupos de alimentos, com contagem de carboidratos para ajustar o bolus. Atividade física é recomendada: o músculo em exercício capta glicose também por vias independentes de insulina, então há risco de hipoglicemia durante e horas após o treino. Por isso, reduza o bolus da refeição anterior ou ofereça carboidrato, monitore antes, durante e depois, e evite exercício intenso com cetose. Automonitorização por glicemia capilar várias vezes ao dia ou por sensor contínuo (meta habitual de tempo no alvo de 70 a 180 mg/dL acima de 70%). Meta de HbA1c em torno de 7% para a maioria, individualizada. Apoio psicossocial e acesso aos insumos fazem parte do tratamento.'],
  ['Tratamento farmacológico: insulinas e esquemas', 'No DM1 a insulina é obrigatória; antidiabéticos orais não a substituem. Esquema basal-bolus: dose total em geral de 0,4 a 1,0 U/kg/dia, com cerca de 40 a 50% como basal. Basal: NPH (início 2–4 h, pico 4–10 h, duração 10–18 h, duas a três aplicações) ou análogos de longa ação, como glargina, detemir e degludeca, com perfil mais estável e menos hipoglicemia noturna. Prandial: insulina regular (início 30–60 min, pico 2–3 h, duração 5–8 h; aplicar cerca de 30 minutos antes de comer) ou análogos ultrarrápidos, como lispro, asparte e glulisina (início 5–15 min, pico 1–2 h; aplicar imediatamente antes da refeição). O bolus soma a dose para o carboidrato (relação insulina:carboidrato) e a correção (fator de sensibilidade). No SUS, NPH e regular são a base, e os análogos seguem critérios do protocolo. Sistemas de infusão contínua são opção em casos selecionados.']
], { before: 'Cuidado diário' });
soiTopic('dm1').memorize.push(
  'Glicemia casual ≥200 mg/dL com sintomas confirma diabetes sem repetir o exame.',
  'Regular: 30 min antes da refeição. Ultrarrápida: imediatamente antes.',
  'Exercício no DM1: risco de hipoglicemia durante e horas depois.',
  'No diagnóstico de DM1, rastrear tireoide (TSH, anti-TPO) e doença celíaca.'
);
soiTopic('dm1').traps.push(
  'HbA1c pouco elevada não exclui DM1 de início rápido.',
  'Nunca suspender a insulina basal no DM1, mesmo sem comer.',
  'Peptídeo C preservado no início não exclui DM1 (fase de lua de mel).'
);
addSources('dm1', 'ada-crises-2024');

// ── S15 P2 · DM2 ───────────────────────────────────────────────────────
addSections('dm2', [
  ['Manifestações clínicas e avaliação inicial', 'Muitas pessoas com DM2 não têm sintomas, e o diagnóstico vem do rastreio (a partir dos 35 anos ou antes, se houver sobrepeso com fator de risco). Quando há hiperglicemia acima do limiar renal, surgem poliúria, polidipsia, polifagia e perda de peso; também visão turva, infecções genitais e cutâneas de repetição e acantose nigricans como sinal de resistência à insulina. Parte dos pacientes já chega com complicação crônica. Na primeira consulta: pressão, peso, IMC e cintura; exame dos pés com monofilamento; perfil lipídico; TFGe e relação albumina/creatinina urinária; encaminhamento para avaliação da retina. Início rápido, cetose ou grande emagrecimento pedem revisar o tipo de diabetes.']
], { before: 'DM1 × DM2' });
addSections('dm2', [
  ['Síndrome metabólica: critérios clínicos × laboratoriais', 'Critérios clínicos: circunferência abdominal aumentada e pressão ≥130/85 mmHg (ou tratamento anti-hipertensivo). Critérios laboratoriais: triglicerídeos ≥150 mg/dL (ou tratamento), HDL <40 mg/dL em homens ou <50 mg/dL em mulheres (ou tratamento) e glicemia de jejum ≥100 mg/dL (ou tratamento). Pelo NCEP ATP III revisado e pelo critério harmonizado, bastam 3 dos 5. Pela IDF, a obesidade central é obrigatória, mais 2 critérios. Uso de medicamento para o componente conta como critério, mesmo com o exame normalizado. LDL, IMC e história familiar não fazem parte da definição.']
], { before: 'Tratamento em linhas gerais' });
soiTopic('dm2').traps.push('Medicamento para pressão, triglicerídeos ou HDL conta como critério da síndrome metabólica.', 'LDL e IMC não são critérios da síndrome metabólica.');

addSections('farmaco-dm', [
  ['Tratamento não farmacológico', 'É a base em todas as fases. Perda de 5 a 10% do peso melhora a glicemia e o risco cardiovascular. Atividade física: cerca de 150 minutos por semana de exercício aeróbico moderado, mais exercício resistido duas a três vezes por semana. Plano alimentar com redução de açúcares e ultraprocessados, cessação do tabagismo, sono adequado e educação para o autocuidado.'],
  ['Estadiamento do tratamento farmacológico', 'Comece com mudança de estilo de vida e metformina, se não houver contraindicação. Na presença de doença cardiovascular aterosclerótica, insuficiência cardíaca ou doença renal, acrescente iSGLT2 ou agonista do GLP-1 com benefício comprovado, independentemente da HbA1c. Sem controle, associe classes de mecanismos diferentes. Considere insulina desde o início se houver hiperglicemia muito elevada (HbA1c >10% ou glicemia ≥300 mg/dL) com sintomas ou catabolismo. Início típico da insulina no DM2: NPH ou análogo basal ao deitar (cerca de 10 U ou 0,1 a 0,2 U/kg), ajustada pela glicemia de jejum.'],
  ['Outras classes: alfa-glicosidase e tirzepatida', 'Acarbose inibe a alfa-glicosidase da borda em escova do intestino e retarda a absorção de carboidratos. Reduz a glicemia pós-prandial e causa flatulência e diarreia. Glinidas (repaglinida e nateglinida) fecham o canal de K-ATP como as sulfonilureias, mas com ação curta e uso junto das refeições. Tirzepatida é agonista duplo dos receptores de GIP e GLP-1, com grande redução de glicemia e peso.']
], { before: 'Metformina' });
addSources('farmaco-dm', 'ada-dm1');

// ── S16 P1 · complicações agudas e autocuidado ─────────────────────────
addSections('crises-diabetes', [
  ['Quando a crise está resolvida', 'CAD: beta-hidroxibutirato <0,6 mmol/L e pH venoso ≥7,3 ou bicarbonato ≥18 mEq/L. EHH: osmolalidade efetiva <300 mOsm/kg, glicemia <250 mg/dL, diurese adequada e recuperação do nível de consciência. Na transição, aplique a insulina subcutânea (basal, mais prandial se estiver comendo) e mantenha a infusão intravenosa por 1 a 2 horas, para não haver intervalo sem insulina e recorrência da cetose.'],
  ['Ética, responsabilidade e autocuidado com insulina', 'O autocuidado é responsabilidade compartilhada: a pessoa decide e executa, a família apoia, a equipe educa e acompanha, e o sistema de saúde garante insumos. Técnica segura: rodízio sistemático dos locais (abdome, coxas, braços, glúteos), agulha curta, sem reutilização, e descarte correto. Aplicar sempre no mesmo ponto causa lipo-hipertrofia, que torna a absorção irregular. Conservação: frascos fechados entre 2 e 8 °C, sem congelar; o frasco ou a caneta em uso pode ficar em temperatura ambiente por cerca de quatro semanas, longe do calor e do sol. Dias de doença: nunca suspender a basal, medir glicemia e cetonas com mais frequência, manter hidratação e procurar atendimento se houver vômitos persistentes. Escola e trabalho: plano escrito, reconhecimento de hipoglicemia e glucagon disponível. Aspectos éticos: decisão informada e consentimento (CEM, arts. 22 e 24); respeito à autonomia, sem abandonar o paciente quando ele recusa ou omite doses; sigilo do adolescente com capacidade de discernimento, inclusive em relação aos pais, exceto quando a não revelação puder causar dano ao paciente (art. 74). Omissão intencional de insulina, por medo de hipoglicemia ou para perder peso, é motivo de abordagem multiprofissional, não de culpa.']
]);
soiTopic('crises-diabetes').memorize.push('CAD resolvida: cetonemia <0,6 mmol/L e pH ≥7,3 ou bicarbonato ≥18.', 'Sobrepor insulina SC e EV por 1 a 2 horas na transição.', 'Rodízio de locais evita lipo-hipertrofia e absorção irregular.');
soiTopic('crises-diabetes').traps.push('Sigilo do adolescente tem limite quando a omissão de insulina coloca a vida em risco.', 'Hipoglicemia com perda de consciência: nada pela boca.');
addSources('crises-diabetes', 'ada-crises-2024', 'sbd-insulina-tecnica', 'cfm-cem');

// ── S16 P2 · complicações crônicas ─────────────────────────────────────
addSections('danos-diabetes', [
  ['Diagnóstico da neuropatia e do pé em risco', 'Rastreio anual desde o diagnóstico no DM2 e a partir de cinco anos de doença no DM1. Perda da sensibilidade protetora: monofilamento de 10 g associado a mais um teste (diapasão de 128 Hz para vibração, picada, temperatura ou reflexo aquileu). O diagnóstico da polineuropatia típica é clínico; eletroneuromiografia fica para quadros atípicos (assimétricos, motores predominantes ou de evolução rápida). Neuropatia autonômica: hipotensão ortostática (queda ≥20/10 mmHg), frequência cardíaca fixa, gastroparesia, disfunção erétil e bexiga neurogênica. Exame do pé: pele, unhas, calosidades, deformidades, pulsos e índice tornozelo-braquial. ITB <0,9 sugere doença arterial; ITB >1,3 indica artérias calcificadas e incompressíveis, e então se usa a pressão do hálux ou o índice hálux-braquial e o Doppler.'],
  ['Úlcera, infecção, osteomielite e Charcot', 'Úlcera neuropática: plantar, sob pontos de pressão, indolor, com calo ao redor, pé quente e pulsos presentes. Úlcera isquêmica: pontas dos dedos, bordas ou calcanhar, dolorosa, pé frio e pulsos ausentes. A infecção é diagnóstico clínico (secreção purulenta ou dois ou mais sinais inflamatórios) e sua gravidade segue a classificação IWGDF/IDSA. Cultura de tecido profundo após desbridamento; swab superficial não define o agente. Osteomielite: probe-to-bone positivo aumenta muito a probabilidade; a radiografia pode ser normal nas primeiras semanas; ressonância e biópsia óssea confirmam. Charcot ativo: pé quente, edematoso e eritematoso, com diferença de temperatura maior que 2 °C, em paciente com neuropatia, muitas vezes com radiografia inicial normal.'],
  ['Tratamento e condutas', 'Controle multifatorial: glicemia (o DCCT mostrou menos neuropatia e retinopatia no DM1 com controle intensivo), pressão, lipídios e cessação do tabagismo. Dor neuropática: pregabalina ou gabapentina (ligam-se à subunidade α2δ dos canais de cálcio e reduzem a liberação de neurotransmissores excitatórios), duloxetina (inibidor da recaptação de serotonina e noradrenalina) ou amitriptilina (tricíclico, com cautela em idosos e cardiopatas). AINE e opioide não são primeira linha. Pé: educação, inspeção diária e calçado adequado; úlcera neuropática pede desbridamento, descarga (bota gessada de contato total) e curativo; infecção pede antibiótico conforme a gravidade e drenagem cirúrgica se houver abscesso; isquemia pede avaliação vascular para revascularização; Charcot pede imobilização e descarga até a remissão. Retina: anti-VEGF no edema macular e fotocoagulação panretiniana na forma proliferativa. Rim: IECA ou BRA com albuminúria, iSGLT2 e, em casos selecionados, finerenona.']
], { before: 'Retinopatia' });
soiTopic('danos-diabetes').memorize.push('Monofilamento de 10 g + outro teste = perda da sensibilidade protetora.', 'ITB >1,3: artéria incompressível, usar pressão do hálux.', 'Dor neuropática: pregabalina/gabapentina, duloxetina ou amitriptilina.', 'Probe-to-bone positivo: pensar em osteomielite.');
soiTopic('danos-diabetes').traps.push('Radiografia normal no início não exclui osteomielite nem Charcot.', 'Polineuropatia típica não exige eletroneuromiografia.');
addSources('danos-diabetes', 'iwgdf-2023', 'ada-neuropatia');

// ── S17 P1 · tireoide ──────────────────────────────────────────────────
addSections('funcao-tireoide', [
  ['Anatomia, embriologia e histologia', 'Dois lobos unidos pelo istmo, sobre o 2º ao 4º anel traqueal, envolvidos pela fáscia pré-traqueal; por isso a glândula sobe com a deglutição. Irrigação: artérias tireóideas superiores (da carótida externa) e inferiores (do tronco tireocervical). O nervo laríngeo recorrente corre no sulco traqueoesofágico, perto da artéria tireóidea inferior; sua lesão causa rouquidão. As paratireoides ficam na face posterior. Embriologia: a tireoide nasce no forame cego da língua e desce pelo ducto tireoglosso; restos desse trajeto formam o cisto do ducto tireoglosso, massa na linha média que sobe com a protrusão da língua. As células C (parafoliculares), produtoras de calcitonina, vêm do corpo ultimobranquial. Histologia: folículos de epitélio cúbico com coloide rico em tireoglobulina; a célula fica mais alta e o coloide diminui quando a glândula é estimulada.'],
  ['Epidemiologia e etiologia', 'As disfunções da tireoide são mais frequentes em mulheres e aumentam com a idade; as formas subclínicas são mais comuns que as manifestas. Onde a ingestão de iodo é suficiente, como no Brasil, a principal causa de hipotireoidismo é a tireoidite de Hashimoto; outras causas são tireoidectomia, radioiodo, fármacos (amiodarona, lítio), hipotireoidismo central e deficiência de iodo. A principal causa de hipertireoidismo é a doença de Graves; seguem-se o bócio multinodular tóxico e o adenoma tóxico, mais comuns em idosos, e as tireoidites, que causam tireotoxicose sem hiperfunção.']
], { before: 'Do folículo' });
const thyroidDrugs = soiTopic('funcao-tireoide').sections.find(section => section.title.startsWith('Tratamento e alvos'));
thyroidDrugs.title = 'Fármacos: classe e mecanismo de ação';
thyroidDrugs.text = 'Levotiroxina (T4 sintético): convertida em T3 pelas desiodases nos tecidos; tomar em jejum, 30 a 60 minutos antes do café, longe de ferro, cálcio e colestiramina; ajuste pelo TSH após 6 a 8 semanas (no hipotireoidismo central, pelo T4 livre); iniciar com dose baixa em idosos e cardiopatas. Liotironina (T3): uso restrito. Tionamidas: metimazol e propiltiouracil inibem a tireoperoxidase e bloqueiam a organificação do iodo e o acoplamento; não agem sobre o hormônio já armazenado. O metimazol é a primeira escolha; o PTU também inibe a desiodase tipo 1 (menor conversão de T4 em T3) e é preferido no primeiro trimestre da gestação e na tempestade tireoidiana, mas pode causar hepatotoxicidade grave. Ambos podem causar agranulocitose: febre ou dor de garganta pedem hemograma e suspensão. Betabloqueadores (propranolol, atenolol, esmolol): controlam taquicardia, tremor e ansiedade; o propranolol em dose alta reduz a conversão periférica. Iodeto (Lugol, SSKI): em dose alta inibe a organificação (efeito Wolff-Chaikoff) e a liberação hormonal; na tempestade, dar pelo menos uma hora depois da tionamida. Glicocorticoides: reduzem a conversão de T4 em T3 e tratam a orbitopatia. Colestiramina: reduz a recirculação êntero-hepática do hormônio. Radioiodo (I-131): captado pelo NIS, destrói os tireócitos por radiação beta; contraindicado na gestação e na lactação e pode piorar a orbitopatia ativa. Tireoidite subaguda: AINE (ibuprofeno) e, se grave, prednisona; tionamida não ajuda porque não há síntese aumentada.';
soiTopic('funcao-tireoide').memorize.push('Metimazol e PTU inibem a TPO; só o PTU inibe também a desiodase tipo 1.', 'Iodeto na tempestade só depois da tionamida.', 'Cisto do ducto tireoglosso: linha média, sobe com a protrusão da língua.', 'Laríngeo recorrente lesado: rouquidão.');
soiTopic('funcao-tireoide').traps.push('Metimazol no 1º trimestre: risco de malformação; PTU nessa fase.', 'Tireoidite subaguda não se trata com tionamida.');
addSources('funcao-tireoide', 'ata-tratamento');

// ── S17 P2 · neoplasias ────────────────────────────────────────────────
addSections('nodulos-tireoide', [
  ['Fisiopatologia: duas linhagens e as vias moleculares', 'Tumores do tireócito (célula folicular): papilífero, folicular, oncocítico, pouco diferenciado e anaplásico. Tumor da célula C: carcinoma medular. O crescimento do tireócito depende do TSH e da via MAPK. BRAF V600E e rearranjos RET::PTC (associados à radiação) levam ao papilífero, com disseminação linfática; mutações de RAS e PAX8::PPARG levam ao padrão folicular, com disseminação hematogênica; TP53 e TERT somam-se na desdiferenciação do anaplásico. Mutação germinativa de RET causa o medular hereditário (NEM2). Lesões benignas: bócio multinodular (hiperplasia, deficiência de iodo, clones), adenoma folicular (encapsulado, sem invasão) e nódulo autônomo (mutação ativadora do receptor de TSH ou da Gsα), que suprime o TSH. Linfoma primário surge sobre Hashimoto. Fatores de risco: radiação cervical na infância, história familiar e síndromes hereditárias. Nódulo é muito comum, mas a maioria é benigna; câncer é mais frequente em mulheres.'],
  ['Clínica de cada tumor', 'Benignos: em geral assintomáticos; bócio grande comprime traqueia e esôfago, e o mergulhante pode dar sinal de Pemberton; nódulo autônomo causa tireotoxicose sem orbitopatia. Papilífero: adulto jovem, nódulo indolor e linfonodo cervical precoce. Folicular e oncocítico: metástases por via sanguínea para osso e pulmão. Medular: nódulo, diarreia e rubor por calcitonina e outros peptídeos; investigar NEM2 (feocromocitoma e hiperparatireoidismo). Anaplásico: idoso com massa endurecida que cresce em semanas, com rouquidão, disfagia e dispneia. Linfoma: idosa com Hashimoto e aumento rápido da glândula.'],
  ['Ultrassonografia e ACR TI-RADS', 'A USG define o risco pelo padrão, não só pelo tamanho. Pontuação ACR TI-RADS: composição (sólido 2), ecogenicidade (hipoecoico 2, muito hipoecoico 3), forma (mais alto que largo 3), margens (lobuladas ou irregulares 2, extensão extratireoidiana 3) e focos ecogênicos (macrocalcificação 1, periférica 2, puntiformes 3). Categorias: TR1 (0 ponto) e TR2 (2 pontos) sem PAAF; TR3 (3 pontos) PAAF se ≥2,5 cm e seguimento se ≥1,5 cm; TR4 (4 a 6 pontos) PAAF se ≥1,5 cm e seguimento se ≥1,0 cm; TR5 (≥7 pontos) PAAF se ≥1,0 cm e seguimento se ≥0,5 cm. Linfonodo com perda do hilo, microcalcificações, área cística ou vascularização periférica pede PAAF do linfonodo e dosagem de tireoglobulina no lavado da agulha.']
], { before: 'Bethesda' });
const bethesda = soiTopic('nodulos-tireoide').sections.find(section => section.title.startsWith('Bethesda'));
bethesda.text += ' Risco médio de malignidade no Bethesda 2023: II ≈4%, III ≈22%, IV ≈30%, V ≈74% e VI ≈97%. A citologia vê o núcleo, não a cápsula: por isso Bethesda IV não diferencia adenoma de carcinoma folicular.';
const followUp = soiTopic('nodulos-tireoide').sections.find(section => section.title.startsWith('Tratamento e seguimento'));
if (followUp) followUp.title = 'Tratamento e seguimento (complementar; fora dos objetivos da APG)';
soiTopic('nodulos-tireoide').memorize.push('BRAF → papilífero e linfonodo; RAS → folicular e sangue; RET → medular.', 'TI-RADS: TR3 ≥2,5 · TR4 ≥1,5 · TR5 ≥1,0 cm para PAAF.', 'Hashimoto + massa de crescimento rápido: linfoma.');
soiTopic('nodulos-tireoide').traps.push('Indicar PAAF só pelo tamanho, sem a categoria TI-RADS.', 'Tireoglobulina não diagnostica nódulo; serve no seguimento após tireoidectomia.');
addSources('nodulos-tireoide', 'acr-tirads', 'bethesda-2023');

// ── Paratireoides: fora dos objetivos de S15 a S17 ─────────────────────
const parathyroid = soiTopic('paratireoides');
if (parathyroid) {
  parathyroid.outOfScope = true;
  parathyroid.title = 'Hipo e hiperparatireoidismo (fora dos objetivos das APGs)';
  parathyroid.traps = parathyroid.traps.filter(line => !line.startsWith('Este tema foi mantido'));
  parathyroid.traps.push('Não aparece nos objetivos de SOI V das semanas 15 a 17. Fica como revisão complementar e não entra no simulado Formato N3.');
}

// ── Reclassificação de questões ────────────────────────────────────────
const moveToDm1 = ['hist-20251-02', 'hist-20251-30', 'hist-20252-17', 'hist-20242-04', 'dm2-x04', 'dm2-x06', 'dm2-x11', 'dm2-x15',
  'farmaco-e', 'farmaco-dm-x18', 'n3a-farmaco-02', 'hist-20261-20'];
for (const question of content.questions) {
  if (moveToDm1.includes(question.id)) question.topic = 'dm1';
}
const tirads = content.questions.find(question => question.id === 'n3a-nodulos-03');
if (tirads) {
  tirads.stem = tirads.stem.replace('EU-TIRADS', 'ACR TI-RADS');
  if (tirads.explanation) tirads.explanation = tirads.explanation.replace(/EU-TIRADS/g, 'ACR TI-RADS');
  if (tirads.comments) tirads.comments = tirads.comments.map(text => text.replace(/EU-TIRADS/g, 'ACR TI-RADS'));
}

// ── Novas questões no estilo Afya (caso clínico + "assinale a alternativa correta") ──
function afya(id, topic, source, stem, position, correct, wrong, explanation, comments) {
  const options = [...wrong];
  options.splice(position, 0, correct);
  const notes = [...comments.wrong];
  notes.splice(position, 0, comments.correct);
  return { id, topic, source, stem, answer: position, options, explanation, comments: notes, origin: 'new', advanced: true, objective: true };
}

const alignedQuestions = [
  // S15 P1
  afya('soi-apg-dm1-01', 'dm1', 'ada-dm1', `Menino de 9 anos é levado à UBS por sede intensa, aumento do volume urinário e perda de 3 kg em três semanas. Está corado, hidratado e eupneico. Exames: glicemia plasmática casual de 348 mg/dL, HbA1c de 6,3%, beta-hidroxibutirato de 0,9 mmol/L, pH venoso de 7,36 e bicarbonato de 21 mEq/L. Anti-GAD e anti-IA-2 são positivos, e o peptídeo C está no limite inferior da referência.

Com base no caso, assinale a alternativa correta.`, 2,
    'A glicemia casual ≥200 mg/dL com sintomas clássicos confirma diabetes; a HbA1c pouco elevada é compatível com início rápido, e os autoanticorpos indicam etiologia autoimune.',
    ['A HbA1c abaixo de 6,5% exclui diabetes e impõe repetir a glicemia de jejum antes de qualquer conclusão diagnóstica.',
      'O peptídeo C no limite inferior exclui DM1, pois nessa doença ele é indetectável desde o diagnóstico.',
      'A cetonemia de 0,9 mmol/L com pH de 7,36 confirma cetoacidose diabética leve, que define a gravidade do quadro.'],
    'Sintomas clássicos com glicemia casual ≥200 mg/dL bastam para o diagnóstico. A HbA1c reflete cerca de três meses e pode estar pouco elevada quando a hiperglicemia é recente. Autoanticorpos positivos indicam DM1 autoimune; o peptídeo C pode estar parcialmente preservado no início. Não há acidose, então não é CAD.',
    { correct: 'Correta: critério de glicemia casual com sintomas, mais autoimunidade.', wrong: ['A HbA1c pode subestimar uma hiperglicemia de instalação rápida.', 'No início do DM1 ainda pode haver reserva de insulina.', 'CAD exige acidose (pH <7,3 ou bicarbonato <18) e cetonemia ≥3,0 mmol/L.'] }),
  afya('soi-apg-dm1-02', 'dm1', 'sbd-dm1', `Adolescente de 16 anos com DM1 usa glargina às 22 h e lispro antes das refeições. Começou a jogar futsal às 18 h, cerca de duas horas depois de um lanche coberto com a dose habitual de lispro. Relata tremor e sudorese no fim dos treinos e uma glicemia capilar de 58 mg/dL às 3 h da madrugada após um jogo. Antes dos treinos, a glicemia fica em torno de 120 mg/dL, sem cetonas.

Sobre o manejo, assinale a alternativa correta.`, 1,
    'Reduzir o bolus da refeição que antecede o treino ou oferecer carboidrato antes e durante a atividade, monitorando a glicemia antes, durante e depois, inclusive à noite.',
    ['Suspender a glargina nos dias de treino, porque o exercício aumenta a captação de glicose e dispensa a insulina basal.',
      'Contraindicar a atividade física, pois no DM1 o exercício aumenta o risco de cetoacidose em qualquer situação.',
      'Trocar a lispro do lanche por insulina regular aplicada imediatamente antes de comer, para concentrar a ação durante o treino.'],
    'O músculo em exercício capta glicose também por mecanismos independentes de insulina e aumenta a sensibilidade a ela por horas, o que explica a hipoglicemia durante e após o treino. Ajusta-se o bolus e o carboidrato; a insulina basal não é suspensa no DM1.',
    { correct: 'Correta: ajustar bolus e carboidrato, com monitorização inclusive noturna.', wrong: ['Sem basal, há risco de cetose.', 'Exercício é recomendado; evita-se apenas com cetose.', 'A regular tem início lento e pico tardio, o que pioraria a hipoglicemia no fim do treino.'] }),
  afya('soi-apg-dm1-03', 'dm1', 'sbd-dm1', `Mulher de 25 anos com DM1, acompanhada pelo SUS, usa NPH às 7 h e às 22 h e insulina regular antes das refeições. Aplica a regular no momento em que começa a comer. O diário mostra glicemia de 260 mg/dL uma hora após o almoço e episódios de 62 mg/dL por volta das 17 h, antes do lanche. Jejum entre 100 e 120 mg/dL.

Considerando a farmacologia das insulinas, assinale a alternativa correta.`, 0,
    'A insulina regular tem início de ação em 30 a 60 minutos e pico em 2 a 3 horas; aplicada na hora da refeição, deixa a glicemia subir logo após comer e age em excesso horas depois, devendo ser aplicada cerca de 30 minutos antes.',
    ['A insulina regular é uma insulina basal sem pico; o padrão indica que o problema está somente na dose de NPH noturna.',
      'A insulina regular começa a agir em 5 minutos; o padrão indica excesso de carboidratos, sem relação com o horário da aplicação.',
      'A NPH da manhã é a única responsável pela hiperglicemia após o almoço e deve ser suspensa para evitar a hipoglicemia da tarde.'],
    'O perfil da regular (início lento, pico em 2 a 3 horas, duração de 5 a 8 horas) explica a combinação de pico pós-prandial precoce e hipoglicemia tardia quando ela é aplicada junto da refeição. Alternativa: análogo ultrarrápido.',
    { correct: 'Correta: horário de aplicação da regular.', wrong: ['A regular é prandial.', 'Esse é o perfil dos análogos ultrarrápidos.', 'O jejum controlado mostra que o problema é prandial.'] }),
  // S15 P2
  afya('soi-apg-dm2-01', 'dm2', 'sbd-diagnostico', `Mulher de 52 anos comparece à UBS para consulta de rotina. Usa losartana para hipertensão e fenofibrato para hipertrigliceridemia. Exame físico: circunferência abdominal de 90 cm, PA de 124 x 78 mmHg e IMC de 28 kg/m². Exames: triglicerídeos de 138 mg/dL, HDL de 46 mg/dL, LDL de 162 mg/dL e glicemia de jejum de 98 mg/dL.

Segundo o NCEP ATP III revisado, assinale a alternativa correta.`, 2,
    'Preenche síndrome metabólica: circunferência abdominal aumentada, HDL baixo para mulheres e o uso de medicamento para pressão e para triglicerídeos contam como critérios.',
    ['Não preenche síndrome metabólica, porque pressão e triglicerídeos estão dentro da referência com o tratamento.',
      'Preenche síndrome metabólica somente se a glicemia de jejum for maior ou igual a 100 mg/dL, critério obrigatório.',
      'Preenche síndrome metabólica pelo LDL elevado e pelo IMC acima de 25 kg/m², que são critérios laboratorial e clínico.'],
    'Critérios: cintura ≥88 cm em mulheres, PA ≥130/85 ou tratamento, triglicerídeos ≥150 ou tratamento, HDL <50 em mulheres e glicemia ≥100. Ela soma quatro. LDL e IMC não são critérios.',
    { correct: 'Correta: quatro critérios, dois deles pelo tratamento.', wrong: ['O tratamento conta como critério.', 'Nenhum critério isolado é obrigatório no ATP III.', 'LDL e IMC não entram na definição.'] }),
  afya('soi-apg-farm-01', 'farmaco-dm', 'sbd-dm2', `Em uma sessão da liga de diabetes, os alunos discutem o caso de um homem de 57 anos com DM2 que usa metformina e tem glicemia de jejum na meta, mas picos de 230 mg/dL após as refeições. O preceptor pede que relacionem cada classe de antidiabético ao seu mecanismo e a um efeito esperado.

Assinale a alternativa correta.`, 0,
    'Acarbose inibe a alfa-glicosidase na borda em escova do intestino, retarda a absorção de carboidratos e reduz a glicemia pós-prandial; flatulência é efeito adverso frequente.',
    ['Pioglitazona inibe o SGLT2 no túbulo proximal, aumenta a glicosúria e reduz o peso corporal.',
      'Sitagliptina é agonista do receptor de GLP-1 aplicado por via subcutânea e causa grande perda de peso.',
      'Repaglinida ativa a AMPK hepática, reduz a gliconeogênese e não causa hipoglicemia.'],
    'Pioglitazona é agonista PPAR-gama (sensibilizador, com ganho de peso e retenção hídrica). Sitagliptina é inibidor oral da DPP-4, neutro no peso. Repaglinida é glinida: fecha o canal de K-ATP, estimula secreção e pode causar hipoglicemia.',
    { correct: 'Correta: mecanismo e efeito adverso da acarbose.', wrong: ['Esse é o mecanismo dos iSGLT2.', 'Esse é o perfil dos agonistas do GLP-1.', 'Esse é o mecanismo da metformina.'] }),
  // S16 P1
  afya('soi-apg-agudas-01', 'crises-diabetes', 'cfm-cem', `Adolescente de 15 anos com DM1 é internada pela segunda vez em quatro meses por cetoacidose. Após a melhora, em conversa a sós com a médica, conta que deixa de aplicar insulina para perder peso e pede que os pais não saibam. Demonstra compreender a doença e as consequências do que relata. Não há outros riscos identificados.

Sobre a conduta ética e o cuidado, assinale a alternativa correta.`, 2,
    'Acolher sem julgamento, explicar que o sigilo é preservado mas tem limite quando há risco de dano grave, e construir com ela a forma de envolver a família e a equipe multiprofissional no plano de cuidado.',
    ['Manter sigilo absoluto em qualquer circunstância, porque a adolescente tem capacidade de discernimento e a decisão é exclusivamente dela.',
      'Comunicar imediatamente os pais sem conversar com a paciente, porque pessoas menores de 18 anos não têm direito a sigilo médico.',
      'Substituir a insulina por antidiabético oral, respeitando a preferência da paciente pelo controle do peso.'],
    'O Código de Ética Médica protege o sigilo do adolescente com discernimento, inclusive em relação aos pais, salvo quando a não revelação puder causar dano ao paciente. Omissões repetidas que levam à CAD representam risco grave; a revelação deve ser negociada e acompanhada de abordagem multiprofissional.',
    { correct: 'Correta: sigilo com limite e cuidado compartilhado.', wrong: ['O sigilo cede diante de risco de dano grave.', 'Adolescentes com discernimento têm direito a sigilo.', 'No DM1 a insulina é insubstituível.'] }),
  afya('soi-apg-agudas-02', 'crises-diabetes', 'sbd-insulina-tecnica', `Homem de 45 anos com DM1 relata glicemias muito variáveis com as mesmas doses. Aplica a insulina sempre na mesma região, ao lado do umbigo, “porque dói menos”, e deixa a caneta em uso no porta-luvas do carro. Ao exame, há área elevada, amolecida e indolor no local das aplicações.

Assinale a alternativa correta.`, 0,
    'Trata-se de lipo-hipertrofia, que torna a absorção irregular; orientar rodízio sistemático dos locais, evitar a área afetada e conservar a insulina longe do calor.',
    ['Trata-se de lipoatrofia por alergia à insulina humana; indicar corticoide local e manter o mesmo local de aplicação.',
      'Trata-se de abscesso por reutilização de agulha; drenar e suspender a insulina até a cicatrização.',
      'A alteração local não interfere na absorção; a variabilidade se deve apenas à alimentação e pede aumento da dose basal.'],
    'Aplicar repetidamente no mesmo ponto produz lipo-hipertrofia, com absorção errática. A insulina exposta ao calor perde potência. A conduta é técnica e educação, parte do autocuidado.',
    { correct: 'Correta: lipo-hipertrofia e conservação inadequada.', wrong: ['Lipoatrofia é depressão do tecido e rara com as insulinas atuais.', 'Não há sinais de infecção; suspender insulina no DM1 é perigoso.', 'A lipo-hipertrofia altera a absorção.'] }),
  afya('soi-apg-agudas-03', 'crises-diabetes', 'ada-hipo', `Mulher de 30 anos com DM1 é encontrada pelo marido em casa, sudoreica e sem responder a chamados, uma hora após correr em jejum. A glicemia capilar é de 38 mg/dL. Ela tem glucagon prescrito, e o marido foi treinado para usá-lo.

Qual é a conduta correta no domicílio? Assinale a alternativa correta.`, 3,
    'Aplicar glucagon (intramuscular, subcutâneo ou intranasal), não oferecer nada pela boca enquanto estiver inconsciente, colocá-la de lado e acionar a emergência; depois de despertar, oferecer carboidrato oral.',
    ['Oferecer suco adoçado ou mel pela boca imediatamente, pois a absorção oral é mais rápida que a do glucagon.',
      'Aplicar dose extra de insulina ultrarrápida, porque a perda de consciência no DM1 costuma ser hiperglicêmica.',
      'Aguardar 15 minutos e repetir a glicemia antes de qualquer intervenção, seguindo a regra dos 15.'],
    'Hipoglicemia nível 3 com consciência alterada: glucagon por terceiro treinado ou glicose intravenosa no serviço de saúde. A via oral é contraindicada pelo risco de aspiração. A regra dos 15 vale para quem está consciente e deglute.',
    { correct: 'Correta: glucagon, posição lateral e socorro.', wrong: ['Risco de broncoaspiração.', 'A glicemia medida é de 38 mg/dL; insulina pioraria.', 'A regra dos 15 é para paciente consciente.'] }),
  afya('soi-apg-agudas-04', 'crises-diabetes', 'ada-crises-2024', `Homem de 30 anos com DM1 está há 10 horas em tratamento de cetoacidose com hidratação, potássio e insulina regular em infusão contínua. Agora está alerta e com fome. Exames: glicemia de 210 mg/dL, pH venoso de 7,33, bicarbonato de 19 mEq/L e beta-hidroxibutirato de 0,4 mmol/L.

Assinale a alternativa correta.`, 1,
    'A cetoacidose está resolvida; iniciar insulina subcutânea (basal e prandial) e manter a infusão intravenosa por 1 a 2 horas depois da primeira dose subcutânea.',
    ['A infusão deve ser suspensa agora e a insulina subcutânea iniciada apenas quando a glicemia ficar abaixo de 150 mg/dL.',
      'A cetoacidose não está resolvida, pois a glicemia ainda é maior que 200 mg/dL; manter a infusão até a normoglicemia.',
      'A cetoacidose está resolvida; suspender toda a insulina e retomar o esquema domiciliar no dia seguinte.'],
    'Resolução da CAD: cetonemia <0,6 mmol/L e pH ≥7,3 ou bicarbonato ≥18. A sobreposição evita intervalo sem insulina e recorrência da cetose. A glicemia isolada não define resolução.',
    { correct: 'Correta: critérios de resolução e transição com sobreposição.', wrong: ['Intervalo sem insulina favorece nova cetose.', 'A resolução é definida pela cetose e pela acidose.', 'No DM1 não pode haver período sem insulina.'] }),
  // S16 P2
  afya('soi-apg-cronicas-01', 'danos-diabetes', 'iwgdf-2023', `Homem de 61 anos com DM2 há 12 anos comparece ao rastreio anual na UBS. Nega dor ou feridas. Não percebe o monofilamento de 10 g em vários pontos plantares, a percepção do diapasão de 128 Hz está reduzida nos háluces e o reflexo aquileu está diminuído bilateralmente. Pulsos pediosos presentes e pele íntegra.

Assinale a alternativa correta.`, 3,
    'Há perda da sensibilidade protetora compatível com polineuropatia distal; o pé é de risco e pede educação para autocuidado, calçado adequado e reavaliação mais frequente.',
    ['O diagnóstico de polineuropatia exige eletroneuromiografia antes de qualquer orientação, porque o exame clínico é inespecífico.',
      'Como o paciente não tem sintomas, os achados não têm importância clínica e o rastreio pode ser repetido em cinco anos.',
      'O monofilamento avalia a sensibilidade vibratória e o diapasão avalia a sensibilidade protetora plantar.'],
    'Perda da percepção do monofilamento associada a outro teste alterado define perda da sensibilidade protetora. A polineuropatia típica é diagnóstico clínico. A neuropatia pode ser assintomática e é o principal fator de risco de úlcera.',
    { correct: 'Correta: diagnóstico clínico e conduta preventiva.', wrong: ['A ENMG fica para casos atípicos.', 'Neuropatia sem dor é justamente a que fere o pé.', 'É o contrário: monofilamento para pressão, diapasão para vibração.'] }),
  afya('soi-apg-cronicas-02', 'danos-diabetes', 'ada-neuropatia', `Mulher de 58 anos com DM2 relata queimação e choques nos pés há quatro meses, piores à noite, que atrapalham o sono. O exame mostra hipoestesia em bota e reflexos aquileus abolidos. TFGe de 78 mL/min/1,73 m², sem cardiopatia. Usou anti-inflamatórios sem melhora.

Sobre o tratamento farmacológico da dor, assinale a alternativa correta.`, 0,
    'Pregabalina é opção de primeira linha: liga-se à subunidade α2δ dos canais de cálcio dependentes de voltagem e reduz a liberação de neurotransmissores excitatórios; duloxetina e amitriptilina são alternativas.',
    ['Anti-inflamatório não esteroide em uso contínuo é o tratamento de escolha, porque a dor resulta de inflamação do nervo.',
      'Opioide forte é a primeira linha, porque a dor neuropática não responde a outras classes.',
      'Vitamina B12 em dose alta é o tratamento específico, independentemente dos níveis séricos.'],
    'Gabapentinoides, duloxetina (IRSN) e tricíclicos são primeira linha para dor neuropática diabética. AINE não age no mecanismo; opioides não são primeira linha. Dosar B12 é útil em quem usa metformina, mas repor sem deficiência não trata a dor.',
    { correct: 'Correta: classe e mecanismo da pregabalina.', wrong: ['AINE não trata dor neuropática.', 'Risco e benefício desfavoráveis como primeira linha.', 'Repor só se houver deficiência.'] }),
  afya('soi-apg-cronicas-03', 'danos-diabetes', 'iwgdf-2023', `Homem de 70 anos com DM2 há 20 anos e doença renal crônica tem ferida dolorosa na ponta do 2º pododáctilo esquerdo. Pé frio e pulsos pediosos e tibiais posteriores não palpáveis. O índice tornozelo-braquial calculado é 1,5.

Assinale a alternativa correta.`, 1,
    'O ITB elevado sugere artérias calcificadas e incompressíveis, comuns no diabetes e na doença renal; o valor não é confiável e devem-se medir a pressão do hálux ou o índice hálux-braquial e avaliar com Doppler.',
    ['O ITB de 1,5 exclui doença arterial periférica e dispensa avaliação vascular, devendo-se tratar a ferida como neuropática.',
      'O ITB acima de 1,3 indica estenose crítica e indicação imediata de amputação do pododáctilo.',
      'O ITB não se aplica a pessoas com diabetes, e a avaliação vascular deve basear-se apenas na palpação dos pulsos.'],
    'Calcificação da média arterial impede a compressão pelo manguito e superestima o ITB. Os achados clínicos (dor, pé frio, pulsos ausentes, lesão distal) sugerem isquemia e pedem métodos alternativos e avaliação para revascularização.',
    { correct: 'Correta: ITB falsamente elevado.', wrong: ['A clínica é de isquemia.', 'ITB alto não indica estenose crítica.', 'O ITB vale, mas tem limites que precisam ser reconhecidos.'] }),
  afya('soi-apg-cronicas-04', 'danos-diabetes', 'iwgdf-2023', `Mulher de 64 anos com DM2 e neuropatia tem úlcera plantar sob a cabeça do 1º metatarso há dois meses, com secreção purulenta e eritema ao redor. Uma sonda estéril introduzida pela úlcera toca o osso. A radiografia feita na primeira semana foi normal.

Assinale a alternativa correta.`, 2,
    'O probe-to-bone positivo em úlcera infectada sugere osteomielite; a radiografia normal no início não a exclui, e repetir a radiografia, fazer ressonância e obter amostra óssea ou de tecido profundo orientam o tratamento.',
    ['A radiografia normal exclui osteomielite, e o tratamento deve ser apenas curativo local.',
      'O swab superficial da úlcera define o agente e dispensa amostra de tecido profundo.',
      'O teste da sonda não tem valor diagnóstico, e a osteomielite só pode ser diagnosticada pela cintilografia.'],
    'Alterações radiográficas demoram duas a três semanas. Probe-to-bone positivo em úlcera infectada tem alto valor preditivo. Culturas de tecido profundo ou osso são mais confiáveis que o swab.',
    { correct: 'Correta: integração de probe-to-bone, imagem e cultura profunda.', wrong: ['A radiografia é tardia.', 'O swab mostra colonização.', 'O teste é útil à beira do leito.'] }),
  // S17 P1
  afya('soi-apg-tireo-01', 'funcao-tireoide', 'ata-tratamento', `Menino de 7 anos tem massa cervical indolor de 2 cm na linha média, logo abaixo do osso hioide, notada há três meses. A massa se eleva quando ele engole e quando põe a língua para fora. TSH normal.

Assinale a alternativa correta.`, 3,
    'A hipótese é cisto do ducto tireoglosso, resto do trajeto de descida da tireoide a partir do forame cego da língua; antes da cirurgia, a USG deve confirmar tecido tireoidiano na posição habitual.',
    ['A hipótese é cisto branquial da segunda fenda, típico da linha média, que se move com a língua.',
      'A hipótese é nódulo do istmo derivado das células C, que não se move com a deglutição.',
      'A hipótese é linfonodo reacional, que se eleva com a protrusão da língua por estar preso ao hioide.'],
    'A tireoide se origina no forame cego e desce pelo ducto tireoglosso. O cisto fica na linha média, ligado ao hioide, e sobe com a protrusão da língua. Cisto branquial é lateral. Confirmar tireoide tópica evita retirar o único tecido tireoidiano.',
    { correct: 'Correta: embriologia do ducto tireoglosso.', wrong: ['Cisto branquial é lateral, na borda do esternocleidomastóideo.', 'Células C não formam o istmo, e a tireoide se move com a deglutição.', 'Linfonodo não sobe com a protrusão da língua.'] }),
  afya('soi-apg-tireo-02', 'funcao-tireoide', 'ata-tratamento', `Mulher de 29 anos, com 8 semanas de gestação, tem palpitações, tremor e perda de peso. Exame: bócio difuso com sopro. TSH suprimido, T4 livre muito elevado e TRAb positivo.

Sobre o tratamento farmacológico, assinale a alternativa correta.`, 1,
    'Usar propiltiouracil no primeiro trimestre, porque o metimazol se associa a malformações nessa fase; ambos inibem a tireoperoxidase, e o PTU também reduz a conversão periférica de T4 em T3, exigindo vigilância hepática.',
    ['Indicar radioiodo, que age apenas na tireoide materna e é a opção definitiva mais segura na gestação.',
      'Usar metimazol em dose alta, por ser seguro em toda a gestação e mais potente que o PTU.',
      'Associar levotiroxina ao tratamento, para bloquear o TSH e reduzir a estimulação da glândula.'],
    'Doença de Graves na gestação: PTU no primeiro trimestre e, depois, considerar troca para metimazol pelo risco hepático do PTU. Radioiodo atravessa a placenta e é contraindicado. Na doença de Graves o estímulo é o TRAb, não o TSH.',
    { correct: 'Correta: escolha da tionamida pelo trimestre e mecanismo.', wrong: ['Radioiodo é contraindicado na gestação.', 'Metimazol no 1º trimestre tem risco teratogênico.', 'O estímulo na doença de Graves é o TRAb.'] }),
  afya('soi-apg-tireo-03', 'funcao-tireoide', 'ata-tratamento', `Homem de 40 anos com doença de Graves sem tratamento chega ao pronto-socorro com febre de 39,5 °C, FC de 150 bpm em fibrilação atrial, agitação e diarreia após pneumonia. A equipe diagnostica tempestade tireoidiana e discute a ordem dos fármacos.

Assinale a alternativa correta.`, 2,
    'Iniciar a tionamida antes do iodeto, porque o iodo dado sem bloqueio da tireoperoxidase serve de substrato para nova síntese; depois, o iodeto inibe a liberação hormonal, associado a betabloqueador e glicocorticoide.',
    ['Iniciar o iodeto antes de qualquer outro fármaco, porque ele inibe a tireoperoxidase de forma permanente.',
      'Administrar levotiroxina para reduzir o TSH e interromper o estímulo da glândula.',
      'Evitar betabloqueador, porque ele aumenta a conversão periférica de T4 em T3 e piora a taquicardia.'],
    'Na tempestade: betabloqueador para os efeitos adrenérgicos, tionamida (PTU preferido) para bloquear a síntese, iodeto pelo menos uma hora depois para bloquear a liberação, e glicocorticoide para reduzir a conversão de T4 em T3. Tratar o precipitante.',
    { correct: 'Correta: sequência tionamida e depois iodeto.', wrong: ['O efeito Wolff-Chaikoff é transitório e o iodo pode alimentar a síntese.', 'O TSH já está suprimido.', 'O propranolol reduz a conversão e controla a frequência.'] }),
  // S17 P2
  afya('soi-apg-neo-01', 'nodulos-tireoide', 'acr-tirads', `Mulher de 38 anos tem nódulo tireoidiano de 1,2 cm encontrado em USG de carótidas. TSH normal. A USG da tireoide descreve nódulo sólido, hipoecoico, mais largo que alto, de margens lisas e sem focos ecogênicos. Não há linfonodos suspeitos.

Pelo ACR TI-RADS, assinale a alternativa correta.`, 1,
    'O nódulo soma 4 pontos (TR4); com 1,2 cm não atinge o limite de PAAF (≥1,5 cm), mas atinge o de seguimento ultrassonográfico (≥1,0 cm).',
    ['O nódulo é TR5 e tem indicação obrigatória de PAAF, porque todo nódulo sólido hipoecoico é de alto risco.',
      'O nódulo é TR2 e não precisa de nenhum seguimento, porque tem margens lisas.',
      'Deve-se puncionar todo nódulo sólido, independentemente do tamanho e da pontuação.'],
    'Sólido (2) + hipoecoico (2) + mais largo que alto (0) + margens lisas (0) + sem focos (0) = 4 pontos, TR4. TR4: PAAF se ≥1,5 cm, seguimento se ≥1,0 cm.',
    { correct: 'Correta: cálculo e conduta do TI-RADS.', wrong: ['TR5 exige 7 ou mais pontos.', 'Sólido e hipoecoico já somam 4 pontos.', 'A indicação de PAAF depende da categoria e do tamanho.'] }),
  afya('soi-apg-neo-02', 'nodulos-tireoide', 'bethesda-2023', `Mulher de 72 anos com tireoidite de Hashimoto em uso de levotiroxina há 15 anos percebe aumento rápido do pescoço em seis semanas, com disfagia e sensação de aperto. Ao exame, a tireoide está aumentada de forma assimétrica e firme, com linfonodos cervicais palpáveis. Não há diarreia nem rubor.

Assinale a alternativa correta.`, 3,
    'O linfoma primário da tireoide é hipótese importante, pois surge sobre Hashimoto e cresce rapidamente; a investigação inclui biópsia com material suficiente para imuno-histoquímica, além da PAAF.',
    ['Bócio multinodular tóxico é a hipótese principal, e a cintilografia define o diagnóstico.',
      'Carcinoma papilífero clássico é a hipótese principal, porque cresce em semanas e raramente acomete linfonodos.',
      'Tireoidite subaguda é a hipótese principal, e o tratamento inicial é anti-inflamatório.'],
    'Hashimoto com massa de crescimento rápido em idosa sugere linfoma (diferencial com anaplásico). A PAAF pode ser insuficiente para classificar o linfoma; biópsia com imuno-histoquímica e citometria ajuda.',
    { correct: 'Correta: linfoma sobre Hashimoto.', wrong: ['Não há tireotoxicose descrita, e o crescimento é rápido.', 'Papilífero cresce devagar e costuma acometer linfonodos.', 'Não há dor nem quadro viral.'] })
];

{
  const topicsById = new Map(content.topics.map(topic => [topic.id, topic]));
  content.questions.unshift(...alignedQuestions.map(question => ({ ...question, subject: topicsById.get(question.topic).subject })));
  // Semana de cada questão de SOI passa a seguir a do tema.
  for (const question of [...content.questions, ...(content.archivedQuestions ?? [])]) {
    const topic = topicsById.get(question.topic);
    if (topic?.subject === 'soi') question.week = topic.week;
  }
  // Ordem dos temas de SOI pela sequência das APGs.
  const order = ['dm1', 'dm2', 'farmaco-dm', 'crises-diabetes', 'danos-diabetes', 'funcao-tireoide', 'nodulos-tireoide', 'paratireoides'];
  const soi = order.map(id => topicsById.get(id)).filter(Boolean);
  const rest = content.topics.filter(topic => !order.includes(topic.id));
  const firstSoi = content.topics.findIndex(topic => topic.subject === 'soi');
  content.topics = [...rest.slice(0, firstSoi), ...soi, ...rest.slice(firstSoi)];
}
