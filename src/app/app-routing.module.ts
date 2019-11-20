import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbRegisterComponent,
//   NbLogoutComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';


// const routes: Routes = [

//   {
//     path: 'auth',
//     component: NbAuthComponent,
//     children: [
//       {
//         path: '',
//         component: NbLoginComponent,
//       },
//       {
//         path: 'login',
//         component: NbLoginComponent,
//       },
//       {
//         path: 'register',
//         component: NbRegisterComponent,
//       },
//       {
//         path: 'logout',
//         component: NbLogoutComponent,
//       },
//       {
//         path: 'request-password',
//         component: NbRequestPasswordComponent,
//       },
//       {
//         path: 'reset-password',
//         component: NbResetPasswordComponent,
//       },
//     ],
//   },

// ];

export const routes: Routes = [
  // .. some other app routs
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
