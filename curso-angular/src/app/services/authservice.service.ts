import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  public loginUser(userData:any){

    userData.forEach((value:any,key:any) => {
      console.log(key+" "+value)
    });

  }
}
