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
        this.subject = ''//[type subject here]';
        this.message = ''//[type message here]';
        this.algorithm = null;
        this.testFunc = function(arg) {
            // alert('testFunc fired!!');
            for(var i = 0; i < arg; i++) {
                alert('testFunc fired!!');

            }
            // alert('testFunc fired!!');
            // console.log(this.subject);
            this.subject = 'YOYOYO';
            this.pass('Variable Alert');
        };
        // this.charShift = 0;
        this.shift = [1,2,3
            ,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
        this.charShift = null;
        // this.passThru = function() {
        //     this.subject = this.caesar(this.subject,this.charShift);
        // }
        this.pass = function(thing) {
            alert(thing);
        }
        this.toggleCrypt = function() {
            this.subject = this.caesar(this.subject,this.charShift);
            this.message = this.caesar(this.message,this.charShift);
        }
        this.stringer = function() {
            this.subject = this.subject + 'HAHA'
        };
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
        
            
        };
    });
