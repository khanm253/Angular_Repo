import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminChildAccessGuard } from './admin-child-access.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { ACGuard } from './ac.guard';
import { UnsavedGuard } from './unsaved.guard';
import { CustomerComponent } from './customer/customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ObsvComponent } from './obsv/obsv.component';

const routes: Routes = [
  {path:'product/:id', component: ProductComponent, canActivate: [AuthGuard]},
  {path:'client', component: ClientComponent},
  {path:'search', component: SearchComponent, canDeactivate: [UnsavedGuard]},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: '',
        canActivateChild: [ACGuard],
        children: [
          {path: 'edit', component: AdminEditComponent}
        ]
      }
    ]
  },
  {path: 'customer', component: CustomerComponent},
  {path: 'delete', component: DeleteCustomerComponent},
  {path: 'obsv', component: ObsvComponent},
  {path:'**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
