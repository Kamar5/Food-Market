app.controller('EmployeesCtrl', ['$scope', 'DataService',function($scope, DataService){
    var getEmployees = function(){
        DataService.getEmployees().then(
            function(results){
                $scope.employees = results.data;
            },
            function(error){
                console.log(error);
            }); 
    };
    getEmployees();
}]);