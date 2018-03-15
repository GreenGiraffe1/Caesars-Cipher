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
        this.subject = 'Caesar\'s Surprise Attack on the Helvetii';
        this.message = 'When Caesar was informed by spies that the Helvetii had already conveyed three parts of their forces across that river, but that the fourth part was left behind on this side of the Saone, he set out from the camp with three legions during the third watch, and came up with that division which had not yet crossed the river. Attacking them encumbered with baggage, and not expecting him, he cut to pieces a great part of them; the rest betook themselves to flight, and concealed themselves in the nearest woods.';
        this.shift = [1,2,3
            ,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
        this.charShift = 23;
        this.toggleCrypt = function(num) {
            if (this.message === '') {
                alert('Must enter a message before taking that action.');
                return;
            }

            this.subject = this.caesar(this.subject,num);
            this.message = this.caesar(this.message,num);
        }
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

                // Append new characters and pass through non-alphabetic ones
                if (newAsciiNum !== 0) {
                    var newValue = String.fromCharCode(newAsciiNum);
                    newStringArray.push(newValue);
                } else {
                    newStringArray.push(oldValue);
                }
            }

            // Join the array of new letters into the resultant string
            var newString = newStringArray.join('');
            // alert(newString);
            return newString;
        };
    });
