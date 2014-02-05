angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse){
    $scope.courses = mvCourse.query();
    $scope.sortOptions = [
        {value:'title', text: 'Sort by title'},
        {value:'published',text:'Sort by Publish Date'}
    ];
    $scope.sortOrder = $scope.sortOptions[0].value;
});