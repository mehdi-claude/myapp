sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("com.myapp.products.controller.ListReport", {

        onInit: function() {
            console.log("Controller gestartet!");
        },

        onShowInfo: function() {
            MessageBox.information("Willkommen in meiner SAP App!");
        },

        onShowToast: function() {
            MessageToast.show("Produkt wurde gespeichert!");
        }

    });
});
