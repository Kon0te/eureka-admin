(() => {
  'use strict';

  // The public Web build is an administration portal: purchases are
  // deliberately unsupported there and are handled only by the mobile apps.
  // purchases_flutter nevertheless registers its Web plugin automatically at
  // startup. Satisfy that registration locally so the admin never downloads
  // or executes the unused RevenueCat browser bridge from a third-party CDN.
  window.after_rc_load_callback = async (callback) => callback({});
})();
