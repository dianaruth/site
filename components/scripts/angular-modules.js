// Angular code for generating project links and modals
(function() {

    var app = angular.module('projects', []);
    app.directive('myDirective', function () {});

    app.controller('ModalsController', ['$scope', '$http', function($scope, $http) {

        $http.get('projects.json').then(function(projectData) {
            $scope.projects = projectData.data;
        });

        $scope.openModal = function(id) {
            $('#' + id).modal('show');
        }

        $scope.showTitle = function(elem) {
            var text = elem.nextElementSibling;
            $(elem).addClass("hovering");
            $(text).css("display", "block");
        }

        $scope.removeTitle = function(elem) {
            var text = elem.nextElementSibling;
            $(elem).removeClass("hovering");
            $(text).css("display", "none");
        }
    }]);

})();
