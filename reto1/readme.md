# Prueba Técnica DaCodes / Nextia

Este proyecto es parte de las pruebas técnicas de NodeJS

## Tecnologías utilizadas.

NodeJS
Docker
Postgres
ORM - Sequelize

## Instalar dependencias

Ejecutar el siguiente comando en la terminal

```
npm install
```

## Docker Postgres

Se utiliza una imagen de postgres y al mismo tiempo los volúmenes para poder almacenar la base de datos.

Ejecutar el siguiente comando en una terminal

```
docker-compose up
```

## Variables de entorno

El proyecto hace uso de diversas variables de entorno para funcionar de forma mas optima.

Al no tener claves de servicios se respaldaron dichas variables en el archivo `*.env*`

## Ejecutar proyecto

Ejecutar el siguiente comando

```
npm run dev
```

## Cargar datos del archivo `*src/data/dataTest.csv*`

Para poder leer la información de dicho archivo como se especifico en el punto 6 de las actividades, se creo un script sencillo para su lectura de datos.

Ejecutar el siguiente comando

```
node getData
```

## Endpoints

Para poder probar todas las rutas requeridas en los puntos: 4, 7 y 8. se genero un archivo de colecciones en Postman.

Nota:
En algunos de los casos donde se requiere un JWT, es necesario generar un primer usuario, dentro de las colecciones se encuentra el registro de un usuario de pruebas, este mismo generara un token, si se desea seguir utilizando las colecciones, sera necesario utilizar una de las colecciones sobre el inicio de sesión, con ese mismo bastara para seguir utilizando las rutas.

Importar el siguiente archivo en Postman

```
nextia-test.postman_collection.json
```
