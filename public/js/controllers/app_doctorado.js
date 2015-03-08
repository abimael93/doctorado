var myapp = angular.module( 'appDoctorado' , [ "ui.router" ])
      myapp.config(function( $stateProvider , $urlRouterProvider ){
        
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise( "/views/route1" )
        
        $stateProvider
          .state( 'route1' , {
              url: "/ruta 1", //nombre que aparecera en la url
              templateUrl: "views/route1.html" //Direccion del archivo que sera llamado
          })
            .state( 'route1.list' , {
                url: "/views/list",
                templateUrl: "views/route1.list.html",
                controller: function($scope){
                  $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            
          .state('route2', {
              url: "/views/route2",
              templateUrl: "views/route2.html"
          })
            .state('route2.list', {
                url: "/views/list",
                templateUrl: "views/route2.list.html",
                controller: function($scope){
                  $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
          .state('1', {
            url: "/views/route2",
            templateUrl: "views/route2.html"
          })
            .state('1.list', {
                url: "/views/list",
                templateUrl: "views/route2.list.html",
                controller: function($scope){
                  $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
      })