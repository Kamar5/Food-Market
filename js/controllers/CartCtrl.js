app.controller('CartCtrl',
               ['$rootScope','DataService','ProductService','CheckoutService',
                function($rootScope,DataService, ProductService, CheckoutService){
                    var cart = this;
                    
                    cart.products = ProductService.resultData;
                    cart.productTotalCost = ProductService.totalCost;
                    cart.calcTotalCost = function(product, price){
                        return ProductService.calcTotal(product, price);
                    };
                    cart.removeFromCart = function(data){
                        ProductService.removeFromCart(data);
                        cart.productTotalCost = ProductService.totalCost;
                    };
                    $rootScope.$on('totalItmes', function (event, args) {
                        cart.updateNumItem = args.message;
                    });
                    cart.totalItmesFunction = function(){
                        $rootScope.$broadcast('totalItmes', { message: ProductService.totalItmes });
                        return ProductService.totalItmesFunction();
                    };         
                    cart.changeCheckOut = function(){
                        cart.NumOfItem = ProductService.totalItmes
                    };
                    
                    cart.paymentMethodCheck = true;
                    cart.shippingAddressCheck = true;
                    cart.paymentMethodToggle = function(){
                        if(cart.paymentMethodCheck === true){
                            cart.paymentMethodCheck = false;
                        }else{
                            cart.paymentMethodCheck = true;
                        }
                    };
                    cart.shippingAddressToggle = function(){
                        if(cart.shippingAddressCheck === true){
                            cart.shippingAddressCheck = false;
                        }else{
                            cart.shippingAddressCheck = true;
                        }
                    };
                    
                    cart.resetCart = function(){
                        cart.products = [];
                        cart.productTotalCost = 0;
                        ProductService.totalItmes = 0;
                    }
                    cart.autoFill = function(){
                        cart.name = "Jon Doe";
                        cart.street = "123 main st";
                        cart.city = "NYC";
                        cart.state = "NY";
                        cart.zip = "12321";
                        
                        cart.cardNumber = "2132312322324";
                        cart.nameOnCard = "Jon Doe";
                        cart.expirationDate = "7/6/2017";
                    };
                    
}]);