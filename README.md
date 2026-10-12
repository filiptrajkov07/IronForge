# Iron Forge Skopje: website

A plain HTML + CSS + JavaScript version of the Iron Forge designs. There are no tools to install: open a page in your browser and it works.

## How to open it

Double-click `index.html` (it opens the English home page), or open any file inside `en/` or `mk/` in Chrome, Safari or Firefox.

## Folders

```
index.html        opens en/index.html
en/               the 9 pages in English
mk/               the same 9 pages in Macedonian
css/style.css     basic styles for every page (page background, links, menu)
css/home.css …    styles for one page each (home, about, amenities, team, gallery, blog, article, contact, privacy)
css/shared.css    parts used on several pages: header, footer, coloured bands
js/               small scripts, one per page that needs one
images/           all photos
```

| Page | File | Script |
|---|---|---|
| Home | `index.html` | `js/home.js`: barbell animation on scroll, schedule tabs, today's hours, cookie banner |
| About | `about.html` | none |
| Amenities | `amenities.html` | `js/amenities.js`: the big photo follows the zone you are reading |
| Team | `team.html` | `js/team.js`: personal training plan buttons |
| Gallery | `gallery.html` | none (the hover is pure CSS) |
| Blog | `blog.html` | `js/blog.js`: topic filters |
| Blog article | `squat-depth.html` | `js/article.js`: "Copy link" button |
| Contact | `contact.html` | `js/contact.js`: open/closed status, form checks and thank-you message (nothing is sent) |
| Privacy & cookies | `privacy.html` | `js/privacy.js`: cookie switches |

## Two languages

Every page exists twice: `en/team.html` and `mk/team.html`. The MK / EN links in the header simply open the same page in the other folder. To change a text, edit it in both files.

## Changing things

- **Text:** open the page's `.html` file in a text editor (VS Code is free) and change the words between the tags.
- **Colours:** the four zone colours are red `#D2372C`, blue `#1E5BBF`, yellow `#F2C318` and green `#2C8A4B`; ink is `#151615` and chalk is `#F1F0EB`. Search for the code and replace it.
- **Photos:** put the new photo in `images/` and change the `src="../images/…"` of the `<img>` tag.

Every element gets its look from classes. The class names say where they are used: `footer-link`, `hero-title`, `closing-band-heading`… Search the class name in the `css/` folder to find its styles.

Each page loads its CSS in this order: `style.css`, then the page's own file, then `shared.css`. A rule in a later file wins over the same rule in an earlier one.

Some links have their colour written twice, as `.footer-link` and `.footer-link:hover`. That keeps them the same colour when you hover over them, as in the design.

## Good to know

- The Contact form only shows the thank-you message; it doesn't send emails.
- The cookie choice is remembered in your browser (`localStorage`).
- Fonts (Geist and Geist Mono) load from Google Fonts, so the pages need an internet connection to look exactly right.
