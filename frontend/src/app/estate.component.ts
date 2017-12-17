import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'estate',
    templateUrl: './estate.component.html'
})
export class EstateComponent {

    estate = {}
    
    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.EstateSelected.subscribe(estate => this.estate = estate)
    }

    post(estate) {
        this.api.postEstate(estate)    
    }

}
