PostDirective = angular.module('PostDirective', []);

PostDirective.directive('ngPostView', function() {
    return {
        restrict: 'E',
        templateUrl: '../../templates/posts/posts_view.html'
    }
});

PostDirective.directive('ngPostListView', function() {
    return {
        restrict: 'E',
        templateUrl: '../../templates/posts/posts_list_view.html'
    }
});

