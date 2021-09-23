import { Component, OnInit } from "@angular/core";
import { AsoInterface } from "./interfaces";

@Component({
    template: `
        <h1>Hailey's Page</h1>
        <p>
            Hello! My name is Hailey Aso and I am super awesome! I am married
            to Ebube, my amazing loving husband, and I would do anything for him.
            I love when he calls me a rockstar and seeing his face light up when I 
            come back home after a long day. I am a get-sh*t-done type of woman who 
            is responsible and loves to maintain her independence. I am very smart, 
            especially street smart, so don't think that you could easily try and trick 
            me!
        </p>
        <p>
            However, deep down I am a sweetheart and I deeply love the people that I 
            care about the most, especially my family. I am an awesome cook, I handle 
            my money well, and although I can stress about responsibilities at times, 
            I still do what I need to do to get the job done! I could admit that I can
            be goofy at times but my sarcasm is A1 (my husband sometimes takes it a 
            little too seriously!). Did I also mention that I am a certified pot-head and
            a good fighter? I'm chill as long as you make sure to not get on my bad side.
        </p>
    `
})
export class HaileyComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {

    }
}