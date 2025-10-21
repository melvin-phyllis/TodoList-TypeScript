# TodoList TypeScript

## LIEN
 =>https://todolist-type-script.netlify.app/ 
## Aperçu
J’ai développé cette petite Todo List pour pratiquer un flux React moderne avec TypeScript, Vite et Tailwind CSS 4. L’idée est d’offrir un formulaire simple pour saisir mes tâches et de les afficher immédiatement dans un tableau élégant propulsé par DaisyUI.

## Fonctionnalités
- Je saisis un titre, une description et une date grâce à un formulaire typé.
- La liste se met à jour dynamiquement dans un tableau réactif sans recharger la page.
- L’interface reprend les composants DaisyUI pour garder un rendu cohérent et responsive.
- Toute la logique de liste vit dans un state React unique, ce qui simplifie la gestion côté front.

## Stack & outils
- **React 19 + TypeScript** pour la logique et la sécurité des types.
- **Vite** pour le bundling ultra rapide.
- **Tailwind CSS 4 & DaisyUI** pour le design utilitaire et les composants pré-stylés.
- **ESLint** et la config TypeScript fournie par Vite pour garder un code propre.

## Structure du projet
- `src/App.tsx` : point d’entrée de l’appli et gestion du state `List`.
- `src/components/AddListe.tsx` : formulaire contrôlé pour créer une tâche.
- `src/components/ShowList.tsx` : rendu du tableau avec les tâches existantes.
- `src/types/index.ts` : définitions TypeScript pour mes objets `Listype`.



Ce README reflète l’état actuel de l’application et mes intentions pour la suite. N’hésite pas à suivre le dépôt ou à proposer des idées d’évolution !
