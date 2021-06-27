import { NavItem } from './data-types/common.types'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  navList: Array<NavItem> = [
    {
      name: 'Hot',
      label: '发现音乐',
      linkTo: '/hot'
    },
    {
      name: 'My',
      label: '我的音乐',
      linkTo: '/my'
    },
    {
      name: 'Friend',
      label: '朋友',
      linkTo: '/friend'
    },
    {
      name: 'Store',
      label: '商城',
      linkTo: '/store'
    }
  ]
}
