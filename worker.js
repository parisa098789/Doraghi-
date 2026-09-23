export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return new Response(
        JSON.stringify({
          ok: true,
          message: "Doraghi API is working"
        }),
        {
          headers: {
            "content-type": "application/json; charset=UTF-8"
          }
        }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
