import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world!</h1>
    @if (response) {
      <div>API Response: {{ response }}</div>
    }
    @if (error) {
      <div style="color: red;"><i>{{ error }}</i></div>
    }
  `,
  styleUrls: ['./app.css'],
})

export class App implements OnInit {
  title = 'angular hello world';

  response: string | null = null;
  error: string | null = null;

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${this.API_URL}/`, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('RESPONSE = ', response);
        this.response = response;
        this.error = null;
      },
      error: (err) => {
        console.log('ERROR = ', err);
        this.error = err.message || 'API error';
        this.response = null;
      }
    });
  }
}
