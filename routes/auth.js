const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  auth,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/").get(protect, auth);

module.exports = router;
