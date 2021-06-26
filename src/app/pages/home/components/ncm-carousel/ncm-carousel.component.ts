import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ncm-carousel',
  templateUrl: './ncm-carousel.component.html',
  styleUrls: ['./ncm-carousel.component.less'],
  // 更改检测策略，仅在有变化时检测，有利于优化性能
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NcmCarouselComponent implements OnInit {
  @Input() activeIndex = 0

  @Output() changeSlide = new EventEmitter<'next' | 'pre'>()
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlide(type: 'next' | 'pre'): void {
    this.changeSlide.emit(type)
  }

}
