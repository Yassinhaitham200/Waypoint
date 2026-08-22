# Waypoint — Travel Explorer

React + Vite portfolio project. Pure frontend (HTML5 / CSS3 / React), no backend.

## Features
- Cinematic hero with floating search card
- Search by city or country
- Filter chips: Beaches / Mountains / Cities
- Destination cards ("boarding pass" style) with hover animation
- Full-screen destination detail view
- Dark / light mode (persisted in localStorage)
- Fully responsive (mobile → desktop)

## Run it in VS Code

1. Open this folder (`travel-explorer`) in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production: `npm run build` (output goes to `dist/`).

## Deploy to GitHub Pages (automatic, via GitHub Actions)

The project is already configured for a repo named `Waypoint`
(`base: '/Waypoint/'` in `vite.config.js`). If you rename the repo, change
that line to match — it must be exactly `/YourRepoName/`, capitalization
included.

A workflow file at `.github/workflows/deploy.yml` builds and publishes the
site automatically every time you push to `main`. No local build tools or
extra npm packages needed — this avoids the Windows `gh-pages` CLI issues
entirely.

1. Push this project to your `Waypoint` GitHub repo:
   ```
   git add .
   git commit -m "add pages workflow"
   git push
   ```
2. On GitHub: go to your repo → **Settings → Pages**.
3. Under "Build and deployment" → **Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
4. Go to the **Actions** tab in your repo — you'll see a "Deploy to GitHub
   Pages" run in progress. Wait for it to finish (green check).
5. Your site is live at:
   ```
   https://<your-username>.github.io/Waypoint/
   ```
   Every future `git push` to `main` redeploys automatically.

**Common cause of a blank white screen**: visiting the repo's default
GitHub page instead of the `github.io` URL above, or the `base` path in
`vite.config.js` not matching the repo name exactly. Also check the browser
console (F12 → Console tab) — a 404 on `/assets/...` files confirms it's
this exact issue.


## Project structure
```
travel-explorer/
├─ index.html
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ data/destinations.js       # edit this to add/change destinations
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ FilterChips.jsx
│     ├─ DestinationGrid.jsx
│     ├─ DestinationCard.jsx
│     ├─ DestinationDetail.jsx
│     └─ Footer.jsx
```

## Notes
- **To change a photo**: open `src/data/destinations.js`, find the place, and
  replace its `image:` line with any image link (right-click a photo online →
  "Copy image address"), e.g.:
  ```js
  image: 'https://images.unsplash.com/photo-xxxxxxx?w=900',
  ```
  That's the only line you need to touch — the card and the detail page both
  read from it automatically.
- To use your own photo file instead of a link: put the file in
  `public/images/` (e.g. `public/images/zanzibar.jpg`) then set
  `image: '/images/zanzibar.jpg'`.
- The hero background image (top of the page) is set separately in
  `src/components/Hero.jsx`, in the `bgUrl` line.
- Add a new destination by adding an object to `src/data/destinations.js` —
  cards and filters pick it up automatically.
