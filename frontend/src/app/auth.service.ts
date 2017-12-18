import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Console } from '@angular/core/src/console';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    register(credentials) {
        this.http.post<any>('http://localhost:54645/api/Account', credentials).subscribe(res=>{
            localStorage.setItem('token', res)
        });

    }
}