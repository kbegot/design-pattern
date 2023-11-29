# Design Pattern 

## Dependency Injection (DI) :

L'injection de dépendances dans mon app Biblio est principalement réalisée à travers l'utilisation de NestJS.

J'utilise le mécanisme de DI de NestJS pour injecter les dépendances dans mes services et contrôleurs. Sa se voit dans les constructeurs de mes services, tels que BooksService et LoansService. Mon App Module centralisent l'injection de dépendances en spécifiant les différents modules et dépendances à utiliser dans l'application. Ce mécanisme d'injection de dépendances simplifie la gestion des dépendances, améliore la testabilité du code et permet une structure modulaire de l'application.


## Decorator Pattern :

J'utilise des décorateurs dans Nest.js pour annoter des classes (@Controller, @Post, @Body) et méthodes (@Post, @Get), facilitant la configuration du framework.


## Module Pattern

j'ai organiser mon application avec en modules avec  BooksModule ou loansModule par excemple, encapsulant différentes parties fonctionnelles.


## Factory Method

Les méthodes de création dans BooksService sont considérer commen Factory Method.