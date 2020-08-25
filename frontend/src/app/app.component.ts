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
}
