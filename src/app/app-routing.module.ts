import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SomeComponent } from "./some.component";

const routes: Routes = [{ path: "some", component: SomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [SomeComponent],
  exports: [RouterModule, SomeComponent]
})
export class AppRoutingModule {}
