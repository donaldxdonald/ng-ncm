import { Banner } from './../../data-types/common.types';
import { HomeService } from './../../services/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex: number = 0;
  bannerList: Banner[] = [];
  @ViewChild(NzCarouselComponent, { static: true }) carousel: NzCarouselComponent
  constructor(private homeService: HomeService) {
    this.homeService.fetchBanners().subscribe(banners => {
      this.bannerList = banners
    })
  }

  ngOnInit(): void {
  }

  onBeforeChange(obj: { from: number; to: number }) {
    this.carouselActiveIndex = obj.to
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.carousel[type]()
  }
}
