app.controller('ProductsCtrl',
               ['$rootScope','DataService','ProductService',
                function($rootScope,DataService, ProductService){
                    var product = this;
                    product.totalItmesFunction = function(){
                        $rootScope.$broadcast('totalItmes', { message: ProductService.totalItmes });
                        return ProductService.totalItmesFunction();
                    }
                    product.productTotal = 0;
                    var getProducts = function(){
                        DataService.getProducts().then(
                            function(results){
                                product.products = results.data;
                            },
                            function(error){
                                console.log(error);
                            }); 
                    };
                    getProducts();
                    product.calcTotalCost = function(product, price){
                        return ProductService.calcTotal(product, price);
                    };
                    
                    product.addToCart = function(product){
                        if(product.numOfProducts > 0){
                            return ProductService.addToCart(product);
                        }
                    };
}]);