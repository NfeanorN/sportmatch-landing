# SportMatch × SportSync Connect — landing

Angular 19 single-page landing (animations, mobile drawer, scroll reveal).

## Live site (GitHub Pages)

After you enable Pages (see below), the app is available at:

**https://nfeanorn.github.io/sportmatch-landing/**

_(GitHub normalizes the username in the URL; the repo is [NfeanorN/sportmatch-landing](https://github.com/NfeanorN/sportmatch-landing).)_

### Enable GitHub Pages (one time)

1. Repo **Settings** → **Pages** → **Build and deployment**
2. **Source**: choose **GitHub Actions** (not “Deploy from a branch”)
3. Push to `main` — workflow **Deploy to GitHub Pages** builds and publishes automatically

Local build matching Pages:

```bash
npm run build:pages
```

## Development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Tests

```bash
npm test
```
