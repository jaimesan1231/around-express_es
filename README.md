# Alrededor de los Estados Unidos Back End

## Descripción general

Proyecto realizado como parte del bootcamp de Desarrollo Web de Practicum. Este proyecto es el back end de la aplicación "Alrededor de los Estados Unidos". Está construido en Node.js utilizando el framework de Express.
  
## Funcionalidades 
- Permite obtener los usuarios
- Permite obtener un usuario mediante su id
- Permite obtener todas las publicaciones
- Permite publicar una foto
- Permite actualizar el perfil y el avatar
- Permite eliminar una publicación
- Permite dar o quitar like a una publicación

## Tecnologias utilizadas
 - NodeJS
 - Express
 - MonngoDB

## GET Usuarios
`GET /users` Retorna todos los usuarios

## GET Usuario por id
`GET /users/id` Retorna el usuario filtrado por un id
## POST Usuario
`GET /users/id` Crea un nuevo usuario y lo retorna
## PATCH Perfil
`PATCH /users/me` Actualiza el perfil del usuario y lo retorna actualizado
## PATCH Avatar
`PATCH /users/me/avatar` Actualiza la foto de perfil del usuario y lo retorna actualizado
## GET Publicaciones
`GET /cards` Retorna todas las publicaciones
## POST Tarjetas
`POST /cards` Crea una publicacion y la retorna
## DELETE Tarjetas
`DELETE /cards/cardId` Elimina una publicacion mediante un id
## PUT Like
`PUT /cards/cardId/likes` Agrega un like a la publicacion y retorna la publicacion actualizada
## DELETE Like
`DELETE /cards/cardId/likes` Elimina un like de la publicacion y retorna la publicacion actualizada
## Directorios  
  
`/data` — JSON files to temporarily emulate database integration. Archivos JSON temporales para simular una base de datos
  
`/routes` — Archivo de rutas.  

`/controllers` — Archivo de controladores de response y request. 

`/models` — Esquemas de los documentos de mongoDB.  
  
  
## Scripts
  
`npm run start` —  ejecuta el server.  
  
`npm run dev` — ejecuta el server con hot reload  



