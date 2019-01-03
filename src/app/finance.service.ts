import { Injectable } from '@angular/core';
import { Summary } from './summary';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from './album';

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    getSummary(): Observable<Summary> {
        return this.http.get<Summary>('http://localhost:8080/finance');
    }
    getAlbums(): Observable<Array<Album>> {
        return this.http.get<Array<Album>>('http://localhost:8080/albums');
    }

    constructor(private http: HttpClient) { }
}
