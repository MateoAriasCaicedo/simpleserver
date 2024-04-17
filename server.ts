function handler(_req: Request) {
    return new Response("Hello!");
}

Deno.serve({port: 8000, hostname: "127.0.0.1"}, handler);