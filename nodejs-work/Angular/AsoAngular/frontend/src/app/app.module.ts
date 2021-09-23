import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRouter } from "./app-routing.module";
// add additional components (routing, page components below)
import { HomeComponent } from "./main.component";
import { EbubeComponent } from "./ebube.component";
import { HaileyComponent } from "./hailey.component";
import { PierreComponent } from "./pierre.component";
import { NyxComponent } from "./nyx.component";
import { JojoComponent } from "./jojo.component";
import { DamianComponent } from "./damian.component";
//setup NgModule
@NgModule({
    // declarations (all of your components)
    declarations: [
        AppComponent, HomeComponent, EbubeComponent, HaileyComponent,
        PierreComponent, NyxComponent, JojoComponent, DamianComponent
    ],
    // imports (components to import)
    imports: [
        BrowserModule, AppRouter
    ],
    // providers
    providers: [],
    // bootstrap (the root component)
    bootstrap: [AppComponent]
})
// export it as AppMod
export class AppMod {}