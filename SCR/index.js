export default {
  async fetch(request) {
    return new Response("¡Hola desde Cloudflare Workers!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
