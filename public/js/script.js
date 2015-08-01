(function() {

  var socket = io.connect('http://127.0.0.1:2332');

  var dependencies = [
    'angular-table',
  ];

  var app = angular.module('FileApp', dependencies);

  var mainController = function($scope, $timeout) {

    $scope.filesList = [];

    socket.emit('uploadFile', {});

    socket.on('uploadDone', function(data) {

    });

    socket.on('_error', function(data) {

    });

    socket.emit('getFiles', {});

    socket.on('fileList', function(data) {
      $timeout(function() {
        $scope.filesList = data;
      });
    });

  };

  var mainControllerArgs = [
    '$scope',
    '$timeout',
    mainController,
  ];

  app.controller('MainController', mainControllerArgs);

})();

