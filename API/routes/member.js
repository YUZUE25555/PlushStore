// routes/member.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM member");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM member WHERE id=?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "ไม่พบสมาชิก" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create
router.post("/", async (req, res) => {
  const { name, pass, email } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO member (name, pass, email) VALUES (?, ?, ?)",
      [name, pass, email]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, pass, email } = req.body;
    await pool.query(
      "UPDATE member SET name = ?, pass = ?, email = ? WHERE id = ?",
      [name, pass, email, id]
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
    await pool.query("DELETE FROM member WHERE id = ?", [id]);
    res.json({ message: "ลบสำเร็จ" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
