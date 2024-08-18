# Mi crud App

Una aplicación para la creación, actualización, borrado y consulta de usuarios.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Autor](#autor)

## Descripción

Esta aplicación permite a los usuarios crear, leer, actualizar y eliminar otros usuarios de listado. Está diseñada para ser fácil de usar, rápida y accesible desde cualquier dispositivo con conexión a internet. se usaron las siguientes tecnologias y lenguajes de programación:

- [x] Typescript
- [x] NodeJs
- [x] Express
- [x] ReactJs
- [x] React-hook-form
- [x] react-hot-toast
- [x] react-icons
- [x] MongoDB
- [x] Vite
- [x] Mongoose


## Instalación.

1. Clona este repositorio.

https://github.com/Dfcuevas/crud-app

2. Navega al directorio del proyecto.
3. Instala las dependencias (tanto del backend como del frontend).
   
```bash
npm install
```

4. Configura las variables de entorno:
  - Crea un archivo '.env' en la raiz del proyecto con los siguientes parametros

 ```env
username=<nombre_usuario_dbMongo>
password=<password_dbMongo>
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.c57v1.mongodb.net/<database>?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
PORT=3000
 ```

5. Inicia el servidor con

```bash
npm run dev
```

6. Inicia el front navegando al directorio raiz del front y ejecutando el mismo comand.

```bash
npm run dev
```

## Uso

- Una vez iniciados los servicios, abrir el navegador y navegar a 'http://localhost:5173' allí se encontrara con la pagina principal en donde inmediatamente se mostrara la lista de usuarios ya ingresados en la base de datos.
- Se puede realizar busquedas de usuarios por medio del input con el placeholder "search users by name..."
- Para crear un usuario nuevo dando click en el boton "Create new user" en la esquina superior derecha.
- Cada usuario esta organizado cuidadosamente en una tabla en donde al final de su fila, cuenta con dos botones, el primero (con forma de lapiz) es para actualizar los datos de algun usuario ya creado. Al dar click se despliega un menu lateral izquierdo con un formulario en donde podemos elegir cuales son los campos que desamos actualizar y enviamos la información.
- El siguiente Boton (con forma de bote de basura) es para eliminar algun usuario al darle click al mismo.
- Por ultimo tenemos implementada una paginación para navegar por las diferentes paginas de usuarios que tenemos, por defecto la paginación esta limitada a 3 usuarios por pagina, pero se puede modificar a la cantidad de usuarios que querramos.

8. Endpoints backend.

- Para obtener los datos de los usuarios directamente de la base de datos.

http://localhost:3000/api/

- Para la creación de un usuario nuevo.

http://localhost:3000/api/create

- Para actualizar algun usuario.

http://localhost:3000/api/update/:userId (donde :userId es el id del usuario a modificar que se pasa como parametro en la URL)

- Para borrar algun usuario.

http://localhost:3000/api/delete/:userId (donde :userId es el id del usuario a borrar que se pasa como parametro en la URL)

## Autor

- **Diego Cuevas** - [GitHub](https://github.com/Dfcuevas)
