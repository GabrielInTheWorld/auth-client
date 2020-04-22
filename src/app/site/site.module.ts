import { NgModule } from '@angular/core';
import { LoginSiteComponent } from './login-site/login-site.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SharedModule } from '../ui/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SiteComponent, LoginSiteComponent, DashboardComponent],
  exports: [],
  imports: [SiteRoutingModule, SharedModule, CommonModule],
  providers: [],
  bootstrap: []
})
export class SiteModule {}
