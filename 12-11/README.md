# 🧩 Guida completa ai selettori CSS

Questa tabella elenca tutti i principali **selettori CSS** con una **breve spiegazione**.

---

## Selettori di tipo base

| Selettore         | Esempio                      | Spiegazione                                     |
| ----------------- | ---------------------------- | ----------------------------------------------- |
| `*`               | `* { color: red; }`          | Seleziona tutti gli elementi.                   |
| `elemento`        | `p { font-size: 16px; }`     | Seleziona tutti gli elementi di quel tipo.      |
| `.classe`         | `.btn { background: blue; }` | Seleziona tutti gli elementi con quella classe. |
| `#id`             | `#header { color: white; }`  | Seleziona l’elemento con quell’ID.              |
| `elemento.classe` | `p.intro { color: gray; }`   | Seleziona `<p>` con la classe “intro”.          |

---

## Selettori combinatori

| Selettore | Esempio   | Spiegazione                         |
| --------- | --------- | ----------------------------------- |
| `A B`     | `div p`   | Tutti i discendenti di `<div>`.     |
| `A > B`   | `div > p` | Solo i figli diretti di `<div>`.    |
| `A + B`   | `h1 + p`  | Il `<p>` subito dopo `<h1>`.        |
| `A ~ B`   | `h1 ~ p`  | Tutti i `<p>` fratelli dopo `<h1>`. |

---

## Selettori di attributo

| Selettore       | Esempio             | Spiegazione                           |
| --------------- | ------------------- | ------------------------------------- | ------- | -------------------------- |
| `[attr]`        | `[title]`           | Elementi con l’attributo specificato. |
| `[attr="val"]`  | `[type="text"]`     | Attributo esattamente uguale.         |
| `[attr~="val"]` | `[class~="active"]` | Contiene la parola specificata.       |
| `[attr          | ="val"]`            | `[lang                                | ="en"]` | Inizia con “val” o “val-”. |
| `[attr^="val"]` | `[href^="https"]`   | Inizia con “val”.                     |
| `[attr$="val"]` | `[src$=".jpg"]`     | Termina con “val”.                    |
| `[attr*="val"]` | `[title*="logo"]`   | Contiene “val”.                       |

---

## Pseudo-classi

| Selettore       | Esempio            | Spiegazione                                      |
| --------------- | ------------------ | ------------------------------------------------ |
| `:hover`        | `a:hover`          | Quando il mouse è sopra.                         |
| `:active`       | `button:active`    | Quando l’elemento è cliccato.                    |
| `:focus`        | `input:focus`      | Quando ha il focus.                              |
| `:checked`      | `input:checked`    | Checkbox o radio selezionato.                    |
| `:disabled`     | `input:disabled`   | Elemento disabilitato.                           |
| `:first-child`  | `li:first-child`   | Primo figlio.                                    |
| `:last-child`   | `li:last-child`    | Ultimo figlio.                                   |
| `:nth-child(n)` | `li:nth-child(2)`  | n-esimo figlio.                                  |
| `:not(sel)`     | `div:not(.hidden)` | Esclude elementi che corrispondono al selettore. |
| `:root`         | `:root`            | L’elemento `<html>`.                             |

---

## Pseudo-elementi

| Selettore        | Esempio                        | Spiegazione               |
| ---------------- | ------------------------------ | ------------------------- |
| `::before`       | `p::before { content: "→ "; }` | Aggiunge contenuto prima. |
| `::after`        | `p::after { content: "✔"; }`   | Aggiunge contenuto dopo.  |
| `::first-letter` | `p::first-letter`              | Prima lettera.            |
| `::first-line`   | `p::first-line`                | Prima riga di testo.      |
| `::selection`    | `::selection`                  | Testo selezionato.        |
| `::placeholder`  | `input::placeholder`           | Stile del placeholder.    |
| `::marker`       | `li::marker`                   | Simbolo della lista.      |

---

## Selettori avanzati (CSS3+)

| Selettore     | Esempio              | Spiegazione                              |
| ------------- | -------------------- | ---------------------------------------- |
| `:is()`       | `:is(h1, h2, h3)`    | Raggruppa più selettori.                 |
| `:where()`    | `:where(h1, h2, h3)` | Come `:is()`, ma specificità zero.       |
| `:has()`      | `article:has(img)`   | Elementi che contengono un certo figlio. |
| `:target`     | `#id:target`         | Elemento puntato da un anchor link.      |
| `:any-link`   | `a:any-link`         | Link visitati o meno.                    |
| `:fullscreen` | `:fullscreen`        | Elemento a schermo intero.               |
| `:scope`      | `:scope > p`         | Elemento radice nel contesto.            |

---

## Selettori multipli

| Selettore     | Esempio          | Spiegazione                              |
| ------------- | ---------------- | ---------------------------------------- |
| `A, B`        | `h1, h2`         | Applica lo stesso stile a più selettori. |
| `::part()`    | `::part(button)` | Parti interne di Web Components.         |
| `::slotted()` | `::slotted(p)`   | Contenuto inserito in uno slot.          |
