"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var footer_component_1 = require("./components/footer/footer.component");
var menu_panel_component_1 = require("./components/menu-panel/menu-panel.component");
var rocket_list_component_1 = require("./components/rocket-list/rocket-list.component");
var rocket_panel_component_1 = require("./components/rocket-panel/rocket-panel.component");
var button_component_1 = require("./components/button/button.component");
var plans_component_1 = require("./components/plans/plans.component");
var data_component_1 = require("./components/data/data.component");
var data_submit_component_1 = require("./components/data-submit/data-submit.component");
var app_constants_1 = require("./../app.constants");
var navigation_component_1 = require("./components/navigation/navigation.component");
var quick_overview_component_1 = require("./components/quick-overview/quick-overview.component");
var language_component_1 = require("./components/language/language.component");
var home_component_1 = require("./components/home/home.component");
var updates_component_1 = require("./components/updates/updates.component");
var updates_panel_component_1 = require("./components/updates-panel/updates-panel.component");
var updates_details_component_1 = require("./components/updates-details/updates-details.component");
var store_component_1 = require("./components/store/store.component");
var store_panel_component_1 = require("./components/store-panel/store-panel.component");
var controlpanel_component_1 = require("./components/controlpanel/controlpanel.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
var http_1 = require("@angular/common/http");
var cookies_service_1 = require("./services/cookies.service");
var payment_service_1 = require("./services/payment.service");
/*export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}*/
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            http_1.HttpClientModule,
        ],
        declarations: [
            navigation_component_1.NavigationComponent,
            footer_component_1.FooterComponent,
            menu_panel_component_1.MenuPanelComponent,
            button_component_1.ButtonComponent,
            quick_overview_component_1.QuickOverviewComponent,
            rocket_list_component_1.RocketListComponent,
            rocket_panel_component_1.RocketPanelComponent,
            plans_component_1.PlansComponent,
            data_component_1.DataAnalysisComponent,
            data_submit_component_1.DataSubmitComponent,
            language_component_1.LanguageComponent,
            home_component_1.HomeComponent,
            updates_component_1.UpdatesComponent,
            updates_panel_component_1.UpdatesPanelComponent,
            updates_details_component_1.UpdatesDetailsComponent,
            store_component_1.StoreComponent,
            store_panel_component_1.StorePanelComponent,
            controlpanel_component_1.ControlPanelComponent
        ],
        exports: [
            navigation_component_1.NavigationComponent,
            footer_component_1.FooterComponent,
            menu_panel_component_1.MenuPanelComponent,
            button_component_1.ButtonComponent,
            quick_overview_component_1.QuickOverviewComponent,
            rocket_list_component_1.RocketListComponent,
            rocket_panel_component_1.RocketPanelComponent,
            plans_component_1.PlansComponent,
            data_component_1.DataAnalysisComponent,
            data_submit_component_1.DataSubmitComponent,
            language_component_1.LanguageComponent,
            home_component_1.HomeComponent,
            updates_component_1.UpdatesComponent,
            updates_panel_component_1.UpdatesPanelComponent,
            updates_details_component_1.UpdatesDetailsComponent,
            store_component_1.StoreComponent,
            store_panel_component_1.StorePanelComponent,
            controlpanel_component_1.ControlPanelComponent
        ],
        providers: [
            app_constants_1.Configuration,
            cookies_service_1.CookiesService,
            payment_service_1.PaymentService
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map