angular.module('toutcast.controllers.slide', ['ngAnimate'])

  .controller('SlideCtrl',
    function ($scope, $stateParams, $ionicScrollDelegate, ionicMaterialInk, $timeout, Tout)
    {
      // $scope.$on('$ionicView.enter', function(e) {
      // 	//$ionicScrollDelegate.
      // 		});

      $scope.slideTrack = $ionicScrollDelegate.$getByHandle('slide-track');
      $scope.status = {position: 0};
      $scope.grown = false;
      $scope.loadingTout = false;

      $scope.$watch('slideTrack.getScrollPosition().top', function (newValue)
      {
        $scope.crescentStyle.height = newValue * 2.1 + 'px';
        $scope.crescentStyle.width = newValue * 2.1 + 'px';
        if (newValue > 500)
        {
          $scope.redeem();
        }
      });

      $scope.onSleighRelease = function ()
      {
        if ($scope.slideTrack.getScrollPosition().top < 200)
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

      $scope.disableScrolling = function ()
      {
        $scope.slideTrack.getScrollView().freeze(true);
        $scope.slideTrack.freezeScroll(true);
        $scope.scrollFrozen = true;
      };

      $scope.enableScrolling = function ()
      {
        $scope.slideTrack.getScrollView().freeze(false);
        $scope.slideTrack.freezeScroll(false);
        $scope.scrollFrozen = false;
      };

      $scope.crescentStyle =
      {
        width: '0px',
        height: '0px'
      };
      $scope.crescentStyleB =
      {
        width: '0px',
        height: '0px'
      };

      ionicMaterialInk.displayEffect({duration: 600});

      var redemptionFulfilled = function (data)
      {
        console.log(data);
        $scope.approved = true;
        $scope.failed = false;
        $scope.done = true;
        $scope.loadingTout = false;
        $scope.slideTrack.scrollTop(true);
      };
      var redemptionRejected = function (errorMessage)
      {
        console.log(errorMessage);
        $scope.approved = false;
        $scope.failed = true;
        $scope.done = true;
        $scope.loadingTout = false;
        $scope.slideTrack.scrollTop(true);
      };

      $scope.redeem = function ()
      {
        if(!$scope.loadingTout){
          $scope.loadingTout = true;
          console.log($stateParams.toutId);
          Tout.redeem({toutId:$stateParams.toutId}, redemptionFulfilled, redemptionRejected);
        }
      }


    });
