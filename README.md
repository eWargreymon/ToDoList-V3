# ToDoList-V3 - Desarrollo de Aplicaciones Web 2
Aplicaci贸n tipo To Do List implementada con Angular

## Aspectos t茅cnicos de la aplicaci贸n

### Proyecto Angular 馃敡

```
Angular version: 11.2.11
Node version: 14.15.5
Typescript version: 4.1.5
```

Internamente, el proyecto cuenta con:

Cinco componentes: 
* Barra de navegaci贸n
* Lista de tareas pendientes
* Hist贸rico de tareas completadas
* Formulario para agregar tareas
* Di谩logo para editar tareas

Un modelo:
* Para representar las tareas

Un servicio:
* Para comunicarse con la base de datos

### Base de Datos :floppy_disk:

Para almacenar los datos de las tareas se ha hecho uso de una base de datos.

Concretamente se ha utilizado Google Firebase.

Para trabajar con esta base de datos en el proyecto Angular, se ha instalado la librer铆a @angular/fire, en su versi贸n 6.1.4.
Dicha base de datos dispone de dos colecciones: en la primera, se almacenan las tareas pendientes, y, en la segunda, se almacena el hist贸rico de tareas completadas.


### Angular Material :pencil2:

Para cumplir con los requerimientos del ejercicio, se ha hecho uso de la librer铆a Angular Material. 

Los elementos utilizados son:
```
1. Material Toolbar
2. Material Icon
3. Material Button
4. Material Dialog
5. Material Divider
```
