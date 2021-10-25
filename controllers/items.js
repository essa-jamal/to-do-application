const Item = require("../models/item");
const moment = require("moment");
module.exports.GET_Items = (req, res) => {
  Item.find()
    .then((items) => {
      console.log(items);

      res.render("index", { items, title: "Items" });
    })
    .catch((err) => console.log("error or getting items"));
};

module.exports.GET_Add = (req, res) => {
  res.render("add-item", { title: "add item" });
};
module.exports.GET_ById = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      console.log(item);
      const createdate = moment(item.createdAt).format("LL");
      res.render("item-detail", { item, title: "item detail", createdate });
    })
    .catch((err) => console.log("error on getting items", err));
};
module.exports.POST_Add = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((item) => {
      console.log("item saved");
      res.redirect("/");
    })
    .catch((err) => console.log("error on saving item"));
};

module.exports.PUT_ById = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => {
      console.log("item updated ..");
      res.json({ msg: "updated successfully" });
    })
    .catch((err) => console.log("error on updating item", err));
};

module.exports.DELETE_ById = (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("item deleted ..");
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log("error on deleting item", err));
};
