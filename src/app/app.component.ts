import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface UserResponse{
  login: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simple';

  constructor (private http: HttpClient)
  {

  }
  ngOnInit(): void{
    this.http.get<UserResponse>('https://api.github.com/users/KamalAhmedGit').subscribe(
      data =>{
      console.log("User Login: " + data.login);
    }
    )

  const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
    title: 'Test',
    body: 'Testing',
    userId: 1
  })
  .subscribe(
    res => {
      console.log(res);
    }
  )
  }
}
