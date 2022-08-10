import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLoanComponent } from './loandetails/edit-loan/edit-loan.component';
import { LoanComponent } from './loandetails/loan/loan.component';
import { LoandashboardComponent } from './loandetails/loandashboard/loandashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Shared/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent, pathMatch: 'full' },
  {path:'Login', component:LoginComponent},
  {path:'Loan', component:LoanComponent,canActivate:[AuthGuard]},
  {path:'loanDetails',component:LoandashboardComponent,canActivate:[AuthGuard]},
  { path: 'edit-loan/:Id/EditLoan', component: EditLoanComponent,canActivate:[AuthGuard] } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
