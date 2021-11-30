import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from './api.service';
import {RequestService} from './request.service';
import {AppService} from './app.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    RequestService,
    AppService
  ]
})
export class CoreModule { }
