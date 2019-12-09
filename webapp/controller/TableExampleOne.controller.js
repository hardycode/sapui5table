sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.hardy.sapui5table.controller.TableExampleOne", {
		onInit: function () {
			var items = [{
				"itemName": "Samsung",
				"itemQuantity": "19"
			}, {
				"itemName": "HCL",
				"itemQuantity": "10"
			}, {
				"itemName": "Charger",
				"itemQuantity": "50"
			}, {
				"itemName": "Mouse",
				"itemQuantity": "77"
			}];

			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(items);
			this.getView().setModel(oModel);

		},

		onPressItem: function (evt) {
			this.aTokens = evt.getParameter("tokens");
			this.theTokenInput.setTokens(this.aTokens);
		},
		handleValueHelp: function (oEvent) {
			var sInputValue = oEvent.getSource().getValue();

			this.inputId = oEvent.getSource().getId();
			// create value help dialog
			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment(
					"com.hardy.sapui5table.view.fragment.dialog",
					this
				);
				this.getView().addDependent(this._valueHelpDialog);
			}

			// create a filter for the binding
			this._valueHelpDialog.getBinding("items").filter([new sap.ui.model.Filter(
				"itemName",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialog.open(sInputValue);
		},
		_handleValueHelpClose: function (evt) {
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId(this.inputId);
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		},
		_handleValueHelpSearch: function (evt) {
			var sValue = evt.getParameter("value");
			var oFilter = new sap.ui.model.Filter(
				"itemName",
				sap.ui.model.FilterOperator.Contains, sValue
			);
			evt.getSource().getBinding("items").filter([oFilter]);
		}

	});
});