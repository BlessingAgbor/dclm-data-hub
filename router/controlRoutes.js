const {getAll, createEntry} = require("../controller/cleanController")

const express = require("express")
const router = express.Router();
router.route("/getall").get(getAll);
router.route("/create").post(createEntry);

module.exports = router;


