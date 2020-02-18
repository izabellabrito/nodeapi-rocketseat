const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciado o banco de dados
const config = require('./src/config');
moongose.connect(
    config.connectionString, 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir("./src/models");

// Rotas
// use > recebe todas requisiçoes (no /api)
app.use("/api", require("./src/routes")); 
app.listen(3001); 
