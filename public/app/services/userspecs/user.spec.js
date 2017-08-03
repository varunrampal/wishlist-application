describe('Users factory', function () {
    var Auth;
    var httpBackend;
    
    var singleUser = {
        "usernumber": "900102",
        "name": "dosanj",
        "username": "dosanj",
        "password": "dosanj@12345",
        "mobile": "9898987876",
        "email": "dosanj@datanova.co.in",
        "role": "user"
    };
    // Before each test load our Auth module
    beforeEach(angular.mock.module('authService'));

    // Before each test set our injected Auth factory (_Auth_) to local Auth variable
    beforeEach(inject(function ($httpBackend,_Auth_) {
        Auth = _Auth_;
        httpBackend = $httpBackend;
    }));
     afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    // A simple test to verify the Users factory exists
    it('authService should exist', function () {
        expect(Auth).toBeDefined();
    });

    // A set of tests for Auth.login() method

        // A simple test to verify the method login exists
        it('should exist', function () {
            expect(Auth.login).toBeDefined();
        });
   

    // A set of tests for Auth.login() method
    // describe('.login()', function () {
    //     // A simple test to verify the method login exists
    //     it('should authenticate a user', function () {

    //     var returnData = {};

    //     httpBackend.expect

    //         expect(Auth.login('dosanj','dosanj@12345')).toEqual();
    //     });
    // });

});
