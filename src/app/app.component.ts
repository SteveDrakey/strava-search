import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public authentication: AuthenticationModule,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe( async (s) => {
      const code = s.code;
      const scope = s.scope;
      if (code) {
        await this.authentication.authorizeToken(code, '');
        this.location.go('/');
      } else {
        // Can we just refresh the token?
        console.log('calling refresh');
        await this.authentication.login();
      }
    });
  }

  connectToStrava() {
    console.log('connectToStrava');
    this.authentication.connectToStrava(null);
  }
  Logout() {
    this.authentication.Logout();
  }

}
