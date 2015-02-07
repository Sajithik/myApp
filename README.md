# myApp
creating an app with ionic framework
but i have problem with routing after checking network





var example = angular.module("myApp", ["ionic"])
     example.run(function($ionicPlatform, $ionicPopup,$location) {
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.alert({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    
                }
                else {
                  $ionicPopup.alert({
                        title: "Internet connected",
                        content: "The internet is connected on your device."
                    })
                    
                   //window.location.href = 'app/sign/signin.html';
                   //$state.go("sign"); 
                  $location.url(/sign)
                }
            
          }
        });
    });

 example.config(function($stateProvider, $urlRouterProvider) {

 
  $stateProvider


    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.front', {
      url: "/front",
        views: {
        'menuContent': {
          templateUrl: "app/front/frnt.html"                    
        }
      }
    })
    .state('sign',{
      url: "/sign",
      templateUrl: "app/sign/signin.html"
    })
     .state('registration',{
      url: "/registration",
      templateUrl: "app/registration/registration.html",
      controller: "regctrl"
    });
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/front');

});
