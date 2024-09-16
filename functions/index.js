const functions = require("firebase-functions");
const axios = require("axios");

const openai = require("openai");

exports.generateLyrics = functions.https.onRequest(async (req, res) => {
  const prompt = req.body.prompt || "Compose a reflective song for times of sadness, calm.";

  // GPT-4 for lyric generation
  const response = await openai.createCompletion({
    model: "text-davinci-004",
    prompt: `Write a song with the following prompt: ${prompt}`,
    max_tokens: 150,
  });

  res.json({ lyrics: response.data.choices[0].text });
});
