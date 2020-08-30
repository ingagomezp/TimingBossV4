import { Component } from '@angular/core';
import { faPlay, faEdit, faStop } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  //// Reinicia el tiempo
  // async ResetTimer(id) {
  //   const dataTimerBoss = await Gettimer(id);
  //   dataTimerBoss.timerup = dataTimerBoss.timer;
  //   await this.service.update(dataTimerBoss);
  //   this.arrBossData = this.service.gettimers();
  // }

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
    const result = await this.http.get(this.baseURL + '/' + id).toPromise();
    console.log('Gettimer result: ', result);
    return result;
  }

  async GetTimers() {
    const result = await this.http.get(this.baseURL + '/').toPromise();
    console.log('GetTimers result: ', result);
    this.arrBossData = result.body;
  }

}


