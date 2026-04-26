# Projet : Gestion Intelligente de la RH

## Description du Projet

Ce dépôt présente un site vitrine professionnel pour un système de gestion intelligente des ressources humaines. Le site met en valeur les pages essentielles : accueil, description du projet, fonctionnalités du système et contact / équipe.

## Structure du Dépôt

```
PROJET EDUCATIF3/
├── README.md
├── guide_deploiement_github.md
├── organisation_equipe.md
├── planification_trello.md
├── synthese_reflexive.md
└── site_vitrine/
    ├── index.html
    ├── about.html
    ├── courses.html
    ├── contact.html
    ├── styles.css
    └── script.js
```

* **README.md** : Présentation du projet, structure et instructions de base.
* **guide_deploiement_github.md** : Guide pour déployer le site sur GitHub Pages.
* **organisation_equipe.md** : Rôles et fonctionnement de l'équipe.
* **planification_trello.md** : Planification des tâches du projet.
* **synthese_reflexive.md** : Synthèse réflexive sur le travail de groupe.
* **site_vitrine/** : Contient les fichiers du site de présentation.

## Pages du site

* `index.html` : Accueil de la solution RH intelligente.
* `about.html` : Présentation du projet et de l’équipe.
* `courses.html` : Description des fonctionnalités du système RH.
* `contact.html` : Formulaire de contact et coordination de l’équipe.
* `styles.css` : Styles globaux du site.
* `script.js` : Interactions simples du site (menu mobile, formulaire, compteurs, thème).

## Technologies Utilisées

* **Frontend** : HTML5, CSS3, JavaScript
* **Styles** : Tailwind CSS pour les styles rapides + CSS personnalisé
* **Outils** : Git, GitHub

## Visualisation locale

Pour voir le site dans ton navigateur :

1. Ouvre le dossier `site_vitrine`.
2. Lance `index.html` directement dans le navigateur.

> Optionnel : utiliser une extension comme Live Server pour un rechargement automatique.

## Publication sur GitHub Pages

Ce site peut être publié sur GitHub Pages en utilisant le dossier `site_vitrine` comme contenu du site.

### Déploiement automatique avec GitHub Actions

Un workflow GitHub Actions peut publier automatiquement le contenu de `site_vitrine` chaque fois que tu pousses une branche spécifique (par exemple `feature-js` ou `main`). Le workflow déployera le site sur l'environnement GitHub Pages du dépôt.

### Commandes Git locales

```bash
git status
git add site_vitrine/index.html site_vitrine/about.html site_vitrine/courses.html site_vitrine/contact.html site_vitrine/styles.css site_vitrine/script.js
git commit -m "Mise à jour du site pour le projet Gestion RH Intelligente"
git push origin <nom-de-ta-branche>
```

> Si ta branche principale est `main`, utilise `git push origin main`.
> Si ta branche est `feature-js`, utilise `git push origin feature-js`.

### Ce qui se passe après le push

1. Le workflow `.github/workflows/deploy_pages.yml` s’exécute.
2. Il prend le dossier `site_vitrine` et le publie sur GitHub Pages.
3. Le site est mis à jour automatiquement, généralement en quelques minutes.

## Contribution

1. Forker le dépôt.
2. Créer une branche dédiée : `git checkout -b feature/mon-changement`.
3. Faire les modifications.
4. Committer et pousser la branche.
5. Ouvrir une Pull Request.

## Contact

Pour toute question, utilise la page `contact.html` du site ou les informations de l’équipe dans le projet.
