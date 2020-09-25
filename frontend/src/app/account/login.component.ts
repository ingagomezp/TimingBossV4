import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    baseURL = environment.urlApiSecurity;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    async onSubmit() {
        this.submitted = true;


        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.f.username.value);
        const codeInDB = '3539'; // await this.http.get<any>(this.baseURL + '/validatecode/' + this.f.username.value, httpOptions).toPromise();


        this.loading = false;
        if (codeInDB == this.f.username.value) {
            localStorage.setItem('code', this.f.username.value);
            this.router.navigate([this.returnUrl]);
        }

    }
}