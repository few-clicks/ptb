const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

// Controllers
const {
  login,
} = require("../controllers/auth");

router.route("/login/:loginToken").post(login);

router.route("/").get(protect);

module.exports = router;
