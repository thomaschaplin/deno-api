import { Context } from "../deps.ts";
import {
  validateJwt,
  JwtValidation,
} from "../deps.ts";
import { JWT_KEY } from "../config/config.ts";

export type Token = string;

const validateToken = async (ctx: Context, next: Function) => {
  const jwtToken: Token = ctx.request.headers.get("Authorization")
    ? ctx.request.headers.get("Authorization")!
    : "";
  const token: JwtValidation = await validateJwt(jwtToken, JWT_KEY);
  if (!token.isValid) {
    ctx.response.body = {
      message: "Unauthroised",
    };
    ctx.response.status = 401;
    return;
  }
  await next();
};

export default validateToken;
