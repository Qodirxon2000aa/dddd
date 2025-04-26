const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Login yoki parol xato!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Login yoki parol xato!" });
    }

    const token = jwt.sign({ id: user._id }, "supersecretkey", { expiresIn: "1d" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};
