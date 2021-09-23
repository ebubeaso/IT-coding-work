import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Nyx's Page</h1>
        <p>
            Hey, my name is Nyx.
            I'm the older one. Sleeping is my main personality trait next to being a 
            big baby. I love being held by my mom. Not so much my dad. He just plays 
            too much. Anyway, I'm tired from typing this so I need a nap. Bye.
        </p>
    `
})
export class NyxComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}