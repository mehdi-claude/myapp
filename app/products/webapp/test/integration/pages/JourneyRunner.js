sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/myapp/products/test/integration/pages/ProductsList",
	"com/myapp/products/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, ProductsList, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/myapp/products') + '/test/flpSandbox.html#commyappproducts-tile',
        pages: {
			onTheProductsList: ProductsList,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

