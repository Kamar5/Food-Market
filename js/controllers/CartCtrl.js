app.controller('CartCtrl',
               ['$rootScope','$scope','DataService','ProductService',
                function($rootScope,$scope,DataService, ProductService){
                    var product = this;
                    
                    product.products = ProductService.resultData;
                    product.productTotalCost = ProductService.totalCost;
                    product.calcTotalCost = function(product, price){
                        return ProductService.calcTotal(product, price);
                    };
                    product.removeFromCart = function(data){
                        ProductService.removeFromCart(data);
                        product.productTotalCost = ProductService.totalCost;
                    };
                    $rootScope.$on('totalItmes', function (event, args) {
                        cart.updateNumItem = args.message;
                    });
                    product.totalItmesFunction = function(){
                        $rootScope.$broadcast('totalItmes', { message: ProductService.totalItmes });
                        return ProductService.totalItmesFunction();
                    }
}]);