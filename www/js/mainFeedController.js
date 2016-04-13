angular.module('toutcast.controllers.feed',[])

.controller('MainFeedCtrl', function($scope, $stateParams, ToutService, ionicMaterialMotion, ionicMaterialInk){


	ToutService.all(function(touts){	
		$scope.touts = touts;
		ionicMaterialInk.displayEffect({duration:600});
	});
});