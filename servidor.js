const http = require("http");
const express = require("express");
const app = express();

app.get("/status", function(req, res) {
    res.json({mensagem: "funcionando"});
});

http.createServer(app).listen(3000);