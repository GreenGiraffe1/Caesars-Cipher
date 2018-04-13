# Caesar's Cipher
Caesar's Cipher is a single-page AngularJS web app for creating encrypted
messages to share with friends.

## Setup
To develop this application further on your own follow these steps to set it up
on your local machine:

* Make sure you have Node and NPM installed and updated
* Install Yeoman, Bower, and the Angular generator plugin:
    * ```npm install -g grunt-cli bower yo generator-karma generator-angular```
* Clone the files in this repository to your local machine
* From the directory where you clone the files run ```yo angular [app-name]```
  and give it your own name
* Next you'll be asked a series of questions. Answer as follows:
    * "Would you like to use Gulp (experimental) instead of Grunt?": **No**
    * "Would you like to use Sass (with Compass)?": **No**
    * "Would you like to include Bootstrap?": **Yes**
* Now you'll be given a list of Angular modules and asked to choose which ones
  to include in the project.  Accept the defaults which are pre-checked.
* Finally you'll be asked whether you want to overwrite a several files.
  Reply **No** to each prompt.

At the end of this process you'll be able to run ```grunt serve``` and the
app will be served locally for developmental debugging.  

## Usage
When the page is initially loaded the subject & message areas are encrypted
by default. Clicking on the "Decrypt" button will make them legible.  Replace
the text with a message of your own, choose the character shift, and click
the "Encrypt" button.  You now have a coded message to puzzle your friends.
Enjoy!

## Attribution
This App was built around the [AngularJS](https://angularjs.org/) framework.
[Yeoman](yeoman.io) was used for scaffolding the it, and
[Grunt](https://gruntjs.com/) was used for testing and development chores.
The Grunt plugin
[grunt-build-control](https://github.com/robwierzbowski/grunt-build-control)
was used for minifying and versioning the app.
[Google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) was
used to simplify self-hosting Google Fonts.
This project makes use of the Google Fonts
[Quattrocento](https://fonts.google.com/specimen/Quattrocento) and
[Cormorant SC](https://fonts.google.com/specimen/Cormorant+SC). Both were
obtained under the
[Open Font License](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web).
The tiled parchment map background image was sourced from pixabay.com user [ChadoNihi](https://pixabay.com/en/users/ChadoNihi-634818/).  It was obtained
under the CC0 license, and can be found
[here](https://pixabay.com/en/map-background-parchment-seamless-574792/).

## License:
**Caesar's Cipher** is an open source project created under the
[MIT License](https://github.com/GreenGiraffe1/Item-Catalog/blob/master/LICENSE).
