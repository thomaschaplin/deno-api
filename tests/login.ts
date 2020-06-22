import { assertEquals } from "../test.deps.ts";
import { loginRoutes } from "../routes/routes.ts";

Deno.test({
  name: "should return a 403 when GET method used on /login",
  async fn() {
    const res = await fetch(loginRoutes.login);
    assertEquals(res.status, 405);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: "should return a 500 when POST method used on /login with no body",
  async fn() {
    const res = await fetch(loginRoutes.login, {
      method: "POST",
    });
    assertEquals(res.status, 500);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
