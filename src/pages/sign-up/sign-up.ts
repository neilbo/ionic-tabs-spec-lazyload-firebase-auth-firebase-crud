import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signupForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthProvider,
              private formBuilder: FormBuilder
            ) {
              this.signupForm = this.formBuilder.group({
                email: ['', [ValidationService.emailRequired, ValidationService.emailValidator]],
                password: ['', ValidationService.passwordRequired]
              });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }
  signUp(user) {
    user = this.signupForm.value
    this.authService.signUp(user);
    this.navCtrl.push('LoginPage');
  }
}
