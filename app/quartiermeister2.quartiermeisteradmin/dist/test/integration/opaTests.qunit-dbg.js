sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'quartiermeister2/quartiermeisteradmin/test/integration/FirstJourney',
		'quartiermeister2/quartiermeisteradmin/test/integration/pages/TeamList',
		'quartiermeister2/quartiermeisteradmin/test/integration/pages/TeamObjectPage',
		'quartiermeister2/quartiermeisteradmin/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, TeamList, TeamObjectPage, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('quartiermeister2/quartiermeisteradmin') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTeamList: TeamList,
					onTheTeamObjectPage: TeamObjectPage,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);