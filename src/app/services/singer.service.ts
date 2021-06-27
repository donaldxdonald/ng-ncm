import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_CONFIG, ServicesModule } from './services.module'
import { Observable } from 'rxjs'
import { Singer } from '../data-types/common.types'
import { map } from 'rxjs/operators'
import { stringify } from 'query-string'

interface SingerParams {
  limit?: number;
  offset?: number;
  type?: number;
  area?: number;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 5,
  type: -1,
  area: 7
}

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private baseURL: string
  ) {}

  fetchSingers(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: stringify(args) })
    return this.http
      .get(`${this.baseURL}artist/list`, { params })
      .pipe(map((res: any) => res.artists))
  }
}
