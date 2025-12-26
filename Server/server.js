import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/report", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

  const getFeedback = (score) => {
    if (score >= 8) return "Excellent performance with strong control.";
    if (score >= 6) return "Good performance with minor inaccuracies.";
    return "Needs improvement.";
  };

  res.json({
    ...data,
    feedback: getFeedback(data.overall)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
