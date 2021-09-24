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
        <h2>More Info on Damian</h2>
        <ul class="main">
            <li class="info">Full Name: {{moreInfo.fullName | uppercase}}</li>
            <li class="info">Age: {{moreInfo.age}}</li>
            <li class="info">Favorite Color: {{moreInfo.favColor | lowercase}}</li>
            <li class="info">Favorite Food: {{moreInfo.favFood}}</li>
            <li class="info">Interests:
                <ul class="sublist">
                    <li *ngFor="let like of moreInfo.likes">{{like}}</li>
                </ul>
            </li>
            <br/>
            <li class="info">Dislikes:
                <ul class="sublist">
                    <li *ngFor="let dislike of moreInfo.dislikes">{{dislike}}</li>
                </ul>
            </li>
            <br/>
            <li class="info">My Passions:
                <ul class="sublist">
                    <li *ngFor="let passion of moreInfo.passions">{{passion}}</li>
                </ul>
            </li>
        </ul>
    `
})
export class DamianComponent implements OnInit {
    moreInfo: AsoInterface = {
        fullName: "Damian Aso",
        age: 1,
        favColor: "I have no favorite color",
        favFood: "Mice",
        likes: ["Being in the sun", "slithering around my cage", "Getting fed", 
        "Being left alone", "Sleeping"],
        dislikes: ["Being harassed by one of the cats", "Tapping on my tank"],
        passions: ["I do not have any passions"]
    }
    constructor() {}
    ngOnInit(): void {}
}