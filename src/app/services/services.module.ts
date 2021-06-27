import { InjectionToken, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

export const API_CONFIG = new InjectionToken('BaseApiToken')

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://47.103.223.10/' }
  ]
})
export class ServicesModule { }
