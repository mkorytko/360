const express = require("express");
const path = require("path");
const app = express();

app.use("/assets", express.static("public/assets"));
app.use("/js", express.static("public/js"));
app.use("/public/styles", express.static("public/styles"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
})

app.listen(3052, ()=>console.log("run on 3052"));