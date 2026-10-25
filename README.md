# Curso de Noivos — Igreja Batista do Povo, Vila São José

Formulário web estático para preencher as respostas das lições, revisar uma
prévia e baixar o documento PDF para encaminhar aos conselheiros.

## Privacidade

- O site não solicita dados de identificação da pessoa que preenche.
- As respostas são processadas no navegador e não são enviadas para um backend
  nem salvas pelo site.
- Não há armazenamento automático, envio por email ou serviço de feedback.
- O modelo Word é preenchido e convertido para PDF no navegador. A prévia usa
  PDF quando disponível e pode mostrar o Word preenchido como alternativa; o
  PDF é baixado somente quando a pessoa pede.
- Em celulares e navegadores compatíveis, o botão de compartilhamento abre o
  menu nativo para enviar o PDF, por exemplo pelo WhatsApp. Esse recurso exige
  uma conexão segura HTTPS; se não estiver disponível, o site informa que não
  foi possível compartilhar e não baixa o arquivo.
- A pergunta 1 do modelo solicita nomes de familiares. O aviso do formulário
  informa que a pessoa pode responder apenas o que se sentir confortável em
  compartilhar.
- A hospedagem pode registrar acessos à página; isso não inclui as respostas
  digitadas no formulário.

## Executar para testar

Como o navegador precisa carregar o modelo Word com `fetch`, abra o site por um
servidor HTTP local (não diretamente pelo arquivo `index.html`). Por exemplo,
com Python instalado:

```powershell
py -m http.server 8000
```

Depois, acesse `http://localhost:8000` na pasta do projeto. O PDF é gerado
localmente; não há chamadas para um backend. A biblioteca JSZip é carregada
para preencher o `.docx`; docx-preview, html2pdf e PDF.js renderizam o documento
convertido em PDF, tudo no navegador.

## Publicar no GitHub Pages

Publique o conteúdo deste repositório no GitHub Pages. A raiz publicada deve
conter `index.html`, `app.js`, `styles.css` e a pasta `modelos/`. Não é
necessário configurar servidor, funções ou segredos.

## Lições

O formulário disponibiliza as 13 lições. Os documentos Word ficam na pasta
`modelos/`, e os enunciados, campos e opções de resposta de cada lição são
configurados em `LESSONS` e `lessonQuestions` no `app.js`. Ao escolher outra
lição, o formulário é atualizado para corresponder ao respectivo modelo.
