import { Context } from "https://deno.land/x/oak/mod.ts";
import { isHttpError } from "https://deno.land/x/oak/mod.ts";

export const validateStatusCode = async (
  ctx: Context,
  next: any,
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case 404:
          ctx.response.status = 404;
          ctx.response.body = {
            message: "Requested resource can not be found",
          };
          break;
        default:
          ctx.response.status = 400;
          ctx.response.body = {
            message: "Request can not be processed currently",
          };
      }
    } else {
      ctx.response.status = 500;
      ctx.response.body = {
        message: "Something went wrong",
      };
    }
  }
};
