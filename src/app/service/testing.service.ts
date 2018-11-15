import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class Service {
  private url = "https://jsonplaceholder.typicode.com/todos/";
  private testingUri = "http://localhost:4000/some";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.url}`);
  }

  getData() {
    return this.http.get(`${this.testingUri}`);
  }
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
