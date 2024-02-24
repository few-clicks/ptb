const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
 tgid: {
    type: String,
     required: [true, "no tgid"],
 }
});

const AuthSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true ,"user is required for auth"]
    },
    expired_by: {type: mongoose.Schema.Types.Date, required: true},
    token: {type: String, required: true},
    logged_at: mongoose.Schema.Types.Date,
});

//UserSchema.pre("save", async function (next) {
//  if (!this.isModified("password")) {
//    next();
//  }
//
//  const salt = await bcrypt.genSalt(10);
//  this.password = await bcrypt.hash(this.password, salt);
//  next();
//});
//
//UserSchema.methods.matchPassword = async function (password) {
//  return await bcrypt.compare(password, this.password);
//};
//
//UserSchema.methods.getSignedJwtToken = function () {
//  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//    expiresIn: process.env.JWT_EXPIRE,
//  });
//};
//
//UserSchema.methods.getResetPasswordToken = function () {
//  const resetToken = crypto.randomBytes(20).toString("hex");
//
//  // Hash token (private key) and save to database
//  this.resetPasswordToken = crypto
//    .createHash("sha256")
//    .update(resetToken)
//    .digest("hex");
//
//  // Set token expire date
//  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
//
//  return resetToken;
//};

const User = mongoose.model("User", UserSchema);
const Auth = mongoose.model("Auth", AuthSchema);

module.exports = {User, Auth};
