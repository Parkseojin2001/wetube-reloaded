import "./db";
import "./models/Video";
import app from "./server";

const POST = 4000;

const handleListening = () =>
  console.log(`✅Sever listening on port http://localhost:${POST}  🚀`);

app.listen(POST, handleListening);