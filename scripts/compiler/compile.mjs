import Template from './template.mjs';

export default function compile() {
   const template = new Template('en');

   template.list();

   template.write('./README.md');
}