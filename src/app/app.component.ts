import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any;

  constructor(private http: HttpClient) {
    this.getBooks()
  }

  title = 'library';
  getBooks(){
    this.http.get(("http://localhost:8080/allbooks")).subscribe((response) => { this.posts = response; },
      (error) => { console.log(error); })

  }
}
