import { partytownSnippet } from '@builder.io/partytown/integration';
const snippetText = partytownSnippet();
const el = document.createElement('script');
el.innerText = snippetText;
document.body.appendChild(el);