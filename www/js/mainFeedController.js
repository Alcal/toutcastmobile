angular.module('toutcast.controllers.feed',[])

.controller('MainFeedCtrl', function($scope, $stateParams, ToutService, ionicMaterialMotion, ionicMaterialInk, $timeout){


	ToutService.all(function(touts){	
		$scope.touts = touts;
		$timeout(function() 
		{
	        ionicMaterialMotion.fadeSlideInRight({
	            startVelocity: 3000
	        });
			ionicMaterialInk.displayEffect({duration:600});
	    }, 700);
	});


	
});