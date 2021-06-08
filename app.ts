import { Application, Router, send } from "./deps.ts";
import * as IndexRouter from "./routes/indexRouter.ts";
import * as UsersRouter from "./routes/usersRouter.ts";

const PORT = "3000";
const HOSTNAME = "0.0.0.0";
const app = new Application();
const router = new Router();

IndexRouter.use("/", router);

UsersRouter.use("/users", router);

router.get("/users/:name", (ctx) => {
	ctx.response.body = ctx.params.name;
});

router.get("/public/:path+", async (ctx) => {
	await send(ctx, ctx.request.url.pathname, { root: Deno.cwd() });
});

app.addEventListener("error", (err) => {
	console.log(err);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen(`${HOSTNAME}:${PORT}`);
