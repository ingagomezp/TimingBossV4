import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    baseURL = environment.urlApiSecurity;

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const codeLocal = JSON.parse(localStorage.getItem('code'));
        if (codeLocal == null) {
            console.log(false);
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        const codeInDB = '2548';// await this.http.get<any>(this.baseURL + '/validatecode/' + codeLocal, httpOptions).toPromise();
        console.log('codeInDB result: ', codeInDB);

        if (codeInDB == codeLocal) {
            // authorised so return true
            return true;
        }
        console.log(false);
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}