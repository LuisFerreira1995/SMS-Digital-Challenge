import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveGridComponent } from './responsive-grid/responsive-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule } from "@angular/material";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserService } from "./user.service";
import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormComponent } from './form/form.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: ResponsiveGridComponent, data: { title: 'Responsive Grid' } },
  { path: 'ResponsiveGrid', component: ResponsiveGridComponent, data: { title: 'Responsive Grid' } },
  { path: 'Form', component: FormComponent, data: { title: 'Form' } }
];
@NgModule({
  declarations: [
    AppComponent,
    ResponsiveGridComponent,
    SidenavComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    UserService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
