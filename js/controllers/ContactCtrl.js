app.controller('ContactCtrl', ['$scope', 'DataService',function($scope, DataService){
    var getLocations = function(){
        DataService.getLocations().then(
            function(results){
                $scope.locations = results.data;
            },
            function(error){
                console.log(error);
            }); 
    };
    getLocations();
    
}]);