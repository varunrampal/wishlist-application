angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
       .when('/', {            
            templateUrl: 'app/views/pages/home.html'
       })
       .when('/login',{
            templateUrl: 'app/views/pages/login.html'
       })
       .when('/signup',{
             templateUrl:'app/views/pages/signup.html'
       }).when('/dashboard',{
              templateUrl: 'app/views/pages/dashboard.html'
       }).when('/mywishlists',{
              templateUrl: 'app/views/pages/mywishlists.html'
       }).when('/wishlistitems',{
              templateUrl: 'app/views/pages/wishlistitems.html'
       });
$locationProvider.html5Mode(true);
});