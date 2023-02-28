import "dotenv/config";
import { connectDB } from "./config/database";
import server from "./config/server";

connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);

});
