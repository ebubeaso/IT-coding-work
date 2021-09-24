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
        <h2>More Info on Nyx</h2>
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
export class NyxComponent implements OnInit {
    moreInfo: AsoInterface = {
        fullName: "Nyx Aso",
        age: 1,
        favColor: "purple",
        favFood: "Ham",
        likes: ["Sleeping", "Being held like a baby", "Spending time with my cat parents", 
        "My family", "FOOOOOD", "Peace and quiet"],
        dislikes: ["Fighting", "Loud noises", "Being disturbed from sleep", "Being ignored", 
        "My parents refusing to carry me", "Taking a bath", "Playing chase with dad", 
        "Doing the cat dance"],
        passions: ["Sleeping"]
    }
    constructor() {}
    ngOnInit(): void {}
}