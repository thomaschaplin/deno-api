import { Context } from "https://deno.land/x/oak/mod.ts";
import {
  validateJwt,
  JwtValidation,
} from "https://deno.land/x/djwt/validate.ts";
import { JWT_KEY } from "../config/config.ts";

export type Token = string;

const validateToken = async (ctx: Context, next: any) => {
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
