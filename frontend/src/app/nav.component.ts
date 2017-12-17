import { Component } from '@angular/core';
import { EstateComponent } from './estate.component'


@Component({
    selector: 'nav',
    template: `<mat-toolbar>
        <button mat-button routerLink="/">MLS</button>
        <button mat-button routerLink="/estate">Carga de Inmuebles</button>
        <button mat-button routerLink="/estates">Mis Inmuebles</button>
        </mat-toolbar>`
})
export class NavComponent {
}
