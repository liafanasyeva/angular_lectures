import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface DeactivationGuarded {
  //canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

export class CloseEditFormGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: DeactivationGuarded): Observable<boolean> |  Promise<boolean> |  boolean  {
    //return component.canDeactivate ? component.canDeactivate() : true;
    return true;
  }
  
}
