import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./main.component";
import { EbubeComponent } from "./ebube.component";
import { HaileyComponent } from "./hailey.component";
import { PierreComponent } from "./pierre.component";
import { NyxComponent } from "./nyx.component";
import { JojoComponent } from "./jojo.component";
import { DamianComponent } from "./damian.component";
// import your other page components
const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "ebube", component: EbubeComponent},
    {path: "hailey", component: HaileyComponent},
    {path: "pierre", component: PierreComponent},
    {path: "nyx", component: NyxComponent},
    {path: "jojo", component: JojoComponent},
    {path: "damian", component: DamianComponent}
]
// setup the ng module for routing
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouter { }