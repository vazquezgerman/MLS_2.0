import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  
import { MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatToolbarModule } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { EstateComponent } from './estate.component'
import { ApiService } from './api.service';
import { EstatesComponent } from './estates.component'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'

const routers = [
  { path: '', component: HomeComponent },
  { path: 'estate', component: EstateComponent },
  { path: 'estates', component: EstatesComponent },
]

@NgModule({
  declarations: [
    AppComponent, EstateComponent, EstatesComponent, HomeComponent, NavComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(routers),
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCardModule,    
    FormsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
