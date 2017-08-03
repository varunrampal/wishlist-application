angular.module('wishlistService', [])
    .factory('wishList', function ($http) {

        var wishlistFactory = {};

        //get all wish lists 
        wishlistFactory.getUserWishlists = function (username, token) {

            return $http.get('http://localhost:2001/getuserwishlists?username=' + username, {
                headers: { 'Authorization': 'bearer ' + token }
            });//.success(function (data) {
               // return data;
          //  });
        }

        // get wish list items
        wishlistFactory.getWishlistItems = function (username, wishlistnumber, token) {

            return $http.get('http://localhost:2001/getuserwishlistitems?username=' + username + '&wishlistnumber=' + wishlistnumber, {
                headers: { 'Authorization': 'bearer ' + token }
            })
                .success(function (data) {
                    return data;
                });

        }
        return wishlistFactory;
    });