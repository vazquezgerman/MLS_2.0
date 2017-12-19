import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatToolbarModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { EstateComponent } from './estate.component'
import { ApiService } from './api.service';
import { EstatesComponent } from './estates.component'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { AuthService } from './auth.service'
import { AuthInterceptor } from './auth.interceptor'

const routers = [
  { path: '', component: HomeComponent },
  { path: 'estate', component: EstateComponent },
  { path: 'estates', component: EstatesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent, EstateComponent, EstatesComponent, HomeComponent, NavComponent, RegisterComponent, LoginComponent
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
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
