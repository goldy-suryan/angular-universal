import { Component, OnInit } from "@angular/core";
import { Service, ITodo } from "@service/testing.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-universal";
  data: ITodo[];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getTodos().subscribe(data => (this.data = data));
  }
}
