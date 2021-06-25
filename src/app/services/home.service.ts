import { Banner } from './../data-types/common.types';
import { ServicesModule, API_CONFIG } from './services.module';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServicesModule,
})
export class HomeService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private baseURL: string
  ) {}

  fetchBanners(): Observable<Banner[]> {
    return this.http
      .get(`${this.baseURL}banner`)
      .pipe(map((res: any) => res.banners));
  }
}
