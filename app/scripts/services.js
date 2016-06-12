'use strict';

angular.module('leafWalk')
  .constant("baseURL","http://localhost:3000/")
  .service('openSpaceFactory', ['$resource', 'baseURL', function($resource,baseURL) {

      /*this.getOpenSpaces = function(){
        return $http.get(baseURL+"openspaces");
      };
      this.getOpenSpace = function (index) {
        return $http.get(baseURL+"openspaces/"+index);
      };*/

      this.getOpenSpaces = function(){
        return $resource(baseURL+"openspaces/:id",null,  {'update':{method:'PUT' }});
      };

  }]);
