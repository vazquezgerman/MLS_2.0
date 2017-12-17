import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'

@Component({
    selector: 'nav',
    template: `<mat-toolbar>
        <button mat-button routerLink="/">MLS</button>
        <button mat-button routerLink="/calle">Carga de Inmuebles</button>
        <button mat-button routerLink="/calles">Mis Inmuebles</button>
        </mat-toolbar>`
})
export class NavComponent {
}
