import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Console } from '@angular/core/src/console';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    postCalle(calle) {
        this.http.post('http://localhost:54645/api/Property', calle).subscribe(res => {
            console.log(res)
        })
    }
}