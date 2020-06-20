import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";
import { JWT_KEY } from "../config/config.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export const login = async ({ request, response }: Context): Promise<void> => {
  const body = ((await request.body()).value);
  if (body.username && body.password) {
    const payload: Payload = {
      iss: `${body.username} ${body.password}`,
      exp: setExpiration(new Date().getTime() + 60 * 60 * 1000),
    };
    const header: Jose = {
      alg: "HS256",
      typ: "JWT",
    };

    const token = makeJwt({ header, payload, key: JWT_KEY });
    response.status = 200;
    response.body = { token };
  } else {
    response.status = 400;
    response.body = { message: "Values are invalid." };
  }
};