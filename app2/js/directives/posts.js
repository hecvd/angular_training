PostDirective = angular.module('PostDirective', []);

PostDirective.directive('ngPostListView', function() {
    return {
        restrict: 'E',
        scope: {
            userPosts: '=',
            userName: '@'
        },
        templateUrl: '../../templates/posts/posts_list_view.html'
    }
});

PostDirective.directive('ngPostView', function() {
    return {
        restrict: 'EA',
        scope: {
            singlePost: '=',
            userName: '@'
        },
        controller: function ($scope) {
            $scope.bodyVisible = false;
        },
        templateUrl: '../../templates/posts/post_view.html'
    }
});



