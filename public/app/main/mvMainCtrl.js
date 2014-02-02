angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        { name: "Javascript in action", featured: true, published: new Date('2014-01-01')},
        { name: "C# for beginners", featured: false, published: new Date('2013-02-10')},
        { name: "Hello node", featured: false, published: new Date('2013-04-25')},
        { name: "MEAN stack development", featured: true, published: new Date('2014-02-13')},
        { name: "Hello Bootstrap", featured: false, published: new Date('2011-10-21')}
    ];
});
