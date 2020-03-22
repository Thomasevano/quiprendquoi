# Qui prend Quoi

## Installation

`npm install`

`npm run start`

Creer un fichier `.env` afin de stocker vos varibales d'environnement
`
NODE_ENV=development
PORT= 3000
API_URL=http://bastiencalou.fr:3000
`

## Améliorations apportées

- Affichage de la liste des items sur la page événement `-Add Party event and add item and delete item` (`app.js`, `party.pug`)
- Possibilité de supprimer un item/événement `Add Fetch` & `-Add Party event and add item and delete item`  (`app.js`, `party.pug`)
- Ajout d'une alerte comfirmant la suppression d'un événement ` - Add Fetch` (`parties.js`, `party.pug`)
- Rafraîchissement automatique des items avec fetch ` - Add Fetch` `- Better Fetch` (`parties.js`)
- Ajout d'un design grace a Bootstrap notamment `Add Fetch`
- Mise en ligne du site (malheureusement ne marche pas encore car j'obtient une erreur au moment du npm start lors du déploiement sur heroku)

## Article personnel

### Turbolinks

Lors du cours, grâce a vos divers références parlant de différents package pouvant être intégrés dans le projet avec une méthodologie d'amélioration progressive, j'ai donc découvert turbolinks.

#### En quoi consiste Turbolinks ?

Turbolinks permet de rendre un site web comme une single page application. Cet a dire que lorsque l'on clique sur le lien pour aller vers une nouvelle page, turbolinks fait en sorte de charger en amont le contenu des balises `<body>` et `<head>` de cette page pour l'afficher dans la page actuellle en remplaçant la partie contenu dans le `<body>` et ainsie en fusionnat ce que contient le `<head>`. Cette pratique permet ainsi de gagner en performance, car les éléments sont chargés en amont et ainsi, il n'y a plus l'effet de chargement de page qui doit charger une nouvelle page et peut être donc plus long.
Certains avantages de Turbolinks sont qu'il va se charger tout seul de s'implémenter sur vos liens avec la balise `<a>` de votre site pour ainsi agir au clic sur ce lien. Cela induit donc qu'il marche avec de simple pages HTML et donc compatible avec tous les navigateurs récents.

#### Comment l'installer ?

Ce package s'installe avec un simple `npm install --save turbolinks`
il suffit ensuite de l'importer dans un fichier JavaScript de votre projet :
`var Turbolinks = require('turbolinks')
Turbolinks.start()`

#### Mon expérience

J'ai donc voulu l'utiliser sur cette application pour rendre l'expérience plus fluide et plus performante cependant l'application étant composer de formulaire et fonction render pour rediriger vers les differentes pages. Il faut donc ajouter manuellement la fonctionalité grâce a `Turbolinks.visit(location)` ce que je n'ai malheureusement pas reussi a le faire.