sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'quartiermeister2.quartiermeisteradmin2',
            componentId: 'TeamObjectPage',
            contextPath: '/Team'
        },
        CustomPageDefinitions
    );
});