angular.module('authService', [])
    .factory('Auth', function ($http, $q, AuthToken) {

        var authFactory = {};

        // login method to call authenticate function of API
        authFactory.login = function (username, password) {

            return $http.post('http://localhost:2001/authenticate', {
                username: username,
                password: password
            })
                .success(function (data) {
                    return data;
                });
        }

        // function genericSuccess(res) {
        //     return res.data; // yes, really.
        // }
        // authFactory.login = function (username, password) {

        //     return $http.post('http://localhost:2001/authenticate', {
        //         username: username,
        //         password: password
        //     })
        //         .then(function (success) {
        //             return genericSuccess(success);
        //         });
        // }

        //method to check if user is logged in or not
        authFactory.isLoggedIn = function () {

            if (AuthToken.getToken())
                return true;
            else
                return false;

        }

        //logout user
        authFactory.logout = function () {
            AuthToken.setToken();
            AuthToken.setUserName();
        }

        //method to set username and token in local storage
        authFactory.setUser = function (usertoken, username) {
            AuthToken.setToken(usertoken);
            AuthToken.setUserName(username);
            return true;
        }
        //method to get username
        authFactory.getUserName = function () {
            return AuthToken.getUserName();

        }
        //method to get token
        authFactory.getToken = function () {
            return AuthToken.getToken();
        }
        return authFactory;
    })
    //Factory to get set the token
    .factory('AuthToken', function ($window) {

        var authTokenFactory = {};

        //method to get the token stored in local storage
        authTokenFactory.getToken = function () {
            return $window.localStorage.getItem('token');
        }

        //method to get the username
        authTokenFactory.getUserName = function (username) {
            return $window.localStorage.getItem('username');
        }

        //method to set the username in local storage
        authTokenFactory.setUserName = function (username) {
            if (username) {
                $window.localStorage.setItem('username', username);
            }
            else {
                $window.localStorage.removeItem('username');
            }
        }
        //method to set the token in the local storage
        authTokenFactory.setToken = function (token) {
            if (token) {
                $window.localStorage.setItem('token', token);
            }
            else {
                $window.localStorage.removeItem('token');
            }
        }
        return authTokenFactory;

    })