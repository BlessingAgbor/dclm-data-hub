const {getAll, createEntry, updateEntry} = require("../controller/cleanController")

const express = require("express")
const router = express.Router();
router.route("/getall").get(getAll);
router.route("/create").post(createEntry);
router.route("/update").post(updateEntry);

module.exports = router;


