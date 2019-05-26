import { CanActivate } from '@angular/router/src/utils/preactivation';

export class LoginGuard implements CanActivate {
    canActivate() {
        const loggedIn: boolean = Math.random() < 0.5;
        if (!loggedIn) {
            console.log('用户未登录');
        }
        return loggedIn;
    }
}
