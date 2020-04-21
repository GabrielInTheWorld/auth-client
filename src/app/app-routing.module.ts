import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSiteComponent } from './site/login-site/login-site.component';

const routes: Routes = [
  // {
  //   path: 'sign-in',
  //   component: LoginSiteComponent,
  //   children: []
  // },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  }
  // {
  //   path: '*',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
