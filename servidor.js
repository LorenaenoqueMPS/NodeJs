const http = require("http");
const express = require("express");
const app = express();

app.get("/status", function(req, res) {
    res.json({mensagem: "funcionando"});
});

app.listen(3000);