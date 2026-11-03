# Emmanuel Boakye

Personal site: research, experience, projects and awards.

**Live site: https://churchillondata.github.io/Biography/**

AI researcher and data scientist working on recommender systems, learning to rank and trustworthy AI.

## Structure

```
index.html              page layout
assets/
  css/style.css         all styling, light and dark themes
  js/content.js         every piece of text, link and image path on the site
  js/main.js            rendering and interactions
  js/icons.js           logo and icon set
  img/                  profile photo, banner, logos and award photos
```

## Updating the site

Edit `assets/js/content.js`. Experience, research, publications, projects and awards are plain lists, and the site rebuilds itself from them. To change a picture, replace the file in `assets/img` with one of the same name, or point its entry in `ASSETS` at a new file.

To update the CV, replace `assets/docs/Emmanuel-Boakye-CV.pdf` with the new PDF under the same name. The Resume page shows it inside the site and offers it as a download.

A value that starts with `?` is a placeholder and shows with a dotted underline until it is replaced.

## Run it locally

Only for previewing a copy downloaded to your own computer. It shows that copy, not what is on GitHub, so run `git pull` first to get the latest changes. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `localhost:8000` on the same computer.

## Publish with GitHub Pages

Settings → Pages → Deploy from a branch → `main`, folder `/ (root)` → Save. The site goes live at https://churchillondata.github.io/Biography/ and updates a minute or two after each push.

## Credits

Icons from [Devicon](https://devicon.dev) (MIT), [Simple Icons](https://simpleicons.org) (CC0) and [Tabler Icons](https://tabler.io/icons) (MIT). Type set in [Geist](https://vercel.com/font) via Google Fonts. GitHub activity from the public [github-contributions-api](https://github.com/grubersjoe/github-contributions-api).
