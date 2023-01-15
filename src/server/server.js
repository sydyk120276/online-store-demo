
import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'
import axios from 'axios'

import mongooseService from "./services/mongoose.js";
import config from "./config.js";
import {
  Registration,
  Login,
  CheckToken,
  Users,
} from "./controller/userController.js";
import AuthMiddleware from "./middleware/AuthMiddleware.js";
import roleMiddleware from "./middleware/roleMiddleware.js";

const PORT = config.port

const server = express()

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
  // express.static(resolve(__dirname, "../build")),
  // favicon(`${__dirname}/public/favicon.ico`),
];

middleware.forEach((it) => server.use(it));

server.get('/api/v1/store', async (req, res) => {
  try {
    axios('https://c43d-185-117-148-70.eu.ngrok.io/api/product/')
      .then((response) => res.json(response.data))
  } catch (err) {
    console.log(err)
  }
})

server.post("/api/v1/user/registration", Registration);
server.post("/api/v1/user/login", Login);
server.get("/api/v1/user/admin", roleMiddleware("ADMIN"), CheckToken);
server.get("/api/v1/user/auth", AuthMiddleware, Users);
server.get("/api/v1/users", Users);

// MongoDB
if (config.mongoEnabled) {
  // eslint-disable-next-line
  console.log('MongoDB Enabled: ', config.mongoEnabled)
  mongooseService()
}

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})