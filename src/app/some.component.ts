import { Component, OnInit } from "@angular/core";
import { Service } from "@service/testing.service";

@Component({
  template: `
    <p>Some</p>
    <p>{{ data | json }}</p>
  `
})
export class SomeComponent implements OnInit {
  data;
  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe(data => (this.data = data));
  }
}
