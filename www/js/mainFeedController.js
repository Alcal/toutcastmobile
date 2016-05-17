angular.module('toutcast.controllers.feed',[])

.controller('MainFeedCtrl', function($scope, $stateParams, ToutService, ionicMaterialMotion, ionicMaterialInk, $timeout){


  $scope.errorState = false;
  var onToutsFulFill = function(data)
  {
    $scope.touts = data;
  };
  var onToutsReject = function(err)
  {
    console.error("Error while loading Touts");
    $scope.errorState = true;
  };

	ToutService.all.then(onToutsFulFill, onToutsReject);
  
		$timeout(function()
		{
	        ionicMaterialMotion.fadeSlideInRight({
	            startVelocity: 3000
	        });
			ionicMaterialInk.displayEffect({duration:600});
	    }, 700);
  
});
