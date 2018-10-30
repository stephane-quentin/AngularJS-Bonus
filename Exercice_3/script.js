var form = angular.module('myApp', ['ngRoute']);
//On crée un object qui contient notre module "testApp" auquel on injecte une dépendance "ngRoute"
form.run(function($rootScope){
  $rootScope.subjectList = [];
  $rootScope.userList = [];
  $rootScope.emailList = [];
  $rootScope.textList = [];
});
//configuration du routeur
form.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/form',{
    templateUrl:'partials/form.html',
    controller:'formCtrl'
  })
  .when('/view/:id?',{
    templateUrl:'partials/view.html',
    controller:'viewCtrl'
  })
  .otherwise({
    redirectTo:'/form'
  })
}]);


form.controller('formCtrl', ['$scope', '$rootScope', function ($scope, $rootScope){
//On crée un controller rattaché à notre object "form"
$scope.sendData = function(){
// Crée une variable qui sera accessible dans tout le document
    $rootScope.subjectList.push($scope.subject);
    $rootScope.userList.push($scope.user);
    $rootScope.emailList.push($scope.email);
    $rootScope.textList.push($scope.text);
};
}]);

form.controller('viewCtrl', ['$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams){
  $scope.id = $routeParams.id;
  $scope.subject = $rootScope.subjectList[$scope.id];
  $scope.user = $rootScope.userList[$scope.id];
  $scope.email = $rootScope.emailList[$scope.id];
  $scope.text = $rootScope.textList[$scope.id];
}]);
