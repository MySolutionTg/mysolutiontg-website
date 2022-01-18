import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      // {
      //   path: 'registration',
      //   component: RegistrationComponent,
      // },
      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent,
      // },
      // {
      //   path: 'logout',
      //   component: LogoutComponent,
      // },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
