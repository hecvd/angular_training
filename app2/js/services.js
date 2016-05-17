BlogService = angular.module('BlogService', ['BlogFilters']);

BlogService.factory('BlogDataFactory', ['$http', '$q', '$filter', function ($http, $q, $filter) {
    var BlogDataFactory = {};
    // TODO: investigate how to cache JSON or using a base service
    BlogDataFactory.getAllData = function () {
        var deferred = $q.defer();
        $http.get('json/data.json')
            .success(deferred.resolve)
            .error(deferred.resolve);
        return deferred.promise;
    };
    BlogDataFactory.getUserPosts = function(userId){
        var deferred = $q.defer();
        $http.get('json/data.json').success(function (data) {
            deferred.resolve($filter('PostsByUser')(data,userId));
        }).error(deferred.resolve);
        return deferred.promise
    };
    BlogDataFactory.getPostComments = function(postId){
        var deferred = $q.defer();
        $http.get('json/data.json').success(function (data) {
            deferred.resolve($filter('CommentsByPost')(data, postId));
        }).error(deferred.resolve);
        return deferred.promise
    };
    return BlogDataFactory;
}]);