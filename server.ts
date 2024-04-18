async function handler(_req: Request) {
  const file = await Deno.open("./index.html");

  const headers = new Headers();
  headers.append("content-type", "text/html");

  return new Response(file.readable, { headers });
}

Deno.serve({ port: 8000, hostname: "127.0.0.1" }, handler);
