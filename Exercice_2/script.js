var app = angular.module('testApp', []);
app.controller('appCtrl', ['$scope', '$window', function($scope, $window){
  $scope.alert = function(arg) {
    $window.alert (arg);
  };
}]);
