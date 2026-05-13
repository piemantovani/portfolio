# Portfolio personale — Pietro Mantovani

Sito statico multi-pagina. HTML/CSS/JS puro, nessun build step.

## Struttura

```
portfolio/
├── index.html        Home — manifesto, progetti in evidenza, aree di lavoro
├── chi-sono.html     Bio editoriale + timeline esperienza + formazione
├── portfolio.html    Progetti organizzati per esperienza, espandibili (<details>)
├── contatti.html     Email, telefono, LinkedIn, statement di disponibilità
├── style.css         Foglio di stile condiviso
├── script.js         Nav attiva, menu mobile, reveal, anchor → details
└── README.md
```

## Caratteristiche

- **Tipografia:** Fraunces (serif variabile con opsz e SOFT) + JetBrains Mono per etichette tecniche, da Google Fonts.
- **Palette:** carta avorio (`#F2EDE0`) · inchiostro (`#18160F`) · oxblood (`#8B2A1F`) · ocra (`#B8862F`).
- **Progetti espandibili:** uso semantico di `<details>`/`<summary>` per accessibilità. Ogni progetto si apre con metadata, descrizione e (dove disponibili) KPI numerici.
- **Anchor links:** i progetti hanno ID univoci. Da home, `portfolio.html#anteo-cinema` apre direttamente la card. Vale per ogni progetto del portfolio.
- **Layout responsive:** mobile-first, breakpoint a 640 / 720 / 900 / 1100 px.
- **Accessibilità:** semantic HTML, focus visibile, `prefers-reduced-motion` rispettato, contrasto AA.
- **Performance:** zero framework, fonts con `display=swap`, nessuna immagine bitmap.
- **SEO:** meta description e keywords per ogni pagina, Open Graph per condivisione social.

## Deploy

### GitHub Pages
1. Push dei file in un repository (es. `pietromantovani.github.io`)
2. Settings → Pages → branch `main` / root
3. Sito online entro 1-2 minuti

### Netlify / Vercel
Drag & drop della cartella o connetti il repo Git. Nessuna build configuration.

### Server proprio
Copia i file in qualunque directory servita da HTTP. Funziona anche aprendo `index.html` da disco — le Google Fonts richiedono però connessione.

## Personalizzazione veloce

- **Colore accento:** cambia `--accent` in `style.css` per virare la palette.
- **Font diversi:** sostituisci la `@import` in cima a `style.css` e aggiorna le var `--serif` / `--mono`.
- **Nuovi progetti:** copia un blocco `<details class="proj-card">` esistente in `portfolio.html` e modifica i contenuti. Aggiungi un `id` univoco per poterlo linkare dalla home.
- **Highlight in home:** copia/modifica un blocco `<a class="highlight-card">` in `index.html` per cambiare i progetti in evidenza.

## Reintegrare la sezione Scritti (in futuro)

Quando vorrai riattivare la sezione Substack:

1. Crea un file `scritti.html` partendo dalla struttura di `portfolio.html` (header + main + footer). Per ogni post usa il pattern di `index-list` / `index-item`.
2. Aggiungi in tutti i file (`index.html`, `chi-sono.html`, `portfolio.html`, `contatti.html`) la voce di menu in `.nav-list`:
   ```html
   <li><a href="scritti.html">Scritti</a></li>
   ```
3. Aggiungi la stessa voce nel footer (`<h4>Indice</h4>` lista).
4. Opzionale: aggiungi una sezione in home con gli ultimi 3 post (pattern già usato per i "Progetti in evidenza").

Nessuna modifica al CSS o al JS è necessaria — gli stili sono già pronti.

## Note

Contenuti, descrizioni progetti e metriche sono ricavati dal CV e dal portfolio PDF forniti. Date e numeri sono quelli reali; tutto il copy è da rileggere e correggere a tuo gusto prima del deploy.
