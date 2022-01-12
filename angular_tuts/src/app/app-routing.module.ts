import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path: 'loantype',
    component: LoanTypesComponent,
    outlet: 'router1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
