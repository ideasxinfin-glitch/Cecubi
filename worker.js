// Una sola dirección para Google: www, http, workers.dev e /index.html redirigen a https://cecubi.com/
const PRINCIPAL = 'cecubi.com';
const SECUNDARIOS = ['www.cecubi.com'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostAjeno = SECUNDARIOS.includes(url.hostname) || url.hostname.endsWith('.workers.dev');
    const sinHttps = url.hostname === PRINCIPAL && url.protocol === 'http:';
    const rutaDuplicada = url.pathname === '/index.html' || url.pathname === '/index';
    if (hostAjeno || sinHttps || rutaDuplicada) {
      if (hostAjeno || sinHttps) {
        url.hostname = PRINCIPAL;
        url.protocol = 'https:';
      }
      if (rutaDuplicada) url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
