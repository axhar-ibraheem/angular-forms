import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardformComponent } from './cardform/cardform.component';
import { InputComponent } from './input/input.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [AppComponent, CardformComponent, InputComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskModule.forRoot(options)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
