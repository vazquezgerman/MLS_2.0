import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Console } from '@angular/core/src/console';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

    private selectedProperty = new Subject<any>();
    propertySelected =  this.selectedProperty.asObservable();

    constructor(private http: HttpClient) { }

    postCalle(calle) {
        this.http.post('http://localhost:54645/api/Property', calle).subscribe(res => {
            console.log(res)
        })
    }

    putCalle(calle)
    {
        this.http.put(`http://localhost:54645/api/Property/${calle.id}`, calle).subscribe(res => {
            console.log(res)
        })
    }

    selectProperty(calle)
    {
        this.selectedProperty.next(calle);
    }

    getCalles() {
        return this.http.get('http://localhost:54645/api/Property');
    }
}