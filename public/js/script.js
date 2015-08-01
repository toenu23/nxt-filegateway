(function() {

  var socket = io.connect('http://127.0.0.1:2332');

  var dependencies = [
  ];

  var app = angular.module('FileApp', dependencies);

  var mainController = function($scope, $timeout) {




  };

  var mainControllerArgs = [
    '$scope',
    '$timeout',
    mainController,
  ];

  app.controller('MainController', mainControllerArgs);

})();

