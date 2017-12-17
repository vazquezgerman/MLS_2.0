import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    calle = {}

    calles

    constructor(private api: ApiService) { }

    ngOnInit() {

        this.api.getCalles().subscribe(res => {
            this.calles = res
        })

    }


    post(calle) {
        this.api.postCalle(calle)
    }

}