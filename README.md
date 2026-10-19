# Curso de Noivos — Igreja Batista do Povo, Vila São José

Formulário web estático para preencher as respostas das lições, revisar uma
prévia e baixar o documento Word para encaminhar aos conselheiros.

## Privacidade

- O site não solicita dados de identificação da pessoa que preenche.
- As respostas são processadas no navegador e não são enviadas para um backend
  nem salvas pelo site.
- Não há armazenamento automático, envio por email ou serviço de feedback.
- O arquivo Word é preenchido no navegador, convertido para PDF para a prévia e
  baixado somente quando a pessoa pede.
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

Depois, acesse `http://localhost:8000` na pasta do projeto. O arquivo Word é
gerado localmente; não há chamadas para um backend. A biblioteca JSZip é carregada para preencher o `.docx`; docx-preview, html2pdf
e PDF.js renderizam o documento convertido em PDF, tudo no navegador.

## Publicar no GitHub Pages

Publique o conteúdo deste repositório no GitHub Pages. A raiz publicada deve
conter `index.html`, `app.js`, `styles.css` e a pasta `modelos/`. Não é
necessário configurar servidor, funções ou segredos.

## Lições

O modelo disponível atualmente é `modelos/Aula1-HerancaFamiliar.docx`. O
formulário já cobre as 21 perguntas, suas opções e as 68 características de
temperamento dessa lição. As próximas lições podem ser adicionadas em `LESSONS`
e `questions` no `app.js`, associando seus campos às referências dos respectivos
modelos.
