import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import { ConfirmEqualDirective } from './shared/confirm-equal.directive';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
]
 
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualDirective
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
