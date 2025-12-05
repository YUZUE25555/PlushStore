const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all plush
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM plush");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM plush WHERE id_plush=?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "ไม่พบสินค้า plush" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create
router.post("/", async (req, res) => {
  const { name_plush, price, img_url } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO plush (name_plush, price, img_url) VALUES (?, ?, ?)",
      [name_plush, price, img_url]
    );
    res.status(201).json({ id_plush: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name_plush, price, img_url } = req.body;
    await pool.query(
      "UPDATE plush SET name_plush=?, price=?, img_url=? WHERE id_plush=?",
      [name_plush, price, img_url, id]
    );
    res.json({ message: "แก้ไขสำเร็จ" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM plush WHERE id_plush=?", [id]);
    res.json({ message: "ลบสำเร็จ" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
