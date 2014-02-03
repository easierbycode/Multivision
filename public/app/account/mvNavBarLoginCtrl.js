angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http){
   $scope.signin = function(username, password) {
       $http.post('/login', { username: username, password: password }).then(function(res){
           if(res.data.success) {
               console.log('logged in');
           } else {
               console.log('failed to login');
           }
       }, function(err) {
           consoel.log(err.message);
       });
   }
});
