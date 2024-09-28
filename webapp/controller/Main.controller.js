sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("space.expbor.ui5.containerizedapp.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
