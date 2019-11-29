function Fcm() {
}

// Override this method (after deviceready) to set the location where you want the iPad popup arrow to appear.
// If not overridden with different values, the popup is not used. Example:
//
//   window.plugins.socialsharing.iPadPopupCoordinates = function() {
//     return "100,100,200,300";
//   };
Fcm.prototype.iPadPopupCoordinates = function () {
  // left,top,width,height
  return "-1,-1,-1,-1";
};


Fcm.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.fcm = new Fcm();

  // Note only polyfill navigator.share if it is not defined, since shareW3C implements L1 of the spec,
  // and an existing navigator.share method could implement L2.
  if (!navigator.share) {
    navigator.share = window.plugins.fcm.shareW3C;
  }

  return window.plugins.fcm;
};

cordova.addConstructor(Fcm.install);
