import config from "./src/config/server.config.js";
import connectionDB from "./src/db/db.connection.js";
import app from "./src/app.js";

const start = async () => {
  await connectionDB();

  app.listen(config.PORT, () => {
    console.log(`Server listening on http://localhost:${config.PORT}`);
  });
};

start();
