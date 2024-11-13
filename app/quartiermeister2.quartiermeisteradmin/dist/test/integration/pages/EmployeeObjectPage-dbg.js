sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'quartiermeister2.quartiermeisteradmin',
            componentId: 'EmployeeObjectPage',
            contextPath: '/Team/employees'
        },
        CustomPageDefinitions
    );
});