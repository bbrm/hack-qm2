sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'quartiermeister2.quartiermeisteradmin',
            componentId: 'TeamList',
            contextPath: '/Team'
        },
        CustomPageDefinitions
    );
});