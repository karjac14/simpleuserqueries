


//IIFE for Angular Module
;(function(){


  angular.module('userQueries', ['ngRoute'],
    function($routeProvider){
      $routeProvider


        .when('/', {
          templateUrl: 'partials/login.html',
          controller: function ($location, $rootScope, $http){
            //some codes here

          },
          controllerAs: 'login'
        })


        .when('/user', {
          templateUrl: 'partials/user.html',
          controller: function ($location, $rootScope, $http, $scope, $q){


            //some codes here
          },
          controllerAs: 'user'
        })

        
        .when('/edit', {
          templateUrl: 'partials/edit.html',
          controller: function ($location, $rootScope){
            //some codes here milestone 2
          },
          controllerAs: 'edit'
        })
    });

//IIFE for Angular Module ends
})();
