app.directive('productInCartTemplate', function(){
   return{
       restrict: 'A',
       scope: {
           product: '=',
           cart: '='
       },
       templateUrl: 'pages/templates/product-in-cart-template.html'
   }; 
});

app.directive('productInProductsTemplate', function(){
    return{
        restrict: 'A',
        scope: {
            product: '=',
            producted: '='
        },
        templateUrl: 'pages/templates/product-in-products-template.html'
    }
});