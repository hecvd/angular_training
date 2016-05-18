HeaderDirective = angular.module('HeaderDirective', []);

HeaderDirective.directive('ngHeaderView', function() {
    return {
        scope: {
            blogInfo: '='
        },
        restrict: 'E',
        templateUrl: '../../templates/headers/header.html'
    }
});