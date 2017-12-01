/**
 * Created by fei on 2017/10/26.
 */
app.directive("feiPaging", function ($window, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            paging: "=paging",
            pagearray: "=pageArray",
            localpageno: "=localPageno",
            gopage: "&goPage"
        },
        controller: function ($scope) {
            /**
             * pagemin  pagemax参数用来控制最多显示几个分页页码
             * @type {number}
             */
            $scope.pageSpan = 4;//分页差值
            $scope.pagemin = $scope.paging.startPageNum;
            $scope.pagemax = $scope.paging.startPageNum + $scope.pageSpan;
        },
        link: function (scope, elem, attr) {
            scope.turnpage = function (mark, num) {
                if ("first"===mark) {
                    scope.pagemin = scope.paging.startPageNum;
                    scope.pagemax = scope.paging.startPageNum + scope.pageSpan;
                    scope.localpageno = scope.paging.startPageNum;
                } else if ("pre"===mark) {
                    if (num === scope.pagemin) {
                        if (scope.pagemin>scope.pagearray[0]) {
                            scope.pagemin -= 1;
                            scope.pagemax -= 1;
                        }
                    }
                    if (scope.paging.startPageNum!=num) {
                        scope.localpageno = num - 1;
                    }
                } else if ("local"===mark) {
                    if (num === scope.pagemin) {
                        if (scope.pagemin>scope.pagearray[0]) {
                            scope.pagemin -= 1;
                            scope.pagemax -= 1;
                        }
                    }
                    if (num === scope.pagemax) {
                        if (scope.pagemax<scope.pagearray[scope.pagearray.length-1]) {
                            scope.pagemin += 1;
                            scope.pagemax += 1;
                        }
                    }
                    scope.localpageno = num;
                } else if ("next"===mark) {
                    if (num === scope.pagemax) {
                        if (scope.pagemax<scope.pagearray[scope.pagearray.length-1]) {
                            scope.pagemin += 1;
                            scope.pagemax += 1;
                        }
                    }
                    if (scope.paging.startPageNum<=num<scope.pagearray[scope.pagearray.length-1]) {
                        scope.localpageno = num + 1;
                    }
                } else if ("last"===mark) {
                    scope.pagemin = scope.pagearray[scope.pagearray.length-1] -scope.pageSpan;
                    scope.pagemax = scope.pagearray[scope.pagearray.length-1];
                    scope.localpageno = scope.pagearray[scope.pagearray.length-1];
                }
                scope.gopage();
            };
        },
        templateUrl: "app/components/directive/paging/paging.html"
    }
});

