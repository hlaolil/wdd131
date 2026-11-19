# WDD 131 — Dynamic Web Fundamentals

My coursework for WDD 131 (Dynamic Web Fundamentals) at BYU–Pathway Worldwide. It covers responsive layouts, the DOM, JavaScript arrays and objects, forms and `localStorage`.

**Live site:** https://hlaolil.github.io/wdd131/

## Pages

| Page | What it shows |
| --- | --- |
| [`index.html`](https://hlaolil.github.io/wdd131/) | Course home page: about me, Butha-Buthe and web development resources |
| [`temples.html`](https://hlaolil.github.io/wdd131/temples.html) | Temple photo album with a responsive grid and hamburger menu |
| [`filtered-temples.html`](https://hlaolil.github.io/wdd131/filtered-temples.html) | The album built from a JavaScript array, filterable by old, new, large and small |
| [`place.html`](https://hlaolil.github.io/wdd131/place.html) | A page about Cape Town with a wind-chill calculation |
| [`form.html`](https://hlaolil.github.io/wdd131/form.html) → `review.html` | Product review form; the review page counts submissions with `localStorage` |
| `week01/`–`week03/` | Weekly practice: layouts, media queries, a responsive menu, a Book of Mormon chapter list and responsive images |

## Final project: Grace Pharmacy

[`project/`](https://hlaolil.github.io/wdd131/project/index.html) is a small website for Grace Pharmacy with home, about, products and contact pages. It has a prescription refill form that remembers the last prescription number with `localStorage`, and a services grid built in JavaScript. `project/siteplan.html` is the site plan.

## Structure

```
index.html, temples.html, filtered-temples.html, place.html, form.html, review.html
scripts/   page scripts (getdates.js puts the year and last-modified date in the footer)
styles/    one stylesheet per page, plus *-large.css for wide screens
project/   Grace Pharmacy final project
week01–03/ weekly exercises
```

## Run it locally

These are plain HTML, CSS and JavaScript files. Open them through a local server so that the scripts load:

```bash
python3 -m http.server 8000
```

GitHub Pages publishes the `main` branch.
