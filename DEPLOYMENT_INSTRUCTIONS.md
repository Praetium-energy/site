# GitHub Deployment Instructions for Praetium Energy Website

## 🚨 Authentication Required

The push failed because you need proper GitHub authentication. Here are your options:

## Option 1: Use GitHub Desktop (Easiest)
1. Download GitHub Desktop from https://desktop.github.com
2. Sign in with your GitHub account
3. Click "Add an Existing Repository from your Hard Drive"
4. Select the folder: `c:\github_repos\streamlit_landingpage`
5. Click "Publish Repository"
6. Set repository name as "site"
7. Make sure it goes to the "Praetium-energy" organization

## Option 2: Use Personal Access Token
1. Go to GitHub.com → Settings → Developer Settings → Personal Access Tokens
2. Generate new token with "repo" permissions
3. Copy the token
4. Run these commands:

```bash
cd c:\github_repos\streamlit_landingpage
git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/Praetium-energy/site.git
git push -u origin main
```

## Option 3: SSH Key (Advanced)
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your-email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Change remote URL: `git remote set-url origin git@github.com:Praetium-energy/site.git`
4. Push: `git push -u origin main`

## Option 4: Create Repository Manually
1. Go to https://github.com/Praetium-energy
2. Click "New Repository"
3. Name it "site"
4. Don't initialize with README (we already have files)
5. Follow the instructions for "push an existing repository"

## ✅ After Successful Push

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main", folder: "/ (root)"
   - Save

2. **Your website will be live at:**
   `https://praetium-energy.github.io/site`

## 🔧 Current Status
- ✅ Repository initialized locally
- ✅ Files committed and ready
- ❌ Need authentication to push to GitHub
- ⏳ Waiting for successful push to enable GitHub Pages

Choose the option that works best for you!
