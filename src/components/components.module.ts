import { NgModule } from '@angular/core';
import { ControlMessages } from './control-messages/control.messages'
import { IonicModule }  from 'ionic-angular'
@NgModule({
  declarations: [ControlMessages],
  imports: [IonicModule],
  exports: [ControlMessages]
})
export class ComponentsModule { }