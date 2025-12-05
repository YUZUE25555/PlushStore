const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// CORS ต้องกำหนดแค่ครั้งเดียว!
app.use(
  cors({
    origin: "http://localhost:3000",  // ไม่มี backtick
    credentials: true
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const memberroutes = require("./routes/member");
app.use("/member", memberroutes);

const plushRoutes = require("./routes/plush");
app.use("/plush", plushRoutes);

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
