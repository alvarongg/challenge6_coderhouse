const express = require("express");
const productRouter = require("./productRouter.js");
const { engine } = require("express-handlebars");
const path = require('path');
const app = express();

let views_path = path.join(__dirname, '..', 'views');

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
  })
);

app.set('views', views_path);
app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/productos", productRouter);

app.listen(8080, () => {
  console.log("Estoy escuchando 8080 --engine handlebars");
});
