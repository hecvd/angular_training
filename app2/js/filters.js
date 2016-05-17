BlogFilters = angular.module('BlogFilters', []);

BlogFilters.gfilter = function (data, key, comp){
    var filtered_data = [];
    angular.forEach(data, function (token) {
        if (token[key] == comp){
            filtered_data.push(token);
        }
    });
    return filtered_data
};

BlogFilters.filter('PostsByUser', function () {
        return function (data, userId) {
            return BlogFilters.gfilter(data.posts, 'userId', userId);
        }
}).filter('CommentsByPost', function () {
    return function (data, postId) {
        return BlogFilters.gfilter(data.comments, 'postId', postId);
    }
});