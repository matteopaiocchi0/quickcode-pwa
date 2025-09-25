# 🚀 Istruzioni per Pubblicare QuickCode PWA

## 📋 Passi per Pubblicare su GitHub Pages

### 1️⃣ **Crea Repository su GitHub**

1. Vai su [GitHub.com](https://github.com)
2. Clicca **"New repository"**
3. **Nome repository**: `quickcode-pwa`
4. **Descrizione**: `🚀 QuickCode PC PWA - Generatore password con utente fisso. Installabile su iOS/Android/Desktop via GitHub Pages.`
5. **Visibilità**: ✅ Pubblico
6. **Initialize**: ❌ Non selezionare nulla (abbiamo già i file)
7. Clicca **"Create repository"**

### 2️⃣ **Carica File su GitHub**

**Opzione A - Via Web:**
1. Nel repository appena creato, clicca **"uploading an existing file"**
2. Trascina tutti i file dalla cartella `quickcode-pwa/`:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `README.md`
   - Cartella `assets/` (con icone)
   - Cartella `.github/workflows/` (con deploy.yml)
3. **Commit message**: `🚀 Initial QuickCode PWA setup`
4. Clicca **"Commit changes"**

**Opzione B - Via Git (se hai Git configurato):**
```bash
cd /Users/matteopapetti/Downloads/quickcode-pwa
git remote add origin https://github.com/USERNAME/quickcode-pwa.git
git branch -M main
git push -u origin main
```

### 3️⃣ **Attiva GitHub Pages**

1. Nel repository, vai su **Settings** (tab in alto)
2. Scorri fino a **"Pages"** (sidebar sinistra)
3. **Source**: Deploy from a branch
4. **Branch**: `main`
5. **Folder**: `/` (root)
6. Clicca **"Save"**

### 4️⃣ **Verifica Deploy**

1. GitHub Actions eseguirà automaticamente il deploy
2. Vai su **Actions** tab per vedere il progresso
3. L'app sarà disponibile su: `https://USERNAME.github.io/quickcode-pwa/`

## 📱 Test PWA

### **Desktop (Chrome/Edge)**
1. Apri `https://USERNAME.github.io/quickcode-pwa/`
2. Clicca icona "Installa" nella barra degli indirizzi
3. L'app si apre come finestra separata

### **iPhone (Safari)**
1. Apri `https://USERNAME.github.io/quickcode-pwa/` in Safari
2. Tocca "Condividi" (📤)
3. Seleziona "Aggiungi alla schermata Home"
4. L'app appare come icona nativa

### **Android (Chrome)**
1. Apri `https://USERNAME.github.io/quickcode-pwa/` in Chrome
2. Menu (⋮) → "Aggiungi alla schermata Home"
3. L'app appare come icona nativa

## ✅ Verifica Funzionalità

- ✅ **Random ID**: Inserisci 6 cifre (es. 123456)
- ✅ **Genera Password**: Clicca il pulsante
- ✅ **Risultato**: Password calcolata (es. 110568)
- ✅ **Copia**: Clicca per copiare negli appunti
- ✅ **Offline**: Funziona senza connessione
- ✅ **Installabile**: Come app nativa

## 🔧 Risoluzione Problemi

### **GitHub Pages non si attiva**
- Verifica che il repository sia pubblico
- Controlla che i file siano nella root
- Attendi 5-10 minuti per il deploy

### **PWA non installabile**
- Verifica che l'URL sia HTTPS
- Controlla che manifest.webmanifest sia accessibile
- Testa su Chrome/Edge per desktop

### **Icone non appaiono**
- Verifica che `assets/icon-192.png` e `assets/icon-512.png` esistano
- Controlla che il manifest punti ai file corretti

## 🎉 Risultato Finale

Dopo il deploy, avrai:
- 🌐 **URL pubblico**: `https://USERNAME.github.io/quickcode-pwa/`
- 📱 **PWA installabile** su qualsiasi dispositivo
- 🔄 **Deploy automatico** ad ogni modifica
- 📖 **Documentazione completa** nel README

**La PWA sarà accessibile da tutto il mondo!** 🚀✨
