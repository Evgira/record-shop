// exports.getRecord=(req,res,next) => {
//     console.log("getRecord");
//     res.status(200).json({message: "get records done"})
// }

// exports.addRecord=(req,res,next) => {
//     console.log("addRecord");
//     res.status(200).json({message: "add records done"})
// }
//module.exports = {getRecord};

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

exports.getRecords = (req, res, next) => {
  const records = db.get("records").value();
  res.status(200).send(records);
};

exports.addRecord = (req, res, next) => {
  const record = req.body;
  db.get("records")
    .push(record)
    .last()
    .assign({ id: Date.now().toString() })
    .write();

  res.status(200).send(record);
};