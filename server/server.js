const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const Table = require("cli-table3");
const os = require("os");
const http = require("http");

const app = express();
app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "startpage", "index.html"));
});

app.get("/courses", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "courses", "courses.html"));
});

app.get("/gap", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "gap", "gap.html"));
});

async function getRandomSentence(sentences) {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

app.get("/api/random-sentence", async function (req, res) {
  const gapJsonPath = path.join(__dirname, "gap", "gap.json");
  try {
    const gapJson = JSON.parse(fs.readFileSync(gapJsonPath, "utf8"));
    const randomSentence = await getRandomSentence(gapJson);
    if (randomSentence && randomSentence.sentence) {
      const words = randomSentence.sentence.split(" ");
      let randomWordFound = false;
      let randomWord = "";
      while (!randomWordFound) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
        if (randomWord.length > 2) {
          words.splice(randomIndex, 1, "_");
          randomWordFound = true;
        }
      }
      const sentenceWithBlank = words.join(" ");
      res.json({
        ...randomSentence,
        sentence: sentenceWithBlank,
        missingWord: randomWord,
        totalQuestions: gapJson.length,
      });
    } else {
      res
        .status(500)
        .json({ error: "Failed to get a sentence with a missing word" });
    }
  } catch (error) {
    console.error("Error reading gap.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  const networkInterfaces = os.networkInterfaces();
  for (let interface in networkInterfaces) {
    networkInterfaces[interface].forEach((details) => {
      if (details.family === "IPv4" && !details.internal) {
        console.log(`Server started on http://${details.address}:3000`);
      }
    });
  }
});
