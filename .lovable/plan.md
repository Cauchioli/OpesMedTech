

# Plano: Instalar tag do Google Ads

## O que será feito

Adicionar o script do Google Ads (gtag.js) com o ID **AW-17823640371** no arquivo `index.html`, no local onde já existe um comentário reservado para o Google Analytics.

## Alteração

**Arquivo:** `index.html`

Substituir o comentário placeholder do Google Analytics (linhas 9-10) pelo script completo do gtag.js configurado com o ID `AW-17823640371`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17823640371"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17823640371');
</script>
```

Isso garantirá que o rastreamento do Google Ads funcione em todas as páginas do site.

