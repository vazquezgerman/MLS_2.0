import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Console } from '@angular/core/src/console';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

    private selectedEstate = new Subject<any>();
    EstateSelected =  this.selectedEstate.asObservable();

    constructor(private http: HttpClient) { }

    postEstate(estate) {
        this.http.post('http://localhost:54645/api/Estate', estate).subscribe(res => {
            console.log(res)
        })
    }

    putEstate(estate)
    {
        this.http.put(`http://localhost:54645/api/Estate/${estate.id}`, estate).subscribe(res => {
            console.log(res)
        })
    }

    selectEstate(estate)
    {
        this.selectedEstate.next(estate);
    }

    getEstates() {
        return this.http.get('http://localhost:54645/api/Estate');
    }
}