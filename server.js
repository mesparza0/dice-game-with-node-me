const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS (remove this later to test failure condition)
app.use(cors());

// Dice rolling API: Returns random dice values
app.get("/roll", (req, res) => {
    const diceCount = parseInt(req.query.count) || 1;
    const rolls = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
    res.json({ rolls });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Dice Roller API is running on http://localhost:${PORT}`);
});
