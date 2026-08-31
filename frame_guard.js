(() => {
  'use strict';

  if (window.self !== window.top) {
    try {
      window.top.location = window.self.location;
    } catch (_) {
      // A sandboxed cross-origin frame cannot navigate its parent. Keeping the
      // document hidden prevents clickjacking in that case.
    }
    return;
  }

  document.getElementById('frame-guard')?.remove();
})();
