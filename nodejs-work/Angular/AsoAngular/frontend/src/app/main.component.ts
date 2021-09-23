import { Component, OnInit } from "@angular/core";
// setup the component
@Component({
    // no selector since this will be routed as the homepage
    template:`
        <h1>Welcome to the Aso Family!!</h1>
        <p>
            I am glad that you have taken the time to visit the Aso Family.
            My name is Ebube and I created this Angular project to take the
            time to appreciate my loved ones. Take some time to browse through
            the site to get to know a little bit more about my family!
        </p>
    `,
    styles: []
})
export class HomeComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}