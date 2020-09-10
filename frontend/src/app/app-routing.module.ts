import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../app/_helpers/auth.guard';
import { LoginComponent } from './account/login.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: AppComponent, canActivate: [AuthGuard] },
      { path: 'timer', component: TimerComponent, canActivate: [AuthGuard] }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    TimerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
