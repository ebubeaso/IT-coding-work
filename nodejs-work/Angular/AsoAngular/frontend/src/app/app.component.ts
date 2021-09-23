// import component
import { Component } from "@angular/core";

@Component({
    // selector
    selector: "app-root", 
    // template (This will be for our navbar; router-outlet for routing)
    template: `
        <header>
        <nav>
            <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/ebube">{{ebube}}</a></li>
            <li><a routerLink="/hailey">{{hailey}}</a></li>
            <li><a routerLink="/pierre">{{pierre}}</a></li>
            <li><a routerLink="/nyx">{{nyx}}</a></li>
            <li><a routerLink="/jojo">{{jojo}}</a></li>
            <li><a routerLink="/damian">{{damian}}</a></li>
            </ul>
        </nav>
        </header>
        <router-outlet></router-outlet>
    `,
    // styles (leave blank for styles.css)
    styles: [],
})
export class AppComponent {
    // extra code goes in here (for manipulating the dom)
    ebube = 'Ebube';
    hailey = 'Hailey';
    nyx = 'Nyx';
    jojo = 'Jojo';
    pierre = 'Pierre';
    damian = 'Damian';
};