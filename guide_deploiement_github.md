# Guide de Déploiement GitHub Pages — RH Intelligente

Ce guide explique comment déployer le site vitrine du projet RH Intelligente sur GitHub Pages.

## Pré-requis

1. Un compte GitHub.
2. Git installé sur ta machine.
3. Un dépôt Git initialisé pour le projet.

## Étape 1 : Vérifier la structure du projet

Le site à publier se trouve dans le dossier `site_vitrine` :

```
site_vitrine/
├── index.html
├── about.html
├── courses.html
├── contact.html
├── styles.css
└── script.js
```

## Étape 2 : S’assurer que Git est configuré

Depuis le dossier racine du projet, vérifie l’état du dépôt :

```bash
git status
```

Si tu n’as pas encore ajouté de remote, ajoute-le avec :

```bash
git remote add origin https://github.com/VOTRE_UTILISATEUR/NOM_DU_DEPOT.git
```

## Étape 3 : Ajouter et committer les fichiers

```bash
git add site_vitrine/index.html site_vitrine/about.html site_vitrine/courses.html site_vitrine/contact.html site_vitrine/styles.css site_vitrine/script.js
git commit -m "Préparer le déploiement du site RH Intelligente"
```

## Étape 4 : Pousser vers GitHub

```bash
git push origin <nom-de-ta-branche>
```

Exemple :

```bash
git push origin feature-js
```

## Étape 5 : Activer GitHub Pages

1. Va sur le dépôt GitHub associé.
2. Clique sur `Settings`.
3. Dans `Pages`, choisis `Deploy from a branch`.
4. Sélectionne la branche (`main`, `master` ou `feature-js`).
5. Pour le dossier, choisis `/ (root)` si tu publies le contenu du dépôt entier, ou `site_vitrine` si tu veux déployer directement ce dossier. (Dans ton cas, le site est dans `site_vitrine`.)
6. Clique sur `Save`.

## Déploiement automatique avec GitHub Actions

Pour que la mise à jour soit automatique à chaque push, utilise un workflow GitHub Actions. Ce workflow prend le contenu du dossier `site_vitrine` et le publie sur GitHub Pages sans autre intervention.

### Étapes pour l’automatisation

1. Crée le fichier `.github/workflows/deploy_pages.yml` avec le contenu du workflow.
2. Pousse ce fichier sur GitHub.
3. À chaque nouveau commit poussé sur `feature-js` ou `main`, GitHub Actions publiera automatiquement le site.

### Mise à jour du site

À chaque modification, exécute :

```bash
git add .
git commit -m "Mise à jour du site RH Intelligente"
git push origin <nom-de-ta-branche>
```

Le site sera mis à jour automatiquement après le push.
