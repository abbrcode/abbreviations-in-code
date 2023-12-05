import Template from './template.mjs';

export default function translate(lang) {
   const template = new Template(lang);

   template.list();

   template.write(`./translations/${lang}.md`);
};