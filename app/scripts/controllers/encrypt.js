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
    this.passcode = '[type passcode here]';
    this.algorithm = null;
  });
