# Serralheria LC

Site institucional mobile-first em Vite + React. Conteúdo HTML pré-renderizado no build para mecanismos de busca, com galeria acessível, vídeo sob demanda e contato direto pelo WhatsApp.

## Rodar

```sh
npm ci
npm run dev
```

## Publicar

```sh
SITE_URL=https://seu-dominio.com.br npm run build
```

Publique a pasta `dist` em hospedagem estática (Vercel, Cloudflare Pages ou Netlify). Configure comando de build `npm run build`, saída `dist` e variável `SITE_URL` com a URL pública definitiva. O build gera canonical, sitemap e URL Open Graph quando SITE_URL estiver definida. Sem domínio definido, esses campos são omitidos para evitar endereço incorreto. Não é necessário servidor de aplicação.

## Fotos e vídeo

Todos os arquivos originais estão preservados, byte a byte, em `assets/originais`. As fotos usadas no site estão otimizadas em WebP em `public/images`, separadas por conteúdo. O vídeo preservado está disponível em `public/videos` e só carrega ao iniciar a reprodução. O vídeo original contém a identificação histórica de Instagram na própria imagem; o link atual do site é `@serralherialc07`.

`assets/inventario.json` relaciona as fotos originais às versões publicadas e registra SHA-256. O logo original está preservado; a versão WebP apenas reduz o tamanho para uso na página.

## Dados oficiais

WhatsApp: +55 51 99813-3404. Instagram: https://www.instagram.com/serralherialc07/. Endereço: R. Pres. Castelo Branco, 1730, Celeste, Campo Bom – RS, 93700-000. Mais de 8 anos de experiência conforme material fornecido. Sem horários, depoimentos ou avaliações inventados.

## Verificações

Build de produção, HTML pré-renderizado, referências locais, número oficial em todos os links WhatsApp e preservação dos originais. A revisão visual em navegador deve ser executada em 320, 375, 390, 768 e 1440 px antes da publicação pública, incluindo menu, galeria, foco por teclado, vídeo e ausência de overflow.
