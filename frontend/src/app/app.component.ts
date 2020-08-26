import { Component } from '@angular/core';
import { faPlay, faEdit, faStop } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V4';
  faPlay = faPlay;
  faEdit = faEdit;
  faStop = faStop;


  arrBossData = [
    {
      id: 0,
      name: 'Illusory Blighted Evelyn',
      channel: 0,
      timer: 240,
      timerup: 58,
      img: 'assets/img/IllusoryBlightedEvelyn.png'
    },
    {
      id: 1,
      name: 'Illusory Seasoned Evelyn',
      channel: 0,
      timer: 240,
      timerup: 58,
      img: 'assets/img/IllusorySeasonedEvelyn.png'
    },
    {
      id: 2,
      name: 'Illusory Tormented Evelyn',
      channel: 0,
      timer: 240,
      timerup: 58,
      img: 'assets/img/IllusoryTormentedEvelyn.png'
    },
    {
      id: 3,
      name: 'Lavirin',
      channel: 1,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Lavirin.png'
    },
    {
      id: 4,
      name: 'Lavirin',
      channel: 2,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Lavirin.png'
    },
    {
      id: 5,
      name: 'Lavirin',
      channel: 3,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Lavirin.png'
    },
    {
      id: 6,
      name: 'Piko',
      channel: 1,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Piko.png'
    },
    {
      id: 7,
      name: 'Piko',
      channel: 2,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Piko.png'
    },
    {
      id: 8,
      name: 'Piko',
      channel: 3,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Piko.png'
    },
    {
      id: 7,
      name: 'Veriki',
      channel: 1,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Veriki.png'
    },
    {
      id: 8,
      name: 'Veriki',
      channel: 2,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Veriki.png'
    },
    {
      id: 9,
      name: 'Veriki',
      channel: 3,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Veriki.png'
    },
    {
      id: 10,
      name: 'Rapakos',
      channel: 1,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Rapakos.png'
    },
    {
      id: 11,
      name: 'Rapakos',
      channel: 2,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Rapakos.png'
    },
    {
      id: 12,
      name: 'Rapakos',
      channel: 3,
      timer: 240,
      timerup: 58,
      img: 'assets/img/Rapakos.png'
    },
  ]
}


