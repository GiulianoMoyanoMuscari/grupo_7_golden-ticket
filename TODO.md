# COSAS POR HACER

- [X] Crear motor de escritura json
  - [X] Busqueda con Find
  - [X] Reemplazado
  - [X] Creacion
  - [X] Borrado
- [X] Agregar LUGAR para la base de datos de productos
- [X] Mostrar productos dinámicamente en index
- [] Mostrar boton de Editar en detalle de productos
- [] Mostrar datos en formulario de edición
- [] Mejorar el endpoint de creación de producto (redirect)
- [] En los endpoints donde se recibe /:id hay que filtrar los id numéricos

- [] Agregar un campo para subir imagen en los formularios de creacion y edicion de productos (Instalar y configurar multer), y corregir en los controladores "storage" y "update" si hiciera falta

- [] Preguntar sobre el apartado PURCHASE

> producto:
  id
  nombre
  descripcion
  precio
  categoria ("esta semana", "destacados")
  FECHA!
  LUGAR!
  imagen

> usuario
  id 
  nombre
  apellido
  email
  constaseña
  categoria (admin, cliente)
  imagen