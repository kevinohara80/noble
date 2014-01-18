(function($) {
  var abletonApp = angular.module('abletonApp', []);

  var HeaderCtrl = function($scope, $http, $location) {
    $scope.version = 'v0.0.1';
  };

  HeaderCtrl.$inject = ['$scope', '$http', '$location'];
  abletonApp.controller('HeaderCtrl', HeaderCtrl);
 
  var ControlsCtrl = function($scope) {
    
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
    
  };

  ControlsCtrl.$inject = ['$scope'];
  abletonApp.controller('ControlsCtrl', ControlsCtrl);

}(jQuery));