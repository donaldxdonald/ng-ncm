import { Banner, PlaylistTagCate, PlaylistShowItem } from './../data-types/common.types'
import { ServicesModule, API_CONFIG } from './services.module'
import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private baseURL: string
  ) { }

  fetchBanners(): Observable<Banner[]> {
    return this.http
      .get(`${this.baseURL}banner`)
      .pipe(map((res: any) => res.banners))
  }

  fetchTagCates(): Observable<PlaylistTagCate[]> {
    return this.http.get(`${this.baseURL}playlist/hot`).pipe(map((res: any) => {
      return res.tags.sort((a: PlaylistTagCate, b: PlaylistTagCate) => {
        return a.position - b.position
      }).slice(0, 5)
    }))
  }

  fetchRcmLists(limit: number = 6): Observable<PlaylistShowItem[]> {
    return this.http.get(`${this.baseURL}personalized`, { params: { limit } }).pipe(map((res: any) => res.result))
  }
}
