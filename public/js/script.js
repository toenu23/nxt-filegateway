(function() {

  var socket = io.connect('http://127.0.0.1:2332');

  var dependencies = [
    'angular-table',
  ];

  var app = angular.module('FileApp', dependencies);

  var mainController = function($scope, $timeout) {

    $scope.filesList = [];

    $scope.tableConfig = {
      itemsPerPage: 5,
      fillLastPage: true,
    };

    socket.emit('uploadFile', {});

    socket.on('uploadDone', function(data) {

    });

    socket.on('_error', function(data) {

    });

    socket.emit('getFiles', {});

    socket.on('fileList', function(data) {
      $timeout(function() {
        $scope.filesList = data;

        for (var i = 0; i < 50; i++) {
          var item = {
            name: 'test file',
            channel: 'testing',
            tags: 'test1 test2 test3',
          };
          $scope.filesList.push(item);
        }

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

