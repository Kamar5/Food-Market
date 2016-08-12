var app = angular.module("groceryStore",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl: 'pages/main.html',
        controller:"MainCtrl"
    }).
    when('/aboutUs',{
        templateUrl: 'pages/aboutUs.html',
        controller:"MainCtrl"
    }).
    when('/employees',{
        templateUrl: 'pages/employees.html',
        controller:"EmployeesCtrl"
    }).
    when('/products',{
        templateUrl: 'pages/products.html',
        controller:"ProductsCtrl"
    }).
    when('/contactUs',{
        templateUrl: 'pages/contactUs.html',
        controller:"ContactCtrl"
    }).
    when('/cart',{
        templateUrl: 'pages/cart.html',
        controller:"CartCtrl"
    }).
    when('/specialOffers',{
        templateUrl: 'pages/specialOffers.html',
        controller:"CartCtrl"
    }).
    otherwise({redirectTo:'/'})
}]);
app.run(function($rootScope) {
    $rootScope.numItems = new Date();
});

    app.filter('setDecimal', function ($filter) {
        return function (input, places) {
            if (isNaN(input)) return input;
            var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
            return Math.round(input * factor) / factor;
        };
    });

app.service('priceTotal', function () {
    this.numItems = 0;
});