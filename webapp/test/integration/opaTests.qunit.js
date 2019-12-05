/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/hardy/sapui5table/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});