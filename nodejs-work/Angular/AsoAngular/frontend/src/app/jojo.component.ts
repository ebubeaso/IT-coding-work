import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Jojo's Page</h1>
        <p>
            Hello! My name is Jojo and I am only writing something here so my dad
            can give me treats for participating. I do not like to listen and I 
            would rather do my own thing. I sometimes like getting on my mom's nerves
            sometimes, play with anything that looks like string and I can be a bit 
            clumsy. There are times where I would sneak up on my sister and attack 
            her for no reason, just to show that I am the better sister. I do not like 
            being carried around -- if you try it you might get struck by my claws.
        </p>
    `
})
export class JojoComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}