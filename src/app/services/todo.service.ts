import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  constructor(private http:HttpClient) { }

  getInfo(){
    let url = "https://jsonplaceholder.typicode.com/todos/";

    //TODO: returns only de array with the data and implements catch 
    // for bad request.
    return this.http.get(url)
  }
}
