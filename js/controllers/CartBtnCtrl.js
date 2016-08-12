app.controller('CartBtnCtrl',['$rootScope','ProductService',function($rootScope, ProductService){
    
    var cart = this;
    $rootScope.$on('totalItmes', function (event, args) {
        cart.updateNumItem = args.message;
    });
}]);