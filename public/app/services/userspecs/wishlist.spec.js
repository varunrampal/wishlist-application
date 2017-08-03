describe('Wishlist factory', function () {
    var WishList;
    var httpBackend;

    // Before each test load our Auth module
    beforeEach(angular.mock.module('wishlistService'));

    // Before each test set our injected Auth factory (_Auth_) to local Auth variable
    beforeEach(inject(function ($httpBackend, _wishList_) {
        WishList = _wishList_;
        httpBackend = $httpBackend;
    }));
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    // A simple test to verify the Wishlist factory exists
    it('Wish List service should exist', function () {
        expect(WishList).toBeDefined();
    });
         
    //getUserWishlists method should exists
    it('getUserWishLists method should exist', function () {
        expect(WishList.getUserWishlists).toBeDefined();
    });

    //getUserWishLists API call test
    it('Test getUserWishLists API call', function () {

        var returnData = {};

        //expectGET to make sure this is called once.
        httpBackend.expectGET("http://localhost:2001/getuserwishlists?username=dosanj").respond(returnData);

        // make the call.
        var returnedPromise = WishList.getUserWishlists('dosanj', 'cxvcxv');

        //set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });

        //flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        //check the result. 

        expect(result).toEqual(returnData);

    });


});
