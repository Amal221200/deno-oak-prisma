import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const port = 8080;

const router = new Router({ prefix: "/users" });
router.get("/", async (ctx, _next) => {
  const headers = new Headers();
  headers.append("content-type", "application/json");
  ctx.response.headers = headers;
  ctx.response.status = 200;
  return ctx.response.body = { users: "USers" };
});

app.use(router.routes());
app.use(router.allowedMethods())

app.use(async (ctx, _next) => {
  const headers = new Headers();
  headers.append("content-type", "text/html");
  const file = await Deno.readTextFile('./index.html')
  ctx.response.headers = headers;
  ctx.response.status = 200;
  return ctx.response.body = file;
});

app.addEventListener("listen", () => {
  console.log(`Listening to port ${port}`);
});

app.listen({ port });
