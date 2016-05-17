var app1 = angular.module('app1', []);

app1.factory('BlogFactory', ['$http', function($http) {
    return $http.get('json/data.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);

app1.controller('BlogController', ['BlogFactory', function (blogFactory) {

    this.blogInfo = {
        userId: 6,
        blogdata: null,
        userdict: null,
        userPosts: null,
        postComments: null,
        userPostComments: null
    };
    var bInfo = this.blogInfo;
    blogFactory.success(function (data) {
        bInfo.blogdata = data;
        angular.forEach(bInfo.blogdata["users"], function (udict) {
            if (udict['id'] == bInfo.userId ){
                bInfo.userdict = udict
            }
        });
        bInfo.userPosts = [];
        angular.forEach(bInfo.blogdata["posts"], function (pdict) {
            if (pdict["userId"] == bInfo.userId){
                pdict["bodyVisible"] = false;
                pdict["comments"] = [];
                bInfo.userPosts.push(pdict)
            }
        });
        bInfo.postComments = {};
        bInfo.userPostComments = [];
        angular.forEach(bInfo.userPosts, function (pdict) {
            angular.forEach(bInfo.blogdata["comments"], function (cdict) {
                if (cdict["postId"] == pdict["id"]){
                    pdict["comments"].push(cdict)
                }
                if (cdict["email"] === bInfo.userdict["email"]){
                    bInfo.userPostComments.push(cdict)
                }
            });
        });
    });
}]);