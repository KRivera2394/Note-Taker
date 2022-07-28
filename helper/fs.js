const fs = require("fs");
const util = require("util");
const path = require("path");
const { db } = require("../db/db.json");

const readTFile = util.promisify(fs.readFile);
const createFile = (location, information) =>
  fs.writeFile(location, JSON.stringify(information, null, 4), (err) => err ? console.error(err) : console.info(`\nData sent${location}`)
  );

const readThenWrite = (contentInfo, filePath) => {
  fs.readFile(file, "utf8", (err, data) => 
  {
    if (err) 
    {
      console.error(err);
    } else {
      const parseInfo = JSON.parse(data);
      parseInfo.push(contentInfo);
      createFile(filePath, parseInfo);
    }
  });
};

function newNote(theBody, array) {
  const notes = theBody;
  array.push(notes);
  readThenWrite(array, "../db/db.json");
  return notes;
}

module.exports = { 
  readTFile, 
  createFile, 
  newNote };
