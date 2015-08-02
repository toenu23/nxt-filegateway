(function() {

  var socket = io.connect('http://127.0.0.1:2332');

  var dependencies = [
    'angular-table',
    'ui.bootstrap',
  ];

  var app = angular.module('FileApp', dependencies);

  var mainController = function($scope, $timeout, $modal) {

    $scope.filesList = [];

    $scope.tableConfig = {
      itemsPerPage: 10,
      fillLastPage: false,
    };

    // socket.io
    socket.emit('uploadFile', {});

    socket.on('uploadDone', function(data) {

    });

    socket.on('_error', function(data) {

    });

    socket.emit('getFiles', {});

    socket.on('fileList', function(data) {
      $timeout(function() {
        $scope.filesList = data;

        // Dummy data
        /*
        for (var i = 0; i < 50; i++) {
          var item = {
            name: 'test file',
            channel: 'testing',
            tags: 'test1 test2 test3',
          };
          $scope.filesList.push(item);
        }
        */
      });
    });

    // Modals
    $scope.openUploadModal = function() {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'uploadModal.html',
        controller: 'ModalInstanceCtrl',
      });
    };

    $scope.openExtendModal = function() {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'extendModal.html',
        controller: 'ModalInstanceCtrl',
      });
    };

    $scope.ok = function() {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  };

  var mainControllerArgs = [
    '$scope',
    '$timeout',
    '$modal',
    mainController,
  ];

  app.controller('MainController', mainControllerArgs);

  app.controller('ModalInstanceCtrl', function($scope, $modalInstance) {
    $scope.ok = function() {
      $modalInstance.close();
      alert('Sorry, not implemented yet!');
    };
    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  });

})();

