# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your React app to GitHub Pages for FREE!

## 📋 Prerequisites

1. **Git installed** on your computer
   - Download from: https://git-scm.com/downloads
   - Verify: `git --version`

2. **GitHub account**
   - Create free account at: https://github.com

3. **Node.js and npm installed**
   - Already have this if you can run the app locally

## 🎯 Step-by-Step Deployment

### Step 1: Initialize Git Repository (If not already done)

Open terminal/PowerShell in the `com` folder and run:

```bash
cd com
git init
```

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `daily-spending-organizer` (or any name you like)
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 3: Configure Git (First time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/daily-spending-organizer.git
```

**Example:**
```bash
git remote add origin https://github.com/kathirvelan210/daily-spending-organizer.git
```

### Step 5: Update package.json Homepage

The `package.json` already has the homepage configured. Make sure it matches your GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/daily-spending-organizer"
```

**Current setting:**
```json
"homepage": "https://kathirvelan210.github.io/daily-spending-organizer"
```

If your username is different, update it!

### Step 6: Install gh-pages Package (Already installed)

The package is already in devDependencies. If needed, install with:

```bash
npm install --save-dev gh-pages
```

### Step 7: Create .gitignore File

Create a `.gitignore` file in the `com` folder to exclude unnecessary files:

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### Step 8: Add All Files to Git

```bash
git add .
git commit -m "Initial commit - Daily Spending Organizer"
```

### Step 9: Push to GitHub

For the first push:

```bash
git branch -M main
git push -u origin main
```

### Step 10: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your React app (`npm run build`)
2. Create a `gh-pages` branch
3. Push the build folder to GitHub Pages

### Step 11: Enable GitHub Pages (If needed)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 12: Access Your Live Website! 🎉

Your website will be live at:
```
https://YOUR_USERNAME.github.io/daily-spending-organizer
```

**Example:**
```
https://kathirvelan210.github.io/daily-spending-organizer
```

⏰ **Note:** It may take 2-5 minutes for the site to go live after first deployment.

## 🔄 Updating Your Deployed Site

Whenever you make changes to your code:

```bash
# 1. Save your changes
git add .
git commit -m "Description of changes"

# 2. Push to GitHub
git push origin main

# 3. Deploy updated version
npm run deploy
```

## 🛠️ Troubleshooting

### Issue: "gh-pages not found"
**Solution:**
```bash
npm install --save-dev gh-pages
```

### Issue: "Permission denied"
**Solution:** You may need to authenticate with GitHub
```bash
# Use GitHub CLI or Personal Access Token
# Or use SSH instead of HTTPS
```

### Issue: "Blank page after deployment"
**Solution:** 
1. Check `homepage` in package.json matches your GitHub URL
2. Make sure `basename={process.env.PUBLIC_URL}` is in BrowserRouter (already done!)
3. Clear browser cache and try again

### Issue: "404 on refresh"
**Solution:** This is normal for GitHub Pages with React Router. Users should:
- Use navigation within the app
- Bookmark the home page, not internal routes

### Issue: Routes not working
**Solution:** The app is already configured with `basename={process.env.PUBLIC_URL}` which fixes this!

## 📱 Testing Locally Before Deploy

Always test your build locally before deploying:

```bash
npm run build
npx serve -s build
```

Then open http://localhost:3000

## 🔐 Using Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📊 Monitoring Your Site

- **GitHub Pages Status:** Check in repository Settings → Pages
- **Build Logs:** Check Actions tab in your repository
- **Analytics:** Add Google Analytics if needed

## 🎓 Git Commands Cheat Sheet

```bash
# Check status
git status

# See changes
git diff

# View commit history
git log

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v
```

## 🌟 Best Practices

1. **Commit Often** - Small, frequent commits are better
2. **Write Clear Messages** - Describe what changed and why
3. **Test Before Deploy** - Always test locally first
4. **Keep Dependencies Updated** - Run `npm update` periodically
5. **Use Branches** - Create feature branches for big changes

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)

## ✅ Deployment Checklist

- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] `.gitignore` file created
- [ ] `homepage` in package.json updated
- [ ] `gh-pages` package installed
- [ ] Code committed to Git
- [ ] Pushed to GitHub
- [ ] Deployed with `npm run deploy`
- [ ] GitHub Pages enabled in settings
- [ ] Website is live and working!

---

**Congratulations! Your app is now live on the internet! 🎉**

Share your link with friends and family!