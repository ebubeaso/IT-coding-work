import React from "react";
import { EbubeInfo, HaileyInfo, PierreInfo, NyxInfo, 
    JojoInfo, DamianInfo } from "./info";

export const Home: React.FC = () => {
    return (
        <div>
            <h1 className="Title">Aso Family</h1>
            <p className="Paragraph">
                I am glad that you have taken the time to visit the Aso Family.
                My name is Ebube and I created this project using React to take some
                time to appreciate my loved ones. Take some time to browse through
                the site to get to know a little bit more about my family, it is totally
                worth it!
            </p>
        </div>
    )
}
export const Ebube: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Ebube's Page</h1>
        <p className="Paragraph">
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
        <p className="Paragraph">
            My hobbies are very differnt from each other but I really do love them both the same. Dance is my 
            experssion. I use it as an outlet for my emotions. It's really just my free version of therapy. It's 
            also another for of exercise to keep my sexy dad bod up to par. My wife enjoys my manly strength so 
            gotta upkeep it somehow. Tech is what stimulates my craving to always being doing something. Always 
            learning something new, building new computers or websites. It also helps me show off my skills at work.
            Seriously though, I use technology for myself to pursue a fulfilling life.
        </p>
        <h2 className="Subtitle">More info on {EbubeInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {EbubeInfo.fullName}</li>
            <li className="Info">Age: {EbubeInfo.age}</li>
            <li className="Info">Favorite Food: {EbubeInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {EbubeInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {EbubeInfo.likes.map((like) => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {EbubeInfo.dislikes.map((dislike) => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {EbubeInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
            </li>
        </ul>
        </div>
    )
}
export const Hailey: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Hailey's Page</h1>
        <p className="Paragraph">
            Hello! My name is Hailey Aso and I am super awesome! I am married
            to Ebube, my amazing loving husband, and I would do anything for him.
            I love when he calls me a rockstar and seeing his face light up when I 
            come back home after a long day. I am a get-sh*t-done type of woman who 
            is responsible and loves to maintain her independence. I am very smart, 
            especially street smart, so don't think that you could easily try and trick 
            me!
        </p>
        <p className="Paragraph">
            However, deep down I am a sweetheart and I deeply love the people that I 
            care about the most, especially my family. I am an awesome cook, I handle 
            my money well, and although I can stress about responsibilities at times, 
            I still do what I need to do to get the job done! I could admit that I can
            be goofy at times but my sarcasm is A1 (my husband sometimes takes it a 
            little too seriously!). Did I also mention that I am a certified pot-head and
            a good fighter? I'm chill as long as you make sure to not get on my bad side.
        </p>
        <h2 className="Subtitle">More info on {HaileyInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {HaileyInfo.fullName}</li>
            <li className="Info">Age: {HaileyInfo.age}</li>
            <li className="Info">Favorite Food: {HaileyInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {HaileyInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {HaileyInfo.likes.map(like => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {HaileyInfo.dislikes.map(dislike => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {HaileyInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
            </li>
        </ul>
        </div>
    )
}
export const Pierre: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Pierre's Page</h1>
        <p className="Paragraph">
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
        <p className="Paragraph">
            Let me say that I love pastrami! If I get pastrami I would immediately 
            respect you. I like to watch over the Aso Family and ensure that my presence 
            can continue to ground Ebube as he continues to grow, excel and succeed in his
            work, passions and career! I can't wait to what more this young man will 
            achieve in his life.
        </p>
        <h2 className="Subtitle">More info on {PierreInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {PierreInfo.fullName}</li>
            <li className="Info">Age: {PierreInfo.age}</li>
            <li className="Info">Favorite Food: {PierreInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {PierreInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {PierreInfo.likes.map(like => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {PierreInfo.dislikes.map(dislike => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {PierreInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
            </li>
        </ul>
        </div>
    )
}
export const Nyx: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Nyx's Page</h1>
        <p className="Paragraph">
            Hey, my name is Nyx.
            I'm the older one. Sleeping is my main personality trait next to being a 
            big baby. I love being held by my mom. Not so much my dad. He just plays 
            too much. Anyway, I'm tired from typing this so I need a nap. Bye.
        </p>
        <h2 className="Subtitle">More info on {NyxInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {NyxInfo.fullName}</li>
            <li className="Info">Age: {NyxInfo.age}</li>
            <li className="Info">Favorite Food: {NyxInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {NyxInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {NyxInfo.likes.map(like => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {NyxInfo.dislikes.map(dislike => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {NyxInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
            </li>
        </ul>
        </div>
    )
}
export const Jojo: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Jojo's Page</h1>
        <p className="Paragraph">
            Hello! My name is Jojo and I am only writing something here so my dad
            can give me treats for participating. I do not like to listen and I 
            would rather do my own thing. I sometimes like getting on my mom's nerves
            sometimes, play with anything that looks like string and I can be a bit 
            clumsy. There are times where I would sneak up on my sister and attack 
            her for no reason, just to show that I am the better sister. I do not like 
            being carried around -- if you try it you might get struck by my claws.
        </p>
        <h2 className="Subtitle">More info on {JojoInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {JojoInfo.fullName}</li>
            <li className="Info">Age: {JojoInfo.age}</li>
            <li className="Info">Favorite Food: {JojoInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {JojoInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {JojoInfo.likes.map(like => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {JojoInfo.dislikes.map(dislike => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {JojoInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
                <br />
            </li>
        </ul>
        </div>
    )
}
export const Damian: React.FC = () => {
    return (
        <div>
        <h1 className="Title">Damian's Page</h1>
        <p className="Paragraph">
            Salutations! My name is Damian and I am the official pet snake of the 
            Aso family. I am pretty quiet and I like to keep to myself, where I 
            spend most of my days chilling inside of a paper towel roll. When I do 
            come out from my hiding spot, I like to slither around my cage to get
            my blood flowing as well as see if I was gifted any food from my owners. 
            I normally mind my business and I do not like to cause any trouble. However, 
            the cats that live here love to harass me, which I do not like at all!
        </p>
        <h2 className="Subtitle">More info on {DamianInfo.name}</h2>
        <ul className="Mainlist">
            <li className="Info">Name: {DamianInfo.fullName}</li>
            <li className="Info">Age: {DamianInfo.age}</li>
            <li className="Info">Favorite Food: {DamianInfo.favoriteFood}</li>
            <li className="Info">Favorite Color: {DamianInfo.favoriteColor}</li>
            <li className="Info">Likes:
                <ul className="Sublist">
                {DamianInfo.likes.map(like => 
                    <li className="Info">{like}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Dislikes:
                <ul className="Sublist">
                {DamianInfo.dislikes.map(dislike => 
                    <li className="Info">{dislike}</li>)}
                </ul>
                <br />
            </li>
            <li className="Info">Passions:
                <ul className="Sublist">
                {DamianInfo.passions.map(passion => 
                    <li className="Info">{passion}</li>)}
                </ul>
            </li>
        </ul>
        </div>
    )
}