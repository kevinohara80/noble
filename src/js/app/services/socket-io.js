(function() {

  var socket = function($rootScope) {
    var s = io.connect();

    var api = {};

    api.on = function (eventName, callback) {
      s.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    };

    api.emit = function (eventName, data, callback) {
      s.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    };

    // $rootScope.$on('$destroy', function() {
    //   s.removeAllListeners();
    //   s.emit('midi:listen:stop');
    // });

    return api;
  }

  socket.$inject = ['$rootScope'];
  angular.module('nub').factory('socket', socket);

}());