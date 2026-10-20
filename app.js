const LESSONS = [
  {
    id: "aula1",
    title: "Aula 1: Herança Familiar",
    file: "modelos/Aula1-HerancaFamiliar.docx",
    downloadName: "Aula-1-Heranca-Familiar.pdf",
  },
];

const questions = [
  {
    number: 1,
    title: "Relacione abaixo os nomes de seus pais e irmãos e escreva uma palavra que defina o seu relacionamento com cada um deles:",
    fields: [
      { ref: "R1.1", label: "Pai — nome e uma palavra que descreva o relacionamento", type: "textarea" },
      { ref: "R1.2", label: "Mãe — nome e uma palavra que descreva o relacionamento", type: "textarea" },
      { ref: "R1.3", label: "Irmãos — nomes e uma palavra que descreva o relacionamento com cada um", type: "textarea" },
    ],
  },
  {
    number: 2,
    title: "O que você sabe sobre a sua herança espiritual?",
    fields: [
      { ref: "R2a", label: "a) Religião dos avós", type: "text" },
      { ref: "R2b", label: "b) Religião dos pais", type: "text" },
      { ref: "R2c", label: "c) Quantas pessoas evangélicas há na sua família?", type: "number" },
      { ref: "R2d", label: "d) Conte uma experiência familiar marcante no aspecto espiritual", type: "textarea" },
      { ref: "R2e", label: "e) Descreva, em poucas palavras, a sua experiência de novo nascimento", type: "textarea" },
    ],
  },
  { number: 3, title: "Seus pais estão casados há quanto tempo?", fields: [{ ref: "R3", label: "Resposta", type: "text" }] },
  { number: 4, title: "Qual é a sua opinião a respeito do relacionamento deles?", fields: [{ ref: "R4", label: "Resposta", type: "textarea" }] },
  {
    number: 5,
    title: "No tocante ao papel de marido e esposa, você acha que seus pais têm correspondido aos princípios bíblicos?",
    fields: [
      { ref: "R5_opcao", label: "Opção selecionada", type: "radio", options: ["Sim", "Não"] },
      { ref: "R5_justificativa", label: "Por quê?", type: "textarea" },
    ],
  },
  { number: 6, title: "Que traços emocionais mais se destacam na personalidade de seu pai?", fields: [{ ref: "R6", label: "Resposta", type: "textarea" }] },
  { number: 7, title: "Que traços emocionais mais se destacam na personalidade de sua mãe?", fields: [{ ref: "R7", label: "Resposta", type: "textarea" }] },
  { number: 8, title: "Quais dos traços acima se manifestam claramente em você?", fields: [{ ref: "R8", label: "Resposta", type: "textarea" }] },
  {
    number: 9,
    title: "Observe o quadro abaixo, sobre os quatro temperamentos, e marque as características com as quais você se identifica:",
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
  { number: 10, title: "O que você pode fazer para que as características negativas sejam trabalhadas?", fields: [{ ref: "R10", label: "Resposta", type: "textarea" }] },
  { number: 11, title: "Como foi a sua infância? Descreva-a em poucas palavras:", fields: [{ ref: "R11", label: "Resposta", type: "textarea" }] },
  {
    number: 12,
    title: "Cite um fato que marcou positivamente a sua adolescência e outro que porventura a tenha marcado negativamente:",
    fields: [{ ref: "R12", label: "Resposta", type: "textarea" }],
  },
  {
    number: 13,
    title: "Como tem sido o seu relacionamento com os seus pais?",
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
    title: "Caso este relacionamento não esteja sendo satisfatório, você tem feito alguma coisa para melhorá-lo?",
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
    title: "Quais as características físicas que você herdou de seus pais?",
    fields: [
      { ref: "R15_Pai", label: "Pai", type: "textarea" },
      { ref: "R15_Mae", label: "Mãe", type: "textarea" },
    ],
  },
  {
    number: 16,
    title: "Há algo no seu físico que você gostaria que fosse diferente?",
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
    title: "Da herança física, o que lhe agrada?",
    fields: [{ ref: "R17", label: "Resposta", type: "textarea" }],
  },
  {
    number: 18,
    title: "Há casos de enfermidades hereditárias na sua família?",
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
  { number: 19, title: "Que cuidados devem ser tomados com relação a esta(s) enfermidade(s)?", fields: [{ ref: "R19", label: "Resposta", type: "textarea" }] },
  { number: 20, title: "Qual é a opinião da sua família a respeito do seu casamento?", fields: [{ ref: "R20", label: "Resposta", type: "textarea" }] },
  { number: 21, title: "Que opinião você tem sobre a família do(a) seu(sua) noivo(a)?", fields: [{ ref: "R21", label: "Resposta", type: "textarea" }] },
];

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
const lessonSelect = document.querySelector("#lesson-select");
let preparedDocument = null;

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
  const ref = escapeHtml(field.ref);
  const id = `field-${ref}`;
  let control;
  if (field.type === "radio") {
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

function selectedRadioValue(ref) {
  return form.querySelector(`input[type="radio"][data-ref="${CSS.escape(ref)}"]:checked`)?.value || "";
}

function syncConditionalFields() {
  form.querySelectorAll(".conditional").forEach((field) => {
    field.hidden = selectedRadioValue(field.dataset.parentRef) !== field.dataset.conditionValue;
  });
}

function buildAnswerData() {
  const textAnswers = {};
  const optionAnswers = {};

  form.querySelectorAll("[data-ref]").forEach((control) => {
    const ref = control.dataset.ref;
    if (control.type === "radio") {
      textAnswers[ref] = "";
      if (!control.checked) return;
      textAnswers[ref] = control.value;
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
        const radioField = questions
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

    previewStatus.textContent = "Convertendo o documento Word para PDF…";
    const worker = window.html2pdf()
      .set({
        margin: 0,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1.5, useCORS: true, backgroundColor: "#ffffff" },
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
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("O navegador não conseguiu preparar a prévia do PDF.");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const pageFrame = document.createElement("div");
    pageFrame.className = "pdf-page";
    pageFrame.append(canvas);
    pdfPages.append(pageFrame);
    await page.render({ canvasContext: context, viewport }).promise;

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
  previewStatus.textContent = "Preenchendo o modelo e convertendo para PDF neste navegador…";
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
      previewStatus.textContent = "Abrindo a prévia do PDF…";
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
  downloadStatus.textContent = "Gerando o PDF…";
  downloadStatus.style.color = "";
  try {
    const answerData = buildAnswerData();
    const answerSignature = JSON.stringify({
      lesson: lessonSelect.value,
      answers: answerData,
    });
    let pdfBlob;
    let lesson;
    if (preparedDocument?.answerSignature === answerSignature && preparedDocument.pdfBlob) {
      ({ pdfBlob, lesson } = preparedDocument);
    } else {
      const documentResult = await createFilledDocument(answerData);
      const pdfBytes = await convertDocumentToPdf(documentResult.blob);
      pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      lesson = documentResult.lesson;
    }

    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = lesson.downloadName;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    downloadStatus.textContent = "PDF baixado. Confira o arquivo antes de encaminhá-lo aos conselheiros.";
    downloadStatus.style.color = "var(--primary)";
  } catch (error) {
    downloadStatus.textContent = `Não foi possível gerar o PDF: ${error.message}`;
  } finally {
    downloadButton.disabled = false;
  }
});

questionsContainer.innerHTML = questions.map((question) =>
  question.temperaments ? renderTemperaments(question) : renderQuestion(question)
).join("");

syncConditionalFields();
