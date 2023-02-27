import mongoose from "mongoose";

import config from "../config.js";

mongoose.connection.on("connected", () => {
  // eslint-disable-next-line
  console.log("DB is connected");
});

mongoose.connection.on("error", (err) => {
  // eslint-disable-next-line
  console.log("DB isn't connected");
  // eslint-disable-next-line
  console.log(err);
  process.exit(1);
});

const mongo = (mongoUrl = config.mongoUrl) => {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose.connection;
};

export default mongo;
