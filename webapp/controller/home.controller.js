sap.ui.define([
	"com/hardy/sapui5table/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.hardy.sapui5table.controller.home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hardy.sapui5table.view.home
		 */
		onInit: function () {
			if (sap.ui.Device.system.phone || sap.ui.Device.system.tablet) {
				this.getView().byId("homePage").setEnableScrolling(true);
			}

		},

		onNavToTable: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteTableExampleOne");
		},

		// Navigate to Grid & Binding View

		onNavToBinding: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gridbinding");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hardy.sapui5table.view.home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hardy.sapui5table.view.home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hardy.sapui5table.view.home
		 */
		//	onExit: function() {
		//
		//	}

	});

});