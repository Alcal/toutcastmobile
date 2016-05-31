angular.module('toutcast.controllers.feed',[])

.controller('MainFeedCtrl', function($scope, $stateParams, ToutService, ionicMaterialMotion, ionicMaterialInk, $timeout){


  $scope.errorState = false;
  $scope.loading = true;

  var onToutsFulFill = function(data)
  {
    $scope.touts = data;
    $scope.loading = false;
    $scope.$broadcast('scroll.refreshComplete');
  };
  var onToutsReject = function(err)
  {
    console.error("Error while loading Touts");
    $scope.loading = false;
    $scope.errorState = true;
    $scope.$broadcast('scroll.refreshComplete');
  };

	ToutService.all.then(onToutsFulFill, onToutsReject);

		$timeout(function()
		{
	        ionicMaterialMotion.fadeSlideInRight({
	            startVelocity: 3000
	        });
			ionicMaterialInk.displayEffect({duration:600});
	    }, 1000);

  $scope.refresh = function()
  {
    console.log("refrrreshing!");
    ToutService.refresh().then(onToutsFulFill,onToutsReject);
  }


});
