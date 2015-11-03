/**
 * Created by marco_cadima on 8/4/14.
 */
var app = angular.module("todo",[]);

app.controller("taskController", ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.test = "hello";
    $rootScope.tasks = [
        {
            description: 'new task about angularJS',
            status: true
        },
        {
            description: 'another task about angularJS',
            status: false
        },
        {
            description: 'Read Code style about javascript',
            status: false
        },
        {
            description: 'Learn new technologies to improve your skill',
            status: false
        },
        {
            description: 'Learn nodejs and expressjs',
            status: true
        },
        {
            description: 'Use style code to have clean code',
            status: false
        },
        {
            description: 'Learn new technologies to improve your skill',
            status: false
        }
    ];

    $scope.addTask = function () {

        $scope.tasks.push({description:$scope.todoText, status:false});
        $scope.todoText = '';
    };

    $scope.deleteTask = function (task) {

        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1);
    };
}]);

