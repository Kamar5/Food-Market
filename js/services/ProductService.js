app.factory('ProductService',[function(){
    
    var productObject = {
        totalItmesFunction: function(){
            return productObject.totalItmes;
        },
        totalItmes: 0,
        totalCost: 0,
        productInCart: false,
        resultData: [],
        calcTotal: function(product, price){
            productTotal = product * price;
            return productTotal
        },
        addToCart: function(data){
            if(productObject.resultData.length === 0){
                productObject.resultData.push(data)
                productObject.productInCart = true;
            }else{
                for(var i = 0; i < productObject.resultData.length; i++){
                    if(productObject.resultData[i].id === data.id){
                        productObject.resultData[i].numOfProducts += data.numOfProducts;
                        productObject.productInCart = true;
                    }
                }
            }
            if(productObject.productInCart === false){
                productObject.resultData.push(data);

            }
            productObject.totalCost = 0;
            productObject.totalItmes = 0;
            for(var i = 0; i < productObject.resultData.length; i++){
                    productObject.resultData[i].totalCost = productObject.resultData[i].price * productObject.resultData[i].numOfProducts;
                    productObject.totalCost += (productObject.resultData[i].price * productObject.resultData[i].numOfProducts);
                    productObject.totalItmes += productObject.resultData[i].numOfProducts;
                    
                }
            productObject.productInCart = false
            return productObject.resultData;
        },
        removeFromCart: function(data){
            productObject.totalCost = 0;
            productObject.totalItmes = 0;
            var index= productObject.resultData.indexOf(data)
            productObject.resultData.splice(index,1);
            if(productObject.resultData.length === 0){
                productObject.totalCost = 0;
            }else{
                 for(var i = 0; i < productObject.resultData.length; i++){
                     productObject.totalCost += (productObject.resultData[i].price * productObject.resultData[i].numOfProducts);
                     productObject.totalItmes += productObject.resultData[i].numOfProducts;
                }
            }
           
            return productObject.resultData;
        }
    };
    return productObject;
}]);