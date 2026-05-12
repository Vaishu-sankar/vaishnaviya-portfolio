# 🚀 Vaishnaviya Portfolio — Deployment Guide

## 📁 Project Structure
```
vaishnaviya-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js        ← Main React component (all content)
│   ├── App.css       ← All styles
│   └── index.js      ← React entry point
├── package.json
└── DEPLOY.md
```

---

## ⚙️ Step 1 — Install Prerequisites

Make sure these are installed on your computer:

- **Node.js** (v16 or above) → https://nodejs.org/en/download
- **npm** (comes with Node.js)
- **Git** → https://git-scm.com/downloads

Verify installation:
```bash
node -v      # should print v16+ or v18+
npm -v       # should print 8+
git --version
```

---

## 💻 Step 2 — Run Locally

```bash
# 1. Go into the project folder
cd vaishnaviya-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

✅ Your portfolio will open at **http://localhost:3000**

---

## 🌐 Step 3 — Deploy to Netlify (FREE — Easiest)

### Option A: Drag & Drop (No account needed, instant)
```bash
# Build the production files
npm run build
```
Then:
1. Go to → https://app.netlify.com/drop
2. Drag and drop the **`build/`** folder onto the page
3. You'll get a live URL instantly like `https://random-name.netlify.app`
4. Click **"Claim your site"** to rename it to something like `vaishnaviya-portfolio.netlify.app`

### Option B: GitHub + Netlify (Recommended for updates)
1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vaishnaviya-portfolio.git
git push -u origin main
```
2. Go to → https://netlify.com → Sign up free
3. Click **"Add new site"** → **"Import from Git"**
4. Connect GitHub → Select your repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. Click **Deploy** — Done! ✅

Every time you push to GitHub, Netlify auto-deploys.

---

## 🔵 Step 4 — Deploy to Vercel (Alternative FREE option)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? → Y
# - Which scope? → your account
# - Link to existing project? → N
# - Project name? → vaishnaviya-portfolio
# - Directory? → ./
# - Override settings? → N
```

✅ Vercel gives you a URL like `vaishnaviya-portfolio.vercel.app`

---

## 🔗 Step 5 — Custom Domain (Optional)

If you own a domain (e.g. `vaishnaviya.dev`):
1. In Netlify → Site settings → Domain management → Add custom domain
2. Update your domain's DNS nameservers to Netlify's

---

## ✏️ Step 6 — Personalise Your Portfolio

Edit `src/App.js` to update:
- **LinkedIn URL** → Search for `linkedin.com/in/vaishnaviya-sankar` and replace
- **Phone/email** → Search for `7868938255` / `vaishnaviya.s@gmail.com`
- **New projects** → Add to the `PROJECTS` array
- **New skills** → Add to the `SKILLS` array

After editing, save and the browser auto-refreshes.

---

## 📝 Quick Commands Reference

| Command | What it does |
|---|---|
| `npm install` | Install all dependencies |
| `npm start` | Run locally on port 3000 |
| `npm run build` | Build for production (creates `build/` folder) |
| `vercel` | Deploy to Vercel |

---

## 🆘 Common Issues

**Port 3000 already in use?**
```bash
# Run on different port
PORT=3001 npm start
```

**npm install fails?**
```bash
npm install --legacy-peer-deps
```

**Build fails?**
```bash
# Clear cache and retry
rm -rf node_modules package-lock.json
npm install
npm run build
```
