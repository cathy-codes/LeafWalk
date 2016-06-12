'use strict';

angular.module('leafWalk', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        // route for the home page
        .state('app', {
            url:'/',
            views: {
                /*'header': {
                    templateUrl : 'views/header.html'
                },*/
                'content': {
                    template : '<h1>To be Completed</h1>',
                    controller  : 'IndexController'
                },
                'footer': {
                    templateUrl : 'views/footer.html'
                }
            }
        })
        // route for the login page
        .state('app.login', {
            url:'login',
            views: {
                'content@': {
                    templateUrl : 'views/login.html',
                    controller  : 'LoginController'
               }
            }
        })
        // route for the register page
        .state('app.register', {
            url:'register',
            views: {
                'content@': {
                    templateUrl : 'views/register.html',
                    controller  : 'RegisterController'
               }
            }
        })
        // route for the about page
        .state('app.about', {
            url:'about',
            views: {
                'content@': {
                    templateUrl : 'views/about.html',
                    controller  : 'AboutController'
               }
            }
        })
        // route for the directions page
        .state('app.directions', {
            url:'directions',
            views: {
                'content@': {
                    templateUrl : 'views/directions.html',
                    controller  : 'DirectionController'
               }
            }
        })
        // route for the favourites page
        .state('app.favourites', {
            url:'favourites',
            views: {
                'content@': {
                    templateUrl : 'views/favourites.html',
                    controller  : 'FavouriteController'
               }
            }
        })
        // route for the location page
        .state('app.location', {
            url:'location',
            views: {
                'content@': {
                    templateUrl : 'views/location.html',
                    controller  : 'LocationController'
               }
            }
        })
        // route for the menu page
        .state('app.menu', {
            url:'menu',
            views: {
                'content@': {
                    templateUrl : 'views/menu.html',
                    controller  : 'MenuController'
               }
            }
        })
        // route for the search page
        .state('app.openspaces', {
            url:'openspaces',
            views: {
                'content@': {
                    templateUrl : 'views/search.html',
                    controller  : 'OpenSpacesController'
               }
            }
        })
        // route for the openspace details page
        .state('app.openspacedetails', {
            url:'openspaces/:id',
            views: {
                'content@': {
                    templateUrl : 'views/openspace.html',
                    controller  : 'OpenSpaceDetailsController'
               }
            }
        })
        $urlRouterProvider.otherwise('/');
});
