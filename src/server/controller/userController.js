import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../mongodb/userModels.js";
import Role from "../mongodb/roleModel.js";
// import Basket from "../mongodb/models/basketModel";
import config from "../config.js";

const generateJwt = (id, email, roles) => {
  return jwt.sign({ id, email, roles }, config.secret, { expiresIn: "24h" });
};

export async function Registration(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Некорректный email или password" });
  }
  const candidate = await User.findOne({ email });
  if (candidate) {
    return res
      .status(400)
      .json({ message: "Пользователь с таким именем уже существует" });
  }
  const userRole = await Role.findOne({ value: "USER" });
  const hashPassword = await bcrypt.hashSync(password, 5);
  const user = await User.create({
    email,
    password: hashPassword,
    roles: [userRole.value],
  });
  // eslint-disable-next-line
  // const basket = await Basket.create({ userId: user.id });
  const token = generateJwt(user.id, user.email, user.roles[0]);
  return res.json({ token });
}

export async function Login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: `Пользователь ${email} не найден` });
  }
  const comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return res.status(400).json({ message: "Указан неверный пароль" });
  }
  const token = generateJwt(user._id, user.email, user.roles[0]);
  return res.json({ token });
}

export function CheckToken(req, res) {
  const token = generateJwt(req.user.id, req.user.email, req.user.role);
  return res.json({ token });
}

export async function Users(req, res) {
  const users = await User.find();
  return res.json(users);
}
