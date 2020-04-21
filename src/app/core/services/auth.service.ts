import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor() {}

  public isAuthenticated(): boolean {
    return true;
  }
}
