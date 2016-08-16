app.controller('CartCtrl',
               ['$rootScope','DataService','ProductService','CheckoutService',
                function($rootScope,DataService, ProductService, CheckoutService){
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
                        product.updateNumItem = args.message;
                        console.log(product.updateNumItem);
                    });
                    product.totalItmesFunction = function(){
                        $rootScope.$broadcast('totalItmes', { message: ProductService.totalItmes });
                        return ProductService.totalItmesFunction();
                    };
                    
                    product.changeCheckOut = function(){
                        product.NumOfItem = ProductService.totalItmes
                    }
                    
                    product.shippingAddress = function(name, street, city, state, zip){
                       product.shippingAddressInfo =  CheckoutService.shippingAddress(name, street, city, state, zip);
                        return product.shippingAddressInfo;
                        
                    };
                    product.paymentMethod = function(cardNumber, nameOnCard, expirationDate){
                       product.paymentMethodInfo =CheckoutService.paymentMethod(cardNumber, nameOnCard, expirationDate);
                        return product.paymentMethodInfo;
                    };
}]);