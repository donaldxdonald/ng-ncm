import { PlayCountPipe } from './../pipes/play-count.pipe'
import { ShowItemComponent } from './show-item/show-item.component'
import { NgModule } from '@angular/core'



@NgModule({
  declarations: [ShowItemComponent, PlayCountPipe],
  imports: [
  ],
  exports: [ShowItemComponent, PlayCountPipe]
})
export class NcmUiModule { }
