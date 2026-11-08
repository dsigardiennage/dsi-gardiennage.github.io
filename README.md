# DSI Gardiennage — modèle de site vitrine

Site statique en HTML, CSS et JavaScript, conçu pour être publié avec GitHub Pages.

## Fichiers
- `index.html` : accueil
- `a-propos.html` : présentation
- `services.html` : prestations (à valider)
- `contact.html` : coordonnées et formulaire de démonstration
- `mentions-legales.html` et `confidentialite.html` : modèles à compléter
- `assets/css/style.css` : styles
- `assets/js/main.js` : menu mobile et comportement du formulaire

## Avant publication — à faire impérativement
1. Remplacer tous les champs entre crochets `[ ... ]` par les informations professionnelles exactes.
2. Vérifier la dénomination, la forme juridique, le SIREN/SIRET, l'adresse professionnelle et les mentions réglementaires.
3. Ne garder que les prestations réellement proposées et pour lesquelles l'entreprise possède les autorisations et qualifications requises. Vérifier les obligations propres à la sécurité privée auprès des autorités compétentes / du CNAPS.
4. Ajouter vos propres photos et votre logo, ou utiliser des images avec licence appropriée. Les images de démonstration externes peuvent être remplacées.
5. Dans `assets/js/main.js`, remplacer `[REMPLACER-PAR-VOTRE-EMAIL]`. Le formulaire fourni est une démonstration qui ouvre le logiciel de messagerie ; pour recevoir les messages directement depuis le site, connectez un prestataire de formulaires (par exemple Formspree) et configurez-le conformément au RGPD.
6. Faire vérifier les mentions légales et la politique de confidentialité avant la mise en ligne.

## Publication GitHub Pages
1. Créez un dépôt GitHub nommé `VOTRE-PSEUDO.github.io` (ou un dépôt de projet).
2. Téléversez le contenu de ce dossier à la racine du dépôt — pas le dossier ZIP lui-même.
3. Dans **Settings → Pages**, choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis enregistrez.
4. Attendez la publication. L'adresse sera `https://VOTRE-PSEUDO.github.io/`.

## Personnalisation
Les couleurs principales sont définies au début de `assets/css/style.css` dans `:root` : `--navy`, `--gold` et `--gold-light`.
