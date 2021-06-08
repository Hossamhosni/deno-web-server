import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
	router.get(path, (ctx) => {
		ctx.response.body = "Users Page";
	});
}
