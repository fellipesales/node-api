const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb+srv://admin:123@cluster0-xh1fw.azure.mongodb.net/test?retryWrites=true&w=majority/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

//Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);
