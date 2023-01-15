import "dotenv/config.js";

const options = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV,
  socketsEnabled: process.env.SOCKETS_ENABLE === "true",
  mongoEnabled: process.env.MONGO_ENABLE === "true",
  mongoUrl: process.env.MONGO_URL,
  secret: process.env.SECRET_JWT || "secretKey",
  PER_PAGE: process.env.PER_PAGE,
};

export default options;
