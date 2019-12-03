var exec = require('cordova/exec');

function Fcm() {
  alert("FCMPlugin.js: is created");
}

Fcm.prototype.getToken = function (success, error) {
  alert('getToken called');
	exec(success, error, "FCMPlugin", 'getToken', []);
}

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
exec(function (result) { alert("fcmTrack FCMPlugin Ready OK") }, function (result) { alert("fcmTrack FCMPlugin Ready ERROR") }, "FCMPlugin", 'ready', []);


Fcm.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.fcm = new Fcm();

  return window.plugins.fcm;
};

cordova.addConstructor(Fcm.install);
