import { FooterComponent } from './components/footer/footer.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { RocketListComponent } from './components/rocket-list/rocket-list.component';
import { RocketPanelComponent } from './components/rocket-panel/rocket-panel.component';
import { ButtonComponent } from './components/button/button.component';
import { PlansComponent } from './components/plans/plans.component';
import { DataAnalysisComponent } from './components/data/data.component';
import { DataSubmitComponent } from './components/data-submit/data-submit.component';
import { Configuration } from './../app.constants';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuickOverviewComponent } from './components/quick-overview/quick-overview.component';
import { LanguageComponent } from './components/language/language.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { UpdatesPanelComponent } from './components/updates-panel/updates-panel.component';
import { UpdatesDetailsComponent } from './components/updates-details/updates-details.component';
import { StoreComponent } from './components/store/store.component';
import { StorePanelComponent } from './components/store-panel/store-panel.component';
import { ControlPanelComponent } from './components/controlpanel/controlpanel.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CookiesService } from './services/cookies.service';
import { PaymentService } from './services/payment.service';

/*export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}*/

@NgModule({

    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        /*TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })*/
    ],

    declarations: [
        NavigationComponent,
        FooterComponent,
        MenuPanelComponent,
        ButtonComponent,
        QuickOverviewComponent,
        RocketListComponent,
        RocketPanelComponent,
        PlansComponent,
        DataAnalysisComponent,
        DataSubmitComponent,
        LanguageComponent,
        HomeComponent,
        UpdatesComponent,
        UpdatesPanelComponent,
        UpdatesDetailsComponent,
        StoreComponent,
        StorePanelComponent,
        ControlPanelComponent
    ],

    exports: [
        NavigationComponent,
        FooterComponent,
        MenuPanelComponent,
        ButtonComponent,
        QuickOverviewComponent,
        RocketListComponent,
        RocketPanelComponent,
        PlansComponent,
        DataAnalysisComponent,
        DataSubmitComponent,
        LanguageComponent,
        HomeComponent,
        UpdatesComponent,
        UpdatesPanelComponent,
        UpdatesDetailsComponent,
        StoreComponent,
        StorePanelComponent,
        ControlPanelComponent
    ],
    providers: [
        Configuration,
        CookiesService,
        PaymentService
    ]
})

export class SharedModule { }
