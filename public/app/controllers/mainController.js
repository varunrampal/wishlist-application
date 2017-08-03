angular.module('mainController', [])
    .controller('MainController', function ($rootScope, $location, Auth, wishList) {

        var vm = this;
        var status = "";
        var token = "";

        vm.loggedIn = Auth.isLoggedIn();

        $rootScope.$on('$routeChangeStart', function () {
            vm.loggedIn = Auth.isLoggedIn();
            vm.username = Auth.getUserName();
        });

        //on login button clicked
        vm.doLogin = function () {

            vm.processing = true;
            vm.error = '';

            //call auth service login method
            Auth.login(vm.loginData.username, vm.loginData.password)
                .success(function (data) {

                    vm.processing = false;

                    status = data.status
                    token = data.data;

                    if (data.status == 'success') {
                        if (Auth.setUser(token, vm.loginData.username)) {
                            vm.username = vm.loginData.username;
                            $location.path('/dashboard');
                        }
                    }
                    else {
                        vm.error = data.message;
                    }
                }).error(function (data) {

                    status = data.status;
                    $rootScope.error = data.data;

                });
        }

        //Logout user
        vm.doLogout = function () {
            Auth.logout();
            $location.path('/logout');
        }

        //user wishlists
        vm.getUserWishlists = function () {
            vm.error = '';
            var wishlists;

            var username = Auth.getUserName();
            var token = Auth.getToken();

            wishList.getUserWishlists(username, token)
                .success(function (data) {

                    status = data.status
                    wishlists = data.data;

                    if (data.status == 'success') {
                        vm.wishlists = wishlists;
                        $location.path('/mywishlists');
                    }
                    else {
                        vm.error = data.message;
                    }
                }).error(function (data) {

                    status = data.status;
                    $rootScope.error = data.data;

                });

        }

        //wish list name clicked
        vm.getWishlistItems = function (wishlistnumber) {

            var selectedWishListNumber = wishlistnumber;
            vm.error = '';
            var wishlistitems;

            var username = Auth.getUserName();
            var token = Auth.getToken();

            wishList.getWishlistItems(username, selectedWishListNumber, token)
                .success(function (data) {
                    status = data.status;
                    wishlistitems = data.data;
                    
                  
                    if (data.status == 'success')
                    {
                        vm.wishlistitems = wishlistitems[0].items;
                        vm.wishlistname = wishlistitems[0].wishlistname;
                        console.log(vm.wishlistitems);
                        $location.path('/wishlistitems');
                    }
                    else
                    {
                        vm.error = data.message;
                    }
                }).error(function (data) {

                    status = data.status;
                    $rootScope.error = data.data;

                });

        }

    });