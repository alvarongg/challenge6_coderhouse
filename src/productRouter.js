const express = require("express");
const productRouter = express.Router();
console.log("Router Productos cargados");

let Contenedor = require("./contenedor.js");
let productos = new Contenedor();


productRouter.use(express.json());
productRouter.use(express.urlencoded({ extended: true }));

// productRouter.get('/formulario', (req, res) => {
//   res.render('main');
// });

// productRouter.get('/tabla', async (req, res) => {
//    let array = productos.getAll();

//   res.render('tabla',{array});
      
// });

//devuelve todos los productos
productRouter.get("/", (req, res) => {
  try {
    res.send(productos.getAll());
  } catch (error) {
    throw new Error("Hubo un error al listar todos los productos");
  }
});

//devuelve solo el producto que necesito con el id pasado por get
productRouter.get("/:id", (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let obj = productos.getById(id);

    res.send(obj);
  } catch (error) {
    throw new Error("Hubo un error al listar el producto seleccionado");
  }
});

//recibe y agrega el producto pasado por post
productRouter.post("/", (req, res) => {
  try {
    let obj = {};

    obj.title = req.body.title;
    obj.price = req.body.price;
    obj.thumbnail = req.body.thumbnail;
    let id = productos.save(obj);

    res.send({ id });

    console.log(`Nuevo producto id: ${id} `);
  } catch (error) {
    throw new Error("Hubo un error al agregar el producto");
  }
});

//recibe y actualiza el producto segun si id existe
productRouter.put("/:id", (req, res) => {
  try {
    let obj = {};
    obj.id = parseInt(req.params.id);
    obj.title = req.body.title;
    obj.price = req.body.price;
    obj.thumbnail = req.body.thumbnail;

    let id = productos.updateById(obj);

    res.send(id);
    console.log(`Modificado producto id: ${id} `);
  } catch (error) {
    throw new Error("Hubo un error al actualizar el producto");
  }
});

//borra el producto con el id seleccionado
productRouter.delete("/:id", (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let obj = productos.deleteById(id);

    res.send(obj);
  } catch (error) {
    throw new Error(`Hubo un error al borrar el producto`);
  }
});

module.exports = productRouter,productos;
