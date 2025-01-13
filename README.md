# Hello World

## Tests unitaires

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|-----------|---------|----------|---------|---------|--------------------|
| All files |   99.16 |      100 |   93.75 |     100 |                    |
| tp.js     |   99.16 |      100 |   93.75 |     100 |                    |

Voici les fonctions couvertes et leurs tests :

### 1. sum

Objectif : Tester la fonction sum pour vérifier qu'elle calcule correctement la somme de deux nombres.
Cas de test :
* Renvoie 0 si les arguments ne sont pas des nombres valides.
* Renvoie la somme correcte si les deux arguments sont des nombres valides.

### 2. my_size_alpha_t

Objectif : Tester la fonction my_size_alpha_t qui calcule la longueur d'une chaîne de caractères.
Cas de test :
* Renvoie 0 si l'argument n'est pas une chaîne.
* Renvoie la longueur correcte si l'argument est une chaîne valide.
* Renvoie 0 si aucun argument n'est passé (valeur par défaut).

### 3. my_array_alpha_t

Objectif : Tester la fonction my_array_alpha_t qui convertit une chaîne de caractères en tableau de caractères.
Cas de test : Renvoie un tableau contenant les caractères individuels de la chaîne.

### 4. my_is_posi_neg_t

Objectif : Tester la fonction my_is_posi_neg_t qui détermine si un nombre est positif ou négatif.
Cas de test :
* Renvoie NEGATIVE pour les nombres négatifs ou zéro.
* Renvoie POSITIF pour les nombres positifs.

### 5. fibo

Objectif : Tester la fonction fibo qui calcule la suite de Fibonacci.
Cas de test :
* Renvoie 0 pour fibo(0).
* Renvoie 1 pour fibo(1) et fibo(2).
* Renvoie la valeur correcte pour des indices supérieurs (ég., fibo(3)).

### 6. my_display_alpha_reverse_t

Objectif : Tester la fonction my_display_alpha_reverse_t qui affiche l'alphabet en ordre inverse.
Cas de test : Renvoie la chaîne zyxwvutsrqponmlkjihgfedcba.

### 7. my_length_array_t

Objectif : Tester la fonction my_length_array_t qui calcule la longueur d'une chaîne.
Cas de test : Renvoie la longueur correcte pour une chaîne donnée.

### 8. my_display_unicode_t

Objectif : Tester la fonction my_display_unicode_t qui convertit un tableau de codes Unicode en chaîne de caractères.
Cas de test : Renvoie la chaîne correspondant aux codes Unicode fournis (ég., [84, 101, 115, 116, 51, 32] → Test3 ).

### 9. quickSort

Objectif : Tester la fonction quickSort qui trie un tableau de nombres.
Cas de test : Renvoie le tableau trié dans l'ordre croissant (ég., [1, 2, 3, 50, 10, 22] → [1, 2, 3, 10, 22, 50]).

### 10. tspBrutForce

Objectif : Tester la fonction tspBrutForce qui trouve le chemin le plus court pour le problème du voyageur de commerce.
Cas de test : Renvoie la distance minimale et l'ordre des villes pour un graphe donné (ég., A -> B -> D -> C -> A).

### 11. permuter

Objectif : Tester la fonction permuter qui génère toutes les permutations possibles d'un tableau.
Cas de test : Renvoie toutes les permutations possibles d'un tableau donné (ég., ['A', 'B', 'C']).

### 12. resoudreSudoku

Objectif : Tester la fonction resoudreSudoku qui résout une grille de Sudoku valide.
Cas de test :
* Renvoie true pour une grille résolue correctement.
* Modifie la grille en place pour fournir une solution valide.

### 13. estValide

Objectif : Tester la fonction estValide qui vérifie si un nombre peut être placé à une position donnée dans une grille de Sudoku.
Cas de test :
* Renvoie true si le placement est valide.
* Renvoie false si le placement est invalide.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install helloworld.

Use node v16 use :
```bash
nvm install 16
```

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```
