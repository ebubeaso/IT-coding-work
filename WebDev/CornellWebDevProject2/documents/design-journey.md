# Project 3 - Design Journey

**For each milestone, complete only the sections that are labeled with that milestone.**

Be clear and concise in your writing. Bullets points are acceptable.

## Milestone 1

## Target Audience (Milestone 1)

[My target audience are other dancers in their teenage to young adult years as well as people who are into dancing.]


## Planning & Designing User Input (Milestone 1)

[Determine what purpose the form for your site will accomplish, where it will go (physical placement on page and the HTML file name), and what form elements you plan on using.]

The purpose of the form that my site will accomplish is being able to have my audience connect with me. It will allow users to send me their name, their email, leave a message for me to read, and decide whether or not they would like to receive weekly tips or inspiration to become better people. Where I will place the form will be in the contact page of my site. The form elements that I will be using will be using is the text form, email form, the textarea form, and the radio button form.

[Include sketches on your form below. Include sketches of your mobile and desktop versions. Image must show in Atom's Markdown Preview, otherwise 0 points for sketch. (Remember your relative URL should be case sensitive.)]

Sketches:

![Mobile sketch](/sketches/sketch1.JPG)
![Desktop Sketch](/sketches/sketch2.JPG)

[What submission method will your form use? GET or POST. Explain your reasoning.]

I will use POST because the information is supposed to be sent only one time and it will be better to keep it confidential.

## Determine the Form Validation Criteria (Milestone 1)

[For each control in your form, specify the validation criteria and your reasoning behind the criteria.]

Name; Control: input id (<input id="yourName" name="yourName" placeholder="Enter
Your Name"/>); required; constraints: none; Reason: The user's name is unconstrained.

Email; Control: email (input type="email"); required; Constraint: A valid email
must be entered; Reason: A valid email will make it possible to connect with users.

Age; Control: drop-down list (select id="userAge" name="userAge"); optional;
Constraint: none; Reason: There is no need for a constraint here since there are options.

Dance Experience: Control: number (input type="number"); optional; Constraint: has to
be a number greater or equal to zero; Reason: It is good information to know How
experienced my users are, and it is not possible to have negative years of experience.

Message: Control: textarea (<textarea name="message" cols="30" rows="5">Your Message</textarea>);
optional; Constraint: none; Reason: Leaving a message is completely optional and up to the
user to decide.

Option for updates: Control: radio (<input type="radio">); required; Constraint: user must
pick yes or no; Reason: The user must choose either yes or no to receiving messages so I will
know who is interested in receiving messages.

## Design Form Feedback (Milestone 1)

[Include sketches of your mobile and desktop feedback.]

![Desktop sketch](/sketches/sketch3.JPG)
![Mobile Sketch](/sketches/sketch4.JPG)

##  Plan Validation Pseudocode (Milestone 1)

[Write your form validation pseudocode here.]

When user submits form:
  if name is empty:
    show feedback for the "Name" input that says "Please enter your name."
    do not submit form
  otherwise:
    Show no feedback for the "Name" input

  if email is empty or email is not valid:
    show feedback for the "Email" input that says "Please enter a valid email address."
    do not submit Form
  Otherwise:
    Show no feedback for the "Email" input

  if age is left blank:
    show feedback for the "Age" input that says "Please enter your age."
    do not submit form.
  Otherwise:
    Show no feedback for the "Age" input

  if radio choice is left blank:
    show feedback for the "Radio" input that says "Please choose an option."
    do not submit form
  Otherwise:
    show no feedback for the "Radio/Option" input
    do not submit form

  If no errors:
    submit form

## Additional Information (Milestone 1)

[(optional) Include any additional information, justifications, or comments we should be aware of.]

I added divs into the navigation bar to help the navigation bar be more responsive.

## Final Submission

### Task Planning (Final Submission)

[Plan out your one task for the Final Submission here before doing your user testing.]

Task: Register to receive weekly inspirational messages using the email superstar85@aol.com

### Participant 1 (Final Submission)

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?

This participant's name is Jalil and he is a hip-hop dancer that is part of Cornell's hip-hop dance team BreakFree. He is a sophomore in CALS and he has been dancing for the past couple of years and he likes to receive positive feedback from other dancers to keep him going.

2. Does your participant belong to your target audience of the site? (Yes / No)

Yes, he does belong to my target audience.

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]


### User Testing for Participant 1 (Final Submission)
[Report the results for your user's performance on each of your tasks. You should **describe the task** you ask the user to complete, explain **what the user did**, describe the user's **reaction/feedback** to the design, **reflect on the user's performance**, determine what **re-design choices** you will make. You can also add any additional comments in the **memo** field.]

Format:
- Task #1
  - **Task Description** (What was the task for this user?)
    - [Register to receive weekly inspirational messages using the email superstar85@aol.com]
  - **How did the user do? Did that meet your expectation?**
    - [You should fill this out]
    - [Jalil did fairly well with the task. Before doing the task, he wanted to see some of my videos on my page, which he enjoyed watching. He made sure to read and fill out the required information before hitting the Submit button. He made sure to choose the option of receiving weekly messages since he wanted to receive those. In addition, he wrote a small message saying: "Good work on your videos bro, keep dancing!" which I liked to see.]
  - **User’s reaction / feedback to the design** (e.g., specific problems or issues found in the tasks)
    - [Jalil found the form straightforward to him for the most part. He took a wild guess and figured to take a look at the Contact page Plus he liked how I structured the form on the contact page.]
  - **Your reflections about the user’s performance to the task**
    - [He did better than I expected with doing the task. I thought he would take a moment to look through all the webpages first to see where to register but went straight to the contact page.]
  - **Re-design choices**
    - [None needed]
  - **Memo** (Justify your decisions; additional notes.)
    - [I feel like the design is pretty good.]

[Include evidence that you conducted user testing.]

![Form screenshot](/sketches/form_screenshot1.jpg)
![Form submitted screenshot](/sketches/form_screenshot2.jpg)

### Participant 2 (Final Submission)

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?

My second participant's name is Samuel. He occasionally goes to Cornell's Absolute Zero Break Dance practice sessions when he is not overwhelmed with work. He has been breaking/bboying for 4 years and it is favorite style of dancing. He also likes watching other different dance styles to help him continue to grow as a dancer.

2. Does your participant belong to your target audience of the site? (Yes / No)

Yes

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]


### User Testing for Participant 2 (Final Submission)
[Report the results for your user's performance on each of your tasks. You should **describe the task** you ask the user to complete, explain **what the user did**, describe the user's **reaction/feedback** to the design, **reflect on the user's performance**, determine what **re-design choices** you will make. You can also add any additional comments in the **memo** field.]

Format:
- Task #1
  - **Task Description** (What was the task for this user?)
    - [Register to receive weekly inspirational messages using the email superstar85@aol.com]
  - **How did the user do? Did that meet your expectation?**
    - [You should fill this out]
    - [It took him a little longer than Jalil to find out where the form is, but not too long. He first looked on the main page, and then spent some time on the content page to watch some of my videos before looking to see if there was a form to fill out. Then, he went to the Contact page where he found the form.]
  - **User’s reaction / feedback to the design** (e.g., specific problems or issues found in the tasks)
    - [Samuel said that he likes the style of my website and he can see why the form to register will be in the contact page instead of anywhere else. However, he did say that the font sizes could be a little bigger to help make it more readable. He forgot his glasses so he had to squint a bit when he had to read the feedback message on entering his age and when he forgot to choose an option of receiving weekly messages or not.]
  - **Your reflections about the user’s performance to the task**
    - [It appeared that Samuel needed some time to find out the form to register. I could tell that he was a bit curious about what was on my website and was in no hurry to complete the given task. Overall, he still did a pretty good job.]
  - **Re-design choices**
    - [You should fill this out]
    I plan on making the font sizes for the feedback messages bigger.
  - **Memo** (Justify your decisions; additional notes.)
    - [You should fill this out]
    Making the font bigger will make it a little easier to read for other people.
[Include evidence that you conducted user testing.]

![Form screenshot](/sketches/form_screenshot3.jpg)
![Form submitted screenshot](/sketches/form_screenshot4.jpg)


### Additional Users...

[If you conduct more user tests of your website, include your tests here. You are not *required* to conduct these additional tests, but you might find them helpful for refining your website.]


### Additional Design Justifications (Final Submission)

[If you feel like you haven’t fully explained your design choices in the final submission, or you want to explain some functions in your site (e.g., if you feel like you make a special design choice which might not meet the final requirement), you can use the additional design justifications to justify your design choices. Remember, this is place for you to justify your design choices which you haven’t covered in the design journey. Use it wisely. However, you don’t need to fill out this section if you think all design choices have been well explained in the final submission design journey.]
