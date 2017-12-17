import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'estates',
    templateUrl: './estates.component.html'
})
export class EstatesComponent {

    estate = {}

    estates

    constructor(private api: ApiService) { }

    ngOnInit() {

        this.api.getEstates().subscribe(res => {
            this.estates = res
        })
    }

    post(estate) {
        this.api.postEstate(estate)
    }
}