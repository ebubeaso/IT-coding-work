import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import {AppModule} from "./app/app.module"
const environment = {production: true};
if (environment.production) {enableProdMode()} // setup production mode
/*
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
*/