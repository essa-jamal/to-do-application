const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT | 3000;
require("dotenv").config();
mongoose
  .connect(process.env.mongodb)
  .then(() => {
    console.log("database connected ...");
    app.listen(3000, () => {
      console.log(`Server is listening port ${PORT}`);
    });
  })
  .catch((err) => console.log("error on connecting db"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.redirect("/items");
});
app.use("/items", require("./routes/items"));
app.use((req, res) => {
  res.render("404", { title: "404 page" });
});
