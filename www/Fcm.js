var exec = require('cordova/exec');

function Fcm() {
  alert("FCMPlugin.js: is created");
}

Fcm.prototype.getToken = function () {
  // left,top,width,height
  return "12345678";
};

// SUBSCRIBE TO TOPIC //
Fcm.prototype.subscribeToTopic = function (topic, success, error) {
	exec(success, error, "FCMPlugin", 'subscribeToTopic', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
Fcm.prototype.unsubscribeFromTopic = function (topic, success, error) {
	exec(success, error, "FCMPlugin", 'unsubscribeFromTopic', [topic]);
}

// NOTIFICATION CALLBACK //
Fcm.prototype.onNotification = function (callback, success, error) {
	Fcm.prototype.onNotificationReceived = callback;
	exec(success, error, "FCMPlugin", 'registerNotification', []);
}
// DEFAULT NOTIFICATION CALLBACK //
Fcm.prototype.onNotificationReceived = function (payload) {
	console.log("fcmTrack Received push notification payload:")
	console.log(payload)
}
//Edit start wed june 22
// FCM ID CALLBACK //
Fcm.prototype.onGotFCMID = function (callback, success, error) {
	Fcm.prototype.onFCMIDReceived = callback;
	exec(success, error, "FCMPlugin", 'getFCMID', []);
}
// DEFAULT ID CALLBACK //
Fcm.prototype.onFCMIDReceived = function (fcmID) {
	console.log("fcmTrack Received fcmID:")
	console.log(fcmID)
}
//Edit end

Fcm.prototype.setBadgeNumber = function (number, success, error) {
	exec(success, error, "FCMPlugin", "setBadgeNumber", [number]);
};

Fcm.prototype.getBadgeNumber = function (success, error) {
	exec(success, error, "FCMPlugin", "getBadgeNumber", []);
};

// FIRE READY //
exec(function (result) { console.log("fcmTrack FCMPlugin Ready OK") }, function (result) { console.log("fcmTrack FCMPlugin Ready ERROR") }, "FCMPlugin", 'ready', []);


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
