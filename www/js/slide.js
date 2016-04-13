angular.module('toutcast.controllers.slide',['ngAnimate'])

.controller('SlideCtrl', 
	function($scope, $stateParams, $ionicScrollDelegate, ionicMaterialInk)
	{
		// $scope.$on('$ionicView.enter', function(e) {
		// 	//$ionicScrollDelegate.
  // 		});

  		$scope.slideTrack = $ionicScrollDelegate.$getByHandle('slide-track');
  		$scope.status={position:0};
  		$scope.grown = false;
  		$scope.loadingTout = false;

		$scope.$watch('slideTrack.getScrollPosition().top',function(newValue, oldValue)
		{
			$scope.crescentStyle.height = newValue*2.1+'px';
			$scope.crescentStyle.width = newValue*2.1+'px';
			if(newValue>500)
				$scope.loadingTout = true;
		});

		$scope.onSleighRelease = function(e)
		{
			if($scope.slideTrack.getScrollPosition().top < 200)
			{
				$scope.slideTrack.scrollTop(true);
				$scope.grown = false;
				$scope.loadingTout = false;
			}
			else
			{
				$scope.slideTrack.scrollBottom(true);
				$scope.grown = true;
			}
		};

		$scope.disableScrolling = function()
		{
			$scope.slideTrack.getScrollView().freezeShut(true);
			$scope.scrollFrozen = true;
		};

		$scope.enableScrolling = function()
		{
			$scope.slideTrack.getScrollView().freezeShut(false);
			$scope.scrollFrozen = false;
		};

		$scope.crescentStyle = 
		{
			width:'0px',
			height:'0px'
		};
		$scope.crescentStyleB = 
		{
			width:'0px',
			height:'0px'
		};


		$scope.onDragUp = function(){
			//$scope.grown = true;
			// $scope.crescentStyle.height = slideTrack.getScrollPosition().top*2.1+'px';
			// $scope.crescentStyle.width = slideTrack.getScrollPosition().top*2.1+'px';

		};
  		ionicMaterialInk.displayEffect({duration:600});

	
});