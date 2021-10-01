import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "./app-routing.module";
import { App, GraphComponent } from "./app.component";
@NgModule({
    // declarations (components to use)
    declarations: [App, GraphComponent],
    // imports
    imports: [BrowserModule, Router],
    // providers
    providers: [],
    // bootstrap
    bootstrap: [App]
})
export class AppModule {}