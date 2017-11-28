import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private authService: AuthProvider,
              private app: App
              ) {
  }

  logout() {
    this.authService.logout();
    console.log('SignOut');
    // this.navCtrl.setRoot('LoginPage');
    this.app.getRootNav().setRoot('LoginPage');
  }

}
