
# 🛒 API RESTful - Tienda

Este proyecto es una API RESTful desarrollada con **NestJS**, **TypeORM** y **PostgreSQL**. Gestiona las entidades básicas de una tienda: usuarios, productos, pedidos y categorías.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/) - Framework backend con TypeScript  
- [TypeORM](https://typeorm.io/) - ORM para manejo de base de datos  
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional  
- [Postman](https://www.postman.com/) - Para pruebas de la API  

---

## 📁 Estructura del proyecto

```
src/
├── common/               # Carpeta para filtros e interceptores (opcional)
├── modules/
│   ├── usuario/          # Módulo de usuarios
│   ├── producto/         # Módulo de productos
│   ├── pedido/           # Módulo de pedidos
│   └── categoria/        # Módulo de categorías
├── app.module.ts         # Módulo principal
├── main.ts               # Punto de entrada del proyecto
.env                      # Variables de entorno
```

---

## ⚙️ Requisitos previos

- Node.js y npm instalados.
- PostgreSQL instalado y corriendo localmente.
- pgAdmin (opcional) para gestionar visualmente la base de datos.

---

## 📦 Instalación del proyecto

1. **Clona el repositorio**

```bash
git clone https://github.com/Thesergius33/api-taller.git
cd api-taller
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura el archivo `.env`**

Crea un archivo llamado `.env` en la raíz del proyecto con lo siguiente (ajusta según tus datos):

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_NAME=tienda
```

> 🔐 Asegúrate de que la base de datos `tienda` ya esté creada en PostgreSQL.

---

## ▶️ Cómo correr el proyecto

```bash
npm run start:dev
```

El servidor estará corriendo en:

```
http://localhost:3000
```

Puedes acceder a la documentación de Swagger (si está implementada) en:

```
http://localhost:3000/api
```

---

## 📬 Endpoints principales

| Recurso   | Método | Ruta                | Descripción                |
|-----------|--------|---------------------|----------------------------|
| Usuario   | GET    | /usuario            | Obtener todos los usuarios |
|           | POST   | /usuario            | Crear un nuevo usuario     |
| Producto  | GET    | /producto           | Obtener todos los productos|
| Pedido    | POST   | /pedido             | Crear un nuevo pedido      |
| Categoría | GET    | /categoria          | Listar categorías          |

> Puedes ver todos los endpoints completos en el archivo de colección de Postman incluido.

---

## 🧪 Pruebas con Postman

Se incluye un archivo `.postman_collection.json` en la raíz del proyecto para importar en Postman y probar todos los endpoints.

### ¿Cómo usarlo?

1. Abre Postman.
2. Clic en **"Import"**.
3. Selecciona el archivo `api-taller.postman_collection.json`.
4. ¡Listo! Ya puedes probar los endpoints de tu API.

---

## 🧑‍💻 Autor

- **Nombre:** Sergio Lizcano  
- **Proyecto:** Taller de Backend con NestJS  
- **Fecha:** Julio 2025

---

## 📝 Notas

- El proyecto tiene relaciones entre entidades. Por ejemplo: un pedido pertenece a un usuario, un producto pertenece a una categoría, etc.
- Se usa `synchronize: true` en desarrollo. ⚠️ **No recomendado para producción.**
- Si tienes errores con la base de datos, revisa que el usuario y contraseña sean correctos en `.env`.

---
