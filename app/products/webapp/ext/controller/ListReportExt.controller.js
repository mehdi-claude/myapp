sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function(ControllerExtension, MessageBox, MessageToast) {
    "use strict";

    return ControllerExtension.extend("com.myapp.products.ext.controller.ListReportExt", {

        onShowInfo: function() {
            MessageBox.information("Willkommen in meiner SAP App!");
        },

        onShowToast: function() {
            MessageToast.show("Button wurde geklickt!");
        }

    });
});
