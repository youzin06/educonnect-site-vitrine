# Guide de Déploiement : Mettre votre Site EduConnect sur GitHub Pages

Ce guide vous accompagnera, étape par étape, pour publier votre site vitrine EduConnect sur GitHub et le rendre accessible en ligne gratuitement via GitHub Pages.

## Prérequis

Avant de commencer, assurez-vous d'avoir :

1.  Un compte GitHub (si ce n'est pas déjà fait, créez-en un sur [github.com](https://github.com/)).
2.  Git installé sur votre machine locale. Si vous ne l'avez pas, téléchargez-le depuis [git-scm.com](https://git-scm.com/downloads).
3.  Votre projet EduConnect (`projet_educatif/site_vitrine`) prêt sur votre machine.

## Étape 1 : Initialiser un Dépôt Git Local

Ouvrez votre terminal ou invite de commande et naviguez jusqu'au dossier `site_vitrine` de votre projet. C'est ce dossier qui contient tous les fichiers de votre site web (HTML, CSS, JS).

```bash
cd /chemin/vers/votre/projet_educatif/site_vitrine
```

Une fois dans le dossier `site_vitrine`, initialisez un nouveau dépôt Git :

```bash
git init
```

Ajoutez tous les fichiers de votre site au dépôt local :

```bash
git add .
```

Effectuez votre premier commit (enregistrement des modifications) :

```bash
git commit -m "Initial commit: EduConnect landing page"
```

## Étape 2 : Créer un Nouveau Dépôt sur GitHub

1.  Connectez-vous à votre compte GitHub.
2.  Cliquez sur le bouton `+` en haut à droite, puis sélectionnez `New repository`.
3.  **Nom du dépôt** : Donnez un nom significatif à votre dépôt, par exemple `educonnect-site-vitrine` ou `ayouba-educonnect`.
4.  **Description** (Optionnel) : Ajoutez une brève description de votre projet.
5.  **Public ou Privé** : Choisissez `Public` pour que votre site soit accessible via GitHub Pages.
6.  **NE cochez PAS** les options pour ajouter un README, .gitignore ou licence, car nous les avons déjà localement.
7.  Cliquez sur `Create repository`.

## Étape 3 : Lier votre Dépôt Local au Dépôt GitHub

Après avoir créé le dépôt sur GitHub, vous verrez une page avec des instructions. Copiez la ligne qui ressemble à ceci (remplacez `VOTRE_NOM_UTILISATEUR` et `NOM_DU_DEPOT` par vos informations) :

```bash
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/NOM_DU_DEPOT.git
```

Collez cette commande dans votre terminal (toujours dans le dossier `site_vitrine`) et exécutez-la.

## Étape 4 : Pousser votre Code sur GitHub

Maintenant, envoyez votre code local vers le dépôt distant sur GitHub :

```bash
git push -u origin main
```

*(Note : Si votre branche principale s'appelle `master` au lieu de `main`, utilisez `git push -u origin master`)*

## Étape 5 : Activer GitHub Pages

1.  Sur votre dépôt GitHub, cliquez sur l'onglet `Settings`.
2.  Dans le menu latéral gauche, cliquez sur `Pages`.
3.  Sous la section `Build and deployment`, pour `Source`, choisissez `Deploy from a branch`.
4.  Pour `Branch`, sélectionnez la branche `main` (ou `master` si c'est votre cas) et le dossier `/ (root)`.
5.  Cliquez sur `Save`.

GitHub Pages va maintenant construire et déployer votre site. Cela peut prendre quelques minutes. Une fois le déploiement terminé, l'URL de votre site sera affichée sur cette même page `Settings > Pages`. Elle ressemblera à `https://VOTRE_NOM_UTILISATEUR.github.io/NOM_DU_DEPOT/`.

## Étape 6 : Mettre à Jour votre Site

Chaque fois que vous apportez des modifications à votre site local, suivez ces étapes pour les publier :

1.  **Sauvegarder les modifications** : Modifiez vos fichiers (HTML, CSS, JS) dans le dossier `site_vitrine`.
2.  **Ajouter les modifications à Git** :
    ```bash
    git add .
    ```
3.  **Commiter les modifications** :
    ```bash
    git commit -m "Description de vos modifications"
    ```
4.  **Pousser sur GitHub** :
    ```bash
    git push origin main
    ```

Vos modifications seront automatiquement déployées sur GitHub Pages après quelques instants.

Félicitations ! Votre site EduConnect est maintenant en ligne et géré avec Git et GitHub. Si vous avez des questions, n'hésitez pas à consulter la documentation officielle de GitHub Pages.
