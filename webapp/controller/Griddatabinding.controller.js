sap.ui.define([
	"com/hardy/sapui5table/controller/BaseController",
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/BindingMode"
], function (BaseController, Text, JSONModel, BindingMode) {
	"use strict";

	return BaseController.extend("com.hardy.sapui5table.controller.Griddatabinding", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hardy.sapui5table.view.Griddatabinding
		 */
		onInit: function () {

			if (sap.ui.Device.system.phone || sap.ui.Device.system.tablet) {
				this.getView().byId("bindingpage").setEnableScrolling(true);
			}

			var oModel = new JSONModel({
				title: "Property Binding",
				definition: "The text property of the sap.m.Text control is set to the value Property Binding. The curly brackets enclosing a binding path (binding syntax) are automatically interpreted as a binding. These binding instances are called PropertyBindings. In this case, the control's text property is bound to the greetingText property at the root of the default model.",
				absolute: {
					title: "Absolute Binding",
					definition: "The Slash (/) in the begining of the binding path denoted the absolute binding path."
				}
			});
			this.getView().setModel(oModel);

			var twoWayBindingDataModel = new JSONModel({

				twowaybinding: {
					title: "Two Way Binding",
					firstName: "Bhuvan",
					lastName: "Bum",
					enabled: true,
					explanation: "We have not written any code to transfer data between the user interface and the model, yet the Input controls are enabled or disabled according to the state of the checkbox. This behaviour is the result of the fact that all SAPUI5 models implement two-way data binding, and for JSON Models, two-way binding is the default behavior.",
					keypointone: "Data binding allows the property of a control to derive its value from any suitable property in a model.",
					keypointtwo: "SAPUI5 automatically handles the transport of data both from the model to the controls, and back from the controls to the model. This is called two-way binding."
				}
			});
			this.getView().byId("twowaybindingPanel").setModel(twoWayBindingDataModel);

			var oneWayBindingDataModel = new JSONModel({

				onewaybinding: {
					title: "One Way Binding",
					firstName: "Bhuvan",
					lastName: "Bum",
					enabled: true,
					explanation: "No matter what state the checkbox is in, the input fields remain open for input because one-way data binding ensures that data flows only from the model to the UI, but never in the other direction.The binding mode (one-way or two-way) is set on the model itself. Therefore, unless you specifically alter it, a binding instance will always be created using the model's default binding mode.",
					keypointone: "If you alter the default binding mode of a model (as in the example above), then unless you explicitly say otherwise, all binding instances created after that point in time will use the altered binding mode.",
					keypointtwo: "Altering a model's default binding mode has no effect on already existing binding instances."
				}
			});
			oneWayBindingDataModel.setDefaultBindingMode(BindingMode.OneWay);
			this.getView().byId("onewaybindingPanel").setModel(oneWayBindingDataModel);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hardy.sapui5table.view.Griddatabinding
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hardy.sapui5table.view.Griddatabinding
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hardy.sapui5table.view.Griddatabinding
		 */
		//	onExit: function() {
		//
		//	}

	});

});