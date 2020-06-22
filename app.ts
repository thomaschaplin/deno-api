import { Application } from "./deps.ts";
import taskRouter from "./routes/task.ts";
import loginRouter from "./routes/login.ts";
import { HOST, PORT } from "./config/config.ts";
import { validateStatusCode } from "./middleware/validateStatusCode.ts";

const app = new Application();

app.use(validateStatusCode);

app.use(taskRouter.routes());
app.use(taskRouter.allowedMethods());

app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());

console.log(`Listening on port: ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
