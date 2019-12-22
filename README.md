# Rock Paper Scissors Project
JavaScript Project from The Odin Project (https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors?ref=lnav). 

## Project Reflections
First, I had to create a rock, paper, scissors game that was only played in the console. This project code can be viewed in the "index-original.html" file. After I created this game, I was not satisfied with how often the computer choose "rock", compared to "paper" or "scissors". I noticed that it would often choose "rock", so I recorded the results of 50 random choices. My hypothesis was correct - 25 of them were "rock", 15 were "paper" and 10 were "scissors". Therefore, I choose to re-work this function using the modulo operation, which created a more randomized output. Using the new function, I recorded 50 random choices and each output happened between 15-17 times.  

I decided to take my time on this project and go above the official requirements, because I wanted to develop a user-friendly experience. The biggest struggle that I had, was figuring out how to remove a css transition that I added for a 'click' event. I did some online research that over-complicated it. However, once I stopped searching online for ideas and looked closely at how & when I could remove the css class, I was able to figure it out. I added an event listener for 'transitionend', which would then remove the css class.


