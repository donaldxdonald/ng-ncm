import { Component, Input, OnInit } from '@angular/core'
import { Singer } from '../../../../data-types/common.types'

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less']
})
export class SingerComponent implements OnInit {
  @Input() singerData: Singer

  constructor() { }

  ngOnInit(): void {
  }

}
