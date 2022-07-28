const path = require('path');
const uniqid = require('uniqid');

const {db} = require("./db/db.json");
const api = require('./routes/index.js')
const express = require('express')


const PORT = process.env.PORT ||  3001;
 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
app.get('/api/notes' , (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  res.json(`Tip added successfully 🚀`);
  console.info(`Tip added successfully 🚀`);
  
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

  
  
  