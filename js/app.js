var app = angular.module("groceryStore",['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
        when('/main',{
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
        otherwise({redirectTo:'/main'})

    }])
    .run(function($rootScope) {
        $rootScope.numItems = new Date();
    })
    .controller('MainCtrl', ['$scope', '$http',function($scope, $http){
        // $http.get('services.json').then(function(response){
        //     $scope.services = response.data;
        // })
    }])
    .controller('ContactCtrl', ['$scope', '$http',function($scope, $http){
        $http.get('dataTables/locations.json').then(function(response){
            $scope.locations = response.data;
        })
    }])
    .controller('EmployeesCtrl', ['$scope', '$http',function($scope, $http){
        $http.get('dataTables/employees.json').then(function(response){
            $scope.employees = response.data;
        })
    }])
    .controller('ProductsCtrl', ['$rootScope','$scope', '$http','$location',function($rootScope, $scope, $http, $location){
        $scope.productTotal = 0;
        $http.get('dataTables/products.json').then(function(response){
            $scope.products = response.data;

        });

        $scope.calcTotal = function(){
            $scope.productTotal = 0;
            angular.forEach($scope.products, function (product) {
                $scope.productTotal += product.numItems ? (product.price * product.numItems) : 0;

            })
        };

        $scope.addToCart = function () {
            // angular.forEach($scope.products, function(product){
            //     if(product.numItems > 0){
            //         $rootScope.products = $scope.products;
            //     }
            //
            // });
            $rootScope.products = $scope.products;
            $rootScope.productTotal = $scope.productTotal;
        };
        $scope.submit = function () {
            $location.path("/cart");
        };
    }])
    .controller('CartCtrl', ['$rootScope','$scope', '$http','$location',function($rootScope,$scope, $http, $location){
        if($rootScope.products){
            $scope.products = $rootScope.products;
            $scope.productTotal = $rootScope.productTotal;
        } else {
            $http.get('dataTables/products.json').then(function(response){
                $scope.products = response.data;

            });
        }

        $scope.calcTotal = function(){
            $scope.productTotal = 0;
            angular.forEach($scope.products, function (product) {
                $scope.productTotal += product.numItems ? (product.price * product.numItems) : 0;

            })
        };
        $scope.submit = function () {
            $location.path("/cart");
        };
    }])
    .filter('setDecimal', function ($filter) {
        return function (input, places) {
            if (isNaN(input)) return input;
            var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
            return Math.round(input * factor) / factor;
        };
    })
    .service('priceTotal', function () {

        this.numItems = 0;

    });;