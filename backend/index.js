const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config()
const Connection = require('./Configs/db');
const Router = require("./Routes/server.routes");
const userrouter=require("./Routes/user.route");
const auth = require("./middleware/auth")
app.use(cors());
app.use(express.json());
app.use("/", Router);
app.use("/user", userrouter);
app.listen(8080,Connection());
