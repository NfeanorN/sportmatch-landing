# SportMatch × SportSync Connect — landing

Angular 19 single-page landing (animations, mobile drawer, scroll reveal).

## Live site (GitHub Pages)

After you enable Pages (see below), the app is available at:

**https://nfeanorn.github.io/sportmatch-landing/**

_(GitHub normalizes the username in the URL; the repo is [NfeanorN/sportmatch-landing](https://github.com/NfeanorN/sportmatch-landing).)_

### Enable GitHub Pages (one time)

Workflow пушит сборку в ветку **`gh-pages`**. Включите Pages так:

1. Откройте **Settings** → **Pages**:  
   `https://github.com/NfeanorN/sportmatch-landing/settings/pages`
2. **Build and deployment** → **Source**: выберите **Deploy from a branch**
3. **Branch**: **`gh-pages`** / папка **`/ (root)`** → **Save**
4. После первого успешного запуска Actions ветка `gh-pages` появится сама; если её ещё нет, сделайте **Actions** → **Deploy to GitHub Pages** → **Run workflow**

Раньше использовался `actions/deploy-pages` — он даёт **404**, пока в настройках не выбран источник **GitHub Actions**; вариант с веткой **`gh-pages`** проще и не требует этого.

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
