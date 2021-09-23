import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./environment/environment";
import { AppMod } from "./app/app.module";

// set this app up for production
if (environment.production) {
    enableProdMode();
};
// bootstrap this web app to run on browsers dynamically
platformBrowserDynamic().bootstrapModule(AppMod)
    .catch(err => console.error(err)); 