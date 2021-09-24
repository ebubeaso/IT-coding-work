import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Ebube's Page</h1>
        <p>
            Hello! My name is Ebube Aso and I am a tech-nerd dancer! My two favorite 
            hobbies are dancing and learning/playing with different technologies. I really 
            love to learn and I am a student at heart. I like to spend my days either 
            smoothing out my grooves and flow to music or configuring cloud environments or 
            creating interesting web applications in my home lab. Did I mention that I have 
            a home lab? Yes, it has taken me months to put it together and I am really proud 
            of it! If I had the choice, I would LOOOOVE to have my own data center one day.
        </p>
        <p>
            I am happily married to my wonderful and lovely wife Hailey. I think that she
            is an amazing woman and I love her so much, even on days when it is hard for 
            her to love herself. I would do anything for my sweetheart and my two rascal 
            cats. I am a family man who has a lot of love and care for his family. In addition, 
            I know how to speak French and I love being able to solve problems, especially with 
            technology (there are times where I have to remind myself to get off the computer 
            since I am so caught up in what I am doing). Overall, I am an ambitious, creative, goofy,
            nerdy and an overall genuine dude who takes a lot of pride in his work and passions!
        </p>
        <h2>More Info on Ebube</h2>
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
    `,
})
export class EbubeComponent implements OnInit {
    // use the aso interface here
    moreInfo: AsoInterface = {
        fullName: "Ebube Aso", 
        age: 22, favColor: "Silver",
        favFood: "Chinese Food", 
        likes: ["His wife", "Computers", "Dance", "His cats (Nyx and Jojo)",
        "Music", "Coding", "Freestyle dancing", "Information Technology (IT)", 
        "Making projects", "Reading", "His Home Lab", "Learning new things",
        "Aromatherapy"], 
        dislikes: ["Ignorant people", "Rude people",
        "When people try to mess with his money", "When someone disrespects his work",
        "When someone disrespects his wife", "Worrying", "Being ignored"],
        passions: ["Dancing", "Computers", "Tech Projects", "Learning"]
    }
    constructor() {}
    ngOnInit(): void {

    }
}