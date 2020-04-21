import { NgModule } from '@angular/core';
import { LoginSiteComponent } from './login-site/login-site.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';

@NgModule({
  declarations: [SiteComponent, LoginSiteComponent, DashboardComponent],
  exports: [],
  imports: [SiteRoutingModule],
  providers: [],
  bootstrap: []
})
export class SiteModule {}
