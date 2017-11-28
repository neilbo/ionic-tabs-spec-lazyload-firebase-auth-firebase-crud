import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthProvider

            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signUp() {
    this.navCtrl.push('SignUpPage')
  }

  login(user: User) {
    this.authService.login(user);
    this.navCtrl.setRoot('TabsPage');
    
  }

}
