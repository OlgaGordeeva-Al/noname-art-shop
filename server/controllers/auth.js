const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const postSignin = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ email });
      if (currentUser) {
        if (await bcrypt.compare(password, currentUser.password)) {
          req.session.user = {
            id: currentUser._id,
            email: currentUser.email,
            firstname: currentUser.firstname,
            admin: currentUser.admin
          };

          return res.json({
            id: currentUser._id,
            firstname: currentUser.firstname,
            email: currentUser.email,
            favourites: currentUser.favourites,
            admin: currentUser.admin
          });
        }
      } else return res.json({ message: "Ошибка в почте или пароле" });
    } catch (error) {
      return res.json({ message: "Ошибка в почте или пароле" });
    }
  }
  return res.json({ message: "Все поля должны быть заполнены" });
};

const postSignup = async (req, res) => {
  const { firstname, email, password } = req.body;

  if (firstname && email && password) {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        firstname,
        email,
        password: hashPassword,
      });
      await user.save();

      req.session.user = {
        id: user._id,
        email: user.email,
        firstname: user.firstname,
      };

      return res.json({ id: user._id, firstname: user.firstname, email: user.email, favourites: user.favourites, });
    } catch (error) {
      return res.json({
        message: "Данная почта уже зарегистрирована, пожалуйста сделайте вход",
      });
    }
  }
  return res.json({ message: "Все поля должны быть заполнены" });
};

const getSignout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(400);
    res.clearCookie("sid");
    req.app.locals.name = null;
    return res.sendStatus(200);
  });
};

module.exports = {
  postSignin,
  postSignup,
  getSignout,
};
