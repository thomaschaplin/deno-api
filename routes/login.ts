import { Router } from "../deps.ts";
import {
  login,
} from "../controllers/login.ts";

const loginRouter = new Router();

loginRouter.post("/login", login);

export default loginRouter;
