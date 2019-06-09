import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import { User } from './user.module';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private_http:HttpClient) { }

}
