import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
// import { ControlMessages } from '../../utils/control.messages';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    LoginPage,
    // ControlMessages
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
