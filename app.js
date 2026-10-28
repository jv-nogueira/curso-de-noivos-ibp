const LESSONS = [
  {
    id: "aula1",
    title: "Lição 1 — Herança Familiar",
    file: "modelos/Aula1-HerancaFamiliar.docx",
    downloadName: "Aula-1-Heranca-Familiar.pdf",
  },
  { id: "aula2", title: "Lição 2 — Perdão", file: "modelos/Aula2-Perdao.docx", downloadName: "Aula-2-Perdao.pdf" },
  { id: "aula3", title: "Lição 3 — Namoro e Noivado", file: "modelos/Aula3-NamoroNoivado.docx", downloadName: "Aula-3-Namoro-Noivado.pdf" },
  { id: "aula4", title: "Lição 4 — Conflitos", file: "modelos/Aula4-Conflitos.docx", downloadName: "Aula-4-Conflitos.pdf" },
  { id: "aula5", title: "Lição 5 — Comunicação", file: "modelos/Aula5-Comunicacao.docx", downloadName: "Aula-5-Comunicacao.pdf" },
  { id: "aula6", title: "Lição 6 — Submissão", file: "modelos/Aula6-Submissao.docx", downloadName: "Aula-6-Submissao.pdf" },
  { id: "aula7", title: "Lição 7 — Liderança", file: "modelos/Aula7-Lideranca.docx", downloadName: "Aula-7-Lideranca.pdf" },
  { id: "aula8", title: "Lição 8 — Vida Espiritual", file: "modelos/Aula8-VidaEspiritual.docx", downloadName: "Aula-8-Vida-Espiritual.pdf" },
  { id: "aula9", title: "Lição 9 — Sogros", file: "modelos/Aula9-Sogros.docx", downloadName: "Aula-9-Sogros.pdf" },
  { id: "aula10", title: "Lição 10 — Finanças", file: "modelos/Aula10-Financas.docx", downloadName: "Aula-10-Financas.pdf" },
  { id: "aula11", title: "Lição 11 — Expectativas das Noivas", file: "modelos/Aula11-ExpectativasNoivas.docx", downloadName: "Aula-11-Expectativas-das-Noivas.pdf" },
  { id: "aula12", title: "Lição 12 — Expectativas dos Noivos", file: "modelos/Aula12-ExpectativasNoivos.docx", downloadName: "Aula-12-Expectativas-dos-Noivos.pdf" },
  { id: "aula13", title: "Lição 13 — Alicerce do Amor", file: "modelos/Aula13-AlicerceDoAmor.docx", downloadName: "Aula-13-Alicerce-do-Amor.pdf" },
];

const lesson1Questions = [
  {
    number: 1,
    fields: [
      { ref: "R1.1", label: "Pai — nome e uma palavra que descreva o relacionamento", type: "textarea" },
      { ref: "R1.2", label: "Mãe — nome e uma palavra que descreva o relacionamento", type: "textarea" },
      { ref: "R1.3", label: "Irmãos — nomes e uma palavra que descreva o relacionamento com cada um", type: "textarea" },
    ],
  },
  {
    number: 2,
    fields: [
      { ref: "R2a", label: "a) Religião dos avós", type: "text" },
      { ref: "R2b", label: "b) Religião dos pais", type: "text" },
      { ref: "R2c", label: "c) Quantas pessoas evangélicas há na sua família?", type: "number" },
      { ref: "R2d", label: "d) Conte uma experiência familiar marcante no aspecto espiritual", type: "textarea" },
      { ref: "R2e", label: "e) Descreva, em poucas palavras, a sua experiência de novo nascimento", type: "textarea" },
    ],
  },
  { number: 3, fields: [{ ref: "R3", label: "Resposta", type: "text" }] },
  { number: 4, fields: [{ ref: "R4", label: "Resposta", type: "textarea" }] },
  {
    number: 5,
    fields: [
      { ref: "R5_opcao", label: "Opção selecionada", type: "radio", options: ["Sim", "Não"] },
      { ref: "R5_justificativa", label: "Por quê?", type: "textarea" },
    ],
  },
  { number: 6, fields: [{ ref: "R6", label: "Resposta", type: "textarea" }] },
  { number: 7, fields: [{ ref: "R7", label: "Resposta", type: "textarea" }] },
  { number: 8, fields: [{ ref: "R8", label: "Resposta", type: "textarea" }] },
  {
    number: 9,
    temperaments: [
      {
        key: "Sang",
        name: "Sanguíneo",
        qualities: ["Comunicativo", "Destacado", "Entusiasta", "Despreocupado", "Afetuoso", "Atraente", "Compassivo", "Cordial", "Loquaz"],
        weaknesses: ["Instável", "Indisciplinado", "Irrequieto", "Irresponsável", "Egocêntrico", "Espalhafatoso", "Exagerado", "Impulsivo"],
      },
      {
        key: "Col",
        name: "Colérico",
        qualities: ["Enérgico", "Resoluto", "Independente", "Vontade forte", "Otimista", "Prático", "Produtivo", "Confiante", "Decidido"],
        weaknesses: ["Cruel", "Astucioso", "Dominador", "Sarcástico", "Desatencioso", "Tempestuoso", "Autosuficiente", "Orgulhoso"],
      },
      {
        key: "Mel",
        name: "Melancólico",
        qualities: ["Habilidoso", "Minucioso", "Sensível", "Leal", "Abnegado", "Idealista", "Analítico", "Perfeccionista", "Talentoso"],
        weaknesses: ["Egoísta", "Tristonho", "Teórico", "Crítico", "Insociável", "Sem espírito prático", "Vingativo", "Inflexível"],
      },
      {
        key: "Fleu",
        name: "Fleumático",
        qualities: ["Calmo", "Tranquilo", "Dependente", "Líder", "Eficiente", "Diplomata", "Complacente", "Humorístico", "Conservador"],
        weaknesses: ["Pão-duro", "Tímido", "Indeciso", "Espectador", "Egoísta", "Autodefensivo", "Desmotivado", "Desconfiado"],
      },
    ],
  },
  { number: 10, fields: [{ ref: "R10", label: "Resposta", type: "textarea" }] },
  { number: 11, fields: [{ ref: "R11", label: "Resposta", type: "textarea" }] },
  {
    number: 12,
    fields: [{ ref: "R12", label: "Resposta", type: "textarea" }],
  },
  {
    number: 13,
    fields: [{
      ref: "R13",
      label: "Selecione uma opção",
      type: "radio",
      options: [
        { label: "Ótimo", marker: "R13_Otimo" },
        { label: "Bom", marker: "R13_Bom" },
        { label: "Regular", marker: "R13_Regular" },
        { label: "Instável", marker: "R13_Instavel" },
        { label: "Ruim", marker: "R13_Ruim" },
        { label: "Péssimo", marker: "R13_Pessimo" },
      ],
    }],
  },
  {
    number: 14,
    fields: [
      {
        ref: "R14_Melhorar",
        label: "Você tem feito alguma coisa para melhorá-lo?",
        type: "radio",
        options: [
          { label: "Sim", marker: "R14_Melhorar_Sim" },
          { label: "Não", marker: "R14_Melhorar_Nao" },
        ],
      },
      {
        ref: "R14_Resultados",
        label: "Tem obtido bons resultados?",
        type: "radio",
        conditional: { ref: "R14_Melhorar", value: "Sim" },
        options: [
          { label: "Sim", marker: "R14_Resultados_Sim" },
          { label: "Não", marker: "R14_Resultados_Nao" },
        ],
      },
    ],
  },
  {
    number: 15,
    fields: [
      { ref: "R15_Pai", label: "Pai", type: "textarea" },
      { ref: "R15_Mae", label: "Mãe", type: "textarea" },
    ],
  },
  {
    number: 16,
    fields: [
      {
        ref: "R16_Opcao",
        label: "Opção selecionada",
        type: "radio",
        options: [
          { label: "Sim", marker: "R16_Opcao_Sim" },
          { label: "Não", marker: "R16_Opcao_Nao" },
        ],
      },
      {
        ref: "R16_PorQue",
        label: "Por quê?",
        type: "textarea",
        conditional: { ref: "R16_Opcao", value: "Sim" },
      },
    ],
  },
  {
    number: 17,
    fields: [{ ref: "R17", label: "Resposta", type: "textarea" }],
  },
  {
    number: 18,
    fields: [
      {
        ref: "R18_Opcao",
        label: "Opção selecionada",
        type: "radio",
        options: [
          { label: "Sim", marker: "R18_Opcao_Sim" },
          { label: "Não", marker: "R18_Opcao_Nao" },
        ],
      },
      {
        ref: "R18_Quais",
        label: "Quais?",
        type: "textarea",
        conditional: { ref: "R18_Opcao", value: "Sim" },
      },
    ],
  },
  { number: 19, fields: [{ ref: "R19", label: "Resposta", type: "textarea" }] },
  { number: 20, fields: [{ ref: "R20", label: "Resposta", type: "textarea" }] },
  { number: 21, fields: [{ ref: "R21", label: "Resposta", type: "textarea" }] },
];

const textField = (ref, label, type = "textarea", conditional) => ({ ref, label, type, conditional });
const markedField = (label, entries, selection = "multiple", ref, conditional) => ({
  label,
  type: "marked",
  options: entries.map((entry) => {
    const [marker, optionLabel] = entry.split("|");
    return { marker, label: optionLabel, value: optionLabel };
  }),
  selection,
  ref,
  conditional,
});
const question = (number, ...fields) => ({ number, fields });

const lessonQuestions = {
  aula1: lesson1Questions,
  aula2: [
    question(1, textField("R1", "Resposta")),
    question(2, markedField("Selecione uma opção", ["R2_Dif|Tenho dificuldade em perdoar.", "R2_Facil|Consigo perdoar facilmente.", "R2_Magoa|Penso que perdoei, mas normalmente guardo mágoas no coração."], "single", "R2")),
    question(3, textField("R3", "Resposta")),
    question(4, markedField("Selecione uma opção", ["R4_Sim|Sim", "R4_Nao|Não"], "single", "R4"), textField("R4_Pessoa", "Se a resposta for afirmativa, pode identificar essa pessoa?", "textarea", { ref: "R4", value: "Sim" })),
    question(5, textField("R5", "Resposta")),
    question(6, markedField("Selecione uma opção", ["R6_Sim|Sim", "R6_Nao|Não", "R6_NaoSei|Não sei"], "single", "R6")),
    question(7, markedField("Selecione todas as opções que se aplicam", ["R7_Acha|Acha que ele(a) sempre sabe que você o(a) perdoou.", "R7_Entende|Entende que poderá demonstrar que o(a) perdoou, dizendo que o(a) ama.", "R7_Acredita|Acredita que atitudes carinhosas irão demonstrar melhor o seu perdão.", "R7_Declara|Declara abertamente por palavras que o(a) perdoou."])),
    question(8, markedField("Selecione uma opção", ["R8_Sim|Sim", "R8_Nao|Não"], "single", "R8")),
    question(9, textField("R9", "Resposta")),
    question(10, markedField("Selecione uma opção", ["R10_Sim|Sim", "R10_Nao|Não"], "single", "R10")),
    question(11, textField("R11", "Resposta")),
    question(12, textField("R12", "Resposta")),
  ],
  aula3: [
    question(1, textField("R1", "Resposta")),
    question(2, textField("R2", "Resposta", "text")),
    question(3, textField("R3", "Resposta", "text")),
    question(4, markedField("Selecione uma opção", ["R4_Sim|Sim", "R4_Nao|Não"], "single", "R4"), textField("R4_PorQue", "Por quê?", "textarea", { ref: "R4", value: "Sim" })),
    question(5, markedField("Selecione todas as opções que se aplicam", ["R5_A|Temos o hábito de orar juntos.", "R5_B|Sempre que possível lemos a Bíblia juntos.", "R5_C|Oramos juntos somente quando temos algo importante a resolver.", "R5_D|Oramos juntos quando temos problemas.", "R5_E|Não temos encontrado tempo para a oração e a leitura da Palavra.", "R5_F|Achamos que apenas no casamento teremos necessidade de orar juntos."])),
    question(6, markedField("Selecione todas as opções que se aplicam", ["R6_A|Estou plenamente envolvido na área para a qual tenho vocação.", "R6_B|Meu(minha) noivo(a) está plenamente envolvido(a) de acordo com a sua vocação.", "R6_C|Tenho total apoio e incentivo do(a) meu(minha) noivo(a) naquilo que realizo na obra do Senhor.", "R6_D|Tenho enfrentado dificuldades com o(a) meu(minha) noivo(a) devido às minhas atividades na igreja.", "R6_E|Estou buscando a vontade de Deus para a minha vida nessa área.", "R6_F|Não tenho interesse em assumir compromissos na igreja, pois sou uma pessoa muito ocupada."])),
    question(7, markedField("Selecione todas as opções que se aplicam", ["R7_A|Somos assíduos aos cultos.", "R7_B|Frequentamos os cultos de vez em quando.", "R7_C|Somos participantes da escola dominical."])),
    question(8, markedField("Selecione todas as opções que se aplicam", ["R8_A|Temos muitas amizades em comum.", "R8_B|Sempre que possível, saímos juntos, com o objetivo de solidificar nossos relacionamentos.", "R8_C|Não temos amigos em comum, por isso raramente saímos com eles.", "R8_D|Apesar de termos muitos amigos, cortamos o relacionamento devido aos ciúmes do(a) meu(minha) noivo(a)."])),
    question(9, markedField("Selecione uma opção", ["R9_Sim|Sim", "R9_Nao|Não"], "single", "R9"), textField("R9_Quais", "Qual(is)?", "textarea", { ref: "R9", value: "Sim" })),
    question(10, markedField("Selecione uma opção", ["R10_Sim|Sim", "R10_Nao|Não"], "single", "R10"), textField("R10_Compartilhe", "Compartilhe algo que aprendeu durante a leitura de algum livro:", "textarea", { ref: "R10", value: "Sim" })),
    question(11, markedField("Selecione todas as opções que se aplicam", ["R11_A|Procura parar imediatamente e mudar seu comportamento.", "R11_B|Conversa a respeito do assunto com ele(a).", "R11_C|Pede perdão a ele(a).", "R11_D|Ora com ele(a), buscando o perdão de Deus.", "R11_E|Não existe esse tipo de dificuldade no nosso relacionamento."])),
    question(12, markedField("Selecione todas as opções que se aplicam", ["R12_A|Não tem nada a ver, pois os tempos mudaram.", "R12_B|Somos pessoas adultas, responsáveis por nossas atitudes, portanto podemos arcar com as consequências.", "R12_C|Os princípios bíblicos, de acordo com 1 Tessalonicenses 4.1-8, são atuais e se aplicam à nossa vida.", "R12_D|Deus tem o melhor para nós, por isso vale a pena esperar.", "R12_E|Apesar de já ter acontecido, Deus nos perdoou mediante nosso arrependimento e mudança de atitude."])),
  ],
  aula4: [
    question(1, markedField("Selecione todas as opções que se aplicam", ["R1_A|Temos conflitos demais um com o outro devido a problemas fúteis.", "R1_B|Dificilmente conseguimos resolver os conflitos de maneira satisfatória.", "R1_C|Quando penso que está tudo resolvido, a situação se complica novamente.", "R1_D|Até o momento, temos obtido vitória nessa área."])),
    question(2, markedField("Selecione uma opção", ["R2_Freq|Frequentemente", "R2_Raram|Raramente"], "single", "R2")),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_Ciumes|Ciúmes", "R3_MinhaFam|Minha família", "R3_FamDele|A família dele(a)", "R3_MeuTrab|Meu trabalho", "R3_TrabDele|O trabalho dele(a)", "R3_Impont|Impontualidade", "R3_Impaciencia|Impaciência", "R3_RelacAnt|Relacionamento anterior", "R3_Heranca|Herança familiar", "R3_Educacao|Educação", "R3_Temperamento|Temperamento", "R3_ComportDele|Comportamento dele(a)", "R3_Amigos|Os amigos"])),
    question(4, markedField("Selecione todas as opções que se aplicam", ["R4_A|Fico impaciente cada vez que surge um novo conflito.", "R4_B|Não consigo parar para ouvi-lo(a).", "R4_C|Procuro conversar com ele(a) a fim de tentar descobrir os motivos do conflito.", "R4_D|Eu me conformo, pois acho que tudo isso faz parte da vida a dois.", "R4_E|Acho melhor deixar para lá; afinal de contas, o tempo vai cuidar de tudo.", "R4_F|Vou embora para a minha casa e deixo para resolver no dia seguinte.", "R4_G|Espero um pouco até recuperar a calma, para depois tentar encontrar a solução.", "R4_H|Reajo imediatamente, sem medir as consequências do meu ato, agindo algumas vezes de forma bastante explosiva.", "R4_I|Faço uso de gritos para tentar intimidá-lo(a).", "R4_J|Sou capaz de reconhecer e confessar a minha contribuição naquele conflito."])),
    question(5, markedField("Selecione todas as opções que se aplicam", ["R5_A|Reconheço que errei e me disponho a mudar de atitude.", "R5_B|Busco o perdão do meu(minha) noivo(a).", "R5_C|Procuro ser compreensivo e me disponho a ajudá-lo(a).", "R5_D|Após chegar a uma conclusão a respeito do problema, tento conscientizá-lo(a) quanto à necessidade de mudança.", "R5_E|Oramos juntos a respeito dos motivos que nos levaram ao conflito.", "R5_F|Perdoo de coração."])),
  ],
  aula5: [
    question(1, markedField("Selecione uma opção", ["R1_Otima|Ótima", "R1_Boa|Boa", "R1_Regular|Regular", "R1_Fraca|Fraca", "R1_Pessima|Péssima"], "single", "R1")),
    question(2, textField("R2", "Resposta")),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_Filhos|Criação de filhos", "R3_Sexual|Vida sexual", "R3_Fam|Interferência familiar", "R3_Financas|Finanças", "R3_PapelMarido|O papel do marido", "R3_PapelEsposa|O papel da esposa", "R3_Passado|Relacionamentos do passado", "R3_Familias|Suas famílias"])),
    question(4, textField("R4", "Resposta")),
    question(5, markedField("Selecione uma opção", ["R5_Sim|Sim", "R5_Nao|Não"], "single", "R5"), textField("R5_PorQue", "Por quê?", "textarea", { ref: "R5", value: "Não" })),
    question(6, markedField("Selecione uma opção", ["R6_Sim|Sim", "R6_Nao|Não"], "single", "R6")),
    question(7, textField("R7", "Resposta")),
    question(8, markedField("Selecione todas as opções que se aplicam", ["R8_A|Procura expressar claramente as suas ideias, estabelecendo assim uma comunicação plena.", "R8_B|Pensa que pode se comunicar por telepatia, exigindo um esforço maior do(a) seu(sua) noivo(a).", "R8_C|Coloca suas ideias pela metade, deixando espaço para inúmeras interpretações.", "R8_D|Acha um desperdício de tempo conversar com ele(a) e diz: “Ele(a) não vai entender!”"])),
    question(9, markedField("Selecione uma opção", ["R9_Sim|Sim", "R9_Nao|Não"], "single", "R9"), textField("R9_PorQue", "Por quê?", "textarea", { ref: "R9", value: "Não" })),
    question(10, markedField("Selecione uma opção", ["R10_Sim|Sim", "R10_Nao|Não"], "single", "R10"), textField("R10_PorQue", "Por quê?", "textarea", { ref: "R10", value: "Não" })),
    question(11, markedField("Selecione uma opção", ["R11_Sim|Sim", "R11_Nao|Não"], "single", "R11")),
    question(12, textField("R12", "Resposta")),
  ],
  aula6: [
    question(1, textField("R1", "Resposta")),
    question(2, textField("R2", "Resposta")),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_A|Reconhecer que a autoridade do marido é instituída por Deus.", "R3_B|Calar sempre, concordando com o marido ainda que ele esteja errado.", "R3_C|Argumentar para auxiliá-lo numa decisão correta, sem ferir a sua autoridade.", "R3_D|Ser sábia para dizer não, quando os princípios de Deus estiverem sendo violados."])),
    question(4, textField("R4", "Resposta")),
    question(5, textField("R5", "Resposta")),
    question(6, textField("R6", "Resposta")),
    question(7, markedField("Selecione uma opção", ["R7_Sim|Sim", "R7_Nao|Não"], "single", "R7"), textField("R7_PorQue", "Por quê?", "textarea", { ref: "R7", value: "Sim" })),
    question(8, textField("R8_A", "a) Como é descrito o valor da mulher nesse texto?"), textField("R8_B", "b) Qual é o comportamento dela em relação ao marido?"), textField("R8_C", "c) Qual é a atitude do marido e dos filhos em relação a essa mulher?"), textField("R8_D", "d) Como é o comportamento dela em relação à sua casa?"), textField("R8_E", "e) Quais eram as atividades dessa mulher, além dos afazeres domésticos?"), textField("R8_F", "f) A que se atribui o sucesso dessa mulher?"), markedField("g) Na sua opinião, essa mulher era submissa ao seu marido?", ["R8_G_Sim|Sim", "R8_G_Nao|Não"], "single", "R8_G"), textField("R8_G_PorQue", "Por quê?", "textarea", { ref: "R8_G", value: "Sim" })),
    question(9, markedField("Selecione uma opção", ["R9_Sim|Sim", "R9_Nao|Não"], "single", "R9"), textField("R9_PorQue", "Por quê?", "textarea", { ref: "R9", value: "Sim" })),
    question(10, textField("R10", "Resposta")),
  ],
  aula7: [
    question(1, textField("R1", "Resposta")),
    question(2, markedField("Selecione todas as opções que se aplicam", ["R2_A|Exigir obediência da esposa.", "R2_B|Amar a sua esposa como Cristo amou a igreja.", "R2_C|Impor a sua autoridade, custe o que custar.", "R2_D|Dar atenção e valor à esposa.", "R2_E|Estar atento às opiniões da esposa.", "R2_F|Achar que em casa o marido tem sempre razão."])),
    question(3, textField("R3", "Resposta")),
    question(4, textField("R4", "Resposta")),
    question(5, textField("R5", "Resposta")),
    question(6, markedField("Selecione uma opção", ["R6_Sim|Sim", "R6_Nao|Não"], "single", "R6"), textField("R6_PorQue", "Por quê?", "textarea", { ref: "R6", value: "Sim" })),
    question(7, textField("R7", "Resposta")),
    question(8, markedField("Selecione todas as opções que se aplicam", ["R8_A|Apesar de o homem ser o sacerdote, quem deve interceder em oração é apenas a mulher, pois “atrás de todo grande homem há sempre uma grande mulher”.", "R8_B|Como profeta, o homem tem a responsabilidade de ministrar a Palavra de Deus à sua esposa e seus filhos.", "R8_C|Quando a mulher tem um salário superior ao do homem, é ela quem deve administrar as finanças da casa.", "R8_D|O marido deve apresentar diariamente ao Senhor a sua esposa e seus filhos.", "R8_E|A mulher precisa ajudar seu marido através do trabalho, pois “quem não trabalha, não come”.", "R8_F|O marido deve estar sempre atento às necessidades da sua esposa.", "R8_G|O marido precisa tratar a sua esposa com dignidade.", "R8_H|O verdadeiro líder é aquele que descobre o segredo de servir."])),
    question(9, markedField("Selecione uma opção", ["R9_Sim|Sim", "R9_Nao|Não"], "single", "R9"), textField("R9_PorQue", "Por quê?", "textarea", { ref: "R9", value: "Sim" })),
    question(10, markedField("Selecione uma opção", ["R10_Sim|Sim", "R10_Nao|Não"], "single", "R10"), textField("R10_PorQue", "Por quê?", "textarea", { ref: "R10", value: "Sim" })),
    question(11, textField("R11", "Resposta")),
    question(12, markedField("Selecione todas as opções que se aplicam", ["R12_Seguro|Seguro", "R12_Temeroso|Temeroso", "R12_Entusiasmado|Entusiasmado", "R12_Tranquilo|Tranquilo", "R12_Preocupado|Preocupado", "R12_Ansioso|Ansioso", "R12_Autossuf|Autossuficiente", "R12_Indiferente|Indiferente", "R12_Dependente|Dependente de Deus."])),
    question(13, textField("R13", "Resposta")),
  ],
  aula8: [
    question(1, textField("R1", "Resposta")),
    question(2, markedField("Selecione todas as opções que se aplicam", ["R2_A|Já li toda a Bíblia.", "R2_B|Leio diariamente.", "R2_C|Leio de vez em quando.", "R2_D|Leio apenas quando tenho tempo sobrando.", "R2_E|Faço estudos dos textos lidos.", "R2_F|Memorizo versículos.", "R2_G|Sinto prazer na leitura da Bíblia.", "R2_H|Faço a leitura por obrigação.", "R2_I|Oro antes de ler, pedindo ao Espírito Santo que me ensine."])),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_A|Separo diariamente um tempo.", "R3_B|Oro somente quando estou em apuros.", "R3_C|Tenho o hábito de orar antes das refeições.", "R3_D|Oro sem cessar: no ônibus, no trabalho, na escola, na rua etc.", "R3_E|Separo um tempo exclusivo para a intercessão.", "R3_F|Tenho orado pelo meu casamento.", "R3_G|Creio que Deus muda o curso das coisas através da oração.", "R3_H|Tenho prazer na prática da oração.", "R3_I|Tenho experiências de vitórias alcançadas através da oração.", "R3_J|Enfrento dificuldades para orar.", "R3_K|Tenho o hábito de sempre orar antes de sair de casa."])),
    question(4, markedField("Selecione todas as opções que se aplicam", ["R4_A|Procuro mostrar Jesus através de minhas atitudes.", "R4_B|Meu comportamento no namoro é uma amostra do caráter de Cristo em minha vida.", "R4_C|As pessoas logo me identificam como cristão.", "R4_D|Posso seguir as ideias e comportamentos dos meus colegas não-crentes sem nenhum problema."])),
    question(5, markedField("Selecione todas as opções que se aplicam", ["R5_A|Sempre tomo a iniciativa no tocante à leitura e ao estudo da Palavra.", "R5_B|Tenho o hábito de orar regularmente com o(a) meu(minha) noivo(a).", "R5_C|Sinto vergonha de orar perto dele(a).", "R5_D|Meu(minha) noivo(a) me inspira a estar mais perto do Senhor.", "R5_E|Acho que oração e leitura da Bíblia não fazem parte de um relacionamento de namoro e noivado.", "R5_F|Valorizo trabalhar junto com o(a) meu(minha) noivo(a) na obra do Senhor.", "R5_G|Eu me sinto incomodado(a) ao ver o(a) meu(minha) noivo(a) dedicando tempo no serviço do Senhor.", "R5_H|Apesar de não me envolver, apoio e incentivo as atividades do(a) meu(minha) noivo(a) na igreja.", "R5_I|Não gosto de orar junto com ele(a)."])),
    question(6, textField("R6", "Resposta")),
    question(7, markedField("Selecione todas as opções que se aplicam", ["R7_A|Investir na hora devocional.", "R7_B|Selecionar as amizades.", "R7_C|Ser frequente aos cultos.", "R7_D|Investir na reunião doméstica.", "R7_E|Viver uma vida de acordo com os princípios da Palavra de Deus.", "R7_F|Aguardar que o meu cônjuge tome a iniciativa quanto ao culto doméstico."])),
    question(8, textField("R8", "Resposta")),
  ],
  aula9: [
    question(1, textField("R1", "Resposta")),
    question(2, markedField("Com o seu sogro?", ["R2_Sogro_Sim|Sim", "R2_Sogro_Nao|Não"], "single", "R2_Sogro"), markedField("Com a sua sogra?", ["R2_Sogra_Sim|Sim", "R2_Sogra_Nao|Não"], "single", "R2_Sogra")),
    question(3, textField("R3", "Resposta")),
    question(4, textField("R4", "Resposta")),
    question(5, textField("R5", "Resposta")),
    question(6, markedField("Selecione uma opção", ["R6_Sim|Sim", "R6_Nao|Não"], "single", "R6"), textField("R6_PorQue", "Por quê?", "textarea", { ref: "R6", value: "Não" })),
    question(7, textField("R7", "Resposta")),
    question(8, markedField("Selecione uma opção", ["R8_Sim|Sim", "R8_Nao|Não"], "single", "R8"), textField("R8_PorQue", "Por quê?", "textarea", { ref: "R8", value: "Sim" })),
    question(9, textField("R9", "Resposta")),
    question(10, markedField("Selecione uma opção", ["R10_Sim|Sim", "R10_Nao|Não"], "single", "R10"), textField("R10_Compartilhar", "Você tem liberdade de compartilhar essa dificuldade, para que esta possa ser trabalhada?", "textarea", { ref: "R10", value: "Sim" })),
    question(11, markedField("Selecione uma opção", ["R11_Sim|Sim", "R11_Nao|Não"], "single", "R11"), textField("R11_Tempo", "Há quanto tempo?", "text", { ref: "R11", value: "Sim" })),
    question(12, textField("R12", "Resposta")),
    question(13, markedField("Selecione uma opção", ["R13_Sim|Sim", "R13_Nao|Não"], "single", "R13"), markedField("Já conversou com o(a) seu(sua) noivo(a) a esse respeito?", ["R13_Conv_Sim|Sim", "R13_Conv_Nao|Não"], "single", "R13_Conv")),
    question(14, markedField("Selecione uma opção", ["R14_Sim|Sim", "R14_Nao|Não"], "single", "R14")),
    question(15, markedField("Selecione uma opção", ["R15_Sim|Sim", "R15_Nao|Não"], "single", "R15"), textField("R15_Local", "Local:", "text", { ref: "R15", value: "Sim" })),
    question(16, textField("R16", "Resposta")),
    question(17, textField("R17", "Resposta")),
    question(18, textField("R18", "Resposta")),
    question(19, textField("R19", "Resposta")),
  ],
  aula10: [
    question(1, markedField("Selecione todas as opções que se aplicam", ["R1_A|Sou dizimista fiel.", "R1_B|Tenho o hábito de contribuir com missões.", "R1_C|Acho que apenas efetuar a entrega do dízimo é suficiente.", "R1_D|Aplico a mordomia cristã fielmente quanto aos bens que possuo.", "R1_E|Entrego o dízimo de vez em quando.", "R1_F|Ainda não estou completamente convencido da necessidade de entregar o dízimo.", "R1_G|Entendo que não é necessário contribuir com missões.", "R1_H|Tenho alegria no coração em entregar o dízimo e contribuir com as ofertas.", "R1_I|Tenho dificuldade em entregar o dízimo, principalmente quando minha situação financeira se aperta."])),
    question(2, markedField("Selecione todas as opções que se aplicam", ["R2_A|Eu me considero um(a) bom(a) administrador(a).", "R2_B|Normalmente consigo economizar uma parte do meu salário.", "R2_C|Sou gastador(a), descontrolado(a), mão-aberta.", "R2_D|Não ligo para o dinheiro.", "R2_E|Tenho dificuldades em gastar dinheiro até comigo.", "R2_F|Normalmente procuro avaliar se vale a pena efetuar determinado gasto de maior valor."])),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_A|Sou um(a) comprador(a) compulsivo(a).", "R3_B|O que mais me interessa é a satisfação de adquirir determinado bem, não importa o valor.", "R3_C|Tenho o hábito de avaliar bem se realmente tenho necessidade de adquirir determinado produto.", "R3_D|Não consigo ficar pelo menos um mês sem comprar algo para mim.", "R3_E|Somente compro após ter certeza de que estou pagando um preço justo pelo produto.", "R3_F|Quando desejo adquirir algo, não sossego até conseguir.", "R3_G|Gosto de comprar presentes caros.", "R3_H|Não tenho o hábito de presentear nem as pessoas mais próximas.", "R3_I|Gosto sempre de me vestir de acordo com a última moda.", "R3_J|Sou descontrolado, por isso estou sempre no vermelho no banco.", "R3_K|Não consigo utilizar o cartão de crédito adequadamente.", "R3_L|Normalmente faço as compras sem me preocupar com o valor dos produtos."])),
    question(4, markedField("Selecione todas as opções que se aplicam", ["R4_A|Para evitar constrangimento, normalmente aceito ser fiador(a), quando solicitado.", "R4_B|Tenho o hábito de emprestar-lhes dinheiro.", "R4_C|Eu me acostumei a pedir dinheiro emprestado a eles.", "R4_D|Gosto de fazer a política da boa vizinhança e, normalmente, pago as contas quando saímos.", "R4_E|Tenho coragem para dizer não quando solicitado a ser fiador.", "R4_F|Ao emprestar dinheiro, disponho-me a perdoar a dívida se for necessário.", "R4_G|Sou pontual com meus compromissos financeiros."])),
    question(5, markedField("Marque as afirmativas verdadeiras; deixe desmarcadas as falsas.", ["R5_A|É ideal que o casal tenha conta bancária conjunta.", "R5_B|O casal deve fazer o orçamento familiar para equilibrar as finanças.", "R5_C|O marido deve separar uma quantia para a sua esposa, deixando que ela gaste como quiser.", "R5_D|O marido é o responsável pelas finanças do lar.", "R5_E|Não há problemas se o casal tiver contas bancárias separadas.", "R5_F|O salário que o marido ganha é só dele.", "R5_G|Não é importante que a esposa saiba qual é o salário do marido.", "R5_H|O salário da esposa deve ser gasto da maneira que ela bem entender, sem dar satisfações ao marido.", "R5_I|O dinheiro que cada um ganha deve ser somado para o bom andamento das finanças do lar.", "R5_J|É responsabilidade do marido cuidar das finanças do casal."])),
  ],
  aula11: [
    question(1, markedField("Selecione todas as opções que se aplicam", ["R1_A|Acho que meu noivo será um bom líder espiritual.", "R1_B|Tenho temores de que meu noivo não assuma seu papel de líder espiritual no lar.", "R1_C|Desejo que o nosso casamento glorifique o nome do Senhor.", "R1_D|Buscarei sempre na Palavra de Deus as respostas para a nossa vida.", "R1_E|Serei frequente à igreja.", "R1_F|Compartilharei minhas experiências espirituais com o meu marido.", "R1_G|Faremos do nosso lar um local de adoração ao Senhor."])),
    question(2, markedField("Selecione todas as opções que se aplicam", ["R2_A|Farei do meu lar um ambiente agradável, limpo e organizado.", "R2_B|Acho que, pelo fato de eu trabalhar fora, a afirmativa acima não é de minha responsabilidade.", "R2_C|Buscarei ser sábia para conquistar a cooperação do meu marido nessa área.", "R2_D|Acho que terei o direito de impor a ele tarefas domésticas.", "R2_E|Não gosto de cozinhar e acho que não terei interesse em aprender.", "R2_F|Eu me esforçarei para agradar ao meu marido através de pratos saborosos.", "R2_G|Temo que meu marido compare a minha comida com a da mãe dele.", "R2_H|Se isso acontecer, saberei encarar a situação com uma boa dose de humor.", "R2_I|Espero que ele seja discreto e compreensivo o bastante para evitar essa comparação.", "R2_J|Espero que meu marido seja compreensivo e tenha disposição em me auxiliar nos afazeres da casa, vivendo assim a vida comum do lar."])),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_A|Espero que meu marido seja um bom administrador das nossas finanças.", "R3_B|Buscaremos ser dizimistas fiéis.", "R3_C|Teremos um orçamento mensal, procurando evitar surpresas desagradáveis.", "R3_D|Estabeleceremos prioridades de compras.", "R3_E|Todos os meses, economizaremos certa quantia, visando a projetos maiores ou situações de emergência.", "R3_F|Gastaremos o que tivermos em mãos, procurando viver o presente da melhor maneira possível.", "R3_G|Espero ser uma boa auxiliadora, procurando evitar dívidas desnecessárias e sendo econômica, contribuindo para o equilíbrio da nossa vida financeira.", "R3_H|Pretendo continuar trabalhando fora, não importa a fase da nossa vida, buscando manter um determinado padrão.", "R3_I|Terei disposição em abrir mão do meu emprego em favor dos nossos filhos nos seus primeiros anos de vida."])),
    question(4, markedField("Selecione todas as opções que se aplicam", ["R4_A|Espero ser uma eterna namorada para o meu marido.", "R4_B|Esperarei pelo meu marido ao final do dia com boa dose de emoção.", "R4_C|Espero continuar recebendo flores e cartões.", "R4_D|Espero que nossas datas especiais continuem sendo comemoradas.", "R4_E|Procurarei manter acesa a chama do romantismo no nosso relacionamento.", "R4_F|Aproveitaremos os nossos momentos livres da melhor maneira possível.", "R4_G|Separaremos um tempo para o lazer.", "R4_H|Teremos uma vida sexual plena.", "R4_I|Nosso relacionamento manifestará a glória de Deus.", "R4_J|Vamos contagiar e abençoar aqueles que estiverem à nossa volta.", "R4_K|Espero corresponder às expectativas do meu marido no tocante ao relacionamento sexual.", "R4_L|Espero que meu marido seja paciente, educado e amoroso no que diz respeito ao relacionamento sexual.", "R4_M|Teremos domínio sobre a televisão para que não ocupe espaço de prioridades na nossa vida.", "R4_N|O que meu marido tiver para me falar será mais importante do que a televisão."])),
    question(5, markedField("Selecione todas as opções que se aplicam", ["R5_A|Espero não ter interferência dos meus sogros e/ou familiares do meu marido no nosso casamento.", "R5_B|Espero não ter interferência dos meus pais e familiares no nosso casamento.", "R5_C|Terei o meu marido como prioridade principal em minha vida, depois de Jesus, esperando o mesmo da parte dele para comigo.", "R5_D|Passaremos momentos preciosos com os nossos familiares, sempre que possível, sem negligenciar com isso a nossa vida como casal."])),
    question(6, markedField("Selecione todas as opções que se aplicam", ["R6_A|Procuraremos estabelecer amizades com outros casais com quem compartilharemos experiências a fim de nos abençoar mutuamente.", "R6_B|Espero que meu marido tenha consciência de que o seu relacionamento com os amigos solteiros já não será tão intenso quanto antes do casamento.", "R6_C|Saberemos discernir quando uma amizade apresentar ameaças à paz do nosso lar."])),
    question(7, markedField("Selecione todas as opções que se aplicam", ["R7_A|Faremos um planejamento familiar, visando a definir o momento certo para que tenhamos os nossos filhos.", "R7_B|Procuraremos ser um bom exemplo para os nossos filhos em todas as áreas da nossa vida.", "R7_C|Teremos o compromisso de lhes ensinar a Palavra do Senhor, levando-os à experiência de salvação.", "R7_D|Não seremos negligentes quanto à educação dos nossos filhos, transferindo essa responsabilidade para terceiros (avós, babás, tias, creches, televisão etc.).", "R7_E|Procuraremos buscar na Bíblia conhecimento e sabedoria para podermos aplicar a verdadeira disciplina aos nossos filhos, visando à formação de um caráter saudável."])),
  ],
  aula12: [
    question(1, markedField("Selecione todas as opções que se aplicam", ["R1_A|Serei um bom líder espiritual no meu lar.", "R1_B|Procurarei assumir minhas responsabilidades como sacerdote e profeta da minha casa.", "R1_C|Desejo que o nosso casamento glorifique o nome do Senhor.", "R1_D|Buscarei sempre na Palavra de Deus as respostas para a nossa vida.", "R1_E|Serei frequente à igreja.", "R1_F|Compartilharei minhas experiências espirituais com a minha esposa.", "R1_G|Faremos do nosso lar um local de adoração ao Senhor.", "R1_H|Receio ter dificuldades para ministrar a Palavra de Deus em meu lar.", "R1_I|Como minha esposa tem mais facilidades nessa área, atribuirei a ela a responsabilidade de ministrar a Palavra de Deus na nossa casa."])),
    question(2, markedField("Selecione todas as opções que se aplicam", ["R2_A|Buscarei de Deus sabedoria para ter condições de viver a vida comum do lar.", "R2_B|Na medida do possível, terei disposição em abençoar a minha esposa no tocante à cooperação nas tarefas da casa.", "R2_C|Tenho receio de que minha esposa não corresponda às minhas expectativas quanto ao aspecto culinário.", "R2_D|Sou exigente, e minha esposa precisa saber cozinhar bem.", "R2_E|Saberei entender as dificuldades da minha esposa na cozinha, caso ocorram.", "R2_F|Procurarei estar atento quanto à manutenção da nossa casa, para que todos os utensílios domésticos estejam sempre funcionando perfeitamente.", "R2_G|Estarei atento para que nenhum aparelho permaneça defeituoso além do tempo necessário para que um técnico faça o reparo."])),
    question(3, markedField("Selecione todas as opções que se aplicam", ["R3_A|Espero ser um bom administrador das nossas finanças.", "R3_B|Buscaremos ser dizimistas fiéis.", "R3_C|Teremos um orçamento mensal, procurando evitar surpresas desagradáveis.", "R3_D|Estabeleceremos prioridades de compras.", "R3_E|Todos os meses, economizaremos certa quantia, visando a projetos maiores ou situações de emergência.", "R3_F|Gastaremos o que tivermos em mãos, procurando viver o presente da melhor maneira possível.", "R3_G|Serei responsável quanto às provisões da casa.", "R3_H|Terei plena consciência das minhas responsabilidades para com as nossas finanças."])),
    question(4, markedField("Selecione todas as opções que se aplicam", ["R4_A|Procurarei manter acesa a chama do romantismo no nosso relacionamento.", "R4_B|Aproveitaremos os nossos momentos livres da melhor maneira possível.", "R4_C|Separaremos um tempo para o lazer.", "R4_D|Teremos uma vida sexual plena.", "R4_E|Nosso relacionamento manifestará a glória de Deus.", "R4_F|Vamos contagiar e abençoar aqueles que estiverem à nossa volta.", "R4_G|Espero corresponder às expectativas da minha esposa no tocante ao relacionamento sexual.", "R4_H|Eu me esforçarei para me lembrar das nossas datas especiais, a fim de comemorá-las.", "R4_I|Teremos domínio sobre a televisão para que não ocupe espaço de prioridades na nossa vida.", "R4_J|Terei consideração para com a minha esposa, procurando suprir todas as suas necessidades."])),
    question(5, markedField("Selecione todas as opções que se aplicam", ["R5_A|Espero não ter interferência dos meus sogros e/ou familiares da minha esposa no nosso casamento.", "R5_B|Espero não ter interferência dos meus pais e familiares no nosso casamento.", "R5_C|Terei a minha esposa como prioridade principal em minha vida, depois de Jesus, esperando o mesmo da parte dela para comigo.", "R5_D|Passaremos momentos preciosos com os nossos familiares, sempre que possível, sem negligenciar com isso a nossa vida como casal."])),
    question(6, markedField("Selecione todas as opções que se aplicam", ["R6_A|Procuraremos estabelecer amizades com outros casais com quem compartilharemos experiências a fim de nos abençoar mutuamente.", "R6_B|Tenho consciência de que o relacionamento com os meus amigos solteiros já não será tão intenso quanto ao que era antes do casamento.", "R6_C|Saberemos discernir quando uma amizade apresentar ameaças à paz do nosso lar."])),
    question(7, markedField("Selecione todas as opções que se aplicam", ["R7_A|Faremos um planejamento familiar, visando a definir o momento certo para que tenhamos os nossos filhos.", "R7_B|Procuraremos ser um bom exemplo para os nossos filhos em todas as áreas da nossa vida.", "R7_C|Teremos o compromisso de lhes ensinar a Palavra do Senhor, levando-os à experiência de salvação.", "R7_D|Não seremos negligentes quanto à educação dos nossos filhos, transferindo essa responsabilidade para terceiros (avós, babás, tias, creches, televisão etc.).", "R7_E|Procuraremos buscar na Bíblia conhecimento e sabedoria para podermos aplicar a verdadeira disciplina aos nossos filhos, visando à formação de um caráter saudável."])),
  ],
  aula13: Array.from({ length: 26 }, (_, index) => {
    const number = index + 1;
    const marker = `R${number}`;
    return question(number, markedField("Escolha uma opção", [`${marker}_1|Sim`, `${marker}_2|Às vezes`, `${marker}_3|Não`], "single", marker));
  }),
};

const form = document.querySelector("#questionnaire");
const questionsContainer = document.querySelector("#questions");
const previewDialog = document.querySelector("#preview-dialog");
const pdfPages = document.querySelector("#pdf-pages");
const previewStatus = document.querySelector("#preview-status");
const formStatus = document.querySelector("#form-status");
const downloadStatus = document.querySelector("#download-status");
const previewButton = document.querySelector("#preview-button");
const closePreviewButton = document.querySelector("#close-preview-button");
const downloadButton = document.querySelector("#download-button");
const shareButton = document.querySelector("#share-button");
const lessonSelect = document.querySelector("#lesson-select");
let preparedDocument = null;
let currentQuestions;
const questionTitleCache = new Map();

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderField(field) {
  const ref = escapeHtml(field.ref || field.options?.[0]?.marker || "field");
  const id = `field-${ref}`;
  let control;
  if (field.type === "marked") {
    const inputType = field.selection === "single" ? "radio" : "checkbox";
    const options = field.options.map((option) => {
      const dataRef = field.ref ? `data-ref="${escapeHtml(field.ref)}"` : "";
      return `<label class="choice"><input type="${inputType}" name="${ref}" ${dataRef} data-marker="${escapeHtml(option.marker)}" value="${escapeHtml(option.value)}"><span>${escapeHtml(option.label)}</span></label>`;
    }).join("");
    control = `<div class="radio-list" role="group" aria-label="${escapeHtml(field.label)}">${options}</div>`;
  } else if (field.type === "radio") {
    const options = field.options.map((option) => {
      const choice = typeof option === "string" ? { label: option, value: option } : option;
      const value = choice.value || choice.label;
      const marker = choice.marker ? `data-marker="${escapeHtml(choice.marker)}"` : "";
      return `<label class="choice"><input type="radio" name="${ref}" data-ref="${ref}" value="${escapeHtml(value)}" ${marker}><span>${escapeHtml(choice.label)}</span></label>`;
    }).join("");
    control = `<div class="radio-list" role="group" aria-label="${escapeHtml(field.label)}">${options}</div>`;
  } else if (field.type === "textarea") {
    control = `<textarea id="${id}" name="${ref}" data-ref="${ref}" rows="3"></textarea>`;
  } else {
    const type = field.type === "number" ? "number" : "text";
    const min = field.type === "number" ? ' min="0" step="1" inputmode="numeric"' : "";
    control = `<input id="${id}" name="${ref}" data-ref="${ref}" type="${type}"${min}>`;
  }
  const conditional = field.conditional
    ? ` conditional" data-parent-ref="${escapeHtml(field.conditional.ref)}" data-condition-value="${escapeHtml(field.conditional.value)}" hidden`
    : "";
  return `<div class="field${conditional}"><span class="field-caption">${escapeHtml(field.label)}</span>${control}</div>`;
}

function renderQuestion(question) {
  const fields = question.fields.map(renderField).join("");
  return `<section class="question-card card" aria-labelledby="question-${question.number}">
    <div class="question-heading">
      <span class="question-number" aria-hidden="true">${question.number}</span>
      <h2 class="question-title" id="question-${question.number}">${escapeHtml(question.title)}</h2>
    </div>
    <div class="field-list">${fields}</div>
  </section>`;
}

function renderTemperaments(question) {
  const groups = question.temperaments.map((temperament) => {
    const renderTraits = (traits, type) => traits.map((trait, index) => {
      const marker = `R9_${type}_${temperament.key}_${index + 1}`;
      return `<label class="trait-choice"><input type="checkbox" data-marker="${marker}" data-trait="${escapeHtml(trait)}" data-temperament="${escapeHtml(temperament.name)}"><span>${escapeHtml(trait)}</span></label>`;
    }).join("");
    return `<article class="temperament-card">
      <h3>${escapeHtml(temperament.name)}</h3>
      <p class="temperament-kind">Qualidades</p>
      <div class="trait-list">${renderTraits(temperament.qualities, "Q")}</div>
      <p class="temperament-kind">Pontos fracos</p>
      <div class="trait-list">${renderTraits(temperament.weaknesses, "PF")}</div>
    </article>`;
  }).join("");
  return `<section class="question-card card" aria-labelledby="question-${question.number}">
    <div class="question-heading">
      <span class="question-number" aria-hidden="true">${question.number}</span>
      <h2 class="question-title" id="question-${question.number}">${escapeHtml(question.title)}</h2>
    </div>
    <div class="temperament-grid">${groups}</div>
  </section>`;
}

async function loadQuestionTitles(lesson, questions) {
  if (questionTitleCache.has(lesson.id)) return questionTitleCache.get(lesson.id);

  const response = await fetch(new URL(lesson.file, document.baseURI));
  if (!response.ok) {
    throw new Error(`Não foi possível carregar o modelo Word (HTTP ${response.status}).`);
  }
  if (!window.JSZip) {
    throw new Error("A biblioteca do documento não carregou. Verifique sua conexão e tente novamente.");
  }
  const zip = await window.JSZip.loadAsync(await response.arrayBuffer());
  const documentFile = zip.file("word/document.xml");
  if (!documentFile) throw new Error("O modelo não contém o documento Word esperado.");

  const parser = new DOMParser();
  const xml = parser.parseFromString(await documentFile.async("string"), "application/xml");
  if (xml.querySelector("parsererror")) throw new Error("O modelo Word contém XML inválido.");

  const wordNamespace = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const questionTitles = new Map();
  Array.from(xml.getElementsByTagNameNS(wordNamespace, "p")).forEach((paragraph) => {
    const text = Array.from(paragraph.getElementsByTagNameNS(wordNamespace, "t"))
      .map((node) => node.textContent)
      .join("")
      .replace(/\s+/g, " ")
      .trim();
    const match = text.match(/^(\d+)\.\s+(.+)$/);
    if (!match) return;

    const number = Number(match[1]);
    if (questionTitles.has(number)) {
      throw new Error(`O modelo contém mais de um enunciado para a questão ${number}.`);
    }
    questionTitles.set(number, match[2]);
  });

  if (questionTitles.size !== questions.length
    || questions.some((question) => !questionTitles.has(question.number))) {
    throw new Error("Não foi possível associar todos os enunciados do modelo às perguntas do formulário.");
  }

  questionTitleCache.set(lesson.id, questionTitles);
  return questionTitles;
}

function selectedRadioValue(ref) {
  return form.querySelector(`input[type="radio"][data-ref="${CSS.escape(ref)}"]:checked`)?.value || "";
}

function syncConditionalFields() {
  form.querySelectorAll(".conditional").forEach((field) => {
    const isVisible = selectedRadioValue(field.dataset.parentRef) === field.dataset.conditionValue;
    field.hidden = !isVisible;
    if (!isVisible) {
      field.querySelectorAll("input, textarea, select").forEach((control) => {
        if (control.type === "radio" || control.type === "checkbox") {
          control.checked = false;
        } else {
          control.value = "";
        }
      });
    }
  });
}

function buildAnswerData() {
  syncConditionalFields();
  const textAnswers = {};
  const optionAnswers = {};

  form.querySelectorAll("[data-ref]").forEach((control) => {
    const ref = control.dataset.ref;
    if (control.type === "radio") {
      if (!Object.prototype.hasOwnProperty.call(textAnswers, ref)) textAnswers[ref] = "";
      if (control.checked) textAnswers[ref] = control.value;
      return;
    }
    const value = control.value.trim();
    textAnswers[ref] = value;
  });

  form.querySelectorAll('input[type="radio"][data-marker]').forEach((control) => {
    optionAnswers[control.dataset.marker] = control.checked;
  });

  form.querySelectorAll('input[type="checkbox"][data-marker]').forEach((control) => {
    optionAnswers[control.dataset.marker] = control.checked;
  });

  return { textAnswers, optionAnswers };
}

async function getPreparedPdf() {
  const answerData = buildAnswerData();
  const answerSignature = JSON.stringify({
    lesson: lessonSelect.value,
    answers: answerData,
  });
  if (preparedDocument?.answerSignature === answerSignature && preparedDocument.pdfBlob) {
    return { pdfBlob: preparedDocument.pdfBlob, lesson: preparedDocument.lesson };
  }

  const documentResult = await createFilledDocument(answerData);
  const pdfBytes = await convertDocumentToPdf(documentResult.blob);
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
  preparedDocument = { ...documentResult, pdfBlob, answerSignature };
  return { pdfBlob, lesson: documentResult.lesson };
}

function downloadPdf(pdfBlob, lesson) {
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = lesson.downloadName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function replaceRange(textNodes, start, end, replacement) {
  let offset = 0;
  let firstNode = -1;
  let lastNode = -1;
  let firstLocal = 0;
  let lastLocal = 0;

  for (let index = 0; index < textNodes.length; index += 1) {
    const length = textNodes[index].textContent.length;
    if (firstNode < 0 && start >= offset && start < offset + length) {
      firstNode = index;
      firstLocal = start - offset;
    }
    if (end - 1 >= offset && end - 1 < offset + length) {
      lastNode = index;
      lastLocal = end - 1 - offset;
      break;
    }
    offset += length;
  }
  if (firstNode < 0 || lastNode < 0) {
    throw new Error("Não foi possível localizar um marcador no modelo Word.");
  }

  if (firstNode === lastNode) {
    const text = textNodes[firstNode].textContent;
    textNodes[firstNode].textContent = text.slice(0, firstLocal) + replacement + text.slice(lastLocal + 1);
    return;
  }

  const firstText = textNodes[firstNode].textContent;
  const lastText = textNodes[lastNode].textContent;
  textNodes[firstNode].textContent = firstText.slice(0, firstLocal) + replacement;
  for (let index = firstNode + 1; index < lastNode; index += 1) {
    textNodes[index].textContent = "";
  }
  textNodes[lastNode].textContent = lastText.slice(lastLocal + 1);
}

function replaceDocumentMarkers(xmlText, answerData) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");
  if (xml.querySelector("parsererror")) {
    throw new Error("O modelo Word contém XML inválido.");
  }

  const wordNamespace = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const paragraphs = Array.from(xml.getElementsByTagNameNS(wordNamespace, "p"));
  const markerPattern = /\[([A-Za-z0-9_.]+)\](?:\s*\(\s*Sim\s*\/\s*Não\s*\))?|\(\s*(R[A-Za-z0-9_.]+)\s*\)/g;
  paragraphs.forEach((paragraph) => {
    const textNodes = Array.from(paragraph.getElementsByTagNameNS(wordNamespace, "t"));
    const paragraphText = textNodes.map((node) => node.textContent).join("");
    const matches = Array.from(paragraphText.matchAll(markerPattern));
    matches.reverse().forEach((match) => {
      const isOption = Boolean(match[2]);
      const marker = isOption ? match[2] : match[1];
      let replacement;
      if (isOption) {
        if (!Object.prototype.hasOwnProperty.call(answerData.optionAnswers, marker)) {
          throw new Error(`A opção ${marker} não está associada a um campo do formulário.`);
        }
        replacement = answerData.optionAnswers[marker] ? "(X)" : "( )";
      } else {
        if (!Object.prototype.hasOwnProperty.call(answerData.textAnswers, marker)) {
          throw new Error(`A resposta ${marker} não está associada a um campo do formulário.`);
        }
        const radioField = currentQuestions
          .flatMap((question) => question.fields || [])
          .find((field) => field.ref === marker && field.type === "radio");
        if (radioField) {
          replacement = radioField.options.map((option) => {
            const choice = typeof option === "string" ? { label: option, value: option } : option;
            const value = choice.value || choice.label;
            return `(${answerData.textAnswers[marker] === value ? "X" : " "}) ${choice.label}`;
          }).join(" ");
        } else {
          replacement = (answerData.textAnswers[marker] || "").replace(/\r\n?|\n/g, " ");
        }
      }
      replaceRange(textNodes, match.index, match.index + match[0].length, replacement);
    });
  });
  return new XMLSerializer().serializeToString(xml);
}

async function createFilledDocument(answerData) {
  if (!window.JSZip) {
    throw new Error("A biblioteca do documento não carregou. Verifique sua conexão e tente novamente.");
  }
  const lesson = LESSONS.find((item) => item.id === lessonSelect.value);
  if (!lesson) throw new Error("Selecione uma lição disponível.");

  if (window.location.protocol === "file:") {
    throw new Error("Abra o site por um servidor local ou pelo GitHub Pages. O navegador não permite carregar o modelo Word diretamente de um arquivo local.");
  }

  let response;
  try {
    response = await fetch(new URL(lesson.file, document.baseURI));
  } catch (error) {
    throw new Error("Não foi possível acessar o modelo Word. Confira se o site está aberto por um servidor local ou pelo GitHub Pages e tente novamente.");
  }
  if (!response.ok) {
    throw new Error(`Não foi possível carregar o modelo Word (HTTP ${response.status}).`);
  }
  const zip = await window.JSZip.loadAsync(await response.arrayBuffer());
  const documentFile = zip.file("word/document.xml");
  if (!documentFile) throw new Error("O modelo não contém o documento Word esperado.");
  const documentXml = await documentFile.async("string");
  zip.file("word/document.xml", replaceDocumentMarkers(documentXml, answerData));
  return { blob: await zip.generateAsync({ type: "blob" }), lesson };
}

function requirePreviewLibraries() {
  if (!window.docx?.renderAsync) {
    throw new Error("A biblioteca para exibir o Word não carregou. Verifique sua conexão e tente novamente.");
  }
  if (typeof window.html2pdf !== "function") {
    throw new Error("A biblioteca para converter o documento em PDF não carregou. Verifique sua conexão e tente novamente.");
  }
}

function preserveTemplateFont(source) {
  // Os modelos usam Arial 12 pt no Word, mas docx-preview pode aplicar o tamanho do tema.
  source.querySelectorAll(".docx span").forEach((span) => {
    span.style.setProperty("font-family", "Arial, sans-serif", "important");
    span.style.setProperty("font-size", "12pt", "important");
    span.style.setProperty("word-break", "normal", "important");
    span.style.setProperty("overflow-wrap", "normal", "important");
    span.style.setProperty("hyphens", "none", "important");
  });
}

async function convertDocumentToPdf(docxBlob) {
  requirePreviewLibraries();
  const source = document.createElement("div");
  const styleContainer = document.createElement("div");
  const previewWasOpen = previewDialog.open;
  const previousScrollPosition = window.scrollY;
  source.className = "docx-conversion-source";
  if (!previewWasOpen) {
    previewStatus.textContent = "Gerando o PDF…";
    previewDialog.showModal();
  }
  window.scrollTo(0, 0);
  document.body.prepend(source);
  document.head.append(styleContainer);

  try {
    await window.docx.renderAsync(docxBlob, source, styleContainer, {
      className: "docx",
      inWrapper: true,
      ignoreWidth: false,
      ignoreHeight: false,
      breakPages: true,
      useBase64URL: true,
    });
    preserveTemplateFont(source);
    await document.fonts.ready;
    await Promise.all(Array.from(source.querySelectorAll("img")).map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    }));
    source.getBoundingClientRect();
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (!source.textContent.trim() || source.scrollHeight === 0) {
      throw new Error("O Word não terminou de ser renderizado. Tente abrir a prévia novamente.");
    }

    //previewStatus.textContent = "Convertendo o documento Word para PDF…";
    const worker = window.html2pdf()
      .set({
        margin: 0,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"], avoid: ["table", "tr", "img"] },
      })
      .from(source);
    await worker.toCanvas();
    const canvas = await worker.get("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("O navegador não conseguiu preparar o conteúdo do PDF.");
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let contentPixelCount = 0;
    for (let index = 0; index < pixels.length; index += 16) {
      if (pixels[index] < 240 || pixels[index + 1] < 240 || pixels[index + 2] < 240) {
        contentPixelCount += 1;
      }
    }
    if (contentPixelCount < 20) {
      throw new Error("O documento ficou vazio durante a conversão. Tente gerar o PDF novamente.");
    }
    await worker.toPdf();
    const pdf = await worker.get("pdf");
    const pdfBytes = pdf.output("arraybuffer");
    if (pdfBytes.byteLength === 0) {
      throw new Error("O navegador não conseguiu criar o arquivo PDF. Tente novamente.");
    }
    return new Uint8Array(pdfBytes);
  } finally {
    source.remove();
    styleContainer.remove();
    if (!previewWasOpen) {
      previewStatus.textContent = "";
      previewDialog.close();
    }
    window.scrollTo(0, previousScrollPosition);
  }
}

async function renderWordPreview(docxBlob) {
  const source = document.createElement("div");
  const styleContainer = document.createElement("div");
  source.className = "docx-conversion-source";
  styleContainer.className = "docx-preview-styles";
  document.querySelector(".docx-preview-styles")?.remove();
  document.head.append(styleContainer);
  pdfPages.replaceChildren(source);
  await window.docx.renderAsync(docxBlob, source, styleContainer, {
    className: "docx",
    inWrapper: true,
    ignoreWidth: false,
    ignoreHeight: false,
    breakPages: true,
    useBase64URL: true,
  });
  preserveTemplateFont(source);
  await document.fonts.ready;
  source.getBoundingClientRect();
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

async function renderPdfPreview(bytes, docxBlob) {
  if (!window.pdfjsLib) {
    throw new Error("A biblioteca para exibir o PDF não carregou. Verifique sua conexão e tente novamente.");
  }
  pdfPages.replaceChildren();
  const loadingTask = window.pdfjsLib.getDocument({ data: bytes, disableWorker: true });
  const pdf = await loadingTask.promise;
  const maxWidth = Math.max(pdfPages.clientWidth, 300);
  let hasVisiblePage = false;

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const baseViewport = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: Math.min(1.5, maxWidth / baseViewport.width) });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("O navegador não conseguiu preparar a prévia do PDF.");
    canvas.width = Math.ceil(viewport.width * outputScale);
    canvas.height = Math.ceil(viewport.height * outputScale);
    canvas.style.width = `${Math.ceil(viewport.width)}px`;
    canvas.style.height = `${Math.ceil(viewport.height)}px`;
    const pageFrame = document.createElement("div");
    pageFrame.className = "pdf-page";
    pageFrame.append(canvas);
    pdfPages.append(pageFrame);
    await page.render({
      canvasContext: context,
      viewport,
      transform: outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0],
    }).promise;

    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let contentPixelCount = 0;
    for (let index = 0; index < pixels.length; index += 16) {
      if (pixels[index] < 240 || pixels[index + 1] < 240 || pixels[index + 2] < 240) {
        contentPixelCount += 1;
      }
    }
    if (contentPixelCount >= 20) hasVisiblePage = true;
  }
  await pdf.destroy();

  if (!hasVisiblePage) {
    await renderWordPreview(docxBlob);
    return false;
  }
  return true;
}

async function prepareDocumentPreview() {
  if (previewButton.disabled) return;
  previewButton.disabled = true;
  formStatus.textContent = "";
  downloadStatus.textContent = "";
  downloadStatus.style.color = "";
  //previewStatus.textContent = "Preenchendo o modelo e convertendo para PDF neste navegador…";
  pdfPages.replaceChildren();
  preparedDocument = null;
  if (!previewDialog.open) previewDialog.showModal();

  try {
    const answerData = buildAnswerData();
    const answerSignature = JSON.stringify({
      lesson: lessonSelect.value,
      answers: answerData,
    });
    const documentResult = await createFilledDocument(answerData);
    preparedDocument = { ...documentResult, pdfBlob: null, answerSignature };

    try {
      const pdfBytes = await convertDocumentToPdf(documentResult.blob);
      preparedDocument.pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      //previewStatus.textContent = "Abrindo a prévia do PDF…";
      try {
        await renderPdfPreview(pdfBytes, documentResult.blob);
      } catch (error) {
        await renderWordPreview(documentResult.blob);
      }
    } catch (error) {
      await renderWordPreview(documentResult.blob);
    }
    previewStatus.textContent = "";
  } catch (error) {
    pdfPages.replaceChildren();
    preparedDocument = null;
    previewStatus.textContent = `Não foi possível preparar a prévia: ${error.message}`;
  } finally {
    previewButton.disabled = false;
  }
}

previewButton.addEventListener("click", prepareDocumentPreview);

closePreviewButton.addEventListener("click", () => previewDialog.close());
previewDialog.addEventListener("click", (event) => {
  if (event.target === previewDialog) previewDialog.close();
});

form.addEventListener("change", (event) => {
  if (event.target.matches('input[type="radio"]')) syncConditionalFields();
});

downloadButton.addEventListener("click", async () => {
  downloadButton.disabled = true;
 // downloadStatus.textContent = "Gerando o PDF…";
  downloadStatus.style.color = "";
  try {
    const { pdfBlob, lesson } = await getPreparedPdf();
    downloadPdf(pdfBlob, lesson);
    // downloadStatus.textContent = "PDF baixado. Confira o arquivo antes de encaminhá-lo aos conselheiros.";
    downloadStatus.style.color = "var(--primary)";
  } catch (error) {
    downloadStatus.textContent = `Não foi possível gerar o PDF: ${error.message}`;
  } finally {
    downloadButton.disabled = false;
  }
});

shareButton.addEventListener("click", async () => {
  if (!window.isSecureContext || typeof File !== "function"
    || typeof navigator.share !== "function" || typeof navigator.canShare !== "function") {
    downloadStatus.textContent = "Este navegador não permite compartilhar arquivos nesta conexão. Abra o site por um endereço HTTPS; nenhum arquivo foi baixado.";
    return;
  }

  let canShareFile;
  try {
    canShareFile = navigator.canShare({
      files: [new File([], "documento.pdf", { type: "application/pdf" })],
    });
  } catch {
    canShareFile = false;
  }
  if (!canShareFile) {
    downloadStatus.textContent = "Este navegador não permite compartilhar arquivos.";
    return;
  }

  shareButton.disabled = true;
  // downloadStatus.textContent = "Preparando o PDF para compartilhar…";
  downloadStatus.style.color = "";
  try {
    await getPreparedPdf();
    const file = new File([preparedDocument.pdfBlob], preparedDocument.lesson.downloadName, {
      type: "application/pdf",
    });
    await navigator.share({
      files: [file],
      title: preparedDocument.lesson.title,
      //text: "Segue o PDF preenchido do Curso de Noivos.",
    });
    // downloadStatus.textContent = "Compartilhamento concluído.";
    downloadStatus.style.color = "var(--primary)";
  } catch (error) {
    if (error.name === "AbortError") {
      // downloadStatus.textContent = "Compartilhamento cancelado. Nenhum arquivo foi baixado.";
    } else {
      downloadStatus.textContent = `Não foi possível abrir o compartilhamento: ${error.message}. Nenhum arquivo foi baixado.`;
    }
  } finally {
    shareButton.disabled = false;
  }
});

async function renderSelectedLesson() {
  const lessonId = lessonSelect.value;
  const lesson = LESSONS.find((item) => item.id === lessonId);
  const configuredQuestions = lessonQuestions[lessonId];
  if (!lesson || !configuredQuestions) throw new Error("Não foi possível carregar as perguntas desta lição.");
  currentQuestions = [];
  questionsContainer.replaceChildren();
  preparedDocument = null;
  formStatus.textContent = "Carregando os enunciados do modelo Word…";

  try {
    const questionTitles = await loadQuestionTitles(lesson, configuredQuestions);
    if (lessonSelect.value !== lessonId) return;

    currentQuestions = configuredQuestions.map((question) => ({
      ...question,
      title: questionTitles.get(question.number),
    }));
    questionsContainer.innerHTML = currentQuestions.map((question) =>
      question.temperaments ? renderTemperaments(question) : renderQuestion(question)
    ).join("");
    syncConditionalFields();
    formStatus.textContent = "";
  } catch (error) {
    if (lessonSelect.value !== lessonId) return;
    currentQuestions = [];
    formStatus.textContent = `Não foi possível carregar os enunciados do modelo Word: ${error.message}`;
  }
}

lessonSelect.innerHTML = LESSONS.map((lesson) =>
  `<option value="${escapeHtml(lesson.id)}">${escapeHtml(lesson.title)}</option>`
).join("");
lessonSelect.addEventListener("change", renderSelectedLesson);
form.addEventListener("input", () => {
  preparedDocument = null;
});
renderSelectedLesson();
