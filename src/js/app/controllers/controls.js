(function() {

  var ControlsCtrl = function($scope, socket) {

    socket.emit('midi:listen:start');

    socket.on('midi:message', function(message) {
      $scope.controls.push({ name: message, type: 'midi' });
    });
    
    $scope.controls = [
      { name: 'ISY-99i', type: 'Home Automation'},
      { name: 'Elk M1', type: 'Security'}
    ];

    $scope.testProp = 'foo';

    $scope.add = function(item) {
      $scope.controls.push({name: item, type: 'Automation' });
      $scope.testProp = null;
    };

    $scope.del = function(index) {
      $scope.controls.splice(index, 1);
    };

    // stop listeners and unsubscribe
    $scope.$on('$destroy', function() {
      socket.removeAllListeners();
      socket.emit('midi:listen:stop');
    });
    
  };

  ControlsCtrl.$inject = ['$scope', 'socket'];
  angular.module('nub').controller('ControlsCtrl', ControlsCtrl);

}());