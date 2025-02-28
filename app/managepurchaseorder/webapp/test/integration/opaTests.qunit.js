sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manage/po/managepurchaseorder/test/integration/FirstJourney',
		'manage/po/managepurchaseorder/test/integration/pages/POsList',
		'manage/po/managepurchaseorder/test/integration/pages/POsObjectPage',
		'manage/po/managepurchaseorder/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manage/po/managepurchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);