
var db = null;


var example = angular.module("myApp.controllers", ['ionic','ngCordova'])
	
	 .run(function($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

            db = $cordovaSQLite.openDB({ name: "truck_customer.db" });
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS customer_details (customer_id integer primary key,customer_name varchar(50), customer_phone integer(10),customer_email varchar(50),password varchar(50),mobile_verification varchar(50),status varchar(50))");
      alert(db);
   });
    });
	

example.controller('SignInCtrl', function($scope, $location,$state) {
  
  $scope.register = function() {
    
     $state.go('registration');
  }
  
});


example.controller("registrationCtrl", function($scope, $cordovaSQLite) {
	$scope.registerData = {};
	
    
       /* var query = "INSERT INTO customer_details (customer_name,customer_phone,customer_email,password) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [customer_name,customer_phone,customer_email,password]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        }); */
			
        $scope.registers = function() {
          $scope.alerts = [];
          alert($scope.registerData.customer_mobile );
      if ($scope.registerData.customer_name == null) {
                    $scope.alerts.push({
                        type: 'error',
                        msg: "customer name is mandatory"
                    });
                    errorStatus = true;
                }
                 if ($scope.registerData.customer_mobile == null) {
                    $scope.alerts.push({
                        type: 'error',
                        msg: "customer Mobile is mandatory"
                    });
                    errorStatus = true;
                }
                if ($scope.registerData.customer_email == null) {
                    $scope.alerts.push({
                        type: 'error',
                        msg: "customer Mobile is mandatory"
                    });
                    errorStatus = true;
                }
                if ($scope.registerData.Password == null) {
                    $scope.alerts.push({
                        type: 'error',
                        msg: "Password is mandatory"
                    });
                    errorStatus = true;
                }


		
    }
});
 
