import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {error} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  tryGoogleLogin(): void {
    this.authService.doGoogleLogin()
      .then(() => this.successRedirect())
      .catch(error => console.log(error))
      .finally(() => {
      });
  }

  successRedirect(): void {
    // noinspection JSIgnoredPromiseFromCall
    this.ngZone.run(() => this.router.navigate(['/']));
  }

  ngOnInit(): void {
  }


}
