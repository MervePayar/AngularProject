import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AccountService } from "../services/accountService/account.service";


@Injectable()


export class LoginGuard implements CanActivate { //guardlar service gibi çalışır 
    constructor(private accountService: AccountService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}
