/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tetst/tetst/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});