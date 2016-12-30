// modals.js
// created by Diana Ruth

// for displaying project modals properly
$(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});

$(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

// Angular code for generating project links and modals
(function() {

    var app = angular.module('projects', []);

    app.controller('ModalsController', ['$scope', '$http', function($scope, $http) {

        $http.get('projects.json').then(function(projectData) {
            $scope.projects = projectData.data;
        });

        $scope.openModal = function(id) {
            $('#' + id).modal('show');
        }
    }]);

})();
