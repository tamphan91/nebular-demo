import { Injectable } from '@angular/core';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RoleProvider implements NbRoleProvider {

    constructor(private authService: NbAuthService) {
    }

    getRole(): Observable<string[]> {
        return this.authService.onTokenChange()
            .pipe(
                map((token: NbAuthJWTToken) => {
                    // const roles: Array<string> = token.isValid() ? token.getPayload().profile.roles : [];
                    // console.log('roles', roles);
                    // tslint:disable-next-line:max-line-length
                    // console.log('role: ', (roles.length === 0 ) ? 'Guest' : (roles.includes('Admin') ? 'Admin' : (roles.includes('Moderator') ? 'Moderator' : 'User')));
                    // tslint:disable-next-line:max-line-length
                    console.log('roles', token.isValid() ? (token.getPayload().profile.roles.length === 0 ? ['Guest'] : token.getPayload().profile.roles) : ['Guest']);
                    // tslint:disable-next-line:max-line-length
                    return token.isValid() ? (token.getPayload().profile.roles.length === 0 ? ['Guest'] : token.getPayload().profile.roles) : ['Guest'];
                }),
            );
    }
}
