# WealthHealth App - README

## **Description**
WealthHealth App est une application React permettant de gérer les employés d'une organisation. Elle inclut des fonctionnalités telles que l'ajout d'employés, la visualisation des employés existants, et la persistance des données grâce à Redux Persist.

---

## **Installation**

### **Prérequis**
- Node.js (version 14 ou supérieure)
- npm ou yarn (gestionnaire de paquets)

### **Étapes d'installation**
1. **Cloner le dépôt :**
   ```bash
   git clone 
   cd WealthHealth-app
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement :**
   ```bash
   npm run dev
   ```
   L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173).

4. **Construire l'application pour la production :**
   ```bash
   npm run build
   ```

5. **Servir l'application en production (optionnel) :**
   ```bash
   npm run serve
   ```

---

## **Technologies et outils utilisés**

### **Frameworks et bibliothèques**
1. **React**  
   Utilisé pour construire l'interface utilisateur de manière déclarative.
2. **Redux Toolkit**  
   Utilisé pour la gestion de l'état global de l'application.
3. **Redux Persist**  
   Permet la persistance des données dans `localStorage` afin de conserver l'état après un rechargement.
4. **React Router**  
   Utilisé pour la navigation entre les pages.
5. **React Hook Form**  
   Utilisé pour gérer les formulaires avec validation intégrée.
6. **Day.js**  
   Bibliothèque légère pour manipuler et formater les dates.
7. **CSS Modules**  
   Permet de scoper les styles CSS au niveau des composants.

---

## **Structure du projet**

```
WealthHealth-app/
├── public/                     # Fichiers statiques accessibles publiquement
│   ├── index.html              # Fichier HTML principal
│   └── headingsmap.js          # Script externe (optionnel)
├── src/                        # Code source de l'application
│   ├── assets/                 # Ressources statiques (ex: JSON, images)
│   │   ├── departements.js     # Liste des départements
│   │   └── states.json         # Liste des états américains
│   ├── components/             # Composants réutilisables
│   │   ├── DateField.jsx       # Champ de saisie pour les dates
│   │   ├── SelectField.jsx     # Champ de sélection avec options
│   │   └── react-modal.jsx     # Composant modal pour afficher les confirmations
│   ├── css/                    # Styles CSS modulaires
│   │   └── home.module.css     # Styles spécifiques à la page Home
│   ├── features/               # Slices Redux pour la gestion de l'état global
│   │   └── employeeslice.jsx  # Slice Redux pour gérer les employés
│   ├── Pages/                  # Pages principales de l'application
│   │   ├── Home.jsx            # Page d'accueil avec formulaire d'ajout d'employés
│   │   └── employee-list.jsx  # Page affichant la liste des employés
│   ├── utils/                  # Fonctions utilitaires
│   │    └── formatData.js      # Fonction pour formater les données des employés
│   ├── App.jsx                 # Composant racine de l'application
│   ├── router.jsx              # Configuration des routes avec React Router
│   └── store.jsx               # Configuration du store Redux avec Redux Persist
└── package.json                # Déclaration des dépendances et scripts npm

```

---

## **Fonctionnalités principales**

1. **Ajout d'employés**
    - Formulaire avec validation des champs.
    - Formatage automatique des dates avant stockage.

2. **Visualisation des employés**
    - Liste paginée et triable des employés existants.

3. **Persistance des données**
    - Les données sont sauvegardées dans `localStorage` grâce à Redux Persist.

4. **Navigation entre pages**
    - Navigation fluide entre la page d'accueil et la liste des employés via React Router.

---

## **Configuration spécifique**

### Redux Persist :
- Le fichier `store.jsx` configure Redux Persist pour sauvegarder le slice `employee` dans `localStorage`.

```jsx
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['employee'], // Seules les données du slice employee sont persistées.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
```

---

## **Dépendances principales**

| Nom                | Description                                  | Version |
|--------------------|----------------------------------------------|---------|
| `react`            | Framework JavaScript pour construire l'UI.  | ^18.x.x |
| `react-dom`        | Permet le rendu côté client avec React.      | ^18.x.x |
| `react-redux`      | Intégration de Redux avec React.             | ^8.x.x  |
| `@reduxjs/toolkit` | Boîte à outils pour simplifier Redux.        | ^1.x.x  |
| `redux-persist`    | Persistance de l'état Redux via stockage local.| ^6.x.x |
| `react-router-dom` | Gestion des routes dans une application React.| ^6.x.x |
| `react-hook-form`  | Gestion avancée des formulaires dans React.  | ^7.x.x  |
| `dayjs`            | Manipulation légère et rapide des dates.     | ^1.x.x  |

---

## **Scripts disponibles**

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile l'application pour la production.
- `npm run serve` : Sert l'application compilée en local.

---

## **Améliorations futures**

1. Ajouter une fonctionnalité d'édition d'employés existants.
2. Implémenter une recherche avancée dans la liste des employés.
3. Ajouter un système d'authentification pour sécuriser les données.

---

## **Support**

Pour toute question ou problème, contactez-nous via [support@wealthhealth.com](mailto:support@wealthhealth.com).


