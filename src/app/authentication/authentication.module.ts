import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { AthletesService } from '../api/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule {

  static accesstoken: string;

  public accesstoken: string;
  public scope: string;
  LoggedIn: BehaviorSubject<any>;

  constructor(
    private httpClient: HttpClient,
    private athletesService: AthletesService
  ) {
    this.LoggedIn = new BehaviorSubject<string>(null);
  }

  refreshToken: string;
  public currentAthlete: any;

  connectToStrava() {
    const params = {
      client_id: '15088',
      redirect_uri: `${location.origin}${location.pathname}`,
      response_type: 'code',
      approval_prompt: 'auto',
      scope: 'activity:read'
    };

    const url = 'https://www.strava.com/oauth/mobile/authorize';

    // tslint:disable-next-line: max-line-length
    const query = `client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&response_type=${params.response_type}&approval_prompt=${params.approval_prompt}&scope=${params.scope}`;

    console.log(`${url}?${query}`);
    window.location.href = `${url}?${query}`;
  }

  Logout() {
    localStorage.clear();
    AuthenticationModule.accesstoken  = null;
    this.accesstoken  = null;
    this.LoggedIn.next(null);
    this.currentAthlete = null;
  }

  async login() {

    this.refreshToken = localStorage.getItem('refresh_token');
    if (this.refreshToken) {
      // lets use it
      await this.refreshExpiredToken(this.refreshToken);
      return;
    }

  }
  async refreshExpiredToken(refreshToken: string) {
    console.log('refreshExpiredToken');
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const data = new URLSearchParams();

    data.set('client_id', '15088');
    data.set('client_secret', '***REMOVED***');
    data.set('refresh_token', refreshToken);
    data.set('grant_type', 'refresh_token');

    const reply = await this.httpClient.post('https://www.strava.com/oauth/token', data.toString(), options).toPromise<any>();
    console.log('refreshExpiredToken', reply);
    this.refreshToken = reply.refresh_token;
    this.accesstoken = reply.access_token;
    AuthenticationModule.accesstoken = reply.access_token;
    console.log(AuthenticationModule.accesstoken );
    localStorage.setItem('accesstoken', this.accesstoken);

    this.currentAthlete  = await this.athletesService.getLoggedInAthlete().toPromise();
    this.LoggedIn.next(this.currentAthlete);


  }

  async authorizeToken(code: string, scope: string) {
    console.log('authorizeToken');

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const data = new URLSearchParams();

    data.set('client_id', '15088');
    data.set('client_secret', '***REMOVED***');
    data.set('code', code);
    data.set('grant_type', 'authorization_code');

    const reply = await this.httpClient.post('https://www.strava.com/api/v3/oauth/token', data.toString(), options).toPromise<any>();

    this.refreshToken = reply.refresh_token;
    this.accesstoken = reply.access_token;
    this.scope = scope;
    AuthenticationModule.accesstoken = reply.access_token;

    localStorage.setItem('refresh_token', this.refreshToken);
    localStorage.setItem('accesstoken', this.accesstoken);
    localStorage.setItem('scope', this.scope);

    this.currentAthlete  = await this.athletesService.getLoggedInAthlete().toPromise();
    this.LoggedIn.next(this.currentAthlete);
  }
}
