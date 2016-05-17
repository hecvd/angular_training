var app2 = angular.module('app2', ['BlogService', 'PostDirective']);


app2.controller('BlogController', ['BlogDataFactory', function (BlogDataFactory) {

    this.blogInfo = {
        userId: 6,
        blogdata: null,
        userdict: null,
        userPosts: null,
        postComments: null,
        userPostComments: null,
        allPostComments: null
    };
    var bInfo = this.blogInfo;

    BlogDataFactory.getUserPosts(6).then(function (data) {
       angular.forEach(data, function (token) {
           console.log(token)
       })
    });


    BlogDataFactory.getAllData().then(
        function (data) {
            bInfo.blogdata = data;
            angular.forEach(bInfo.blogdata.users, function (udict) {
                if (udict.id == bInfo.userId) {
                    bInfo.userdict = udict
                }
            });
            bInfo.userPosts = [];
            angular.forEach(bInfo.blogdata["posts"], function (pdict) {
                if (pdict.userId == bInfo.userId) {
                    pdict.bodyVisible = false;
                    pdict.comments = [];
                    bInfo.userPosts.push(pdict)
                }
            });
            bInfo.postComments = {};
            bInfo.userPostComments = [];
            bInfo.allPostComments = [];
            angular.forEach(bInfo.userPosts, function (pdict) {
                angular.forEach(bInfo.blogdata.comments, function (cdict) {
                    if (cdict.postId == pdict.id) {
                        pdict.comments.push(cdict);
                        if (cdict.email === bInfo.userdict.email) {
                            bInfo.userPostComments.push(cdict)
                        }
                        bInfo.allPostComments.push(cdict)
                    }
                });
            });
        }
    )


}]);