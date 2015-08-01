(function() {

  var socket = io.connect('http://127.0.0.1:2332');

  var dependencies = [
  ];

  var app = angular.module('FileApp', dependencies);

  var mainController = function($scope, $timeout) {

    socket.emit('uploadFile', {});

    socket.on('uploadDone', function(data) {

    });

    socket.on('uploadError', function(data) {

    });

    socket.emit('getFiles', {});

    socket.on('fileList', function(data) {

    });

  };

  var mainControllerArgs = [
    '$scope',
    '$timeout',
    mainController,
  ];

  app.controller('MainController', mainControllerArgs);

})();

