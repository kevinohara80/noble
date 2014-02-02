(function() {

  var HeaderCtrl = function($scope, $http, $location) {
    $scope.version = 'v0.0.1';
  };

  HeaderCtrl.$inject = ['$scope', '$http', '$location'];
  angular.module('nub').controller('HeaderCtrl', HeaderCtrl);

}());