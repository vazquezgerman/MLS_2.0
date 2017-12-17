import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    calle = {}
    
    constructor(private api: ApiService) {}

    post(calle) {
        this.api.postCalle(calle)    
    }

}