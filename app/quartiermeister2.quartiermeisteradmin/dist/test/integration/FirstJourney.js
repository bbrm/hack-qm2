sap.ui.define(["sap/ui/test/opaQunit"],function(e){"use strict";var i={run:function(){QUnit.module("First journey");e("Start application",function(e,i,t){e.iStartMyApp();t.onTheTeamList.iSeeThisPage()});e("Navigate to ObjectPage",function(e,i,t){i.onTheTeamList.onFilterBar().iExecuteSearch();t.onTheTeamList.onTable().iCheckRows();i.onTheTeamList.onTable().iPressRow(0);t.onTheTeamObjectPage.iSeeThisPage()});e("Teardown",function(e,i,t){e.iTearDownMyApp()})}};return i});
//# sourceMappingURL=FirstJourney.js.map