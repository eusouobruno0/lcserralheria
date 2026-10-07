import {readFile,writeFile} from 'node:fs/promises';
import {render} from '../.render/render.js';
const origin=(process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://serralheria-lc.contadobrunoamaral20.chatgpt.site').replace(/\/$/,'');
const schema={'@context':'https://schema.org','@type':'LocalBusiness',name:'Serralheria LC',description:'Pergolados, coberturas e estruturas metálicas sob medida em Campo Bom e região.',telephone:'+55 51 99813-3404',address:{'@type':'PostalAddress',streetAddress:'R. Pres. Castelo Branco, 1730 - Celeste',addressLocality:'Campo Bom',addressRegion:'RS',postalCode:'93700-000',addressCountry:'BR'},areaServed:'Campo Bom e região',sameAs:['https://www.instagram.com/serralherialc07/'],...(origin?{url:origin}: {})};
const meta=(origin?`<link rel="canonical" href="${origin}/"/><meta property="og:url" content="${origin}/"/>`:'')+`<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
const html=(await readFile('dist/index.html','utf8')).replace('<!--app-->',render()).replace('<!--seo-->',meta);
await writeFile('dist/index.html',html);await writeFile('dist/robots.txt','User-agent: *\nAllow: /\n'+(origin?`Sitemap: ${origin}/sitemap.xml\n`:''));
if(origin)await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`);
console.log('HTML pré-renderizado e SEO gerados.');
