export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/products" && request.method === "GET") {
      const result = await env.DB
        .prepare("SELECT * FROM products ORDER BY id DESC")
        .all();

      return new Response(JSON.stringify(result.results), {
        headers: {
          "content-type": "application/json; charset=UTF-8"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
