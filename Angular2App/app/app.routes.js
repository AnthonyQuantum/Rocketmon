"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var rocket_list_component_1 = require("./shared/components/rocket-list/rocket-list.component");
var plans_component_1 = require("./shared/components/plans/plans.component");
var data_component_1 = require("./shared/components/data/data.component");
var data_submit_component_1 = require("./shared/components/data-submit/data-submit.component");
var home_component_1 = require("./shared/components/home/home.component");
var updates_component_1 = require("./shared/components/updates/updates.component");
var updates_details_component_1 = require("./shared/components/updates-details/updates-details.component");
var store_component_1 = require("./shared/components/store/store.component");
var controlpanel_component_1 = require("./shared/components/controlpanel/controlpanel.component");
var AppRoutes = [
    { path: 'main', component: home_component_1.HomeComponent },
    { path: 'main/rockets', component: rocket_list_component_1.RocketListComponent },
    { path: 'main/data', component: data_component_1.DataAnalysisComponent },
    { path: 'main/data/submit', component: data_submit_component_1.DataSubmitComponent },
    { path: 'main/plans', component: plans_component_1.PlansComponent },
    { path: 'updates', component: updates_component_1.UpdatesComponent },
    { path: 'updates-details/:id', component: updates_details_component_1.UpdatesDetailsComponent },
    { path: 'store', component: store_component_1.StoreComponent },
    { path: 'controlpanel', component: controlpanel_component_1.ControlPanelComponent },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map