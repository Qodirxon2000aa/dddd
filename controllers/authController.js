// Hozir bazadan tekshirish qilmaymiz.
// Faqat admin/admin to'g'rimi tekshiradi.

exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      if (username === "admin" && password === "admin") {
        res.json({
          message: "Kirish muvaffaqiyatli",
          token: "fake-jwt-token"
        });
      } else {
        res.status(400).json({ message: "Login yoki parol xato!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server xatosi" });
    }
  };
  