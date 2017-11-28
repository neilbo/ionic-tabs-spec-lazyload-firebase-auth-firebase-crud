import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
// import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthProvider,
              private formBuilder: FormBuilder
            ) {
              this.loginForm = this.formBuilder.group({
                email: ['', [ValidationService.emailRequired, ValidationService.emailValidator]],
                password: ['', ValidationService.passwordRequired]
              });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signUp() {
    this.navCtrl.push('SignUpPage');
  }

  login(user) {
    user = this.loginForm.value
    this.authService.login(user);
    this.navCtrl.setRoot('TabsPage');
  }

}
