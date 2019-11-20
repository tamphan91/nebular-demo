import { Component } from '@angular/core';
import { NbSidebarService, NbIconConfig, NbComponentSize, NbMenuService } from '@nebular/theme';
import { NbAuthService, NbAuthJWTToken, NbTokenService } from '@nebular/auth';
import { filter, map } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'nebular-demo';
    disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
    sizes: NbComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];
    items = [{ title: 'Profile' }, { title: 'Log out', link: 'auth/logout' }];
    user = null;

    constructor(private sidebarService: NbSidebarService, private authService: NbAuthService, private nbMenuService: NbMenuService
        ,       private nbTokenService: NbTokenService, public accessChecker: NbAccessChecker) {
        // this.nbTokenService.tokenChange().subscribe((token: NbAuthJWTToken) => {
        //     console.log('token changing');
        // });
        console.log('init home page');
        this.authService.onAuthenticationChange().subscribe(a => {
            if (a) {
                console.log('true');
            } else {
                console.log('false');
            }
        });
        this.authService.onTokenChange()
            .subscribe((token: NbAuthJWTToken) => {
                if (token.isValid()) {
                    this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
                    console.log('login');
                } else {
                    console.log('logout');
                    this.user = null;
                }

            });
        // this.nbMenuService.onItemClick()
        //   .pipe(
        //     filter(({ tag }) => tag === 'my-context-menu'),
        //     map(({ item: { title } }) => title),
        //   )
        //   .subscribe(title => {
        //     if (title === 'Log out') {
        //       this.authService.logout('email').subscribe(result => {
        //         console.log('logout');
        //         this.user = null;
        //       });
        //     }
        //   });
    }

    toggle() {
        this.sidebarService.toggle(true);
        return false;
    }
}
