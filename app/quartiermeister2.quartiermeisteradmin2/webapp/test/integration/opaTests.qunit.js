sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'quartiermeister2/quartiermeisteradmin2/test/integration/FirstJourney',
		'quartiermeister2/quartiermeisteradmin2/test/integration/pages/TeamObjectPage',
		'quartiermeister2/quartiermeisteradmin2/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, TeamObjectPage, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('quartiermeister2/quartiermeisteradmin2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTeamObjectPage: TeamObjectPage,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);