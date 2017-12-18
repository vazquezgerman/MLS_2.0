import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'mls',
    templateUrl: './estate.mls.html'
})
export class MlsComponent {

    
    constructor(private api: ApiService) {}

    ngOnInit() {
    }


}