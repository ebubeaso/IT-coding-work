import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Pierre's Page</h1>
        <p>
            Hello! My name is Pierre and I like pastrami! I am a polecat and I 
            am Ebube's first pet (even though I am a stuffed animal). Ebube and I 
            go waayyyyyyyy back, back when Ebube was 3 years old. I have been with 
            him ever since. It is interesting to see how much he has grown over the 
            years and how he still wants to keep me around. There are times that I 
            thought he would just throw me away or abandon me but he still allows me 
            to be present in his life. I am pretty down to earth and I spend most of 
            my days sleeping and daydreaming. I am very smart for a stuffed animal, and 
            if I could move I would be able to build and use all types of gadgets and 
            weapons. In addition, I know several forms of martial arts so I can definitely 
            kick ass for sure
        </p>
        <p>
            Let me say that I love pastrami! If I get pastrami I would immediately 
            respect you. I like to watch over the Aso Family and ensure that my presence 
            can continue to ground Ebube as he continues to grow, excel and succeed in his
            work, passions and career! I can't wait to what more this young man will 
            achieve in his life.
        </p>
    `
})
export class PierreComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {

    }
}