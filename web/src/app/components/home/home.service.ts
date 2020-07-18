import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpClientModule } from '@angular/common/http';

@Injectable()
export class HomeService{
    
    
    constructor(private _http:HttpClient ){}
     getAllUserData():any{

        return this._http.get("http://localhost:8282/alluser"); // get user data from API
    }
     postWholeUser(data):any{
      return this._http.post("http://localhost:8282/save/wholeemp",data); // save a user
        
  }
   postLoginData(data):any{
            return this._http.post("http://localhost:8282/logincheck",data); // login check
        }

}
