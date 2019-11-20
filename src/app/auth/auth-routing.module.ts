import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { NbAuthComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent } from '@nebular/auth';  // <---
import { NgxRegisterComponent } from './register/register.component';
import { MyNbAuthComponentComponent } from './my-nb-auth-component/my-nb-auth-component.component';

export const routes: Routes = [
  // .. here goes our components routes
  {
    path: 'auth',
    component: MyNbAuthComponentComponent,  // <---
    children: [
      {
        path: 'login',
        component: NbLoginComponent, // <---
      },
      {
        path: 'register',
        component: NgxRegisterComponent, // <---
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent, // <---
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent, // <---
      },
      {
        path: 'logout',
        component: NbLogoutComponent, // <---
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
