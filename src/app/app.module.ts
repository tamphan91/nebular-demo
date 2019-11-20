import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService, NbActionsModule, NbIconModule, NbCardModule, NbUserModule, NbContextMenuModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxAuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { RoleProvider } from './services/role.provider';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbCardModule,
    NbUserModule,
    HttpClientModule,
    NgxAuthModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbSecurityModule.forRoot({
      accessControl: {
        Guest: {
          view: ['news', 'userView', 'moderatorView', 'adminView'],
        },
        User: {
          parent: 'Guest',
          create: 'userView',
          edit: 'userView',
        },
        Moderator: {
          parent: 'User',
          create: 'moderatorView',
          remove: 'moderatorView',
          edit: 'moderatorView',
        },
        Admin: {
          parent: 'Moderator',
          create: 'adminView',
          remove: 'adminView',
          edit: 'adminView',
        },
      },
    }),
  ],
  providers: [NbSidebarService,
    {
      provide: NbRoleProvider,
      useClass: RoleProvider,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
