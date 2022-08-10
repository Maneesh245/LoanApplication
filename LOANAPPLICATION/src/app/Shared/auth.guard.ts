import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private route: Router)
  {}
  canActivate()
     {
      if(localStorage.getItem("Role"))
      {
        return true;
      }
        else
        {
          this.route.navigate(['/', 'Login']); 
          return false;
        }

  }
  
}
