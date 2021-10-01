// This is the page for the client side routing
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from "./app.component";
//setup the router
const routes: Routes = [
    {path: "", component: GraphComponent}
]
//ng module for routing
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
// export the class
export class Router {}