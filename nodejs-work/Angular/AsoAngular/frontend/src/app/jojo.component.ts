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
        <h2>More Info on Jojo</h2>
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
export class JojoComponent implements OnInit {
    moreInfo: AsoInterface = {
        fullName: "Jojo Aso",
        age: 1,
        favColor: "blue",
        favFood: "Temptations Cat treats",
        likes: ["Playing with string", "Chasing after whatever my dad throws", "Running",
        "Playfighting with my older sister", "Hiding", "Eating", "Exploring", "Sleeping",
        "Getting my dad's attention", "Cat treats"],
        dislikes: ["Being carried for a long time", "Taking a bath", "The sound of plastic bags", 
        "Guests that come into the house", "Being caught by either or my parents",
        "Not getting any treats"],
        passions: ["Playing around with random things and my family"]
    }
    constructor() {}
    ngOnInit(): void {}
}