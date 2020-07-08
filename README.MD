# Feriados

Es una aplicación que muestra un listado de los feriados del año actual.Realizada en un stack javascript (React + Node + MongoDB).

## Implementación realizada


### Frontend
   * React js con react-redux y redux-thunk (como middleware) para implementar Axios para peticiones HTTP asincrónicas.

### Backend
   * Node con Express como framework (Model-Controller) y Mongoose para definir esquemas de datos para MongoDB.

## Instalación

Usando npm 

### FrontEnd
```bash
[DIR]\FeriadosChallenge\frontend npm install
```
### BackEnd

```bash
[DIR]\FeriadosChallenge\backend npm install
```
### Run (FrontEnd y BackEnd)

```bash
npm start
```
#### Tener mongo corriendo local...
### Acceso
#### localhost:3000
## Docker
   * ejecutar el archivo docker-compose.yml dentro de la raíz del proyecto.
   * Comados:
   #### docker-compose build
   #### docker-compose up
### Acceso
#### localhost:3000