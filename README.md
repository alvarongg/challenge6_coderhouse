# challenge6_coderhouse

* Consigna 1:  Modificar el último entregable para que disponga de un canal de websocket que permita representar, por debajo del formulario de ingreso, una tabla con la lista de productos en tiempo real. 
Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reflejarán los cambios que se realicen en los productos sin necesidad de recargar la vista.
Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista

* Consigna 2:  Añadiremos al proyecto un canal de chat entre los clientes y el servidor.

## Despliegue 📦

* Instalacion de depedencias
```bash
npm i 
```
* Ejecucion del proyecto handlebars (se ejecuta en puerto 8080)
```bash
npm run start
```

## Web Endpoits 

* [Web Principal](http://localhost8080/)

## API Endpoits 
* GET http://localhost8080/api/productos 
* GET http://localhost8080/api/productos/:id
* POST http://localhost8080/api/productos
* PUT http://localhost8080/api/productos
* DELETE http://localhost8080/api/productos/:id

## Construido con 🛠️

* [Express🛰️](https://expressjs.com/es/4x/api.html)
* [Handlebars](https://handlebarsjs.com/)
* [Socket.io](https://socket.io/)
* [Bootstrap](https://getbootstrap.com/)
* [Moment.js](https://momentjs.com)




