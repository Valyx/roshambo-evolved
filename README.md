# Roshambo - evolved

Roshambo - evolved is a website hosting a more challenging version of the famous game "Rock-Paper-Scissors". The website also hopes to show the amazing things that can be created with tolls such as HTML,CSS and JavaScript. 

![Responsice Mockup](images/roshambo_evolved_mockup.png)

### Existing Features

- __Roshambo-evolved and Heading__

  - Featured at the top of the page, the Roshambo-evolved logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

![Logo](images/logo.png)

- __Information area__

  - Featured beneath the heading a button is displayed.Uppon clicking on it a modal box will open up showing some information about the game and it's rules.While the box is open it will cover the entire screen. At the bottom of the box there's another button that allows the user to close the box and return to the game's area.

![Logo](images/modal_box.png)

- __The Game Area__

  - This section will allow the user to play the  game. The user will be able to easily see icons for each one of the 5 different moves of the game.
  - The user will be able to select the the move they want to play for the current round by clicking on the different icons.
  - The two areas on the sides of the players (left for human player, right for the computer), will display the current move each of the players have selected for the round. It starts with a "?" at the first round and then it switches every round depending on the selected move

![Game](images/game_area.png)

- __The Score Area__

  - This section will allow the user to see exactly how many points he has confronted to the points the computer has
  - Thre's also a turn counter that shows in how many turns the game will end

![score](images/score.png)

### Features Left to Implement

- Improvement of the gaming area in order to make it more visually appealing
- Add a function that delays the display o the computer's choice.

## Testing 

The webisite deployment has been tested on the following browsers:
- Chrome 
- Microsoft Edge
- Avast Secure Browser

On all the above browsers no problems were encountered. Also during the responsive testing for media queries < 360px the waebsite was displayed as intended (diferently from the result i've keep getting from the "i'm responsive" website)
![responsive](images/roshambo_evolved_mockup_360.png)

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvalyx.github.io%2Froshambo-evolved%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalyx.github.io%2Froshambo-evolved%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=it)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 10 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0,5.
      - Largest function has 42 statements in it, while the median is 4.
      - The most complex function has a cyclomatic complexity value of 17 while the median is 1.

### Unfixed Bugs

No (unsolved) bugs are to be reported (not that i'm aware of,at least )

## Deployment

- The site was deployed to GitHub pages.

The live link can be found here - https://valyx.github.io/roshambo-evolved/
The link for my repository can be found here - https://github.com/Valyx/roshambo-evolved


## Credits 

### Content 

- The text for the info and rules was taken from: https://www.jstor.org/stable/10.4169/college.math.j.46.4.270
- Instructions on how to:
       - use flexboxes: https://www.youtube.com/watch?v=vQAvjof1oe4,https://www.youtube.com/watch?v=9e-lWQdO-DA
       - modal box: https://www.youtube.com/watch?v=XH5OW46yO8I
       - game general design and build up tutorial: https://www.youtube.com/watch?v=RwFeg0cEZvQ
       - most of the javascript basiscs/syntax learned from: https://www.youtube.com/watch?v=jS4aFq5-91M,https://www.youtube.com/watch?v=PkZNo7MFNFg,https://www.youtube.com/watch?v=h33Srr5J9nY
       - more information about single elements aquired from the following websites: https://www.w3schools.com/js/default.asp, https://stackoverflow.com/questions/10476632/how-to-scroll-the-page-when-a-modal-dialog-is-longer-than-the-screen, 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

No media from external sources were used.

