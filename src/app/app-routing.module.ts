import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVisitsComponent } from './visit/list-visits.component';
import { CreateVisitComponent } from './visit/create-visit.component';
import { VisitDocumentsComponent } from './visit/visit-documents.component';
import { VisitDetailsComponent } from './visit/visit-details.component';
import { VisitServicesComponent } from './visit/visit-services.component';
import { EditVisitComponent } from './visit/edit-visit.component';
import { DeleteVisitComponent } from './visit/delete-visit.component';


const routes: Routes = [
  { path: 'list', component: ListVisitsComponent },
  { path: 'create', component: CreateVisitComponent },
  { path: 'documents', component: VisitDocumentsComponent },
  { path: 'details', component: VisitDetailsComponent },
  { path: 'services', component: VisitServicesComponent },
  { path: 'edit', component: EditVisitComponent },
  { path: 'delete', component: DeleteVisitComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
