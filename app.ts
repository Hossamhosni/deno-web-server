import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ port: PORT, hostname: HOSTNAME });

console.log(`Server now running at http://${HOSTNAME}:${PORT}`);
for await (const req of server) {
	const html = await serveFile(req, "index.html");
	req.respond(html);
}
