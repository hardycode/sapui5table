/*global QUnit*/

sap.ui.define([
	"com/hardy/sapui5table/controller/TableExampleOne.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TableExampleOne Controller");

	QUnit.test("I should test the TableExampleOne controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});