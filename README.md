# PlatziMarket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Para hacer build en diferentes ambientes

En producción: `ng build --prod`
En stag: `ng build -c=stag`

## Para probar que el nuevo ambiente creado corre bien

En stag: `ng serve -c=stag`

##Nota:
Para subir a firebasehosting:
- firebase init
- Seguir el proceso respectivo, darle no a sobreescribir
- Recordar que los archivos publicos quedan en dist/nombreProyecto
- Ejecutar el ng build correspondiente
- Ejecutar firebase deploy

## Url de proyecto publicado:
https://platzi-store-7d4b9.web.app/home


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
