app.factory('CheckoutService', function(){
    var checkoutObject = {
        
        shippingAddress: function(name, street, city, state, zip){
            return {
                name: name,
                street: street,
                city: city,
                state: state,
                zip: zip
            }
        },
        paymentMethod: function(cardNumber, nameOnCard, expirationDate){
            return {
                cardNumber: cardNumber,
                nameOnCard: nameOnCard,
                expirationDate: expirationDate
            }
        },
        
    };
    
    return checkoutObject;
});