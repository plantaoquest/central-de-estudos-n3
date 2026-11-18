'use strict';

addDifficultQuestions([
  difficult('n3a-dm1-01', 'dm1', 'ada-dm1', `Um professor de 39 anos procura a UBS por quatro semanas de sede intensa, noctúria e perda de 6 kg. Tem IMC de 28 kg/m², pai com DM2 e história pessoal de tireoidite autoimune. A glicemia plasmática casual é 312 mg/dL, a HbA1c é 10,2% e o bicarbonato é 23 mmol/L, sem cetonemia significativa. Após estabilização inicial, a glicose ainda está elevada durante a dosagem de peptídeo C, que fica abaixo da referência. O anti-GAD é positivo em título alto. Ele atribui o quadro à alimentação e pede que a equipe mantenha apenas a metformina que iniciou por conta própria.

Qual interpretação articula os achados e a prioridade terapêutica?`, 1, [
    'O peso e a história familiar sustentam DM2 com resistência periférica predominante. É razoável manter metformina e avaliar a secreção de insulina apenas após reavaliar a HbA1c.',
    'O anti-GAD e o peptídeo C baixo diante de hiperglicemia sustentam diabetes autoimune com reserva secretora reduzida. A insulinoterapia e a educação para seu uso são prioridades.',
    'O padrão sugere diabetes monogênico por defeito de secreção. A presença de um familiar com DM2 orienta investigação genética antes de instituir reposição hormonal.',
    'A hiperglicemia reflete perda de secreção transitória por toxicidade da glicose. O bicarbonato preservado permite adiar insulina até a repetição dos autoanticorpos.'
  ], 'A pista decisiva é a concordância entre autoimunidade, secreção baixa durante hiperglicemia e catabolismo recente. DM1 também pode se manifestar na idade adulta e em pessoas com excesso de peso.', [
    'IMC e história familiar são insuficientes para explicar o conjunto. O déficit secretor com anti-GAD positivo favorece autoimunidade.',
    'O peptídeo C reduzido em um momento de glicose alta indica secreção inadequada. O quadro demanda reposição e ensino sobre monitorização, hipoglicemia e intercorrências.',
    'Um familiar com diabetes comum não estabelece herança monogênica. Marcador autoimune fortemente positivo desloca a hipótese.',
    'A ausência de acidose informa o estado atual, mas não restaura a reserva secretora nem torna seguro adiar a reposição.'
  ]),
  difficult('n3a-dm1-02', 'dm1', 'sbd-dm1', `Uma universitária de 20 anos com DM1 usa glargina à noite e lispro antes das refeições. Em um dia de gastroenterite, come pouco e omite as duas por medo de hipoglicemia. Doze horas depois, a glicemia está em 244 mg/dL e o beta-hidroxibutirato capilar em 1,8 mmol/L. Ela tem náuseas, está alerta e ainda consegue beber em pequenos volumes. A família propõe esperar até que volte a comer. Na revisão do plano de autocuidado, a equipe precisa explicar por que as duas preparações têm papéis distintos e quais dados mudam a urgência da decisão.

Que orientação integra melhor a fisiologia e a segurança?`, 3, [
    'O componente basal cobre primariamente o carboidrato alimentar. Devem-se suspender as doses basais durante o jejum e seguir apenas os sintomas até tolerar refeições.',
    'O componente rápido substitui toda a cobertura hormonal durante a doença. Deve-se retomar a glargina só depois de normalizar a glicemia e desaparecerem as náuseas.',
    'A presença de cetonas com esse valor de glicemia confirma CAD e define sua gravidade. Deve-se dispensar avaliação ácido-base e orientar uma dose fixa de lispro.',
    'O componente basal limita produção hepática de glicose e lipólise entre refeições. Deve-se preservar cobertura basal, monitorar glicose e cetonas e acionar o plano de intercorrência conforme evolução.'
  ], 'A doença aguda pode elevar a necessidade de insulina mesmo com baixa ingesta. A cetonemia é um sinal de alerta, e a classificação de CAD depende também da acidose. A orientação deve incluir contato e avaliação urgente se houver piora, vômitos persistentes ou incapacidade de hidratar-se.', [
    'A insulina basal supre a necessidade entre refeições. Sua omissão no DM1 pode acelerar a cetogênese.',
    'Doses rápidas podem entrar no plano individual de correção, mas não justificam deixar a pessoa sem cobertura basal.',
    'Uma cetonemia isolada não quantifica acidose. Uma correção fixa sem avaliar contexto e plano individual pode ser inadequada.',
    'A alternativa relaciona a ação basal ao mecanismo da cetose e ao seguimento de glicemia, cetonas e sintomas durante a intercorrência.'
  ]),
  difficult('n3a-dm1-03', 'dm1', 'ada-dm1', `Uma adolescente de 15 anos, irmã de uma pessoa com DM1, participa de um programa de rastreamento. Está assintomática, tem peso estável, glicemia de jejum de 89 mg/dL e HbA1c de 5,2%. Anti-GAD e anti-ZnT8 foram positivos e confirmados em nova amostra. Seis meses depois, a glicemia de jejum é de 114 mg/dL, a HbA1c de 5,8% e a glicemia de duas horas no TTGO, 168 mg/dL. Os autoanticorpos permanecem positivos. A adolescente ganhou altura e manteve o percentil de IMC. Nega poliúria e perda de peso. A mãe pergunta se o plano de acompanhamento deve mudar mesmo sem sintomas.

Qual combinação descreve a sequência e sua implicação?`, 0, [
    'Estágio 1 na primeira avaliação e estágio 2 com a disglicemia posterior. A progressão motiva seguimento especializado, vigilância metabólica e ensino de sinais de descompensação.',
    'Risco inespecífico na primeira avaliação e estágio 3 na segunda. Uma glicemia de duas horas acima de 140 mg/dL já estabelece diabetes clínico.',
    'Estágio 2 desde a primeira avaliação e estágio 2 na seguinte. Duas positividades confirmadas bastam para classificar disglicemia, independentemente dos testes metabólicos.',
    'Estágio 1 nas duas avaliações. A ausência de poliúria e emagrecimento impede que alterações glicêmicas classifiquem um estágio presintomático mais avançado.'
  ], 'Múltiplos autoanticorpos confirmados com normoglicemia caracterizam estágio 1. A presença posterior de disglicemia em níveis abaixo do diabetes clínico caracteriza estágio 2.', [
    'Identifica corretamente a mudança de estágio e a necessidade de acompanhar progressão e orientar sobre sintomas e crise hiperglicêmica.',
    'O TTGO de 168 mg/dL documenta disglicemia, mas não alcança o limiar de 200 mg/dL para diabetes no TTGO de duas horas.',
    'A quantidade de anticorpos evidencia autoimunidade. A diferença entre os estágios 1 e 2 depende da avaliação glicêmica.',
    'Sintomas podem ainda estar ausentes no estágio 2. A distinção é metabólica.'
  ]),
  difficult('n3a-dm2-01', 'dm2', 'sbd-diagnostico', `Uma mulher de 47 anos chega à UBS para revisar risco cardiovascular. Tem cintura de 103 cm, pressão de 146/92 mmHg em medidas repetidas, triglicerídeos de 216 mg/dL e HDL de 39 mg/dL. Nega poliúria, polidipsia e perda de peso. A glicemia de jejum é 128 mg/dL, e a HbA1c da mesma amostra é 6,0%. Não há doença aguda, e ela não usa glicocorticoide. O prontuário traz glicemia de jejum de 112 mg/dL no ano anterior. Um residente propõe confirmar DM2 imediatamente por causa do conjunto de fatores, enquanto outro sugere considerar normal o jejum porque a HbA1c está abaixo de 6,5%.

Qual registro e próximo passo são mais coerentes?`, 2, [
    'Diabetes estabelecido pela soma de cintura, pressão, triglicerídeos e glicemia. Os critérios de síndrome metabólica substituem a confirmação da hiperglicemia em assintomáticos.',
    'Glicemia de jejum normal porque a HbA1c tem maior especificidade. O diagnóstico pode ser descartado sem repetir o exame alterado.',
    'Glicemia de jejum acima do limiar de diabetes, a confirmar com repetição. O agrupamento de fatores já orienta avaliação e cuidado do risco cardiometabólico.',
    'Diabetes confirmado porque glicemia e HbA1c estão ambas acima da normalidade. Com dois marcadores alterados, a posição em relação aos limiares diagnósticos é irrelevante.'
  ], 'A glicemia de jejum ultrapassa 126 mg/dL. A HbA1c de 6,0% indica risco, mas não alcança o limiar para diabetes. Em pessoa assintomática, repete-se o teste alterado e já se reconhece o risco cardiovascular associado ao restante do perfil.', [
    'O conjunto preenche parâmetros de risco metabólico, mas síndrome metabólica e diagnóstico de diabetes têm critérios distintos.',
    'A discordância não invalida o jejum. Ambos os exames podem divergir por razões biológicas ou metodológicas.',
    'Interpreta o jejum pelos valores diagnósticos e separa a confirmação da glicemia da necessidade de reduzir risco cardiometabólico.',
    'Um valor acima da faixa normal não é automaticamente diagnóstico. A HbA1c está abaixo de 6,5%.'
  ]),
  difficult('n3a-dm2-02', 'dm2', 'sbd-dm2', `Um homem de 55 anos tem obesidade central e história familiar de DM2. Há cinco anos, em avaliação metabólica, ainda apresentava glicemia de jejum de 93 mg/dL, mas produção elevada de insulina para a mesma carga oral de glicose. Agora tem glicemias de jejum repetidas de 145 mg/dL, excursões pós-prandiais maiores e HbA1c de 7,3%. O peptídeo C continua detectável. Negou uso de glicocorticoide e não teve cetose. Na discussão do caso, um colega afirma que a produção detectável de insulina exclui deterioração da célula beta.

Qual sequência fisiopatológica explica melhor a evolução?`, 0, [
    'Resistência muscular limita captação pós-prandial e resistência hepática reduz a supressão da produção de glicose. A compensação beta inicial torna-se insuficiente para a demanda.',
    'Resistência muscular aumenta inicialmente o transporte de glicose dependente de insulina, enquanto o fígado reduz a produção. A hiperglicemia resulta de redução desproporcional da atividade de glucagon.',
    'Destruição autoimune rápida reduz a secreção a níveis indetectáveis desde o início. A normoglicemia inicial mostra que não havia compensação secretora significativa.',
    'Hiperinsulinemia causa exclusivamente hipoglicemia pós-prandial persistente. O jejum elevado indica aumento da captação hepática sem alteração de produção de glicose.'
  ], 'A evolução expressa falha de compensação relativa à resistência. Detectar peptídeo C comprova secreção residual, porém essa quantidade pode ser insuficiente frente à necessidade.', [
    'Integra os compartimentos. Músculo influencia a utilização após a refeição e fígado contribui para o jejum elevado.',
    'Inverte as consequências esperadas da resistência. O músculo torna-se menos responsivo e a produção hepática é menos suprimida.',
    'A secreção inicialmente elevada e depois detectável é incompatível com a descrição de destruição secretora completa desde o início.',
    'A hiperinsulinemia inicial pode manter a glicemia normal. O quadro posterior não se explica por aumento de captação hepática.'
  ]),
  difficult('n3a-dm2-03', 'dm2', 'sbd-dm2', `Um homem de 61 anos com DM2 diagnosticado há oito anos está em uso de metformina, com HbA1c de 6,8%. Foi internado recentemente por insuficiência cardíaca com fração de ejeção reduzida. Em consultas separadas, sua TFGe é 48 mL/min/1,73 m² e a relação albumina/creatinina urinária é 280 mg/g. Não relata hipoglicemia. Na visita pós-alta, teme adicionar uma medicação porque a glicemia melhorou. O interno sugere indicar outra classe apenas se a HbA1c subir, pois acredita que o benefício de tratar o diabetes se limita a reduzir a glicemia.

Qual proposta responde melhor ao risco atual e ao mecanismo?`, 3, [
    'Adicionar sulfonilureia por ação no canal de potássio da célula beta. Aumentar secreção de insulina confere o mesmo benefício cardíaco e renal com essa HbA1c.',
    'Trocar para um inibidor da DPP-4 para prolongar incretinas. Uma queda adicional da HbA1c basta para reproduzir a redução de internações por insuficiência cardíaca.',
    'Intensificar insulina prandial para reduzir a glicemia após as refeições. A TFGe e a albuminúria têm pouca influência na escolha enquanto a HbA1c estiver abaixo de 7%.',
    'Considerar um iSGLT2 com benefício cardiorrenal adequado ao quadro. A ação tubular proximal e os benefícios cardíaco e renal justificam a discussão mesmo com HbA1c próxima da meta.'
  ], 'A associação de insuficiência cardíaca e doença renal modifica a seleção terapêutica. O benefício cardiorrenal de agentes apropriados pode justificar uso para além da necessidade de reduzir a HbA1c.', [
    'Sulfonilureias aumentam secreção e risco de hipoglicemia. Esse mecanismo não proporciona automaticamente os benefícios esperados sobre insuficiência cardíaca e doença renal.',
    'Efeito sobre incretinas e HbA1c não equivale a benefício cardiorrenal demonstrado. A escolha deve considerar evidência para o desfecho do paciente.',
    'Insulina reduz glicemia, mas a indicação neste cenário precisa considerar as comorbidades e o risco de hipoglicemia da intensificação.',
    'A inibição do cotransporte proximal produz efeitos que ajudam a explicar proteção, com escolha, orientação e monitorização conforme o agente e o quadro clínico.'
  ]),
  difficult('n3a-farmaco-01', 'farmaco-dm', 'sbd-dm2', `Uma mulher de 72 anos com DM2 e TFGe de 41 mL/min/1,73 m² é acompanhada na UBS. Usa metformina em dose ajustada e gliclazida. Há duas semanas passou a pular o jantar por dificuldade de comprar alimentos. A filha encontrou a paciente confusa durante a madrugada, com glicemia capilar de 43 mg/dL. Ela melhorou após receber ajuda, e a HbA1c recente foi de 6,3%. A família pede que a equipe acrescente insulina para reduzir uma glicemia de 189 mg/dL medida logo após o almoço. A preceptora pede que o interno relacione aquele episódio ao modo de ação dos fármacos e à vulnerabilidade da paciente.

Qual análise orienta melhor a revisão do tratamento?`, 1, [
    'A metformina fecha canais KATP e estimula liberação independente da refeição. Deve-se retirar metformina e usar gliclazida associada à insulina prandial para reduzir a oscilação.',
    'A gliclazida estimula secreção ao agir no canal KATP. Com refeição omitida, função renal reduzida e episódio grave, cabe revisar a intensidade do esquema e o acesso a alimentos.',
    'A gliclazida só aumenta secreção quando a glicose ultrapassa a meta. A causa provável é toxicidade direta da metformina, tratada com aumento do componente secretagogo.',
    'A gliclazida inibe a reabsorção tubular de glicose e provoca perda de água noturna. A solução é corrigir isoladamente a glicemia pós-prandial sem rever o esquema.'
  ], 'O risco de hipoglicemia tem prioridade. Sulfonilureias estimulam secreção de insulina e sua ação pode persistir quando a alimentação é insuficiente, sobretudo em pessoas vulneráveis.', [
    'A ação da metformina não é fechar KATP. Associar mais uma terapia com risco de hipoglicemia exigiria justificativa que o caso não oferece.',
    'Relaciona o secretagogo à glicose baixa, incorpora a função renal e trata a irregularidade alimentar como parte do plano.',
    'A expressão “só quando a glicose ultrapassa a meta” descreve incorretamente a ação da sulfonilureia.',
    'Bloqueio de reabsorção tubular é mecanismo de iSGLT2. A hipoglicemia documentada e o uso de secretagogo precisam ser abordados.'
  ]),
  difficult('n3a-farmaco-02', 'farmaco-dm', 'sbd-dm1', `Um homem de 29 anos com DM1 aplica insulina de ação prolongada à noite e análogo rápido antes das refeições. Seu sensor mostra valores próximos de 105 mg/dL às 3 horas e antes do café da manhã. Nos dias em que toma café com pão e suco, a glicose ultrapassa 250 mg/dL em duas horas e retorna ao alvo antes do almoço. Ele informa que só aplica a dose rápida quando termina de comer, pois nem sempre sabe quanto vai ingerir. Nega omissão da basal. O colega sugere elevar a insulina noturna para compensar os picos da manhã.

Qual interpretação vincula o padrão ao componente do esquema que merece revisão?`, 2, [
    'O pico pós-café demonstra insuficiência basal prolongada. Aumentar o componente noturno é mais específico para cobrir a absorção rápida de carboidrato.',
    'A glicemia ao amanhecer sugere excesso do análogo rápido do jantar. O ajuste mais direcionado é suspender o bolus do café e aumentar o da noite.',
    'O controle de jejum sugere cobertura basal adequada nesse período. É preciso revisar horário, contagem de carboidrato e estratégia do bolus do café.',
    'A recuperação antes do almoço significa que o análogo rápido não tem ação no pico. Substituir o bolus por mais insulina de ação prolongada resolve o descompasso.'
  ], 'O padrão temporal aponta para desencontro entre absorção alimentar e ação prandial. A revisão do esquema deve avaliar alimento, administração, tendência do sensor e risco de hipoglicemia.', [
    'Aumentar basal com jejum controlado pode causar hipoglicemia entre refeições e não corrige especificamente a excursão pós-café.',
    'Não há hipoglicemia noturna registrada. A elevação coincide com o café e o bolus tardio.',
    'Escolhe o componente que farmacocineticamente cobre o pico alimentar, preservando a interpretação do jejum.',
    'Existe ação do bolus com atraso em relação à refeição. A basal não reproduz o início e o pico desejados para essa cobertura.'
  ]),
  difficult('n3a-farmaco-03', 'farmaco-dm', 'sbd-dm2', `Uma paciente com DM2 e obesidade quer discutir tratamento que ajude glicemia e peso. Usa metformina, tolerada em dose estável, sem hipoglicemias. Tem HbA1c de 8,2%, TFGe de 82 mL/min/1,73 m² e trabalha em turnos que tornam as refeições irregulares. Durante a consulta, compara uma sulfonilureia com um agonista do receptor de GLP-1 e pergunta sobre saciedade, náuseas e chance de glicemia baixa. A equipe precisa explicar a diferença entre aumento da secreção dependente da glicose e estímulo ao canal KATP, além de conectar o mecanismo à rotina da paciente.

Qual orientação descreve os mecanismos e os efeitos esperados?`, 0, [
    'O agonismo GLP-1 aumenta secreção de insulina de modo dependente da glicose, favorece saciedade e pode causar sintomas gastrointestinais. Sulfonilureia tem maior risco de hipoglicemia.',
    'O agonismo GLP-1 fecha diretamente KATP independentemente da glicemia. A sulfonilureia desacelera o esvaziamento gástrico e eleva saciedade com menor risco de hipoglicemia.',
    'O agonismo GLP-1 promove glicosúria proximal, e a sulfonilureia reduz produção hepática sem estimular secreção. Os efeitos sobre peso e náusea se explicam pela perda urinária.',
    'O agonismo GLP-1 atua como insulina basal e mantém supressão fixa da produção hepática. A sulfonilureia só estimula secreção durante hiperglicemia pós-prandial.'
  ], 'O efeito incretínico, a saciedade e os sintomas digestivos diferenciam essa classe dos secretagogos tradicionais. A escolha também considera contraindicações, tolerabilidade, acesso e preferências.', [
    'Relaciona corretamente dependência da glicose e saciedade. O risco de hipoglicemia pode aumentar quando se associa insulina ou sulfonilureia.',
    'Troca os perfis farmacológicos. A sulfonilureia atua no canal KATP da célula beta.',
    'Glicosúria caracteriza iSGLT2. A metformina atua principalmente na produção hepática de glicose, e a sulfonilureia é secretagoga.',
    'Agonista de GLP-1 não é reposição basal. A ação secretagoga da sulfonilureia pode persistir durante baixa ingesta.'
  ]),
  difficult('n3a-crises-01', 'crises-diabetes', 'crises', `Uma mulher de 54 anos com DM2 usa empagliflozina. Após um procedimento, ficou dois dias com pouca ingesta e chega ao pronto atendimento com náuseas, dor abdominal e respiração profunda. Está alerta, com mucosas secas. A glicemia plasmática é 172 mg/dL, pH venoso 7,22, bicarbonato 12 mmol/L, beta-hidroxibutirato 4,9 mmol/L, lactato 1,3 mmol/L e potássio de 4,4 mmol/L. Uma fita urinária mostra cetonas discretas e glicosúria intensa. Não ingeriu álcool e a creatinina está próxima do basal. Tomou o antidiabético na manhã anterior ao procedimento, conforme se apurou na reconciliação de medicamentos.

Qual opção reúne interpretação e lógica de tratamento?`, 3, [
    'Cetose de jejum como mecanismo predominante. Suspender o iSGLT2 e usar fluidos e glicose, com insulina reservada para elevação mais acentuada da glicemia.',
    'CAD euglicêmica. Iniciar insulina e solução sem glicose até que a glicemia caia abaixo do limiar de hipoglicemia, mantendo o seguimento da cetonemia.',
    'Acidose mista com componente cetótico. Repor volume e reavaliar antes de iniciar insulina, dando maior peso à cetonúria discreta do que à cetonemia.',
    'CAD euglicêmica. Suspender o iSGLT2, monitorar fluidos e eletrólitos e acompanhar a redução da cetonemia com insulina associada à glicose intravenosa.'
  ], 'Diabetes conhecido, cetonemia superior a 3 mmol/L e acidose preenchem os componentes do diagnóstico, mesmo com glicose inferior a 200 mg/dL. O objetivo da insulina é interromper a cetogênese. A glicose intravenosa pode ser necessária desde o início para permitir essa ação.', [
    'Cetose por baixa ingesta entra no diferencial, mas não explica de forma mais coerente o conjunto de acidose, exposição a iSGLT2 e cetonemia elevada.',
    'A hipótese está correta. Com essa glicemia, adiar glicose até hipoglicemia prejudica a manutenção da insulina necessária para interromper a cetogênese.',
    'A fita não mede diretamente beta-hidroxibutirato. Cetonemia e acidose já sustentam manejo específico.',
    'Reconhece a apresentação associada a inibidor de SGLT2 e a função separada de insulina, glicose, líquidos e vigilância do potássio.'
  ]),
  difficult('n3a-crises-02', 'crises-diabetes', 'crises', `Um homem de 24 anos com DM1 interrompeu a insulina durante uma infecção respiratória e evoluiu com vômitos. Tem glicemia de 416 mg/dL, pH venoso de 7,17, beta-hidroxibutirato de 6,2 mmol/L e potássio de 3,1 mmol/L. O eletrocardiograma mostra ondas T achatadas. Ao iniciar o atendimento, o colega argumenta que o potássio sempre aumenta na CAD e propõe começar insulina antes de corrigir os eletrólitos. O plantonista pede que a equipe integre a perda corporal de potássio com o efeito da insulina na distribuição desse íon e ordene as intervenções.

Qual sequência é mais segura nesse caso?`, 2, [
    'Começar insulina imediatamente e repor potássio somente se surgirem arritmias. A correção da acidemia deslocará o potássio do interior das células para o soro.',
    'Administrar bicarbonato para elevar o potássio sérico antes dos fluidos. A correção da cetonemia virá principalmente pela alcalinização.',
    'Iniciar fluidos e reposição monitorada de potássio, adiar insulina até correção acima do limiar de segurança e acompanhar a cetose após iniciar insulina.',
    'Usar glicose intravenosa como intervenção isolada até subir o potássio. O valor de glicemia já permite manter manejo exclusivamente sem insulina.'
  ], 'A falta de insulina e a acidemia podem elevar o potássio sérico apesar de déficit corporal. Um valor já baixo na apresentação sinaliza risco maior. O consenso de 2024 adia a insulina com potássio abaixo de 3,5 mmol/L até reposição adequada.', [
    'Insulina favorece entrada de potássio nas células. Iniciá-la em hipocalemia importante pode precipitar arritmias e fraqueza muscular.',
    'Bicarbonato não é rotina nesse pH e pode agravar a queda do potássio. A remoção de cetonas depende de tratar o distúrbio de base.',
    'Respeita a prioridade eletrolítica sem perder de vista hidratação, insulinoterapia subsequente e resolução da cetose.',
    'Glicose isolada não interrompe de forma adequada a cetogênese por deficiência de insulina.'
  ]),
  difficult('n3a-crises-03', 'crises-diabetes', 'crises', `Um homem de 76 anos com DM2 chega após quatro dias de poliúria, febre e redução de ingesta. Está desidratado e desorientado. Apresenta glicemia de 828 mg/dL, sódio medido de 145 mmol/L, bicarbonato de 21 mmol/L, pH de 7,36 e beta-hidroxibutirato de 1,1 mmol/L. Para discussão, a equipe usa osmolalidade efetiva em mOsm/kg = 2 × Na⁺ + glicose em mg/dL ÷ 18. A radiografia mostra infiltrado novo compatível com infecção respiratória. Um estudante considera que toda glicemia tão elevada caracteriza CAD grave e propõe normalizar a glicemia rapidamente.

Qual interpretação e objetivo inicial correspondem melhor aos dados?`, 1, [
    'EHH com osmolalidade efetiva em torno de 336 mOsm/kg. Após expandir volume, priorizar normalizar a glicose nas primeiras horas, guiando a correção pela glicemia isolada.',
    'EHH com osmolalidade efetiva em torno de 336 mOsm/kg. É preciso repor volume, acompanhar a queda gradual da osmolalidade e tratar o precipitante.',
    'Sobreposição entre CAD e EHH com osmolalidade em torno de 336 mOsm/kg. Interpretar a cetonemia de 1,1 mmol/L como suficiente para caracterizar a sobreposição.',
    'EHH com osmolalidade efetiva acima de 350 mOsm/kg, usando o sódio corrigido. Iniciar solução hipotônica antes da reposição inicial de volume.'
  ], 'O cálculo é 290 + 46 = 336 mOsm/kg. Hiperglicemia grave, hiperosmolalidade e desidratação, sem acidose ou cetose significativa, favorecem EHH. A velocidade de correção e o gatilho infeccioso fazem parte do manejo.', [
    'O diagnóstico e o cálculo estão corretos. O ritmo da correção deve levar em conta a queda da osmolalidade e a evolução dos eletrólitos.',
    'Calcula e interpreta a osmolalidade. A desidratação e a segurança da correção exigem monitorização.',
    'Cetose discreta pode ocorrer no EHH. Quadros mistos exigem sinais bioquímicos de acidose e cetose relevantes.',
    'A fórmula usa o sódio medido. A reposição inicial de volume em hipovolemia tem prioridade; os ajustes dependem da resposta clínica e laboratorial.'
  ]),
  difficult('n3a-cronicas-01', 'danos-diabetes', 'sbd-renal', `Uma mulher de 62 anos com DM2 há 13 anos tem TFGe de 77 mL/min/1,73 m². A relação albumina/creatinina urinária foi de 78 mg/g em uma consulta de rotina e 96 mg/g após quatro meses. Nas duas coletas ela estava sem sintomas urinários ou febre, e não havia feito exercício vigoroso. A pressão média foi de 148/86 mmHg. O residente descarta lesão renal porque a TFGe está acima de 60 e sugere repetir os exames apenas em dois anos. A preceptora pede que ele diferencie lesão da barreira glomerular de perda da função de filtração estimada.

Qual interpretação e plano são mais adequados?`, 0, [
    'A albuminúria persistente indica dano renal apesar da TFGe relativamente preservada. Avaliar risco, controle pressórico, opções nefroprotetoras e monitorar os dois marcadores.',
    'A função de filtração acima de 60 exclui doença renal crônica. A albuminúria indica aumento transitório de pressão, mesmo com resultados persistentes.',
    'A TFGe estabelece insuficiência renal avançada e a albuminúria perde relevância. Deve-se encaminhar imediatamente para planejamento de terapia renal substitutiva.',
    'O perfil confirma lesão tubular isolada porque a albumina atravessa normalmente a barreira intacta em grande quantidade. O controle da pressão tem pouca influência.'
  ], 'TFGe e albuminúria medem dimensões diferentes. Albuminúria moderadamente aumentada persistente por mais de três meses sinaliza dano e risco cardiorrenal, inclusive quando a TFGe supera 60.', [
    'Reconhece dano precoce e a necessidade de integrar medidas terapêuticas e seguimento laboratorial.',
    'A TFGe preservada não exclui doença renal crônica quando existe outro marcador sustentado de dano.',
    'A TFGe de 77 não corresponde a insuficiência renal avançada. A albuminúria é informação prognóstica neste nível de filtração.',
    'A albuminúria pode refletir alterações da barreira glomerular e fatores hemodinâmicos. Pressão e proteção renal são relevantes.'
  ]),
  difficult('n3a-cronicas-02', 'danos-diabetes', 'ada-pe', `Um homem de 58 anos com DM2, neuropatia sensitiva e perda da percepção ao monofilamento chega com o pé esquerdo quente, avermelhado e edemaciado há cinco dias. Voltou a caminhar longas distâncias após torção leve, pois sente pouca dor. Está afebril, os pulsos estão presentes e a pele está íntegra, sem úlcera. A radiografia inicial não demonstra fratura deslocada. O residente indica caminhada leve com calçado comum por considerar que a ausência de dor forte e a radiografia inicial afastam lesão grave.

Qual hipótese e medida imediata integram os achados?`, 3, [
    'Entorse ligamentar como hipótese principal pelo trauma recente. Orientar apoio conforme tolerância e solicitar nova imagem se a dor impedir a marcha.',
    'Celulite como hipótese principal pelo calor e edema unilaterais. Iniciar antibiótico com retorno em 48 horas e reservar descarga para caso sem resposta.',
    'Suspeita de neuroartropatia de Charcot ativa. Confirmar com ressonância antes de decidir imobilização, usando a radiografia para orientar apoio habitual até a confirmação.',
    'Suspeita de neuroartropatia de Charcot ativa. Imobilizar, descarregar e encaminhar para avaliação, mesmo com a primeira radiografia pouco expressiva.'
  ], 'Neuropatia, trauma discreto, pé unilateral quente e edemaciado e dor desproporcionalmente pequena sustentam a suspeita de Charcot. A proteção precoce ajuda a evitar progressão estrutural enquanto se investigam outros diagnósticos.', [
    'Trauma discreto também pode precipitar Charcot. Dor tem valor reduzido para orientar carga em um pé com perda sensitiva.',
    'Infecção está no diferencial. Pele íntegra, pouca dor, neuropatia e trauma recente tornam inadequado esperar a resposta ao antibiótico para descarregar o pé.',
    'A hipótese está correta, mas a proteção do membro começa na suspeita. Radiografia pouco expressiva no início não autoriza apoio habitual.',
    'Radiografia inicial pode estar pouco alterada. Imobilização, descarga e avaliação especializada são coerentes com a suspeita.'
  ]),
  difficult('n3a-cronicas-03', 'danos-diabetes', 'ada-pe', `Uma mulher com DM2 há 16 anos relata dificuldade recente para ler e, desde ontem, manchas móveis em um olho. Teve seguimento irregular e a HbA1c é 9,2%. Na consulta oftalmológica, a retinografia mostra hemorragias puntiformes, exsudatos duros próximos à mácula e vasos anormais no disco óptico. A tomografia de coerência óptica demonstra espessamento macular central. O interno descreve todos os achados como consequência de um único mecanismo de extravasamento capilar e sugere que a presença de edema, por si, é o que define retinopatia proliferativa.

Qual combinação explica os achados e sua prioridade?`, 2, [
    'Exsudato e edema definem proliferação retiniana. Os vasos do disco são efeito passivo do extravasamento e a avaliação pode aguardar o próximo rastreio anual.',
    'Neovasos e edema decorrem exclusivamente da elevação da pressão intraocular. A estratégia imediata é tratar glaucoma antes de avaliar a retina.',
    'Edema resulta de alteração da barreira vascular, e neovasos indicam resposta à isquemia retiniana. Os dois achados justificam avaliação e tratamento oftalmológico oportunos.',
    'Hemorragias e exsudatos sugerem retinopatia não proliferativa, mesmo que haja neovasos. Deve-se repetir a tomografia apenas após estabilizar a HbA1c.'
  ], 'Extravasamento e não perfusão podem coexistir. Edema macular compromete a visão central, enquanto neovascularização define o componente proliferativo e pode causar hemorragia vítrea.', [
    'Edema pode ocorrer em diferentes estágios. O sinal que define proliferação no caso é a neovascularização.',
    'Pressão intraocular não explica a combinação de vazamento microvascular e neovasos induzidos por isquemia.',
    'Distingue barreira vascular e resposta angiogênica. A avaliação especializada tem prioridade diante desses achados visuais.',
    'A presença de vasos anormais supera a classificação baseada apenas em microaneurismas e hemorragias.'
  ]),
  difficult('n3a-tireoide-01', 'funcao-tireoide', 'ata-tratamento', `Uma mulher de 34 anos apresenta palpitações, perda de 7 kg, intolerância ao calor e diarreia. Ao exame há bócio difuso indolor, tremor fino e retração palpebral, sem dor cervical recente. O TSH é inferior a 0,01 mUI/L, o T4 livre está elevado e o TRAb é positivo. A avaliação oftalmológica confirma orbitopatia ativa de repercussão moderada. Ela não está grávida e não usa amiodarona. Em discussão terapêutica, alguém propõe radioiodo de imediato e outro aluno sugere apenas betabloqueador, alegando que ambas as medidas bloqueiam a produção hormonal na glândula.

Qual alternativa diferencia mecanismo e escolha inicial?`, 1, [
    'Graves com síntese aumentada. Preferir radioiodo de início e monitorar a órbita após o tratamento, pois a resolução da tireotoxicose basta para prevenir piora ocular.',
    'Graves por estímulo do receptor de TSH. Reduzir síntese com tionamida e controlar sintomas. A orbitopatia ativa pesa contra radioiodo.',
    'Graves com estímulo do receptor de TSH. Usar betabloqueador como tratamento isolado, aproveitando a menor conversão periférica de T4 para normalizar a síntese glandular.',
    'Tireoidite destrutiva associada à autoimunidade. Tratar sintomas e avaliar a órbita, pois o padrão laboratorial, mesmo com TRAb positivo, favorece liberação de estoques.'
  ], 'TRAb positivo, bócio difuso e orbitopatia favorecem Graves. Tionamidas inibem a síntese hormonal, e betabloqueadores tratam sobretudo sintomas adrenérgicos. A decisão definitiva considera a atividade e a gravidade ocular.', [
    'A etiologia está correta. A atividade e a repercussão ocular modificam a escolha, pois radioiodo pode piorar orbitopatia.',
    'A alternativa combina etiologia, alvo farmacológico e a relevância da orbitopatia para a estratégia.',
    'Alguns betabloqueadores interferem na conversão periférica, mas essa ação não substitui controle da síntese glandular.',
    'Bócio difuso, TRAb positivo e orbitopatia típica, em conjunto, sustentam estímulo do receptor e produção aumentada.'
  ]),
  difficult('n3a-tireoide-02', 'funcao-tireoide', 'ata-tratamento', `Uma professora de 43 anos apresenta ansiedade, tremor e palpitações após três semanas de dor na região anterior do pescoço com irradiação para o ouvido. Relata infecção respiratória recente. O exame mostra tireoide dolorosa, sem exoftalmia. TSH está suprimido, T4 livre elevado, TRAb negativo e a velocidade de hemossedimentação está aumentada. A captação tireoidiana é muito baixa, sem uso recente de contraste iodado. A paciente pergunta se precisa de metimazol porque uma amiga com Graves recebeu esse medicamento para sintomas parecidos.

Qual explicação clínica e farmacológica é mais consistente?`, 3, [
    'Graves soronegativo é mais provável porque todo TSH baixo indica aumento da síntese. O metimazol deve ser usado para reduzir o hormônio já liberado.',
    'Bócio nodular tóxico é favorecido pela baixa captação difusa. O tratamento ideal é aumentar a oferta de iodo para competir com a produção de T4.',
    'Hipotireoidismo primário com fase de compensação e T4 livre excessivo. A dor indica reposição imediata de levotiroxina como controle etiológico.',
    'Tireoidite subaguda com liberação de hormônio armazenado. O controle de dor e sintomas adrenérgicos é pertinente, e bloquear nova síntese não atua no mecanismo principal.'
  ], 'Dor, inflamação e baixa captação apoiam tireoidite subaguda destrutiva. A tireotoxicose pode ser transitória e evoluir por fases que exigem seguimento.', [
    'TSH suprimido indica exposição aumentada ao hormônio, não informa sozinho se existe síntese aumentada ou liberação destrutiva.',
    'Autonomia nodular costuma gerar captação focal ou heterogênea nas áreas funcionantes. Oferta de iodo não é a medida sugerida por esse quadro.',
    'O perfil laboratorial é tireotóxico no momento. Reposição de T4 seria incongruente com T4 livre elevado.',
    'Explica o mecanismo e por que as medidas são diferentes das empregadas quando há aumento de síntese.'
  ]),
  difficult('n3a-tireoide-03', 'funcao-tireoide', 'endo-hipofise', `Uma mulher de 37 anos relata cansaço, intolerância ao frio e constipação. Teve hemorragia obstétrica grave há oito meses, com dificuldade para amamentar desde o parto e amenorreia persistente. A pressão é 92/60 mmHg. T4 livre de 0,5 ng/dL está abaixo da referência, TSH de 1,6 mUI/L está dentro do intervalo, e a paciente apresenta hiponatremia e cortisol matinal muito baixo. O estudante se tranquiliza com o TSH e atribui a fadiga a depressão pós-parto. Um colega sugere iniciar levotiroxina imediatamente pela alteração de T4.

Qual interpretação integra a localização da disfunção e a ordem da avaliação e reposição?`, 0, [
    'Hipopituitarismo com hipotireoidismo central provável. Avaliar e proteger o eixo adrenal antes da reposição tireoidiana e acompanhar esta pelo T4 livre.',
    'Hipotireoidismo subclínico primário. O TSH normal confirma que a elevação de T4 livre é compensatória e dispensa avaliar o cortisol.',
    'Hipotireoidismo manifesto primário. Iniciar levotiroxina e ajustar apenas pelo TSH, abordando o cortisol após normalizar a função tireoidiana.',
    'Síndrome do eutireoidiano doente sem necessidade de considerar hipófise. A falha de lactação e a amenorreia explicam-se pelo T4 elevado.'
  ], 'A história obstétrica e as deficiências de múltiplos eixos apontam para comprometimento hipofisário. A insuficiência adrenal central pode piorar com levotiroxina antes de proteção adequada do eixo.', [
    'TSH normal é inadequado diante de T4 livre baixo. O cortisol muito baixo e os sinais clínicos tornam o eixo adrenal prioritário.',
    'No quadro subclínico primário, o T4 livre permanece normal, e o TSH está aumentado. Os dados não seguem esse perfil.',
    'O TSH não se elevou como seria esperado na insuficiência glandular primária. Inverter a ordem terapêutica pode precipitar descompensação.',
    'O padrão é sustentado pela história de hipoperfusão pós-parto e sinais de hipopituitarismo, não apenas por um exame isolado.'
  ]),
  difficult('n3a-nodulos-01', 'nodulos-tireoide', 'eta-nodulos', `Uma mulher de 57 anos observa aumento anterior no pescoço e palpitações. A ultrassonografia mostra nódulo sólido único de 2,5 cm, com margens regulares e sem linfonodos suspeitos. TSH de 0,05 mUI/L está suprimido, T4 livre discretamente elevado e não houve exposição recente a contraste. Ela não está grávida. O médico precisa distinguir autonomia funcional de outros cenários antes de indicar punção. A paciente traz uma solicitação de PAAF feita unicamente pelo tamanho do nódulo e pergunta por que o laboratório alterado mudaria o próximo passo.

Qual sequência de investigação é a mais apropriada?`, 2, [
    'PAAF imediata pela dimensão. A citologia consegue medir autonomia funcional e substitui a cintilografia mesmo com TSH suprimido.',
    'Dosar tireoglobulina e, se elevada, indicar cirurgia sem outros testes. O marcador distingue com precisão nódulos benignos e malignos na avaliação inicial.',
    'Associar avaliação funcional por cintilografia ao ultrassom. Se o foco for hiperfuncionante e concordante, a PAAF rotineira desse nódulo geralmente pode ser evitada.',
    'Repetir apenas o ultrassom porque TSH baixo reduz a utilidade de exames funcionais. O risco citológico será definido quando o nódulo aumentar.'
  ], 'O TSH suprimido orienta a investigar função por cintilografia. A interpretação cruza o foco cintilográfico com o nódulo no ultrassom e com outros achados suspeitos.', [
    'A citologia examina células, não captação de radiotraçador. O tamanho sozinho não é suficiente para decidir a sequência.',
    'Tireoglobulina sérica inicial não discrimina benignidade de malignidade com essa precisão.',
    'Integra a informação bioquímica, estrutural e funcional. Avalia-se em separado qualquer lesão ultrassonográfica discordante.',
    'A supressão de TSH é justamente um motivo para avaliar autonomia funcional, sem abandonar a estratificação ultrassonográfica.'
  ]),
  difficult('n3a-nodulos-02', 'nodulos-tireoide', 'eta-nodulos', `Um homem de 46 anos teve nódulo tireoidiano de 2,8 cm descoberto em exame físico. Não há história de radioexposição, e o TSH está normal. O ultrassom descreve um nódulo sólido, bem delimitado, sem extensão extratireoidiana ou linfonodos suspeitos. A PAAF foi indicada pelo padrão e pelo tamanho. O laudo classifica a amostra como neoplasia folicular, Bethesda IV, com microfolículos abundantes, material adequado e ausência dos achados nucleares típicos de carcinoma papilífero. O paciente pede uma resposta definitiva antes de discutir cirurgia. Um segundo ultrassom confirma os achados do primeiro e não mostra mudança de tamanho.

Qual interpretação orienta melhor a decisão?`, 0, [
    'A citologia indica padrão folicular indeterminado. A distinção entre adenoma e carcinoma requer avaliar invasão capsular ou vascular, e o plano depende de risco e opções diagnósticas.',
    'O laudo sustenta carcinoma folicular porque o padrão microfolicular é abundante e faltam os sinais nucleares de carcinoma papilífero.',
    'O contorno regular, a estabilidade e a ausência de adenopatia favorecem adenoma e permitem reclassificar o resultado citológico como benigno.',
    'A citologia é indeterminada e uma nova PAAF com celularidade maior permitirá distinguir invasão da cápsula antes de discutir opções adicionais.'
  ], 'A PAAF descreve o padrão celular. A demonstração de invasão capsular ou vascular exige arquitetura, o que explica a categoria indeterminada e a avaliação individualizada do próximo passo.', [
    'Distingue o que a citologia mostra do que exige exame arquitetural. Risco, testes disponíveis e decisão compartilhada orientam o plano.',
    'Microfolículos não estabelecem invasão, logo não confirmam carcinoma folicular.',
    'Esses elementos entram na estimativa do risco. Não demonstram ausência de invasão nem anulam Bethesda IV.',
    'Mais células não resolvem uma pergunta de arquitetura. A avaliação da interface da cápsula exige material adequado para histologia.'
  ]),
  difficult('n3a-nodulos-03', 'nodulos-tireoide', 'eta-nodulos', `Uma mulher de 41 anos tem nódulo sólido de 1,4 cm, TSH normal e USG com hipoecogenicidade acentuada, formato mais alto que largo e microcalcificações. Há um linfonodo lateral com área cística e perda do hilo, acessível à punção. A equipe usa a classificação EU-TIRADS e precisa explicar por que um TSH normal não resolve a suspeita oncológica e por que o linfonodo pode mudar o planejamento. Outra médica propõe apenas repetir o ultrassom em dois anos, pois o nódulo tem menos de 2 cm, e um estudante sugere iniciar levotiroxina supressiva.

Qual conduta de investigação melhor incorpora os dados?`, 3, [
    'Controle ultrassonográfico em dois anos, pois todos os nódulos menores de 2 cm têm baixo risco quando o TSH é normal.',
    'Cintilografia para excluir câncer em qualquer nódulo eutireoidiano. Se a captação for globalmente normal, dispensar avaliação citológica do nódulo e do linfonodo.',
    'Dosar apenas tireoglobulina sérica e iniciar levotiroxina para reduzir o tamanho. A resposta ao fármaco define benignidade do nódulo.',
    'Indicar avaliação citológica do nódulo de alto risco e do linfonodo suspeito. Correlacionar os resultados com o ultrassom para planejar a investigação e eventual tratamento.'
  ], 'O conjunto ultrassonográfico é de alto risco e o tamanho supera o limiar de PAAF para EU-TIRADS 5. O linfonodo suspeito merece amostragem quando o resultado pode modificar a conduta.', [
    'Tamanho precisa ser interpretado junto ao padrão ultrassonográfico. TSH avalia função, não risco histológico.',
    'Cintilografia é especialmente útil se houver suspeita de autonomia. Uma captação global normal não exclui malignidade.',
    'Tireoglobulina sérica e levotiroxina supressiva não substituem estratificação estrutural e citologia.',
    'Usa características do nódulo e do compartimento cervical. A investigação dirigida pode alterar o planejamento cirúrgico.'
  ]),
  difficult('n3a-para-01', 'paratireoides', 'hipopara', `Uma mulher de 35 anos, 36 horas após tireoidectomia total, apresenta parestesias nas mãos, espasmo carpopedal e QT prolongado ao eletrocardiograma. O cálcio ionizado está baixo, o fosfato aumentado e o PTH de 8 pg/mL abaixo do intervalo do laboratório. O magnésio também está baixo. Ela não tinha doença renal e o cálcio era normal antes do procedimento. O residente atribui a alteração a hiperparatireoidismo secundário pela hipocalcemia e propõe aguardar a próxima consulta, pois espera que o PTH aumente gradualmente.

Qual leitura dos dados e prioridade são mais adequadas?`, 1, [
    'Hiperparatireoidismo secundário, com PTH adequadamente alto para hipocalcemia. O QT prolongado não altera o seguimento programado.',
    'Hipocalcemia sintomática com resposta inadequada do PTH, compatível com disfunção paratireoidiana pós-operatória. Tratar sob monitorização e corrigir o magnésio em paralelo.',
    'Hipercalcemia por lesão glandular, com supressão apropriada de PTH. A perda de cálcio para a urina exige restringir reposição e corrigir somente o fosfato.',
    'Hipocalcemia por excesso de PTH, com fosfato alto pela excreção renal aumentada. O tratamento consiste em reduzir a liberação de PTH antes de monitorar o cálcio.'
  ], 'Na hipocalcemia, um eixo íntegro deveria elevar PTH. O PTH baixo, a hiperfosfatemia e o contexto cirúrgico sugerem perda de função. Hipomagnesemia pode agravar a secreção ou a resposta ao PTH.', [
    'O PTH está baixo, e a presença de tetania e repercussão eletrocardiográfica aumenta a urgência.',
    'Integra clínica e laboratório. A correção precisa considerar gravidade, ritmo cardíaco, magnésio e seguimento da função paratireoidiana.',
    'O cálcio ionizado está baixo, portanto a supressão de PTH é inadequada nesse momento.',
    'PTH tende a aumentar excreção de fosfato. Os dados não indicam excesso do hormônio.'
  ]),
  difficult('n3a-para-02', 'paratireoides', 'hiperpara', `Um homem de 53 anos tem hipercalcemia leve recorrente, detectada desde os 24 anos, com PTH normal-alto. A mãe e uma irmã também têm cálcio discretamente elevado, sem nefrolitíase. Sua TFGe está preservada, a vitamina D está adequada e ele não usa lítio nem tiazídico. A relação de depuração cálcio/creatinina calculada com coleta de 24 horas é 0,006. Uma ultrassonografia feita em outro serviço descreveu imagem pequena que “pode corresponder a uma paratireoide”. O residente propõe paratireoidectomia por entender que toda hipercalcemia com PTH não suprimido é adenoma.

Qual hipótese deve ser investigada antes de avançar para cirurgia?`, 2, [
    'Adenoma paratireoidiano esporádico. A imagem localizada define qual glândula explica o PTH inapropriadamente normal e pesa mais que a história familiar.',
    'Hiperparatireoidismo primário familiar por doença multiglandular. A depuração baixa é apenas reflexo da hipercalcemia leve e permite manter indicação de exploração.',
    'Hipercalcemia hipocalciúrica familiar. Depuração baixa e agregação familiar justificam confirmação antes de considerar cirurgia.',
    'Hipercalcemia hipocalciúrica familiar confirmada pela relação abaixo de 0,01. O resultado elimina a necessidade de revisar a qualidade da coleta ou estudar o padrão familiar.'
  ], 'A relação muito baixa, hipercalcemia antiga e familiares afetados aumentam a suspeita de hipercalcemia hipocalciúrica familiar. A relação tem sobreposição entre diagnósticos, por isso se interpreta com contexto e confirmação apropriada.', [
    'A imagem pode mostrar um achado incidental e não define a etiologia. A história familiar e a depuração precisam ser explicadas.',
    'Doença primária familiar pode entrar no diferencial, mas a depuração baixa com hipercalcemia antiga em parentes pede investigar hipocalciúria familiar antes de operar.',
    'Reconhece o diagnóstico diferencial que pode evitar uma intervenção ineficaz. A imagem não confirma a origem bioquímica da hipercalcemia.',
    'Reconhece a hipótese, mas o ponto de corte tem sobreposição. Qualidade da coleta, confundidores e confirmação apropriada ainda importam.'
  ]),
  difficult('n3a-para-03', 'paratireoides', 'hiperpara', `Uma mulher de 64 anos sofreu dois episódios de cálculo renal e tem osteoporose no rádio distal. O cálcio total corrigido pela albumina está acima da referência em duas amostras, o PTH está elevado e o fosfato está discretamente baixo. A 25-OH-vitamina D está adequada e a função renal não indica retenção importante de fosfato. Uma ultrassonografia cervical não identificou glândula aumentada. O residente argumenta que o ultrassom normal retira a indicação de considerar cirurgia, porque localiza a doença antes da confirmação bioquímica.

Qual interpretação e plano integram o mecanismo e o papel da imagem?`, 0, [
    'O conjunto sustenta hiperparatireoidismo primário com repercussões renal e óssea. Deve-se discutir avaliação cirúrgica, usando imagem para localização e planejamento.',
    'O ultrassom normal exclui doença paratireoidiana relevante. O PTH elevado deve ser interpretado como resposta normal à hipercalcemia.',
    'Hiperparatireoidismo secundário é o diagnóstico mais provável com vitamina D adequada e hipercalcemia. A estratégia inicial é elevar ainda mais o cálcio.',
    'A presença de cálculo e osteoporose demonstra insuficiência de PTH. O tratamento mais direcionado é repor PTH sem considerar a hipercalcemia.'
  ], 'PTH não suprimido em hipercalcemia é inadequado e pode produzir efeitos renais e ósseos. A indicação clínica de avaliação cirúrgica não depende de localização ultrassonográfica positiva.', [
    'Reconhece que bioquímica e repercussões definem a avaliação, enquanto a localização orienta a abordagem.',
    'Se a elevação de cálcio fosse independente de PTH, seria esperado suprimir o hormônio. A imagem negativa não resolve a etiologia.',
    'O hiperparatireoidismo secundário é uma resposta a estímulos como hipocalcemia e doença renal. Os dados apoiam secreção inadequada em hipercalcemia.',
    'O cálcio e o PTH não sustentam insuficiência glandular. As complicações descritas são compatíveis com excesso.'
  ]),
  writtenCase('n3a-d-soi-01', 'crises-diabetes', 'crises', `Um homem de 22 anos com DM1 chega com vômitos após omitir insulina por dois dias. Tem glicemia de 390 mg/dL, pH de 7,15, bicarbonato de 9 mmol/L, beta-hidroxibutirato de 6,4 mmol/L e K⁺ de 3,2 mmol/L. Após o início da hidratação, o acompanhante pergunta se a glicose, que caiu para 240 mg/dL, prova que a crise terminou. O residente lembra que a via de administração e a sua transição devem considerar a resolução da cetose.

a) Identifique o distúrbio e explique como deficiência de insulina, cetogênese e respiração profunda se relacionam.
b) Justifique a ordem inicial de correção e o uso de glicose durante o tratamento. Indique dois dados que ajudam a documentar resolução.`,
    'A deficiência de insulina permite lipólise e formação de corpos cetônicos. A acidose metabólica induz hiperventilação compensatória. O potássio baixo exige reposição e monitorização antes da insulina. Glicose pode ser adicionada quando a glicemia cai para permitir continuidade da insulina enquanto persistir a cetose. A resolução é avaliada pela cetonemia e pela recuperação do pH ou bicarbonato de acordo com o consenso.', [
      '0,5 ponto por reconhecer CAD com diabetes/hiperglicemia, cetonemia e acidose.',
      '0,5 ponto por ligar lipólise, corpos cetônicos e hiperventilação compensatória.',
      '0,5 ponto por priorizar reposição de potássio antes da insulina e explicar seu deslocamento intracelular.',
      '0,5 ponto por explicar glicose associada à insulina e citar cetonemia e pH ou bicarbonato como parâmetros de resolução.'
    ]),
  writtenCase('n3a-d-soi-02', 'nodulos-tireoide', 'eta-nodulos', `Uma mulher de 52 anos apresenta nódulo tireoidiano de 2,4 cm e TSH persistentemente suprimido. O ultrassom descreve margens regulares, mas acrescenta um segundo nódulo de 1,2 cm, marcadamente hipoecoico, mais alto que largo e com focos puntiformes. A cintilografia demonstra captação aumentada apenas no maior nódulo. Nenhum linfonodo cervical é suspeito. A residente planeja fazer PAAF dos dois nódulos porque considera o tamanho o único critério.

a) Diferencie a informação clínica fornecida pelo TSH, pelo ultrassom e pela cintilografia.
b) Explique a prioridade de investigação dos dois nódulos e por que uma possível citologia folicular indeterminada não comprova invasão.`,
    'O TSH informa função global do eixo, enquanto a cintilografia identifica autonomia focal e o ultrassom caracteriza cada lesão e os linfonodos. O nódulo maior hiperfuncionante concordante geralmente não precisa de PAAF rotineira. O menor, não hiperfuncionante e com padrão ultrassonográfico de alto risco, merece avaliação citológica. Invasão capsular ou vascular é característica arquitetural que exige avaliação histológica.', [
      '0,5 ponto por diferenciar função global, captação regional e morfologia.',
      '0,5 ponto por interpretar o nódulo maior como hiperfuncionante concordante.',
      '0,5 ponto por priorizar a PAAF do segundo nódulo conforme seu risco ultrassonográfico.',
      '0,5 ponto por distinguir padrão citológico de invasão capsular ou vascular.'
    ])
]);
