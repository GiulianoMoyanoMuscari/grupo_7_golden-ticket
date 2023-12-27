const db = require("../db");

const controller = {
  // Todos los productos
  index: (req, res) => {
    const products = db.readAll("products");
    res.render("products/products.ejs", {
      list: products,
      individualCss: "product-detail",
    });
  },

  // Detalle de 1 producto
  detail: (req, res) => {
    const id = parseInt(req.params.id);
    const producto = db.readOne("products", id);
    // debe renderizar la vista con los detalles del producto
    res.render("products/product-detail", {
      individualCss: "product-detail",
      data: producto,
    });
  },

  // Formulario de Creacion
  create: (req, res) => {
    res.render("products/product-create-form", { individualCss: "login" });
  },

  store: (req, res) => {
    // Obtenemos los campos del body
    const newProduct = {
			id: Date.now(),
			...req.body,
			image: 'daniRibba.png'
		}
		
    // creamos el producto
    db.create('products', newProduct)

		// redireccionamos
		res.redirect('/')
  },


  // Formulario de Edicion
  edit: (req, res) => {
    const producto = db.readOne("products", parseInt(req.params.id));
		if(producto){
			return res.render("products/product-edit-form", {individualCss: "login", producto});
		} 
		return res.send('El producto a editar no existe')
  },

  update: (req, res) => {
    // Producto a editar
    const producto = db.readOne("products", parseInt(req.params.id));

    // traemos los datos del formulario
    const {name, price, nameStadium, date, category, /* location, */ description} = req.body

    // Editamos el producto
    db.update("products", producto.id, {
      id: parseInt(req.params.id), // No es necesario, verdad? El id no es siempre igual?
      nombre: name,
      descripcion: description,
      precio: price,
      categoria: category,
      /* imagen: , */ // Falta agregar imagen al formulario de edicion y creacion
      fecha: date,
      lugar: nameStadium
    }); 

    // redireccionamos
    res.redirect('/products/' + req.params.id)
  },

  destroy: (req, res) => {
    db.delete("products", req.params.id); // NO elimina de la base de datos
    res.redirect('/');
  },

};

module.exports = controller;
