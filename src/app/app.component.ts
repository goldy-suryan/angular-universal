import { Component, OnInit } from "@angular/core";
import { Service, ITodo } from "@service/testing.service";
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-universal";
  data: ITodo[];

  constructor(private service: Service, private update: SwUpdate) {
    if(this.update.isEnabled) {
      this.update.available.subscribe(() => {
        if(confirm('An update is available')) {
          window.location.reload();
        }
      })
    }
  }

  ngOnInit() {
    this.service.getTodos().subscribe(data => (this.data = data));
  }
}
