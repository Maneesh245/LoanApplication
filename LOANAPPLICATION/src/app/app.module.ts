import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoandashboardComponent } from './loandetails/loandashboard/loandashboard.component';
import { EditLoanComponent } from './loandetails/edit-loan/edit-loan.component';
import { LoanComponent } from './loandetails/loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoandashboardComponent,
    EditLoanComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
