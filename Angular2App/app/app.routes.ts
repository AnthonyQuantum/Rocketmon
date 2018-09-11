import { Routes, RouterModule } from '@angular/router';
import { RocketListComponent } from './shared/components/rocket-list/rocket-list.component';
import { PlansComponent } from './shared/components/plans/plans.component';
import { DataAnalysisComponent } from './shared/components/data/data.component';
import { DataSubmitComponent } from './shared/components/data-submit/data-submit.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UpdatesComponent } from './shared/components/updates/updates.component';
import { UpdatesDetailsComponent } from './shared/components/updates-details/updates-details.component';
import { StoreComponent } from './shared/components/store/store.component';
import { ControlPanelComponent } from './shared/components/controlpanel/controlpanel.component';

const AppRoutes: Routes = [
    { path: 'main', component: HomeComponent },
  { path: 'main/rockets', component: RocketListComponent},
  { path: 'main/data', component: DataAnalysisComponent},
  { path: 'main/data/submit', component: DataSubmitComponent},
  { path: 'main/plans', component: PlansComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'updates-details/:id', component: UpdatesDetailsComponent },
  { path: 'store', component: StoreComponent },
  { path: 'controlpanel', component: ControlPanelComponent },
  {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
  }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
