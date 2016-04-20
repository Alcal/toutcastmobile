angular.module('toutcast.controllers.slide',['ngAnimate'])

.controller('SlideCtrl', 
	function($scope, $stateParams, $ionicScrollDelegate, ionicMaterialInk, $timeout)
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
			{
				$scope.loadingTout = true;
				$scope.approve();
			}
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
			$scope.slideTrack.getScrollView().freeze(true);
			$scope.slideTrack.freezeScroll(true);
			$scope.scrollFrozen = true;
		};

		$scope.enableScrolling = function()
		{
			$scope.slideTrack.getScrollView().freeze(false);
			$scope.slideTrack.freezeScroll(false);
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

  		ionicMaterialInk.displayEffect({duration:600});

  		$scope.approve = function()
  		{
  			$timeout(function()
  				{
  					if(Math.random()<.5)
  					{
  						$scope.approved = true;
  						$scope.failed = false;
  					}
  					else
  					{
  						$scope.approved = false;
  						$scope.failed = true;
  					}
  					
  					$scope.done = true;
  					$scope.loadingTout = false;
  					$scope.slideTrack.scrollTop(true);
  				}
  			,4000);
  		}

	
});