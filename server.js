const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect("mongodb+srv://admin:123@cluster0-xh1fw.azure.mongodb.net/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

//Primeira rota
/*
const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build apps with React',
    url: "http://github.com/facebook/react-native"
  });

  return res.send('Hello');
});
*/

app.use("/api", require("./src/routes"));

app.listen(3001);
