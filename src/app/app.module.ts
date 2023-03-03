import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { APComponent } from './inspection/ap/ap.component';
import { QOComponent } from './inspection/qo/qo.component';
import { InspectionComponent } from './inspection/Inspection.component';

const route: Routes = [{ path: 'inspection', component: InspectionComponent }];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(route)],
  declarations: [AppComponent, APComponent, QOComponent, InspectionComponent],
  entryComponents: [APComponent, QOComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
