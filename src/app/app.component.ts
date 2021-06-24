import { Component } from '@angular/core';

class NavItem {
  name: string;
  label: string;
  linkTo: string;
  constructor(name: string, label: string, linkTo: string) {
    this.name = name
    this.label = label
    this.linkTo = linkTo
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  navList: Array<NavItem> = [
    new NavItem('Hot', '发现音乐', '/hot'),
    new NavItem('My', '我的音乐', '/my'),
    new NavItem('Friend', '朋友', '/friend'),
    new NavItem('Store', '商城', '/store'),
  ]
}
