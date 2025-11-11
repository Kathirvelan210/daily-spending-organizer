# ⚡ Quick Start - Deploy in 5 Minutes!

## 🎯 For Complete Beginners

Follow these exact steps to deploy your website:

### Step 1: Open PowerShell/Terminal

1. Press `Windows Key + R`
2. Type `powershell` and press Enter
3. Navigate to your project:
   ```powershell
   cd "C:\Users\kathi\OneDrive\Desktop\Project\com"
   ```

### Step 2: Check if Git is Installed

```powershell
git --version
```

**If you see an error:**
- Download Git from: https://git-scm.com/downloads
- Install it
- Restart PowerShell

### Step 3: Configure Git (First Time Only)

Replace with YOUR information:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Initialize Git Repository

```powershell
git init
```

### Step 5: Create GitHub Repository

1. Go to https://github.com
2. Sign in (or create account)
3. Click **"+"** → **"New repository"**
4. Name: `daily-spending-organizer`
5. Keep **Public**
6. Click **"Create repository"**

### Step 6: Connect to GitHub

**IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

```powershell
git remote add origin https://github.com/YOUR_USERNAME/daily-spending-organizer.git
```

**Example (if your username is "john123"):**
```powershell
git remote add origin https://github.com/john123/daily-spending-organizer.git
```

### Step 7: Update package.json

Open `package.json` and change line 5:

**From:**
```json
"homepage": "https://kathirvelan210.github.io/daily-spending-organizer",
```

**To (use YOUR username):**
```json
"homepage": "https://YOUR_USERNAME.github.io/daily-spending-organizer",
```

Save the file!

### Step 8: First Commit

```powershell
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

**If asked for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password!)
  - Get token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### Step 9: Deploy to GitHub Pages

```powershell
npm run deploy
```

Wait for it to complete (1-2 minutes)...

### Step 10: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"**
3. Click **"Pages"** (left sidebar)
4. Under Source:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 11: Visit Your Website! 🎉

Your site will be live at:
```
https://YOUR_USERNAME.github.io/daily-spending-organizer
```

Wait 2-5 minutes for first deployment!

---

## 🔄 Future Updates (Easy Way)

### Option 1: Use the Deploy Script (Windows)

Just double-click `deploy.bat` file!

### Option 2: Manual Commands

```powershell
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

---

## 🆘 Common Issues

### "gh-pages not found"
```powershell
npm install --save-dev gh-pages
```

### "Permission denied"
- Use Personal Access Token instead of password
- Or set up SSH keys

### "Blank page after deploy"
- Check `homepage` in package.json
- Clear browser cache (Ctrl + Shift + Delete)

### "Routes not working"
- Already fixed in the code!
- Just make sure `homepage` is correct

---

## 📞 Need Help?

1. Check `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Google the error message
3. Ask on Stack Overflow
4. Check GitHub Pages documentation

---

**You're almost there! Just follow the steps one by one! 🚀**