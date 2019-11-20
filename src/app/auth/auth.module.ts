import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbSelectModule,
  NbIconModule,
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';
import { NgxRegisterComponent } from './register/register.component';
import { MyNbAuthComponentComponent } from './my-nb-auth-component/my-nb-auth-component.component';

export interface NbAuthSocialLink {
  link?: string;
  url?: string;
  target?: string;
  title?: string;
  icon?: string;
}

const socialLinks: NbAuthSocialLink[] = [
  {
    url: 'https://www.facebook.com/login',
    target: '_blank',
    title: 'd',
    icon: 'facebook'
  },
  {
    url: 'https://twitter.com/login',
    target: '_blank',
    title: 'd',
    icon: 'twitter'
  },
  {
    url: 'https://accounts.google.com/signin',
    target: '_blank',
    title: 'd',
    icon: 'google'
  }
];

export const defaultSettings: any = {
  forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // strategy id key.
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
      socialLinks // social links at the bottom of a page
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
      socialLinks
    },
    requestPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks
    },
    resetPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks
    },
    logout: {
      redirectDelay: 500,
      strategy: 'email',
    },
    validation: {
      password: {
        required: true,
        minLength: 6,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      firstName: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      lastName: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      rePass: {
        required: true,
        minLength: 6,
        maxLength: 50,
      }
    },
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    NbLayoutModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,

            key: 'access_token', // this parameter tells where to look for the token
          },
          baseEndpoint: 'http://192.168.1.59:3333/api/auth',
          login: {
            endpoint: '/login',
            method: 'post',
            redirect: {
              success: '/dashboard',
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: '/register',
            method: 'post',
          },
          logout: {
            endpoint: '/logout',
            method: 'post',
            redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            },
          },
          requestPass: {
            endpoint: '/forgot',
            method: 'post',
          },
          resetPass: {
            endpoint: '/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: defaultSettings.forms,
    }),
  ],
  declarations: [
    // ... here goes our new components
    NgxRegisterComponent,
    MyNbAuthComponentComponent
  ],
})
export class NgxAuthModule {
}
