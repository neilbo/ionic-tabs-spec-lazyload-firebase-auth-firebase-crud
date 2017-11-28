import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user = {}  as User;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }
  signUp(user: User) {
    this.authService.signUp(user);
    this.navCtrl.push('LoginPage');
  }
  

}
