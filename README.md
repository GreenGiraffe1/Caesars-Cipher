# Caesar's Cipher
Caesar's Cipher is a single-page Angular web app for creating encrypted
messages to share with friends.

## Setup
Install Yeoman, npm, bower, nodejs. 

clone files to local machine.

Run ```yo angular [appname]```.  Answer the questions:
* No
* No
* Yes

For Modules to include, keep the defaults

When prompted whether you want to overwrite duplicate files answer **NO** to
each prompt.

At the end of this process you'll be able to run ```grunt serve``` and the
app will be served locally for development debugging.  

For grunt fuctions refer to its [documentation](https://gruntjs.com/).


## Usage
When the page is initially loaded the subject & message areas are encrypted
by default. Clicking on the "Decrypt" button will make them legible.  Replace
the text with a message of your own, choose the character shift, and click
the "Encrypt" button.  You now have a coded message to puzzle your friends.
Enjoy!

## Attribution
[Yeoman](yeoman.io) was used for scaffolding the App, and
[Grunt](https://gruntjs.com/) was used for testing and development chores.
The Grunt plugin
[grunt-build-control](https://github.com/robwierzbowski/grunt-build-control)
was used for minifying and versioning the app.
The tiled parchment map background image was sourced from pixabay.com user [ChadoNihi](https://pixabay.com/en/users/ChadoNihi-634818/).  It was obtained
under the CC0 license, and can be found
[here](https://pixabay.com/en/map-background-parchment-seamless-574792/).

* Add angular attribution

## License:
**Caesar's Cipher** is an open source project created under the
[MIT License](https://github.com/GreenGiraffe1/Item-Catalog/blob/master/LICENSE).
