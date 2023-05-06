const express = require("express");
const app = express();

app.get("/teste", (req, res) => {
  return res.json({
    msg: "configurando o ambiente de desenvolvimento",
  });
});

app.listen(3333);
