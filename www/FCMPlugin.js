var exec = require('cordova/exec');

function FCMPlugin() {
	console.log("FCMPlugin.js: is created");
}

// GET TOKEN //
FCMPlugin.prototype.getToken = function (success, error) {
	console.log(124)
}

// // SUBSCRIBE TO TOPIC //
// FCMPlugin.prototype.subscribeToTopic = function (topic, success, error) {
// 	exec(success, error, "FCMPlugin", 'subscribeToTopic', [topic]);
// }
// // UNSUBSCRIBE FROM TOPIC //
// FCMPlugin.prototype.unsubscribeFromTopic = function (topic, success, error) {
// 	exec(success, error, "FCMPlugin", 'unsubscribeFromTopic', [topic]);
// }

// // NOTIFICATION CALLBACK //
// FCMPlugin.prototype.onNotification = function (callback, success, error) {
// 	FCMPlugin.prototype.onNotificationReceived = callback;
// 	exec(success, error, "FCMPlugin", 'registerNotification', []);
// }
// // DEFAULT NOTIFICATION CALLBACK //
// FCMPlugin.prototype.onNotificationReceived = function (payload) {
// 	console.log("fcmTrack Received push notification payload:")
// 	console.log(payload)
// }
// //Edit start wed june 22
// // FCM ID CALLBACK //
// FCMPlugin.prototype.onGotFCMID = function (callback, success, error) {
// 	FCMPlugin.prototype.onFCMIDReceived = callback;
// 	exec(success, error, "FCMPlugin", 'getFCMID', []);
// }
// // DEFAULT ID CALLBACK //
// FCMPlugin.prototype.onFCMIDReceived = function (fcmID) {
// 	console.log("fcmTrack Received fcmID:")
// 	console.log(fcmID)
// }
// //Edit end

// FCMPlugin.prototype.setBadgeNumber = function (number, success, error) {
// 	exec(success, error, "FCMPlugin", "setBadgeNumber", [number]);
// };

// FCMPlugin.prototype.getBadgeNumber = function (success, error) {
// 	exec(success, error, "FCMPlugin", "getBadgeNumber", []);
// };

// FIRE READY //
//exec(function (result) { console.log("fcmTrack FCMPlugin Ready OK") }, function (result) { console.log("fcmTrack FCMPlugin Ready ERROR") }, "FCMPlugin", 'ready', []);

var fcmPlugin = new FCMPlugin();
module.exports = fcmPlugin;