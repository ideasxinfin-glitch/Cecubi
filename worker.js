// Una sola dirección para Google: www y http redirigen a https://cecubi.com
const PRINCIPAL = 'cecubi.com';
const REDIRIGIR = ['www.cecubi.com'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRIGIR.includes(url.hostname) || (url.hostname === PRINCIPAL && url.protocol === 'http:')) {
      url.hostname = PRINCIPAL;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
