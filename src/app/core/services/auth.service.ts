import { Injectable } from '@angular/core';

import { HttpService, Answer } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

interface LoginAnswer extends Answer {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public get InitiateObservable(): Observable<boolean> {
    return this.initiateSubject.asObservable();
  }

  private accessToken: string;

  private initiateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(private http: HttpService) {
    this.whoAmI(() => this.initiateSubject.next(true));
  }

  public hello(): void {
    this.http.get('http://localhost:8000/').then(answer => {
      console.log('answer', answer);
      console.log('document.cookie', document.cookie);
    });
  }

  public login(credentials: { username: string; password: string }): void {
    this.http.post<LoginAnswer>('http://localhost:8000/login', credentials).then(answer => {
      console.log('answer', answer);
      if (answer && answer.success) {
        this.accessToken = answer.token;
      }
      console.log('document.cookies', document.cookie);
    });
  }

  public whoAmI(callback?: () => void): void {
    this.http
      .post<LoginAnswer>('http://localhost:8000/who-am-i')
      .then(answer => {
        console.log('answer', answer);
        if (answer && answer.success) {
          this.accessToken = answer.token;
        }
      })
      .then(() => (callback ? callback() : undefined));
  }

  public logout(): void {
    this.http.post<Answer>('http://localhost:8000/logout').then(answer => {
      console.log('logout', answer);
      if (answer && answer.success) {
        this.accessToken = null;
      }
    });
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}
