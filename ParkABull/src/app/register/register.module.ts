import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    NativeScriptCommonModule,
    RegisterRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterModule {
  constructor(){
    console.log('Register Module constructed')
  }
 }
