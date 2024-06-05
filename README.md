
# Make Your Sandwich

## Description

"Make Your Sandwich" est une application web qui permet aux utilisateurs de créer des sandwichs personnalisés en ligne, étape par étape, en choisissant parmi une variété d'ingrédients. Les utilisateurs peuvent également choisir de créer un menu avec une boisson ou un dessert. L'application inclut des fonctionnalités de gestion des utilisateurs (inscription et connexion) et une interface d'administration pour gérer les commandes accéssible par tous.

## Technologies Utilisées

### Langages de Programmation
- **PHP** (Backend)
- **JavaScript (Vue.js)** (Frontend)

### Cadres Applicatifs
- **Vue.js** pour le front-end
- **PHP** pour le back-end

### SGBD
- **MySQL** comme système de gestion de base de données

### Outils et Bibliothèques
- **Axios** pour les requêtes HTTP
- **Vuex** pour la gestion de l'état
- **Bootstrap** pour le design réactif

### Gestion de Versions et Suivi de Problèmes
- **Git** pour le contrôle de version
- **GitHub** pour la gestion des versions et le suivi des problèmes

### Environnement de Développement
- **XAMPP** pour le serveur de développement
- **VSCode** comme éditeur de code

## Installation
Installer tout les fichiers et laisser dans le repertoire www/ :
  \.htaccess
  \check_user.php
  \db_connection.php
  \delete_order.php
  \getorder.php
  \index.html
  \login.php
  \register.php
  \submit_order.php
Dans un dossier "css" :
  \css\app.f9fde4d7.css
  \css\chunk-vendors.1413eea9.css

Dans un dossier "img" :
  \img\bg.ab9e48e1.jpg
  \img\logo.dbe530e8.png
Dans un dossier "js" :
   \js\app.1b2bfde6.js
   \js\app.1b2bfde6.js.map
   \js\chunk-vendors.aeec3068.js
   \js\chunk-vendors.aeec3068.js.map

Lancer l'application !

### Prérequis

- PHP 7.4 ou supérieur
- MySQL 5.7 ou supérieur
- Node.js 14 ou supérieur
- Composer
- Git

### Étapes d'Installation

1. Clonez le dépôt
    \`\`\`bash
    git clone https://github.com/Leda13003/make-your-sandwich.git
    \`\`\`

2. Installez les dépendances du backend
    \`\`\`bash
    composer install
    \`\`\`

3. Installez les dépendances du frontend
    \`\`\`bash
    npm install
    \`\`\`

4. Configurez votre base de données MySQL et importez le fichier \`make_your_sandwich.sql\` pour créer les tables nécessaires.

5. Configurez les variables d'environnement pour le backend en créant un fichier \`.env\` basé sur \`.env.example\`.

6. Démarrez le serveur de développement PHP
    \`\`\`bash
    php -S localhost:8000 -t public
    \`\`\`

7. Démarrez le serveur de développement Vue.js
    \`\`\`bash
    npm run serve
    \`\`\`

## Utilisation

### Inscription et Connexion

- **Inscription** : Les utilisateurs peuvent s'inscrire en fournissant un nom d'utilisateur, un email et un mot de passe.
- **Connexion** : Les utilisateurs peuvent se connecter avec leur email et mot de passe.

### Création de Sandwich

1. **Choisir le Pain** : Les utilisateurs peuvent choisir parmi une variété de pains.
2. **Choisir les Protéines** : Les utilisateurs peuvent choisir une ou plusieurs protéines.
3. **Ajouter du Fromage** : Les utilisateurs peuvent ajouter différents types de fromage.
4. **Ajouter des Légumes** : Les utilisateurs peuvent ajouter une variété de légumes.
5. **Ajouter des Sauces** : Les utilisateurs peuvent choisir parmi différentes sauces.
6. **Ajouter des Extras** : Les utilisateurs peuvent ajouter des extras comme des frites.
7. **Assaisonnement** : Les utilisateurs peuvent ajouter des épices et des herbes.
8. **Choisir une Boisson et un Dessert** : Les utilisateurs peuvent compléter leur commande avec une boisson et un dessert.

### Administration des Commandes

- Les administrateurs peuvent visualiser les commandes en cours et marquer les commandes comme "Délivrées".

## Structure des Dossiers

\`\`\`
make-your-sandwich/
│
├── public/                  # Contient les fichiers accessibles publiquement (index.php, assets, etc.)
├── src/                     # Contient le code source Vue.js (components, views, store, etc.)
├── database/                # Contient les fichiers de migration et les seeds
├── tests/                   # Contient les tests unitaires et fonctionnels
├── .env.example             # Exemple de fichier d'environnement
├── composer.json            # Dépendances PHP
├── package.json             # Dépendances JavaScript
└── README.md                # Documentation du projet
\`\`\`

## Environnement de Développement

- **XAMPP** pour la gestion du serveur Apache et MySQL.
- **Visual Studio Code** comme éditeur de code.

## Contribuer

1. Fork le projet
5. Ouvrez une Pull Request

## Auteurs

- [Adel Bouachraoui](https://github.com/Leda13003)


