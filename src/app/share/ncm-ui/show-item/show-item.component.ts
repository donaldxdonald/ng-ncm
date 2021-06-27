import { PlaylistShowItem } from './../../../data-types/common.types'
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowItemComponent implements OnInit {
  @Input() itemData: PlaylistShowItem;

  constructor() { }

  ngOnInit(): void {
  }

}
