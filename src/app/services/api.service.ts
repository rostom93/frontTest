import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl = "https://gorest.co.in/public-api/users"
  constructor(private httpClient : HttpClient) { 

  }
  getAllUsers(): Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }


}
