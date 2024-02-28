import { partytownSnippet } from 'https://cdn.jsdelivr.net/npm/@builder.io/partytown@0.9.2/integration/index.mjs';
const snippetText = partytownSnippet();
const el = document.createElement('script');
el.innerText = snippetText;
document.body.appendChild(el);