import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers });

  }

  getTopHeadlines() {

    this.headlinesPage ++;

    return this.ejecutarQuery<ReespuestaTopHeadLines>(`/top-headlines?country=ar&page=${ this.headlinesPage }`);

  }

  getTopHeadlinesCategoria( categoria: string ) {

    if ( this.categoriaActual === categoria ) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<ReespuestaTopHeadLines>(`/top-headlines?country=ar&category=${ categoria }&page=${ this.categoriaPage }`);

  }

}
