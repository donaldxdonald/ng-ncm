import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NcmCarouselComponent } from './components/ncm-carousel/ncm-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    NcmCarouselComponent
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
