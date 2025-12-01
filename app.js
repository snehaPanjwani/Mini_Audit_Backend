const express = require('express');
const uuidv4 = require('uuid');
const cors = require('cors');

const app = express();

let version = [];

let words = [];

let addedWords = [];
let removedWords = [];
   
app.use(cors({
    origin: "*",   // react frontend
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.text()); 
app.use(express.json());

PORT = process.env.PORT || 3000;

app.post('/text', async (req, res) => {
  const text = req.body;
  const inputwords = [...text.split(' ')];
  const status = await version.push({
    id: uuidv4.v4(),
    timestamp: new Date().toLocaleString(),
    addedWords: [words.forEach(word => {
        if(word in inputwords){
             addedWords.push(word);
        }
    })],
    removedWords: [words.forEach(word => {
        if(!(word in inputwords)){
            removedWords.push(word);
        }
    })],
    oldLength: words.length,
    newLength: inputwords.length
  });
  if (status) {
    res.send("Text received and processed");
    for(const word of inputwords){
            words.push(word);
    }
  }
});
app.get('/versions', (req, res) => {
    res.json(version);
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});