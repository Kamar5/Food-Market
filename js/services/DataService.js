app.factory('DataService',["$http",function($http){
    var getProducts = function(){
        return $http.get('Tables/products.json')
    };
    
    var getEmployees = function(){
        return $http.get('Tables/employees.json')
    };
    
    var getLocations = function(){
        return $http.get('Tables/locations.json')
    };
    
    return {
        getProducts: getProducts,
        getEmployees: getEmployees,
        getLocations: getLocations
    }
    
}]);