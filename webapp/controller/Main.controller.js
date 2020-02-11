sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("mynamespaceEmptyApp.controller.Main", {
		onInit: function(){
			var oModel = new JSONModel({
				items: [
					{
						title: "Item 1",
						description: "desc 1"
					},
					{
						title: "Item 2",
						description: "desc 2"
					}					
				]
			});
			
			this.getView().setModel(oModel);
			
			this.oModel = oModel;
			
		},
		
		onButtonClicked: function(oEvent){
			
		},
		
		onListItemPressed: function(oEvent){
			var oModel = oEvent.getSource().getModel();
			
			// oModel.setProperty(oEvent.getParameter("listItem").getBindingContextPath() + "/title","title changed");
			var oData = oModel.getProperty(oEvent.getParameter("listItem").getBindingContextPath());
			oData.title = "title changed";
			oModel.refresh(true);
			
		},
		
		getModel: function(){
			return this.getView().getModel();
		}
		
		
	});
});