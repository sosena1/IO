import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVisitComponent } from './visit/create-visit.component';
import { ListVisitsComponent } from './visit/list-visits.component';
import { VisitDetailsComponent } from './visit/visit-details.component';
import { VisitDocumentsComponent } from './visit/visit-documents.component';
import { VisitServicesComponent } from './visit/visit-services.component';
import { EditVisitComponent } from './visit/edit-visit.component';
import { DeleteVisitComponent } from './visit/delete-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVisitComponent,
    ListVisitsComponent,
    VisitDetailsComponent,
    VisitDocumentsComponent,
    VisitServicesComponent,
    EditVisitComponent,
    DeleteVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
