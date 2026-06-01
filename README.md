# Linkycab — Landing page statique

Landing page marketing de **Linkycab**, la carte digitale pour chauffeurs privés.

## Stack

Ce projet est volontairement simple :

- HTML pur ;
- CSS pur ;
- aucune dépendance npm ;
- aucun framework ;
- aucun build nécessaire.

## Fichiers principaux

- `index.html` : structure et contenu de la landing page ;
- `style.css` : styles responsive mobile-first.

## Lancer en local

Le site peut être ouvert directement dans un navigateur ou servi avec n’importe quel serveur HTTP statique. Par exemple, avec Python :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement sur Vercel

Le dépôt est directement déployable comme site statique, sans commande de build :

1. Aller dans **Vercel** ;
2. Cliquer sur **Add New** → **Project** ;
3. Importer le dépôt `linkycab-landing` ;
4. Cliquer sur **Deploy**.
