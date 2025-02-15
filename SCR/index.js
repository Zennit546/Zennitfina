export default {
  async fetch(request) {
    return new Response("¡Hola, Cloudflare Workers!", { status: 200 });
  }
};
