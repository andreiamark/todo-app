import { Routes } from '@angular/router';
import { AcceptTopicComponent } from './accept-topic/accept-topic.component';
import { DashboardTemeComponent } from './dashboard-teme/dashboard-teme.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { ProposeTopicComponent } from './propose-topic/propose-topic.component';
import { ViewSupervisedComponent } from './view-supervised/view-supervised.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardTemeComponent, // Main dashboard component
    children: [
      { path: 'propose-topic', component: ProposeTopicComponent },
      { path: 'accept-topic', component: AcceptTopicComponent },
      { path: 'view-supervised', component: ViewSupervisedComponent },
      { path: 'manage-documents', component: ManageDocumentsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default child route
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to the dashboard if no path is provided
];
