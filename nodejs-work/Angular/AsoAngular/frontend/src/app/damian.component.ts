import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Damian's Page</h1>
        <p>
            Salutations! My name is Damian and I am the official pet snake of the 
            Aso family. I am pretty quiet and I like to keep to myself, where I 
            spend most of my days chilling inside of a paper towel roll. When I do 
            come out from my hiding spot, I like to slither around my cage to get
            my blood flowing as well as see if I was gifted any food from my owners. 
            I normally mind my business and I do not like to cause any trouble. However, 
            the cats that live here love to harass me, which I do not like at all!
        </p>
    `
})
export class DamianComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}