```markdown
# UnionFP

## Propósito del Proyecto
Este repositorio contiene el código fuente para **UnionFP**.
El objetivo es centralizar la lógica de negocio y facilitar la escalabilidad de los servicios asociados.

## Stack Tecnológico
La arquitectura se basa en las siguientes tecnologías principales:

* **Lenguaje:** [JavaScript]
* **Entorno de Ejecución:** [Node.js]
* **Framework:** [React / Express]
* **Base de Datos:** [PostgreSQL]
* **Herramientas adicionales:** [Null]

## Scripts de Ejecución
Los siguientes comandos están definidos en `package.json` para el ciclo de vida del desarrollo:

* `npm install`: Instala las dependencias del proyecto.
* `npm run dev`: Inicia el servidor de desarrollo con recarga en caliente (hot-reload).
* `npm run build`: Compila el código para el entorno de producción.
* `npm run start`: Ejecuta la versión compilada (producción).
* `npm run lint`: Ejecuta el linter para análisis estático de código.
* `npm run test`: Ejecuta la suite de pruebas unitarias.

## Flujo de Ramas (Git Flow)
El proyecto sigue una estrategia de ramificación estricta:

1.  **`main`**: Código en producción. Estable e inmutable directamente.
2.  **`develop`**: Rama de integración principal. Todo el código nuevo se fusiona aquí primero.
3.  **`feature/<nombre-funcionalidad>`**: Ramas temporales para nuevas características. Nacen de `develop` y se fusionan a `develop` mediante Pull Request.
4.  **`hotfix/<descripcion-error>`**: Ramas para correcciones críticas en producción. Nacen de `main` y se fusionan a `main` y `develop`.

## Convención de Commits
Se utiliza la especificación **Conventional Commits** para mantener un historial legible y automatizable.

**Estructura:**
`tipo(alcance): descripción breve`

**Tipos permitidos:**
* `feat`: Una nueva funcionalidad.
* `fix`: Solución de un error.
* `docs`: Cambios en documentación.
* `style`: Formato de código (espacios, comas) sin cambios de lógica.
* `refactor`: Cambio de código que no añade funcionalidad ni arregla errores.
* `test`: Añadir o corregir pruebas.
* `chore`: Actualización de tareas de compilación, configuraciones de paquetes, etc.

**Ejemplo:**
`feat(auth): implementar login con JWT`

```
