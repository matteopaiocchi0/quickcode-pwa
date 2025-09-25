# QuickCode PC — PWA per GitHub Pages

🌐 **Progressive Web App per la generazione di password con utente fisso**

[![Deploy to GitHub Pages](https://github.com/USERNAME/quickcode-pwa/workflows/Deploy%20QuickCode%20PWA%20to%20GitHub%20Pages/badge.svg)](https://github.com/USERNAME/quickcode-pwa/actions)

## 🚀 Live Demo

**📱 [Apri QuickCode PWA](https://USERNAME.github.io/quickcode-pwa/)**

## ✨ Caratteristiche

- **Utente fisso**: 630620
- **Nuovo utente fisso**: 430620
- **Input**: Random ID (6 cifre)
- **Algoritmo**: `Password = Random ID XOR 233112` (fisso)
- **PWA installabile** su iOS/Android
- **Funziona offline**
- **Interfaccia mobile ottimizzata**

## 📱 Installazione PWA

### **iPhone (Safari)**
1. Apri [QuickCode PWA](https://USERNAME.github.io/quickcode-pwa/) in Safari
2. Tocca il pulsante **"Condividi"** (📤)
3. Seleziona **"Aggiungi alla schermata Home"**
4. L'app appare come icona nativa

### **Android (Chrome)**
1. Apri [QuickCode PWA](https://USERNAME.github.io/quickcode-pwa/) in Chrome
2. Tocca il menu (⋮) → **"Aggiungi alla schermata Home"**
3. L'app appare come icona nativa

### **Desktop (Chrome/Edge)**
1. Apri [QuickCode PWA](https://USERNAME.github.io/quickcode-pwa/) in Chrome/Edge
2. Clicca sull'icona **"Installa"** nella barra degli indirizzi
3. L'app si apre come finestra separata

## 💻 Utilizzo

1. **Inserisci Random ID** di 6 cifre (es. `123456`)
2. **Tocca "Genera Password"** o premi Invio
3. **La password appare** nel campo risultato
4. **Tocca "Copia"** per copiarla negli appunti

## 🔐 Algoritmo

```
Password = Random ID XOR 233112
```

**Esempio:**
- Random ID: `123456`
- XOR: `233112` (fisso)
- Password: `110568`

## 🛠️ Setup GitHub Pages

### **1. Crea Repository**
```bash
# Crea nuovo repository su GitHub
# Nome: quickcode-pwa
# Pubblico: ✅
# README: ❌ (abbiamo già i file)
```

### **2. Carica File**
```bash
# Clona il repository
git clone https://github.com/USERNAME/quickcode-pwa.git
cd quickcode-pwa

# Copia tutti i file del pacchetto
# (index.html, manifest.webmanifest, sw.js, assets/, .github/)

# Commit e push
git add .
git commit -m "Initial PWA setup"
git push origin main
```

### **3. Attiva GitHub Pages**
1. Vai su **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` / `/` (root)
4. **Save**

### **4. Verifica Deploy**
- GitHub Actions eseguirà automaticamente il deploy
- L'app sarà disponibile su: `https://USERNAME.github.io/quickcode-pwa/`

## 📁 Struttura File

```
quickcode-pwa/
├── index.html              # App principale
├── manifest.webmanifest    # Configurazione PWA
├── sw.js                  # Service Worker
├── assets/
│   ├── icon-192.png       # Icona 192x192
│   └── icon-512.png       # Icona 512x512
├── .github/workflows/
│   └── deploy.yml         # GitHub Actions
└── README.md              # Questo file
```

## 🔧 Sviluppo Locale

### **Test Locale**
```bash
# Avvia server locale
python -m http.server 8000
# Apri: http://localhost:8000
```

### **Test PWA**
1. Apri Chrome DevTools
2. **Application** → **Manifest** (verifica configurazione)
3. **Application** → **Service Workers** (verifica registrazione)
4. **Lighthouse** → **PWA** (verifica score)

## ✅ Vantaggi PWA

- ✅ **Installabile** come app nativa
- ✅ **Funziona offline** (Service Worker)
- ✅ **Icona personalizzata** sulla home
- ✅ **Aggiornamenti automatici**
- ✅ **Nessuna installazione** da store
- ✅ **Cross-platform** (iOS/Android/Desktop)

## 🎯 Target

- **Utenti mobile** (iPhone/Android)
- **Ambienti aziendali** senza app store
- **Distribuzione interna** via URL
- **App pseudo-nativa** con funzionalità web

## 📞 Supporto

- **Tutto locale** - nessun dato inviato
- **Funziona offline** - nessuna connessione richiesta
- **Algoritmo fisso** - impossibile modificare
- **Codice trasparente** - verificabile

## 🔒 Sicurezza

- ✅ **Algoritmo hardcoded** - non modificabile
- ✅ **Nessuna configurazione** - zero errori
- ✅ **Tutto locale** - nessun invio dati
- ✅ **Codice verificabile** - trasparente

## 🚀 Deploy Automatico

Il repository include **GitHub Actions** che:
- ✅ **Deploy automatico** ad ogni push su `main`
- ✅ **Validazione file** PWA
- ✅ **Test locale** prima del deploy
- ✅ **Notifiche** su successo/errore

## 📱 Compatibilità

| Dispositivo | Browser | Installabile |
|---------------|---------|--------------|
| iPhone | Safari | ✅ |
| Android | Chrome | ✅ |
| Android | Samsung Internet | ✅ |
| Desktop | Chrome | ✅ |
| Desktop | Edge | ✅ |
| Desktop | Firefox | ❌ (solo web) |

---

**🎉 La PWA è pronta per essere distribuita su GitHub Pages!**

**🔗 URL finale: `https://USERNAME.github.io/quickcode-pwa/`**
