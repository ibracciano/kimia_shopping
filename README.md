# kimia_shopping
Ce projet est un e_commerce répondant aux spécificités qui ont été demandées.
Framework Javascript Frontend : REACT JS
Framework Javascript Backend : Express js / Node Js
Framework Css : TAILWIND CSS
Base de données : Firebase


#Backend
Le Backend a été mis en place pour l'implémentation du paiment avec stripe
@instruction
Executer les commandes suivantes dans le terminal afin de mettre en marche le serveur
cd Backend : permet d'acceder à la partie Backend
node index.js : pour mettre en marche le serveur
NB: SANS CES DEUX COMMANDES, LE PAIEMENT VIA STRIPE NE SERA PAS POSSIBLE

------------------------------- ----------------------------------------------- ----------------------------------

#Frontend
1- Fonctionalités implementées
affichage des produits | panier d'achat | système de paiement | gestion des commandes | Connexion et déconnexion | Dashboard(Administrateur)

2- Dossiers 
Config : pour les configurations de Firebase
Utils : pour des Hooks personnalisés
Toolkit : Integration redux toolkit

3- Packages npm installés
React Icons : npm i react-icons - pour utiliser des icons
React Confetti : npm i react-confetti - pour les confetti après succès du paiment
React Slick : npm install react-slick --save - pour le slide de la partie home
React Tostify : npm install --save react-toastify - pour les alertes
Redux Toolkit : npm i @reduxjs/toolkit - pour le magasin redux
Redux persist : npm i redux-persist - pour garder les données du store redux dans le localstorage
Sweetalert2 : npm i sweetalert2 - pour le popup de confirmation dans la partie administrateur

4- Firebase
implémentation de l'authenfication avec google 
Utilisation de la base de donnée #fireStore pour la sauvegarde des données
Utilisation du storage pour le stockage des images
