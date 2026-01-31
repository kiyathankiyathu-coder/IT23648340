# 🚀 COPY & PASTE: GITHUB UPLOAD COMMANDS

## YOUR UPLOAD COMMANDS (Ready to copy-paste!)

Open PowerShell and run these commands one by one:

### Step 1: Navigate to folder
```powershell
cd "c:\Users\kiyan\OneDrive\Desktop\New folder\New folder"
```

### Step 2: Create GitHub repository
Go to: https://github.com/new
- Name: IT23648340
- Visibility: Public
- Do NOT initialize
- Create repository

### Step 3: Add remote (REPLACE YOUR-USERNAME!)
```powershell
git remote add origin https://github.com/YOUR-USERNAME/IT23648340.git
```

Example (if your username is "kiyan"):
```powershell
git remote add origin https://github.com/kiyan/IT23648340.git
```

### Step 4: Rename branch
```powershell
git branch -M main
```

### Step 5: Push to GitHub
```powershell
git push -u origin main
```

### Step 6: Verify
Visit: https://github.com/YOUR-USERNAME/IT23648340

---

## ✅ VERIFICATION

After running all commands, you should see:
- ✓ Your GitHub username appears in git remote output
- ✓ "Branch 'main' set up to track remote..." message
- ✓ Repository is visible on GitHub with all files

---

## 📞 IF ERRORS OCCUR

**Error: "fatal: remote origin already exists"**
```powershell
git remote rm origin
git remote add origin https://github.com/YOUR-USERNAME/IT23648340.git
```

**Error: "fatal: unable to access"**
- Check internet connection
- Verify GitHub username is correct
- Ensure repository is created on GitHub

**Error: "Permission denied"**
- Use Personal Access Token (not your password)
- Create token at: https://github.com/settings/tokens
- Scope needed: ✓ repo

---

## ⏱️ TIME TO COMPLETE

- Create repo on GitHub: 2 minutes
- Run git commands: 3 minutes
- Verify upload: 1 minute
**Total: ~6 minutes**

---

## ✅ YOU'RE ALL SET!

Your repository has:
- 14 tracked files (including this guide)
- 7 commits ready
- Professional documentation
- 35 passing Playwright tests
- Clean git history

**GO UPLOAD NOW!** 🚀
