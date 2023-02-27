import jwt from "jsonwebtoken";
import config from "../config.js";

export default function roleMiddleware(role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
      if (!token) {
        return res.status(401).json({ message: "Не авторизован" });
      }
      const decoded = jwt.verify(token, config.secret);
      if (decoded.roles !== role) {
        return res.status(403).json({ message: " У вас нет доступа" });
      }
      req.user = decoded;
     next();
    } catch (e) {
      res.status(401).json({ message: "Не авторизован!!!!" });
    }
  };

}
