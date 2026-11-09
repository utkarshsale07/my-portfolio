# Utkarsh Sale: portfolio (React + Vite + Three.js)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # output in dist/
npm run preview
```

## Edit your content
Everything you may want to change (projects, skills, education, contact links) is in `src/data.js`.

## Deploy
- Vercel / Netlify: import the repo, build command `npm run build`, output directory `dist`.
- After you have a domain, replace `YOUR-DOMAIN` in `public/robots.txt`, `public/sitemap.xml`,
  and add `<link rel="canonical" href="https://YOUR-DOMAIN/">` in `index.html`.
