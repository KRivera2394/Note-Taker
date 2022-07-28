const {db} = require('../db/db.json')
const er = require("express").Router();
const uuid = require("../helper/id");

const { makeNote }  = require('../helper/fs');

er.get("/", (req, res) => res.json(db));

er.post("/", (req, res) => {
  req.body.id = uuid();
  const notes = makeNote(req.body, db);
  res.json(notes);
});
er.delete("/:id", (req, res) => {
  const {id} = req.params;
  const deleteNote = db.findIndex(notes => notes.id == id);
  db.splice(deleteNote, 1);
  return res.send();
});
module.exports = er;
