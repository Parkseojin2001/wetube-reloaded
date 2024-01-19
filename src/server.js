import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const POST = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



const handleListening = () =>
  console.log(`✅Sever listening on port http://localhost:${POST}  🚀`);

app.listen(POST, handleListening);