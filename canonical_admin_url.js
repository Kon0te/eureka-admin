(function () {
  'use strict';
  const current = new URL(window.location.href);
  if (current.hostname !== 'admin.eureka-apps.fr') return;
  if (current.pathname === '/' || current.pathname === '/index.html') return;
  const isPortalRoute = (path) => /^\/(admin|marketing|auth)(\/|$)/.test(path);
  if (!isPortalRoute(current.pathname)) return;
  // Do not rewrite an OAuth fragment whose syntax is not a router location.
  if (current.hash && !current.hash.startsWith('#/')) return;
  const fragmentRoute = current.hash.slice(1);
  const route = new URL(
    isPortalRoute(fragmentRoute.split('?')[0])
      ? fragmentRoute
      : current.pathname,
    current.origin,
  );
  for (const [name, value] of current.searchParams) {
    if (!route.searchParams.has(name)) route.searchParams.append(name, value);
  }
  // Fixed same-origin destination: neither `from` nor a hash can select a host.
  window.location.replace(`${current.origin}/#${route.pathname}${route.search}`);
}());
