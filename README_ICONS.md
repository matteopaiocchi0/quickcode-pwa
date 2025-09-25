# Icone PWA - QuickCode PC

## 📱 Icone Incluse

- `icon-192.svg` - Icona 192x192 (SVG)
- `icon-512.svg` - Icona 512x512 (SVG)

## 🔄 Conversione in PNG

Per convertire le icone SVG in PNG:

### **Metodo 1 - Online**
1. Vai su [Convertio](https://convertio.co/svg-png/)
2. Carica `icon-192.svg` → Converti in PNG 192x192
3. Carica `icon-512.svg` → Converti in PNG 512x512
4. Salva come `icon-192.png` e `icon-512.png`

### **Metodo 2 - Command Line**
```bash
# Installa ImageMagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Ubuntu

# Converti icone
convert assets/icon-192.svg -resize 192x192 assets/icon-192.png
convert assets/icon-512.svg -resize 512x512 assets/icon-512.png
```

### **Metodo 3 - Node.js**
```bash
npm install -g svg2png-cli
svg2png assets/icon-192.svg --output assets/icon-192.png --width 192 --height 192
svg2png assets/icon-512.svg --output assets/icon-512.png --width 512 --height 512
```

## ✅ Verifica Icone

Dopo la conversione, verifica che:
- ✅ `icon-192.png` esiste (192x192)
- ✅ `icon-512.png` esiste (512x512)
- ✅ Le icone si aprono correttamente
- ✅ Il manifest.webmanifest punta ai file PNG

## 🎨 Design Icone

Le icone utilizzano:
- **Gradiente**: Blu (#667eea) → Viola (#764ba2)
- **Forma**: Rettangolo arrotondato
- **Contenuto**: Simbolo "QC" stilizzato
- **Colore**: Bianco su sfondo gradiente
- **Stile**: Moderno e pulito

## 📱 Compatibilità

- ✅ **iOS Safari** - Icona home screen
- ✅ **Android Chrome** - Icona home screen
- ✅ **Desktop Chrome** - Icona app installata
- ✅ **PWA Manifest** - Icone standard
