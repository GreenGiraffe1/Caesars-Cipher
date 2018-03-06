'use strict';

/**
 * @ngdoc function
 * @name secretCipherApp.controller:EncryptCtrl
 * @description
 * # EncryptCtrl
 * Controller of the secretCipherApp
 */
angular.module('secretCipherApp')
  .controller('EncryptCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // this.messageComponents = {
    //     'subject' : '';
    //     'body' : '';
    //     'passcode' : '';
    //     'algorithm' : '';
    // };
    this.subject = '[type subject here]';
    this.message = '[type message here]';
    this.algorithm = null;
    // this.charShift = 0;
    this.caesar = function(string,shift) {
        
        var stringArray = string.split('');
        var newStringArray = [];
        
        // TAKE CARE OF NEGATIVE SHIFTS HERE !!!!!!!!  (input will be restricted to 1-26)
        if (shift < 0) {
            shift = 26 + shift;
        }
        
        // Iterates over and prints all letters of string 
        for (var i = 0; i < stringArray.length; i++) {
            
            var oldValue = stringArray[i];
            var oldAsciiNum = oldValue.charCodeAt();
            //  Set base-case for new ASCII code
            var newAsciiNum = 0;
            
            // Transform Upper-Case characters
            if (91 > oldAsciiNum && oldAsciiNum > 64) {
                if ((oldAsciiNum + shift) > 90) {
                    newAsciiNum = 64 + ((oldAsciiNum + shift) % 90);
                } else {
                    newAsciiNum = oldAsciiNum + shift;
                }
            }
            
            // Transform Lower-Case characters
            if (123 > oldAsciiNum && oldAsciiNum > 96) {
                if ((oldAsciiNum + shift) > 122) {
                    newAsciiNum = 96 + ((oldAsciiNum + shift) % 122);
                } else {
                    newAsciiNum = oldAsciiNum + shift;
                }
            }

            // Pass through non-alphabetic characters without change
            if (newAsciiNum !== 0) {
                var newValue = String.fromCharCode(newAsciiNum);
                newStringArray.push(newValue);
            } else {
                newStringArray.push(oldValue);
            }
        }

        // Join the array of new letters into the resultant string
        var newString = newStringArray.join('');
        alert(newString);
        return newString;
    
        
    }
  });
