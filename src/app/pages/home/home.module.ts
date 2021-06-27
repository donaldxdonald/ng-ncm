import { NgModule } from '@angular/core'
import { ShareModule } from 'src/app/share/share.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NcmCarouselComponent } from './components/ncm-carousel/ncm-carousel.component'
import { SingerComponent } from './components/singer/singer.component'


@NgModule({
  declarations: [
    HomeComponent,
    NcmCarouselComponent,
    SingerComponent
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
