app.controller("NavbarCtrl",['$location',function($location){
    currentObj = this;
    currentObj.isActive = function(activeLocation){
        return activeLocation === $location.path();
    };
}]);