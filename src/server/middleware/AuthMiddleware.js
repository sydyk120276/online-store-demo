import jwt from "jsonwebtoken";
import config from "../config.js";

export default function AuthMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Не авторизован!!!!" });
  }
}
