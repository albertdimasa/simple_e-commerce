const routerBarang = require("express").Router();
const Barang = require("../models/barang");

//CREATE
routerBarang.post("/", async (req, res) => {
  const barangPost = new Barang({
    nama: req.body.nama,
    harga: req.body.harga,
  });

  try {
    const barang = await barangPost.save();
    res.json(barang);
  } catch (err) {
    res.status(400).send(err);
  }
});

//READ
routerBarang.get("/", async (req, res) => {
  try {
    const getBarang = await Barang.find();
    res.json(getBarang);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE
routerBarang.put("/:barangId", async (req, res) => {
  try {
    const updateBarang = await Barang.updateOne(
      { _id: req.params.barangId },
      {
        nama: req.body.nama,
        harga: req.body.harga,
        // gambar: req.body.gambar,
      }
    );
    res.json(updateBarang);
  } catch (err) {
    res.status(304).send(err);
  }
});

//DELETE
routerBarang.delete("/:barangId", async (req, res) => {
  try {
    const deleteBarang = await Barang.deleteOne({
      _id: req.params.barangId,
    });
    res.json(deleteBarang);
  } catch (err) {
    res.status(304).send(err);
  }
});
module.exports = routerBarang;
