# Portfolio personale — Pietro Mantovani

Sito statico multi-pagina. Tutto in HTML/CSS/JS puro, nessun build step.

## Struttura

```
portfolio/
├── index.html        Home — manifesto, lavori recenti, ultimi scritti
├── chi-sono.html     Bio editoriale + timeline + fact list laterale
├── portfolio.html    Indice lavori filtrabile per ambito
├── scritti.html      Archivio Cose buone (Substack)
├── contatti.html     Email, link, statement di disponibilità
├── style.css         Foglio di stile condiviso
├── script.js         Nav attiva, menu mobile, reveal scroll, filtri
└── README.md
```

## Stack & scelte

- **Tipografia:** Fraunces (serif variabile con opsz e SOFT) + JetBrains Mono per etichette tecniche. Caricati da Google Fonts.
- **Palette:** carta avorio (`#F2EDE0`) · inchiostro (`#18160F`) · accento oxblood (`#8B2A1F`) · ocra (`#B8862F`) · inchiostro deep per il footer.
- **Layout:** griglia a 12 colonne implicita, asimmetrie, etichette monospace numerate stile editoriale.
- **JS:** ~50 righe vanilla, nessuna dipendenza. IntersectionObserver per le reveal, filtri ad click per il portfolio.
- **Accessibilità:** semantic HTML, focus visibile, `prefers-reduced-motion` rispettato, contrasto AA su tutti i testi principali.
- **Performance:** zero framework, fonts con `display=swap`, immagini nessuna (decorazioni puramente CSS).

## Deploy

### GitHub Pages
1. Crea un repository (anche `pietromantovani.github.io` per dominio default)
2. Push dei file in root
3. Settings → Pages → branch `main` / root

### Netlify / Vercel
Drag & drop della cartella o connetti il repo Git. Nessuna build configuration necessaria.

### Server proprio
Copia i file in qualunque directory servita da HTTP. Funziona anche aprendo `index.html` direttamente da disco — ma le Google Fonts richiedono connessione.

## Personalizzazione veloce

- **Contatti reali:** sostituisci `pietro@mantovani.example` e gli URL `#` in tutti i file.
- **Link Substack:** già impostato su `piemantovani.substack.com` — verifica e correggi se serve.
- **Colore accento:** cambia `--accent` in `style.css:13` per virare la palette (es. verde bottiglia `#2C5F3F`, blu Klein `#002FA7`).
- **Font diversi:** sostituisci la `@import` in cima a `style.css` e aggiorna `--serif` / `--mono`.
- **Nuovi progetti/post:** aggiungi un `<li>` in `portfolio.html` o `scritti.html` seguendo il pattern esistente.

## Note

I contenuti sono placeholder costruiti sul tuo profilo professionale ricavato dal contesto — date, titoli di lavori e nomi di post sono da verificare e correggere. Le date dei post sono fittizie ma plausibili.
