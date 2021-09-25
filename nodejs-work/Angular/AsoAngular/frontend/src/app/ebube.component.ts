import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Ebube's Page</h1>
        <p>
            My name is Ebube Aso. I am twenty-two years old and I'm currently living my dream life. 
            I'm married to my amazing wife, Hailey. She's a real sweetheart and loves me unconditionally. 
            She supports me in all of my projects, even when they take up most of my time. However, 
            I always make time for her, letting her know I love her, or just cuddling on her bad days. 
            She's a true rockstar! I also have two adorable yet, very differnt cats, Nyx and Jojo. Nyx 
            is definetly more of a mommy's girl. She stills shows me love though. Jojo though, definetly 
            a daddy's girl. No doubt what so ever, they're basically my children at this point. Currently, 
            I'm a DevOps Engineer, aka my dream job. I feel super accomplished to be in that position at 
            my age, but the best part is I did it in seven months. From tech support to DevOps in seven months! 
            I am the only one to do that! Which is pretty awesome. Most certainly not something many people can 
            claim. It's a unique situation for a pretty unique indvidual.
        </p>
        <p>
            My hobbies are very differnt from each other but I really do love them both the same. Dance is my 
            experssion. I use it as an outlet for my emotions. It's really just my free version of therapy. It's 
            also another for of exercise to keep my sexy dad bod up to par. My wife enjoys my manly strength so 
            gotta upkeep it somehow. Tech is what stimulates my craving to always being doing something. Always 
            learning something new, building new computers or websites. It also helps me show off my skills at work.
            Seriously though, I use technology for myself to pursue a fulfilling life.
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