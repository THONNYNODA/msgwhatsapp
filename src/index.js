const express = require("express");
const routes = require("./routes");
const app = express();
const axios = require("axios");
const MessageCliente = require("./Services/message");

require("./Database/index");

app.use(express.json());
app.use(routes);

app.listen(3332);

axios.get("http://localhost:3332/users").then((res) => {
  const data = res.data[1].phone;
  return MessageCliente(data);
});
