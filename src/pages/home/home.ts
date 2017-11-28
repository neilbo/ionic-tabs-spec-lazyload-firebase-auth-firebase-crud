import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private authService: AuthProvider
              ) {

  }

  logout() {
    this.authService.logout();
    console.log('SignOut');
    this.navCtrl.setRoot('LoginPage');
  }

}
