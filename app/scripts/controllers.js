'use strict';

angular.module('leafWalk')

.controller('OpenSpacesController', ['$scope','openSpaceFactory',function ($scope, openSpaceFactory) {
  $scope.showResults = false;
  $scope.message = "Loading...";
  openSpaceFactory.getOpenSpaces().query(
    function(response) {
      $scope.openspaces = response;
      $scope.showResults = true;
    },
    function(response) {
      $scope.message = "Error: "+response.status + " " + response.statusText;
    });
}])
.controller('OpenSpaceDetailsController', ['$scope','$stateParams','openSpaceFactory',
function($scope, $stateParams, openSpaceFactory) {
  $scope.showOpenSpace = false;
  $scope.message = "Loading...";
    $scope.openspace = openSpaceFactory.getOpenSpaces().get({id:parseInt($stateParams.id,10)})
    .$promise.then(
       function(response){
           $scope.openspace = response;
           $scope.showOpenSpace = true;
       },
       function(response) {
           $scope.message = "Error: "+response.status + " " + response.statusText;
     });
}])
;
