import { Component, OnInit } from '@angular/core';
import { faPlay, faEdit, faStop } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { environment } from './../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Component({ templateUrl: 'timer.component.html' })
export class TimerComponent implements OnInit {
    mySub: Subscription;
    title = 'V4';
    // 45.132.242.135
    baseURL = environment.urlApiV4;

    faPlay = faPlay;
    faEdit = faEdit;
    faStop = faStop;

    arrBossData = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.GetTimers();
        // Se actualiza cada 60 segundos
        this.mySub = interval(60000).subscribe(() => {
            console.log("Obtiene nuevamente la data de los boss.");
            this.GetTimers();
        });
        // setInterval(function () {  }, 3000);
    }



    // Enciende o apaga el timer
    async EnableDisableTimer(id) {
        const dataTimerBoss = await this.GetTimer(id);

        if (dataTimerBoss.body.status) {
            dataTimerBoss.body.timerup = null;
            dataTimerBoss.body.status = false;
        } else {
            dataTimerBoss.body.status = true;
            dataTimerBoss.body.timerup = dataTimerBoss.body.timer;
        }
        const resultUpdate = await this.UpdateTimer(dataTimerBoss.body);
        this.GetTimers();
    }

    async UpdateTimer(entity) {
        const result = await this.http.put(this.baseURL + '/' + entity.id, { ...entity }, httpOptions).toPromise();
        console.log('UpdateTimer result: ', result);
        return result;
    }

    async GetTimer(id) {
        const result = await this.http.get<any>(this.baseURL + '/' + id).toPromise();
        console.log('Gettimer result: ', result);
        return result;
    }

    async GetTimers() {
        const result = await this.http.get<any>(this.baseURL + '/').toPromise();
        console.log('GetTimers result: ', result);
        this.arrBossData = result.body;
    }

}