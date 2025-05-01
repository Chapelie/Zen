# ZenGrowth LinkedIn QR Code Generator

Un générateur de QR code personnalisé pour les profils LinkedIn, intégré dans la section "Free Tools" de [ZenGrowth](https://zengrowth.app).

## 🌟 Fonctionnalités

- **Génération de QR Code** : Créez instantanément un QR code pour votre profil LinkedIn
- **Personnalisation** :
  - Choix de la couleur du QR code
  - Ajout d'un logo personnalisé
  - Logo LinkedIn par défaut
- **Multilingue** : Support français et anglais
- **Export** : Téléchargement du QR code au format PNG haute qualité
- **Responsive** : Design adaptatif pour tous les appareils
- **Style ZenGrowth** : Interface utilisateur cohérente avec l'identité visuelle de ZenGrowth

## 🛠️ Stack Technique

- **Framework** : Next.js 14 avec App Router
- **Langage** : TypeScript
- **Styling** : TailwindCSS
- **Génération QR** : `react-qr-code`
- **Export Image** : `html-to-image`
- **Déploiement** : Vercel

## 🚀 Installation

1. Clonez le repository :
```bash
git clone [votre-repo-url]
cd zengrowth-qr-linkedin
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📦 Structure du Projet

```
/qr-linkedin/
│
├── app/
│   ├── page.tsx           # Page principale
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Styles globaux
│
├── components/
│   └── LinkedInQRCode.tsx # Composant principal
│
├── utils/
│   └── translations.ts    # Fichier de traductions
│
├── public/                # Assets statiques
│
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Personnalisation

Le générateur utilise les couleurs de ZenGrowth par défaut, mais vous pouvez facilement personnaliser :

- Les couleurs dans `tailwind.config.js`
- Les textes dans `utils/translations.ts`
- Le style dans `app/globals.css`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
