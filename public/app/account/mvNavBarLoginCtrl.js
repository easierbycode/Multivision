angular.module('app').controller('mvNavBarLoginCtrl', function($scope, mvAuth, mvNotifier, mvIdentity, $location){

    $scope.identity = mvIdentity;

    $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify('You have successfully signed in!');
            } else {
                mvNotifier.notify('Username/password combination incorrect!');
            }
        });
   };

    $scope.signOut = function() {
        mvAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('Youhave successfully signed out!');
            $location.path('/');
        })
    };
});
