import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    get isAuthenticated() {
        return !!localStorage.getItem('token')
    }

    register(credentials) {
        this.http.post<any>('http://localhost:54645/api/account', credentials).subscribe(res => {
            this.authenticate(res)
        });

    }

    login(credentials) {
        this.http.post<any>('http://localhost:54645/api/login', credentials).subscribe(res => {
            this.authenticate(res)
        });

    }

    authenticate(res) {
        localStorage.setItem('token', res)

        this.router.navigate(['/'])
    }

    logout(){
        localStorage.removeItem('token')
    }
}