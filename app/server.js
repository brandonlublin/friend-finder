const express = require("express");
const router = express.Router();

const htmlRoutes = require('./routing/htmlRoutes');
const apiRoute = require("./routing/apiRoute");

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", htmlRoutes);
app.use("/api", apiRoute);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})